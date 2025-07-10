<template>

  <div ref="container" class="three-d-container">
    <div v-if="showLoadingScreen" class="loading-screen">
      <LoadingAnimation />
    </div>

    <div v-if="!isCurtainOpen" ref="leftCurtain" class="curtain left-curtain"></div>
    <div v-if="!isCurtainOpen" class="curtain right-curtain"></div>
    <div v-if="isAnimating" class="curtain-overlay"></div>

    <div class="three-d-content">
      <button v-show="showRotationButton" @click="toggleRotation" class="rotation-button custom-btn">
        {{ isRotating ? '停止旋轉' : '開始旋轉' }}
      </button>
      <div v-if="showBrightnessSlider" class="brightness-control">
        <label for="window-brightness-slider">亮度</label>
        <input type="range" id="window-brightness-slider" min="0" max="1" step="0.01"
          v-model.number="windowBrightness" />
      </div>
    </div>

    <video ref="videoElement" src="/video/VideoSTARLUX.mp4" muted loop playsinline crossOrigin="anonymous"
      style="display:none;"></video>

  </div>

</template>



<script setup>

// =================================================================
// 依賴引入 (Imports)
// =================================================================
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

// =================================================================
// 組件接口 (Props & Emits)
// =================================================================
const props = defineProps({
  /**
   * 當前選中的項目名稱 (艙等或設備)，由父組件傳入。
   */
  selectedItem: String
});

const emit = defineEmits([
  /**
   * 當 3D 模型加載完成時觸發。
   */
  'model-loaded'
]);

// =================================================================
// 響應式狀態 (Reactive State)
// =================================================================

// --- DOM 元素引用 ---
/** @type {import('vue').Ref<HTMLElement | null>} */
const container = ref(null); // 3D 容器
/** @type {import('vue').Ref<HTMLVideoElement | null>} */
const videoElement = ref(null); // 用於螢幕材質的影片元素
/** @type {import('vue').Ref<HTMLElement | null>} */
const leftCurtain = ref(null); // 左布幕元素，用於監聽轉場動畫結束

// --- UI 狀態 ---
const isCurtainOpen = ref(false); // 布幕是否已拉開
const isAnimating = ref(false); // 是否正在執行布幕拉開的動畫
const showLoadingScreen = ref(true); // 是否顯示加載畫面
const loadingProgress = ref(0); // 模型加載進度

// --- 3D 互動狀態 ---
const isRotating = ref(true); // 模型是否正在自動旋轉
const showRotationButton = ref(true); // 是否顯示旋轉控制按鈕
const showBrightnessSlider = ref(false); // 是否顯示窗戶亮度滑桿
const windowBrightness = ref(1.0); // 窗戶亮度值

// =================================================================
// 3D 場景配置 (Scene Configuration)
// =================================================================

// --- 核心 Three.js 變數 ---
let scene, camera, renderer, controls, gltfScene, mixer;
let initialCameraPosition = new THREE.Vector3(); // 相機初始位置
const clock = new THREE.Clock(); // 用於動畫更新

// --- 材質與顏色 ---
const windowMaterial = ref(null); // 窗戶材質的引用
const originalWindowColor = ref(null); // 窗戶原始顏色的備份

// --- 攝影機預設位置 ---
/**
 * 針對不同設備特寫的攝影機預設位置與視角。
 * @type {Object.<string, {position: THREE.Vector3, target: THREE.Vector3}>}
 */
const featureCameraPresets = {
  '電視': { position: new THREE.Vector3(0.07, 0.55, 0.08), target: new THREE.Vector3(0.21, 0.52, 0.47) },
  '小冰箱': { position: new THREE.Vector3(-0.03, 0.47, 0), target: new THREE.Vector3(0.13, 0.21, 0.27) },
  '廁所': { position: new THREE.Vector3(-0.6, 0.65, 0.04), target: new THREE.Vector3(0.04, 0.08, -0.06) },
  '調光窗戶': { position: new THREE.Vector3(-0.27, 1.43, 0.04), target: new THREE.Vector3(0.49, 1.38, 0.01) },
};

// =================================================================
// 核心渲染邏輯 (Core Rendering Logic)
// =================================================================

/**
 * 初始化 Three.js 場景、攝影機、渲染器、控制器與光照。
 */
