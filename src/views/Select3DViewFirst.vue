<template>
  <div class="page-container">
    <LoadingAnimation v-if="isLoading" />

    <!-- Main 內容區塊 -->
    <main class="container-fluid" v-show="!isLoading">
      <div class="viewer-container" ref="viewerContainer">
        <!-- 3D 渲染畫布將會被掛載到這裡 -->
        <canvas ref="threeCanvas"></canvas>
        <div v-if="isLoading" class="loading-overlay">載入中...</div>

        <!-- 互動資訊小卡 -->
        <SeatCard v-if="selectedTargetData" :seatNumber="selectedTargetData.title" :seatClass="selectedTargetData.class"
          :seatPrice="`NT$ ${selectedTargetData.price.toLocaleString()}`" :seatDescription="selectedTargetData.text"
          @confirm="handleConfirm" @back="resetCameraView" />

        <!-- 拖曳提示 -->
        <div v-if="showDragHint && selectedTargetData" class="drag-hint">
          <span>拖曳滑鼠左鍵旋轉視角</span>
        </div>


      </div>
    </main>

    <!-- Footer 頁腳區塊 -->
    <footer class="container-fluid">
      <FooterTop />
      <FooterBottom />
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // 導入 useRoute
import { useOrderStore } from '@/stores/order';
import FooterTop from '@/components/FooterView/FooterTop.vue'
import FooterBottom from '@/components/FooterView/FooterBottom.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// --- 全域變數 ---
let scene, camera, renderer, controls, animationFrameId, raycaster, mouse; // Three.js 核心變數
let isAnimatingCamera = false; // 用於追蹤鏡頭動畫狀態的旗標
let roofObject = null; // 儲存屋頂物件的參照
let roofObjectOriginalParent = null; // 新增：儲存屋頂物件的原始父物件
const targetPosition = new THREE.Vector3(); // 儲存運鏡的目標攝影機位置
const targetLookAt = new THREE.Vector3(); // 儲存運鏡的目標觀察點
let initialCameraPosition = new THREE.Vector3(); // 儲存初始攝影機位置
let initialCameraTarget = new THREE.Vector3(); // 儲存初始觀察點

// 自定義滑鼠拖曳旋轉相關變數
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

// 拖曳提示相關變數
const showDragHint = ref(false);
let dragHintTimeout = null;

// Hover effect variables
let glowingMeshes = new Map(); // 儲存目前正在發光的 Mesh 物件及其原始材質屬性

// Glow effect settings
const GLOW_COLOR = 0xffffff; // 白色
const GLOW_INTENSITY = 0.3; // 發光強度

// --- DOM 元素參照 ---
const viewerContainer = ref(null); // 3D 視窗的父容器
const threeCanvas = ref(null); // Canvas 元素的參照
const isLoading = ref(true); // 控制載入提示的顯示

// --- 狀態管理 ---
const selectedTargetData = ref(null); // 儲存當前點擊物件的資訊，用於顯示資訊小卡

// --- 路由參數 ---
const route = useRoute(); // 獲取當前路由實例
const flightId = route.query.flightId; // 從路由參數中獲取 flightId
const cabinClass = route.query.cabinClass; // 從路由參數中獲取 cabinClass

// --- 設定 ---
const modelUrl = `${import.meta.env.BASE_URL}models/A350-first-class.glb`; // 3D 模型檔案路徑
const jpgUrl = `${import.meta.env.BASE_URL}image/HDRI.jpg`; // 背景圖片路徑

// 艙等價格映射
const cabinClassPrices = {
  economy: 8000,
  premiumEconomy: 24000,
  first: 66000,
};

