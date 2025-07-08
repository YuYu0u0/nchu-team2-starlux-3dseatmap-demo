<template>
  <div ref="container" class="three-d-container">
    <!-- Loading Animation Overlay -->
    <div v-if="showLoadingScreen" class="loading-screen">
      <LoadingAnimation />
    </div>

    <!-- 布幕元素 -->
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
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

const emit = defineEmits(['model-loaded']);

// --- 狀態管理 (State Management) ---

const container = ref(null);
const videoElement = ref(null);
const leftCurtain = ref(null);

// 布幕與動畫狀態

const isCurtainOpen = ref(false);
const isAnimating = ref(false);
const showLoadingScreen = ref(false);
const loadingProgress = ref(0);

// 3D 場景狀態

const isRotating = ref(true);
const showRotationButton = ref(true);
const showBrightnessSlider = ref(false);
const windowBrightness = ref(1.0);
const windowMaterial = ref(null);
const originalWindowColor = ref(null);

let scene, camera, renderer, controls, gltfScene, mixer;
let initialCameraPosition = new THREE.Vector3();
const clock = new THREE.Clock();

// --- 組件屬性 (Props) ---

const props = defineProps({
  selectedItem: String
});



// --- 攝影機預設位置 ---

const featureCameraPresets = {
  '電視': { position: new THREE.Vector3(0.07, 0.55, 0.08), target: new THREE.Vector3(0.21, 0.52, 0.47) },
  '小冰箱': { position: new THREE.Vector3(-0.03, 0.47, 0), target: new THREE.Vector3(0.13, 0.21, 0.27) },
  '廁所': { position: new THREE.Vector3(-0.6, 0.65, 0.04), target: new THREE.Vector3(0.04, 0.08, -0.06) },
  '調光窗戶': { position: new THREE.Vector3(-0.27, 1.43, 0.04), target: new THREE.Vector3(0.49, 1.38, 0.01) },
};



// --- Three.js 初始化 ---

const initThreeD = () => {

  if (!container.value) return;



  const width = container.value.offsetWidth;

  const height = container.value.offsetHeight;



  scene = new THREE.Scene();

  scene.background = new THREE.Color(0x101010);



  camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10000);

  camera.position.set(-0.96, 1.16, -0.61);

  initialCameraPosition.copy(camera.position);



  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(width, height);

  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  renderer.outputEncoding = THREE.sRGBEncoding;

  container.value.appendChild(renderer.domElement);



  controls = new OrbitControls(camera, renderer.domElement);

  controls.enableDamping = true;

  controls.dampingFactor = 0.1;

  controls.screenSpacePanning = false;



  // --- 修改：永久禁用滑鼠拖曳與縮放 ---

  controls.enableRotate = false; // 禁用旋轉

  controls.enableZoom = false; // 禁用縮放

  controls.enablePan = false; // 禁用平移



  controls.maxPolarAngle = Math.PI / 1.8;

  controls.minDistance = 0.5;

  controls.maxDistance = 3;

  controls.target.set(0, 0.5, 0);

  controls.enabled = false;



  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);

  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);

  directionalLight.position.set(5, 5, 5);

  scene.add(directionalLight);



  const loader = new GLTFLoader();

  loader.load(
    `${import.meta.env.BASE_URL}models/equipment-introduction.glb`,
    (gltf) => {

      loadingProgress.value = 100;

      gltfScene = gltf.scene;

      scene.add(gltfScene);



      // --- 方案三 v3：動態生成新平面並正確 parenting ---

      const originalScreen = gltfScene.getObjectByName('screan');

      if (originalScreen && originalScreen.isMesh) {



        originalScreen.visible = false;



        const video = videoElement.value;

        if (video) {

          const videoTexture = new THREE.VideoTexture(video);

          // --- 修正：將影片材質上下翻轉 ---

          videoTexture.flipY = true;

          videoTexture.encoding = THREE.sRGBEncoding;

          videoTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

          videoTexture.minFilter = THREE.LinearFilter;

          videoTexture.magFilter = THREE.LinearFilter;



          const videoMaterial = new THREE.MeshBasicMaterial({

            map: videoTexture,

            toneMapped: false,

            side: THREE.DoubleSide,

          });



          // 建立一個擁有完美 UV 的單位平面 (1x1)，大小由 scale 控制

          const newScreenGeometry = new THREE.PlaneGeometry(1, 1);

          const newScreen = new THREE.Mesh(newScreenGeometry, videoMaterial);

          newScreen.name = "new_video_screen";



          // --- 手動調整標示 ---

          // 複製舊平面的局部 (local) 變換，這是最穩定的方法。

          // 如果新平面的位置、旋轉或大小仍有偏差，請在此處手動微調。



          // 複製位置

          newScreen.position.copy(originalScreen.position);

          // 範例：如果想讓新平面往上移動一點點

          newScreen.position.x += 0.14;

          newScreen.position.y += 0.25;



          // 複製旋轉

          newScreen.quaternion.copy(originalScreen.quaternion);

          // 範例：如果想讓新平面再旋轉一點點 (較複雜，不建議)

          const rotation = new THREE.Euler(0, Math.PI / 180 * -20, 0); // 沿 Y 軸轉 5 度

          newScreen.quaternion.multiply(new THREE.Quaternion().setFromEuler(rotation));



          // 複製縮放 (大小)

          newScreen.scale.copy(originalScreen.scale);

          // 範例：如果想讓新平面寬度變成 90%

          newScreen.scale.x *= 0.2;

          newScreen.scale.y *= 0.12;



          // 將新平面加入到舊平面的父物件中，確保它在正確的層級結構裡

          if (originalScreen.parent) {

            originalScreen.parent.add(newScreen);

          }



          video.play().catch(error => { console.error('播放影片時發生錯誤:', error); });



        } else {

          console.warn('找不到用於 screan 材質的 video 元素。');

        }

      }



      // 遍歷處理其他物件 (例如窗戶)

      gltfScene.traverse((object) => {

        if (object.isMesh && object.name === 'window') {

          windowMaterial.value = object.material;

          originalWindowColor.value = windowMaterial.value.color.clone();

        }

      });



      mixer = new THREE.AnimationMixer(gltf.scene);

      gltf.animations.forEach((clip) => { mixer.clipAction(clip).play(); });



      controls.update();

      onWindowResize();

      updateModelVisibility(true);

      emit('model-loaded');

    },

    (xhr) => {

      if (xhr.total > 0) {

        loadingProgress.value = (xhr.loaded / xhr.total) * 100;

      }

    },

    (error) => {

      console.error('載入 GLB 模型時發生嚴重錯誤:', error);

      alert(`模型載入失敗！請檢查瀏覽器控制台(F12)的錯誤訊息.\n\n常見原因: \n1.模型路徑錯誤.\n2.檔案未放置在專案的 'public' 資料夾中.`);

      showLoadingScreen.value = false;

    }

  );



  const animate = () => {

    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    if (mixer) mixer.update(delta);

    if (isRotating.value) {

      const time = Date.now() * 0.0005;

      const radius = initialCameraPosition.distanceTo(new THREE.Vector3(0, initialCameraPosition.y, 0));

      camera.position.x = Math.sin(time) * radius;

      camera.position.z = Math.cos(time) * radius;

      camera.position.y = initialCameraPosition.y;

      camera.lookAt(0, 0.5, 0);

    } else {

      controls.update();

    }

    renderer.render(scene, camera);

  };

  animate();



  window.addEventListener('resize', onWindowResize);

};