const initThreeD = () => {
  if (!container.value) return;

  const width = container.value.offsetWidth;
  const height = container.value.offsetHeight;

  // --- 場景與攝影機 ---
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x101010);
  camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10000);
  camera.position.set(-0.96, 1.16, -0.61);
  initialCameraPosition.copy(camera.position);

  // --- 渲染器 ---
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.value.appendChild(renderer.domElement);

  // --- 控制器 ---
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.screenSpacePanning = false;
  controls.enableRotate = true; // 啟用旋轉
  controls.enableZoom = false; // 禁用縮放
  controls.enablePan = false; // 禁用平移
  controls.maxPolarAngle = Math.PI / 1.8;
  controls.minDistance = 0.5;
  controls.maxDistance = 3;
  controls.target.set(0, 0.5, 0);
  controls.enabled = false; // 初始禁用，待選中艙等後啟用

  // 當用戶開始手動操作時，停止自動旋轉
  controls.addEventListener('start', () => { isRotating.value = false; });

  // --- 光照 ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // --- 模型加載 ---
  const loader = new GLTFLoader();
  loader.load(
    `${import.meta.env.BASE_URL}models/equipment-introduction.glb`,
    (gltf) => {
      // 模型加載成功
      loadingProgress.value = 100;
      gltfScene = gltf.scene;
      scene.add(gltfScene);

      // 處理模型中的特定對象，例如替換螢幕材質
      setupVideoScreen();

      // 找到窗戶材質以備後用
      gltfScene.traverse((object) => {
        if (object.isMesh && object.name === 'window') {
          windowMaterial.value = object.material;
          originalWindowColor.value = windowMaterial.value.color.clone();
        }
      });

      // 播放模型內嵌動畫
      mixer = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => { mixer.clipAction(clip).play(); });

      // 初始化完成後的操作
      controls.update();
      onWindowResize();
      updateModelVisibility(true); // 初始隱藏所有模型
      emit('model-loaded');
    },
    (xhr) => {
      // 加載進度回調
      if (xhr.total > 0) {
        loadingProgress.value = (xhr.loaded / xhr.total) * 100;
      }
    },
    (error) => {
      // 加載失敗回調
      console.error('載入 GLB 模型時發生嚴重錯誤:', error);
      alert(`模型載入失敗！請檢查瀏覽器控制台(F12)的錯誤訊息.\n\n常見原因:\n1. 模型路徑錯誤.\n2. 檔案未放置在專案的 'public' 資料夾中.`);
      showLoadingScreen.value = false;
    }
  );

  // 啟動渲染循環
  animate();
  window.addEventListener('resize', onWindowResize);
};

/**
 * 渲染循環，會在每一幀被調用。
 */
const animate = () => {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (mixer) mixer.update(delta);

  // 如果啟用自動旋轉，則手動計算攝影機位置
  if (isRotating.value) {
    const time = Date.now() * 0.0005;
    const radius = initialCameraPosition.distanceTo(new THREE.Vector3(0, initialCameraPosition.y, 0));
    camera.position.x = Math.sin(time) * radius;
    camera.position.z = Math.cos(time) * radius;
    camera.position.y = initialCameraPosition.y;
    camera.lookAt(0, 0.5, 0);
  }

  // 必須在每一幀都更新控制器狀態
  controls.update();
  renderer.render(scene, camera);
};

/**
 * 處理瀏覽器窗口大小變更事件，以保持渲染畫面比例正確。
 */