// ===================================================================
// === 請在這裡手動填寫您模型的互動設定 ===
// ===================================================================
// 以物件/群組名稱為鍵，儲存其對應的運鏡目標與資訊卡內容
const cameraTargets = {
  'FC_01A': {
    position: new THREE.Vector3(0.88, 1.45, -1.15),
    target: new THREE.Vector3(0.88, 1.2, -0.28),
    title: '01A',
    class: "頭等艙",
    text: '這是靠窗的頭等艙座位，提供絕佳的視野與隱私。配備全平躺座椅及個人娛樂系統。',
    link: '/seat-details/01A'
  },
  'FC_01D': {
    position: new THREE.Vector3(-0.11, 1.45, -1.15),
    target: new THREE.Vector3(-0.53, 1.11, -0.19),
    title: '01D',
    class: "頭等艙",
    text: '中間區域的頭等艙座位，方便與鄰座乘客溝通，同時保有足夠的個人空間。',
    link: '/seat-details/01D'
  },
  'FC_01G': {
    position: new THREE.Vector3(-0.9, 1.45, -1.15),
    target: new THREE.Vector3(-0.4, 0.98, 0.19),
    title: '01G',
    class: "頭等艙",
    text: '這是位於中間區域的另一個頭等艙座位，適合商務旅客或家庭出行。',
    link: '/seat-details/01G'
  },
  'FC_01K': {
    position: new THREE.Vector3(-1.73, 1.45, -1.15),
    target: new THREE.Vector3(-2.16, 1.22, -0.71),
    title: '01K',
    class: "頭等艙",
    text: '另一個舒適的靠窗頭等艙座位，讓您在旅途中享受靜謐的個人時光。',
    link: '/seat-details/01K'
  },
};
// ===================================================================

/**
 * @description 初始化 3D 場景所有元素。這是所有 3D 設定的起點。
 */