// --- 事件處理與邏輯 ---



const onWindowResize = () => {

  if (!container.value || !camera || !renderer) return;

  const width = container.value.offsetWidth;

  const height = container.value.offsetHeight;

  camera.aspect = width / height;

  camera.updateProjectionMatrix();

  renderer.setSize(width, height);

};



const toggleRotation = () => {

  isRotating.value = !isRotating.value;

  controls.enabled = !isRotating.value;

};



watch(windowBrightness, (newValue) => {

  if (windowMaterial.value && originalWindowColor.value) {

    const newColor = originalWindowColor.value.clone().multiplyScalar(newValue);

    windowMaterial.value.color.copy(newColor);

  }

});



// 更新模型可見性 (保留您原有的複雜邏輯)

const updateModelVisibility = (forceHide = false) => {

  if (!gltfScene) return;

  if (forceHide || !props.selectedItem) {

    gltfScene.traverse((object) => { object.visible = false; });

    // 也要確保我們手動新增的螢幕被隱藏

    const newScreen = scene.getObjectByName("new_video_screen");

    if (newScreen) newScreen.visible = false;

    return;

  }

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

  gltfScene.traverse((object) => { object.visible = false; });

  gltfScene.traverse((object) => {

    if (object.name === 'A350_Nose_plane') { markDescendantsVisible(object); }

  });

  let targetObjectName = cabinGroups[props.selectedItem] || featureGroups[props.selectedItem];

  if (cabinGroups[props.selectedItem]) {

    isRotating.value = true;

    controls.enabled = false;

    showRotationButton.value = true;

    showBrightnessSlider.value = false;

    camera.position.copy(initialCameraPosition);

    controls.target.set(0, 0.5, 0);

  } else if (featureGroups[props.selectedItem]) {

    isRotating.value = false;

    controls.enabled = true; // 即使這裡是 true，由於上面的永久禁用設定，滑鼠也無法操作

    showRotationButton.value = false;

    showBrightnessSlider.value = (props.selectedItem === '調光窗戶');

    const preset = featureCameraPresets[props.selectedItem];

    if (preset) {

      camera.position.copy(preset.position);

      controls.target.copy(preset.target);

    }

  }

  controls.update();

  if (targetObjectName) {

    gltfScene.traverse((object) => {

      if (object.name === targetObjectName) {

        markAncestorsVisible(object);

        markDescendantsVisible(object);

      }

    });

    if (props.selectedItem === '調光窗戶') {

      gltfScene.traverse((object) => {

        if (object.name === 'window') { markAncestorsVisible(object); }

      });

    }

  }

  gltfScene.traverse((object) => {

    if (objectsToMakeVisible.has(object)) {

      object.visible = true;

    }

  });



  // 確保舊螢幕永遠是隱藏的，新螢幕的可見性與其父物件一致

  const oldScreen = gltfScene.getObjectByName('screan');

  if (oldScreen) oldScreen.visible = false;

  const newScreen = scene.getObjectByName("new_video_screen");

  if (newScreen) {

    newScreen.visible = newScreen.parent ? newScreen.parent.visible : false;

  }

};



watch(() => props.selectedItem, (newItem) => {

  if (newItem && !isCurtainOpen.value) {

    isAnimating.value = true;

    if (container.value) {

      container.value.classList.add('curtain-open');

    }

    showLoadingScreen.value = true;

  } else {

    updateModelVisibility();

  }

});



// --- 生命週期鉤子 (Lifecycle Hooks) ---

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