const onWindowResize = () => {
  if (!container.value || !camera || !renderer) return;
  const width = container.value.offsetWidth;
  const height = container.value.offsetHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

/**
 * 找到模型中的螢幕對象，並將其材質替換為影片紋理。
 */
const setupVideoScreen = () => {
  const originalScreen = gltfScene.getObjectByName('screan');
  if (!originalScreen || !originalScreen.isMesh) return;

  originalScreen.visible = false; // 隱藏原始螢幕

  const video = videoElement.value;
  if (!video) {
    console.warn('找不到用於 screan 材質的 video 元素。');
    return;
  }

  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.flipY = true;
  videoTexture.encoding = THREE.sRGBEncoding;
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;

  const videoMaterial = new THREE.MeshBasicMaterial({
    map: videoTexture,
    toneMapped: false,
    side: THREE.DoubleSide,
  });

  // 創建一個新的平面來承載影片紋理，並複製原始螢幕的變換
  const newScreenGeometry = new THREE.PlaneGeometry(1, 1);
  const newScreen = new THREE.Mesh(newScreenGeometry, videoMaterial);
  newScreen.name = "new_video_screen";

  // 複製變換
  newScreen.position.copy(originalScreen.position);
  newScreen.quaternion.copy(originalScreen.quaternion);
  newScreen.scale.copy(originalScreen.scale);

  // 手動微調以使其完美對齊
  newScreen.position.x += 0.14;
  newScreen.position.y += 0.25;
  newScreen.scale.x *= 0.2;
  newScreen.scale.y *= 0.12;
  const rotation = new THREE.Euler(0, Math.PI / 180 * -20, 0);
  newScreen.quaternion.multiply(new THREE.Quaternion().setFromEuler(rotation));

  if (originalScreen.parent) {
    originalScreen.parent.add(newScreen);
  }

  video.play().catch(error => { console.error('播放影片時發生錯誤:', error); });
};


// =================================================================
// 互動與可見性邏輯 (Interaction & Visibility Logic)
// =================================================================

/**
 * 切換自動旋轉狀態。
 */
const toggleRotation = () => {
  isRotating.value = !isRotating.value;
};

/**
 * 根據傳入的 selectedItem 屬性，更新 3D 場景中各個模型組件的可見性。
 * @param {boolean} forceHide - 是否強制隱藏所有物體。
 */
const updateModelVisibility = (forceHide = false) => {
  if (!gltfScene) return;

  // 如果沒有選中項，則隱藏所有內容
  if (forceHide || !props.selectedItem) {
    gltfScene.traverse((object) => { object.visible = false; });
    const newScreen = scene.getObjectByName("new_video_screen");
    if (newScreen) newScreen.visible = false;
    return;
  }

  // 定義不同選擇項對應的模型名稱
  const cabinGroups = { '頭等艙': 'Chair_FC', '豪華經濟艙': 'Chair_ED', '經濟艙': 'Chair_EC' };
  const featureGroups = { '電視': 'FC_refrigerator_TV', '小冰箱': 'FC_refrigerator_TV', '廁所': 'LAV', '調光窗戶': 'A350_Nose_wall' };

  const objectsToMakeVisible = new Set();
  const markAncestorsVisible = (object) => {
    let current = object;
    while (current && current !== scene) {
      objectsToMakeVisible.add(current);
      current = current.parent;
    }
  };
  const markDescendantsVisible = (object) => {
    object.traverse((child) => { objectsToMakeVisible.add(child); });
  };

  // 1. 先隱藏所有物體
  gltfScene.traverse((object) => { object.visible = false; });

  // 2. 永遠顯示飛機基礎模型
  gltfScene.traverse((object) => {
    if (object.name === 'A350_Nose_plane') { markDescendantsVisible(object); }
  });

  // 3. 根據選擇，設定攝影機、控制器和UI狀態
  let targetObjectName = cabinGroups[props.selectedItem] || featureGroups[props.selectedItem];
  if (cabinGroups[props.selectedItem]) {
    // 選擇艙等：啟用自動旋轉和手動拖曳
    isRotating.value = true;
    controls.enabled = true;
    showRotationButton.value = true;
    showBrightnessSlider.value = false;
    camera.position.copy(initialCameraPosition); // 重置相機位置
    controls.target.set(0, 0.5, 0);
  } else if (featureGroups[props.selectedItem]) {
    // 選擇設備：禁用旋轉，移動相機至特定視角
    isRotating.value = false;
    controls.enabled = false;
    showRotationButton.value = false;
    showBrightnessSlider.value = (props.selectedItem === '調光窗戶');
    const preset = featureCameraPresets[props.selectedItem];
    if (preset) {
      camera.position.copy(preset.position);
      controls.target.copy(preset.target);
    }
  }
  controls.update();

  // 4. 顯示目標物體及其所有父級和子級
  if (targetObjectName) {
    gltfScene.traverse((object) => {
      if (object.name === targetObjectName) {
        markAncestorsVisible(object);
        markDescendantsVisible(object);
      }
    });
    // 特殊處理：看窗戶時也要確保窗戶本身可見
    if (props.selectedItem === '調光窗戶') {
      gltfScene.traverse((object) => {
        if (object.name === 'window') { markAncestorsVisible(object); }
      });
    }
  }

  // 5. 最終遍歷，應用可見性
  gltfScene.traverse((object) => {
    if (objectsToMakeVisible.has(object)) {
      object.visible = true;
    }
  });

  // 6. 確保影片螢幕的可見性與其父級同步
  const oldScreen = gltfScene.getObjectByName('screan');
  if (oldScreen) oldScreen.visible = false;
  const newScreen = scene.getObjectByName("new_video_screen");
  if (newScreen) {
    newScreen.visible = newScreen.parent ? newScreen.parent.visible : false;
  }
};

// =================================================================
// 生命週期與監聽器 (Lifecycle & Watchers)
// =================================================================

/**
 * 監聽 selectedItem 屬性的變化，以觸發模型可見性更新或布幕動畫。
 */
watch(() => props.selectedItem, (newItem) => {
  if (newItem && !isCurtainOpen.value) {
    // 如果是首次選擇，則觸發開幕動畫
    isAnimating.value = true;
    if (container.value) {
      container.value.classList.add('curtain-open');
    }
    showLoadingScreen.value = true;
  } else {
    // 否則直接更新模型
    updateModelVisibility();
  }
});

/**
 * 監聽窗戶亮度滑桿的變化。
 */
watch(windowBrightness, (newValue) => {
  if (windowMaterial.value && originalWindowColor.value) {
    const newColor = originalWindowColor.value.clone().multiplyScalar(newValue);
    windowMaterial.value.color.copy(newColor);
  }
});

/**
 * 組件掛載後，初始化 3D 場景並設定動畫結束監聽。
 */
onMounted(() => {
  if (videoElement.value) {
    videoElement.value.onerror = (e) => {
      console.error('影片檔案載入錯誤:', e);
      alert('影片檔案載入失敗，請檢查路徑 "/video/VideoSTARLUX.mp4" 是否正確。');
    };
  }

  initThreeD();

  nextTick(() => {
    if (leftCurtain.value) {
      // 監聽布幕 CSS 動畫結束事件
      leftCurtain.value.addEventListener('transitionend', () => {
        isAnimating.value = false;
        isCurtainOpen.value = true;
        if (loadingProgress.value >= 100) {
          showLoadingScreen.value = false;
        }
        updateModelVisibility();
      }, { once: true });
    }
  });
});

/**
 * 組件卸載前，清理資源，防止內存洩漏。
 */
onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
  if (renderer) {
    renderer.dispose();
    scene.traverse(object => {
      if (object.isMesh) {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      }
    });
  }
});