const initThreeScene = () => {
  // 初始化光線投射器，用於偵測滑鼠點擊
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // 建立場景，這是所有 3D 物件的容器
  scene = new THREE.Scene();

  // 添加方向光 (DirectionalLight)
  // 顏色 (0xffffff) 代表白色光，強度 (2.5) 決定亮度。
  // 方向光模擬來自遠處的光源，例如太陽，所有光線都是平行的。
  const directionalLight = new THREE.DirectionalLight(0xffffff, 5); // 調整第二個參數 (2.5) 可以改變方向光的亮度
  directionalLight.position.set(5, 10, 7.5); // 設定光源位置
  directionalLight.castShadow = true; // 啟用陰影投射
  directionalLight.shadow.mapSize.width = 2048; // 陰影貼圖寬度，影響陰影品質
  directionalLight.shadow.mapSize.height = 2048; // 陰影貼圖高度，影響陰影品質
  scene.add(directionalLight);

  const container = viewerContainer.value;
  // 建立透視攝影機
  camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(-0.49, 3.42, 0.43);

  // 建立 WebGL 渲染器，並將它附加到 canvas 上
  renderer = new THREE.WebGLRenderer({ canvas: threeCanvas.value, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight); // 設定渲染尺寸
  renderer.setPixelRatio(window.devicePixelRatio); // 處理高 DPI 螢幕
  renderer.outputEncoding = THREE.SRGBColorSpace; // 確保顏色正確
  renderer.toneMapping = THREE.ACESFilmicToneMapping; // 使用電影級的色調映射，效果更佳
  renderer.toneMappingExposure = 0.5; // 整體場景亮度
  renderer.shadowMap.enabled = true; // 啟用陰影貼圖
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 柔和陰影

  // 建立軌道控制器，用於後續的視角互動
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(-0.47, 1.64, -0.95);
  controls.enabled = false; // 預設禁用，等待互動觸發
  controls.enablePan = false; // 禁用平移
  controls.enableRotate = false; // 禁用 OrbitControls 的旋轉功能
  controls.mouseButtons.LEFT = null; // 禁用左鍵的預設行為
  controls.mouseButtons.RIGHT = null; // 禁用右鍵的預設行為

  // 儲存初始攝影機狀態，供返回按鈕使用
  initialCameraPosition.copy(camera.position);
  initialCameraTarget.copy(controls.target);

  // 開始載入背景與模型
  loadBackgroundAndModel();

  // 啟動動畫迴圈並監聽事件
  animate();
  window.addEventListener('resize', onWindowResize);
  threeCanvas.value.addEventListener('click', onCanvasClick);
  threeCanvas.value.addEventListener('mousemove', onCanvasMouseMove); // 新增滑鼠移動事件監聽

  // 新增自定義滑鼠事件監聽器
  threeCanvas.value.addEventListener('mousedown', onCustomMouseDown);
  threeCanvas.value.addEventListener('mousemove', onCustomMouseMove);
  threeCanvas.value.addEventListener('mouseup', onCustomMouseUp);
};

/**
 * @description 載入 JPG 背景，並在成功後接著載入 3D 模型。
 */
const loadBackgroundAndModel = () => {
  const loader = new THREE.TextureLoader();
  loader.load(jpgUrl, (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping; // 設定為全景反射貼圖
    scene.background = texture; // 設定為場景的視覺背景
    scene.environment = texture; // 設定為場景的環境光照來源
    loadModel(); // 背景載入後才開始載入模型
  }, undefined, (error) => {
    console.error('JPG 背景載入失敗:', error);
    isLoading.value = false;
  });
};

/**
 * @description 使用 GLTFLoader 載入 .glb 格式的 3D 模型。
 */
const loadModel = () => {
  const loader = new GLTFLoader();
  loader.load(modelUrl, (gltf) => {
    const model = gltf.scene;
    scene.add(model); // 先將模型加入場景

    // 從場景中找到屋頂的 Mesh 物件
    const roofGroup = scene.getObjectByName('A350_roof');
    if (roofGroup) {
      // 從群組中再找到同名的 Mesh
      roofObject = roofGroup.getObjectByName('A350_roof');
      if (roofObject && roofObject.isMesh) {
        // 儲存原始父物件
        roofObjectOriginalParent = roofObject.parent;
        // 初始時將屋頂從場景中移除
        if (roofObjectOriginalParent) {
          roofObjectOriginalParent.remove(roofObject);
        }
      }
    }

    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    isLoading.value = false;
    nextTick(() => {
      onWindowResize(); // 確保在載入完成後重新調整渲染器尺寸
    });
  }, undefined, (error) => {
    console.error('模型載入失敗:', error);
    isLoading.value = false;
  });
};

/**
 * @description 畫布點擊事件處理的核心函式，負責偵測點擊並觸發後續行為。
 */
const onCanvasClick = (event) => {
  if (isAnimatingCamera || selectedTargetData.value) return; // 如果正在動畫中或已選擇目標，則忽略點擊

  // 在處理點擊前，先移除所有正在發光的物件的效果
  glowingMeshes.forEach((originalProps, mesh) => {
    if (mesh.material) {
      mesh.material.emissive.copy(originalProps.emissive);
      mesh.material.emissiveIntensity = originalProps.emissiveIntensity;
    }
  });
  glowingMeshes.clear(); // 清空發光物件列表

  const rect = renderer.domElement.getBoundingClientRect();
  // 將滑鼠的畫面座標轉換為 Three.js 的標準化設備座標 (NDC)
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  // 使用攝影機和滑鼠位置來設定光線投射器
  raycaster.setFromCamera(mouse, camera);
  // 計算光線和場景中物件的交點
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    let currentObject = intersects[0].object; // 取得第一個被擊中的物件

    // 向上遍歷父層級，直到找到白名單中的物件或到達頂層
    while (currentObject) {
      if (cameraTargets[currentObject.name]) { // 檢查名稱是否存在於資料庫
        const targetData = cameraTargets[currentObject.name];
        // 輸出點擊物件的世界座標位置
        console.log('Clicked object world position:', currentObject.getWorldPosition(new THREE.Vector3()));
        animateCameraTo(targetData.position, targetData.target); // 觸發運鏡動畫
        selectedTargetData.value = { ...targetData, price: cabinClassPrices[cabinClass] || 0 }; // 更新狀態以顯示資訊小卡，並帶入價格

        // 顯示屋頂 Mesh
        if (roofObject && roofObjectOriginalParent) {
          roofObjectOriginalParent.add(roofObject);
        }

        break; // 成功找到並觸發後，跳出迴圈
      }
      currentObject = currentObject.parent; // 繼續向上查找
    }
  }
};

/**
 * @description 設定運鏡動畫的目標，並啟動動畫狀態。
 * @param {THREE.Vector3} position - 攝影機要移動到的目標位置。
 * @param {THREE.Vector3} lookAt - 攝影機要朝向的目標觀察點。
 */
const animateCameraTo = (position, lookAt) => {
  isAnimatingCamera = true;
  targetPosition.copy(position);
  targetLookAt.copy(lookAt);
  showDragHint.value = false; // 運鏡動畫開始時隱藏提示
  clearTimeout(dragHintTimeout); // 清除任何待處理的延遲顯示
}

