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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

const emit = defineEmits(['model-loaded']);

// 布幕與動畫狀態
const isCurtainOpen = ref(false);
const isAnimating = ref(false);
const leftCurtain = ref(null);
const container = ref(null);
const showLoadingScreen = ref(false); // 新增：控制 LoadingAnimation 顯示

let scene, camera, renderer, controls, gltfScene, mixer;
const isRotating = ref(true);
let initialCameraPosition = new THREE.Vector3();
const showRotationButton = ref(true);
const clock = new THREE.Clock();

const windowMaterial = ref(null);
const windowBrightness = ref(1.0);
const showBrightnessSlider = ref(false);
const originalWindowColor = ref(null);

const props = defineProps({
  selectedItem: String
});

const featureCameraPresets = {
  '電視': {
    position: new THREE.Vector3(0.07, 0.55, 0.08),
    target: new THREE.Vector3(0.21, 0.52, 0.47)
  },
  '小冰箱': {
    position: new THREE.Vector3(-0.03, 0.47, 0),
    target: new THREE.Vector3(0.13, 0.21, 0.27)
  },
  '廁所': {
    position: new THREE.Vector3(-0.6, 0.65, 0.04),
    target: new THREE.Vector3(0.04, 0.08, -0.06)
  },
  '調光窗戶': {
    position: new THREE.Vector3(-0.27, 1.43, 0.04),
    target: new THREE.Vector3(0.49, 1.38, 0.01)
  },
};

const initThreeD = () => {
  if (!container.value) return;

  const width = container.value.offsetWidth;
  const height = container.value.offsetHeight;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10000);
  camera.position.set(-0.96, 1.16, -0.61);
  initialCameraPosition.copy(camera.position);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  // 確保在布幕之後插入 canvas
  container.value.appendChild(renderer.domElement);


  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = Math.PI / 2;
  controls.enabled = false;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableRotate = false;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const loader = new GLTFLoader();
  loader.load(
    `${import.meta.env.BASE_URL}models/equipment-introduction.glb`,
    (gltf) => {
      scene.add(gltf.scene);
      gltfScene = gltf.scene;

      gltfScene.traverse((object) => {
        if (object.isMesh && object.name === 'screan') {
          const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
          object.material = redMaterial;
        }
        if (object.isMesh && object.name === 'window') {
          windowMaterial.value = object.material;
          originalWindowColor.value = windowMaterial.value.color.clone();
          if (windowMaterial.value.isMeshStandardMaterial) {
            windowMaterial.value.emissiveIntensity = windowBrightness.value;
          } else if (windowMaterial.value.color) {
            windowMaterial.value.color.setScalar(windowBrightness.value);
          }
        }
      });

      mixer = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.loop = THREE.LoopRepeat;
        action.play();
      });

      controls.target.set(0, 0, 0);
      controls.update();
      onWindowResize();
      // 初始載入時，確保所有模型都不可見
      updateModelVisibility(true);
      // 發送模型載入完成事件
      emit('model-loaded');
    },
    undefined,
    (error) => {
      console.error('載入 GLB 模型時發生錯誤:', error);
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
      camera.lookAt(0, 0, 0);
    } else {
      controls.update();
    }
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', onWindowResize);
};

const onWindowResize = () => {
  if (!container.value) return;
  const width = container.value.offsetWidth;
  const height = container.value.offsetHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

const toggleRotation = () => {
  isRotating.value = !isRotating.value;
};

watch(windowBrightness, (newValue) => {
  if (windowMaterial.value && originalWindowColor.value) {
    const newColor = originalWindowColor.value.clone().multiplyScalar(newValue);
    windowMaterial.value.color.copy(newColor);
  }
});

const updateModelVisibility = (forceHide = false) => {
  if (!gltfScene) return;

  // 如果強制隱藏，則隱藏所有內容並返回
  if (forceHide) {
    gltfScene.traverse((object) => {
      object.visible = false;
    });
    return;
  }

  // 如果沒有選擇項，也隱藏所有內容
  if (!props.selectedItem) {
    gltfScene.traverse((object) => {
      object.visible = false;
    });
    return;
  }

  const cabinGroups = { '頭等艙': 'Chair_FC', '豪華經濟艙': 'Chair_ED', '經濟艙': 'Chair_EC' };
  const featureGroups = { '電視': 'FC_refrigerator_TV', '小冰箱': 'FC_refrigerator_TV', '廁所': 'LAV', '調光窗戶': 'A350_Nose_wall' };
  const objectsToMakeVisible = new Set();

  const markAncestorsVisible = (object) => {
    let current = object;
    while (current && current !== gltfScene.parent) {
      objectsToMakeVisible.add(current);
      current = current.parent;
    }
  };

  const markDescendantsVisible = (object) => {
    object.traverse((child) => {
      objectsToMakeVisible.add(child);
    });
  };

  gltfScene.traverse((object) => { object.visible = false; });

  gltfScene.traverse((object) => {
    if (object.name === 'A350_Nose_plane') {
      markAncestorsVisible(object);
      markDescendantsVisible(object);
    }
  });

  if (props.selectedItem) {
    let targetObjectName = cabinGroups[props.selectedItem] || featureGroups[props.selectedItem];

    if (cabinGroups[props.selectedItem]) {
      isRotating.value = true;
      showRotationButton.value = true;
      showBrightnessSlider.value = false;
      camera.position.copy(initialCameraPosition);
      controls.target.set(0, 0, 0);
      controls.update();
    } else if (featureGroups[props.selectedItem]) {
      isRotating.value = false;
      showRotationButton.value = false;
      showBrightnessSlider.value = (props.selectedItem === '調光窗戶');
      const preset = featureCameraPresets[props.selectedItem];
      if (preset) {
        camera.position.copy(preset.position);
        controls.target.copy(preset.target);
        controls.update();
      }
    }

    if (targetObjectName) {
      gltfScene.traverse((object) => {
        if (object.name === targetObjectName) {
          markAncestorsVisible(object);
          markDescendantsVisible(object);
        }
      });
      if (props.selectedItem === '調光窗戶') {
        gltfScene.traverse((object) => {
          if (object.name === 'window') {
            markAncestorsVisible(object);
            markDescendantsVisible(object);
          }
        });
      }
    }
  }

  gltfScene.traverse((object) => {
    object.visible = objectsToMakeVisible.has(object);
  });
};

watch(() => props.selectedItem, (newItem) => {
  if (newItem && !isCurtainOpen.value) {
    // 首次選擇，觸發布幕動畫
    isAnimating.value = true;
    if (container.value) {
      // 添加 class 以觸發 CSS transition
      container.value.classList.add('curtain-open');
    }
    showLoadingScreen.value = true; // 新增：在布幕動畫開始時顯示 LoadingAnimation
  } else {
    // 布幕已開，直接更新模型
    updateModelVisibility();
  }
});

onMounted(() => {
  initThreeD();

  // 確保 DOM 元素已掛載
  nextTick(() => {
    if (leftCurtain.value) {
      // 監聽 transition 動畫結束事件
      leftCurtain.value.addEventListener('transitionend', () => {
        isAnimating.value = false;
        isCurtainOpen.value = true;
        showLoadingScreen.value = false; // 新增：隱藏 LoadingAnimation
        // 動畫結束後，根據當前選擇的 item 更新模型可見性
        updateModelVisibility();
      }, { once: true }); // 確保事件只觸發一次
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
  if (renderer) {
    renderer.dispose();
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
  background-color: var(--color-primary-gold);
  z-index: 15;
  /* 確保在布幕之下，Three.js 內容之上 */
}
</style>