</script>



<style>
.three-d-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* 為了按鈕和布幕定位 */
  overflow: hidden;
  /* 隱藏布幕超出容器的部分 */
}

.curtain {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50.1%;
  /* 輕微重疊以避免中間縫隙 */
  background-color: var(--color-primary-brown);
  z-index: 20;
  transition: transform 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  /* 優雅的緩動效果 */
  background-size: 80px 100%;
  /* 控制褶皺的寬度 */
}

.left-curtain {
  left: 0;
  transform-origin: left;
  /* 深棕色布料風格的漸層 */
  background-image: linear-gradient(to right,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.2) 20%,
      rgba(255, 255, 255, 0.1) 30%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(255, 255, 255, 0.1) 70%,
      rgba(0, 0, 0, 0.2) 80%,
      rgba(255, 255, 255, 0.1) 90%,
      rgba(0, 0, 0, 0.2) 100%);
}

.right-curtain {
  right: 0;
  transform-origin: right;
  /* 深棕色布料風格的漸層 (對稱) */
  background-image: linear-gradient(to left,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.2) 20%,
      rgba(255, 255, 255, 0.1) 30%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(255, 255, 255, 0.1) 70%,
      rgba(0, 0, 0, 0.2) 80%,
      rgba(255, 255, 255, 0.1) 90%,
      rgba(0, 0, 0, 0.2) 100%);
}

.curtain-open .left-curtain {
  transform: scaleX(0);
}

.curtain-open .right-curtain {
  transform: scaleX(0);
}

.curtain-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 30;
  /* 在布幕之上，防止點擊 */
  cursor: wait;
  /* 提示用戶正在處理 */
}

.three-d-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  /* 讓事件穿透此層 */
}

.rotation-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  border: 2px solid var(--color-primary-gold);
  color: var(--color-primary-gold);
  background-color: transparent;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
  /* 確保按鈕在畫布上方 */
  pointer-events: auto;
  /* 恢復按鈕的事件接收 */
}

.rotation-button:hover,
.rotation-button:focus,
.rotation-button.active {
  background-color: var(--color-primary-gold);
  color: #333;
}

.brightness-control {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: 80%;
  padding: 10px;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 10;
  pointer-events: auto;
  /* 恢復滑桿的事件接收 */
}

.brightness-control label {
  white-space: nowrap;
  font-size: 1.2rem;
  writing-mode: vertical-rl;
}

.brightness-control input[type="range"] {
  flex-grow: 1;
  width: 10px;
  writing-mode: vertical-lr;
  direction: rtl;
  appearance: none;
  background: transparent;
  margin: 0;
}

/* WebKit 瀏覽器的自定義軌道 */
.brightness-control input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(to top, #333, #eee);
  border-radius: 5px;
  width: 10px;
}

/* WebKit 瀏覽器的自定義滑塊 */
.brightness-control input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: var(--color-primary-gold);
  border-radius: 3px;
  cursor: pointer;
  margin-left: -2.5px;
}

/* Firefox 瀏覽器的自定義軌道 */
.brightness-control input[type="range"]::-moz-range-track {
  background: linear-gradient(to top, #333, #eee);
  border-radius: 5px;
  width: 10px;
}

/* Firefox 瀏覽器的自定義滑塊 */
.brightness-control input[type="range"]::-moz-range-thumb {
  width: 15px;
  /* Wider for horizontal bar */
  height: 15px;
  /* Shorter for horizontal bar */
  background: var(--color-primary-gold);
  border-radius: 3px;
  /* Slightly rounded corners */
  cursor: pointer;
  margin-left: -2.5px;
}

.loading-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-neutral-lower-form-brown);
  z-index: 15;
  /* 確保在布幕之下，Three.js 內容之上 */
}
</style>