/**
 * @description 點擊返回按鈕時觸發，將視角重設回初始狀態。
 */
const resetCameraView = () => {
  animateCameraTo(initialCameraPosition, initialCameraTarget); // 觸發返回初始位置的動畫
  selectedTargetData.value = null; // 清空選中數據，隱藏資訊小卡
  showDragHint.value = false; // 返回初始視角時隱藏提示

  // 隱藏屋頂 Mesh
  if (roofObject && roofObjectOriginalParent) {
    roofObjectOriginalParent.remove(roofObject);
  }
};

/**
 * @description 動畫迴圈 (渲染迴圈)，每一幀都會被呼叫，是場景動態更新的核心。
 */
const animate = () => {
  animationFrameId = requestAnimationFrame(animate); // 請求瀏覽器下一次重繪時再次呼叫

  if (isAnimatingCamera) {
    const step = 0.05; // 動畫的平滑度
    camera.position.lerp(targetPosition, step); // 將攝影機位置朝目標平滑移動
    controls.target.lerp(targetLookAt, step); // 將觀察點朝目標平滑移動

    if (camera.position.distanceTo(targetPosition) < 0.01) { // 檢查是否已到達目標
      isAnimatingCamera = false;
      // 如果不是返回初始視角，則保持 controls 禁用，因為我們使用自定義滑鼠控制
      if (selectedTargetData.value) {
        controls.enabled = false;
        showDragHint.value = true; // 顯示拖曳提示
      } else {
        controls.enabled = false;
        showDragHint.value = false; // 返回初始視角時隱藏提示
      }
    }
  }

  controls.update(); // 更新控制器狀態
  renderer.render(scene, camera); // 將場景渲染到畫面上
};

/**
 * @description 處理瀏覽器視窗大小變更的事件，確保渲染畫面不會變形。
 */
const onWindowResize = () => {
  const container = viewerContainer.value;
  if (!container) return;
  camera.aspect = container.clientWidth / container.clientHeight; // 更新攝影機長寬比
  camera.updateProjectionMatrix(); // 更新攝影機的投影矩陣
  renderer.setSize(container.clientWidth, container.clientHeight); // 更新渲染器尺寸
};

/**
 * @description 畫布滑鼠移動事件處理函式，用於偵測懸停物件並應用發光效果。
 * 解決了因共享材質導致整個模型發光的問題。
 */
const onCanvasMouseMove = (event) => {
  if (isAnimatingCamera || selectedTargetData.value) return; // 動畫中或已選擇目標，不處理 hover

  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);

  const newlyHoveredMeshes = new Set();

  if (intersects.length > 0) {
    let currentObject = intersects[0].object;
    while (currentObject) {
      if (cameraTargets[currentObject.name]) {
        // 找到可互動的物件群組，遍歷其下的所有 mesh
        currentObject.traverse((child) => {
          if (child.isMesh && child.material) {
            newlyHoveredMeshes.add(child); // 將此 mesh 加入到「當前懸停」的集合中
            if (!glowingMeshes.has(child)) {
              // 如果這個 mesh 還沒有在發光，儲存其原始材質，然後複製一份新材質來應用效果
              glowingMeshes.set(child, child.material); // 儲存原始材質
              child.material = child.material.clone(); // 複製材質，避免影響共享對象
              child.material.emissive.setHex(GLOW_COLOR);
              child.material.emissiveIntensity = GLOW_INTENSITY;
              child.material.needsUpdate = true;
            }
          }
        });
        break; // 找到後就停止向上查找
      }
      currentObject = currentObject.parent;
    }
  }

  // 檢查之前在發光，但現在不再被懸停的 mesh
  glowingMeshes.forEach((originalMaterial, mesh) => {
    if (!newlyHoveredMeshes.has(mesh)) {
      // 這個 mesh 不再被懸停，恢復其原始狀態
      if (mesh.material && mesh.material.isMaterial) {
        mesh.material.dispose(); // 釋放為發光效果而複製的材質
      }
      mesh.material = originalMaterial; // 恢復原始材質
      glowingMeshes.delete(mesh); // 從發光列表中移除
    }
  });
};

// 自定義滑鼠拖曳旋轉的實現
const rotationSpeed = 0.005; // 旋轉速度

const onCustomMouseDown = (event) => {
  // 只有當左鍵按下且已切換到座位視角時才啟用拖曳
  if (event.button === 0 && selectedTargetData.value) {
    isDragging = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    threeCanvas.value.style.cursor = 'grabbing'; // 改變滑鼠游標
    showDragHint.value = false; // 開始拖曳時隱藏提示
    clearTimeout(dragHintTimeout); // 清除任何待處理的延遲顯示
  }
};

const onCustomMouseMove = (event) => {
  if (!isDragging) return;

  const deltaX = event.clientX - lastMouseX;
  const deltaY = event.clientY - lastMouseY;

  lastMouseX = event.clientX;
  lastMouseY = event.clientY;

  // 計算從攝影機到目標點的向量
  const cameraToTarget = controls.target.clone().sub(camera.position);

  // 創建一個旋轉四元數
  const quaternion = new THREE.Quaternion();

  // 水平旋轉 (繞 Y 軸)
  quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -deltaX * rotationSpeed);
  cameraToTarget.applyQuaternion(quaternion);

  // 垂直旋轉 (繞攝影機的局部 X 軸)
  // 為了避免翻轉，需要計算攝影機的局部 X 軸
  const cameraXAxis = new THREE.Vector3();
  camera.getWorldDirection(cameraXAxis); // 獲取攝影機的視線方向
  cameraXAxis.cross(camera.up); // 視線方向與上方向的叉積得到局部 X 軸
  cameraXAxis.normalize(); // 正規化

  quaternion.setFromAxisAngle(cameraXAxis, -deltaY * rotationSpeed);
  cameraToTarget.applyQuaternion(quaternion);

  // 更新目標點
  controls.target.copy(camera.position).add(cameraToTarget);

  // 更新攝影機視角
  camera.lookAt(controls.target);
};

const onCustomMouseUp = () => {
  isDragging = false;
  threeCanvas.value.style.cursor = 'grab'; // 恢復滑鼠游標
  // 拖曳結束後，延遲顯示提示
  dragHintTimeout = setTimeout(() => {
    if (!isDragging && selectedTargetData.value) { // 確保沒有再次拖曳且仍在座位視角
      showDragHint.value = true;
    }
  }, 2000); // 2 秒後顯示
};

// --- Vue 生命週期掛鉤 ---
/**
 * @description 當元件掛載到 DOM 後，執行初始化。
 */
onMounted(() => {
  initThreeScene();
});

/**
 * @description 當元件被卸載時，進行清理工作以防止記憶體洩漏。
 */
onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', onWindowResize);
  threeCanvas.value?.removeEventListener('click', onCanvasClick);
  threeCanvas.value?.removeEventListener('mousemove', onCanvasMouseMove); // 移除滑鼠移動事件監聽
  // 移除自定義滑鼠事件監聽器
  threeCanvas.value?.removeEventListener('mousedown', onCustomMouseDown);
  threeCanvas.value?.removeEventListener('mousemove', onCustomMouseMove);
  threeCanvas.value?.removeEventListener('mouseup', onCustomMouseUp);
  if (renderer) renderer.dispose(); // 釋放渲染器資源
});


// 卡片部分
import SeatCard from "@/components/SeatCard.vue";

const router = useRouter();
const orderStore = useOrderStore();

function handleConfirm() {
  if (selectedTargetData.value) {
    orderStore.setSeatDetails(selectedTargetData.value);
  }
  router.push('/payment-method');
}

function handleBack() {
  console.log("返回選位頁！");
}
</script>

<style scoped>
/* 3D 視窗的父容器 */
.viewer-container {
  width: 100%;
  height: 100vh;
  position: relative;
  /* 為了讓絕對定位的子元素 (如 loading-overlay, info-card) 能正確定位 */
}

/* 載入中的覆蓋層 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  z-index: 10;
  /* 確保在畫布之上 */
}

/* 拖曳提示樣式 */
.drag-hint {
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 1s ease-in-out;
  pointer-events: none;
  /* 確保不阻擋滑鼠事件 */
  z-index: 10;
}
</style>
