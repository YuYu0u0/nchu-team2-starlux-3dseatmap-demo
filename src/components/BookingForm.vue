<template>
  <div class="form-page-container">
    <div class="form-wrapper">
      <!-- 上層表單區塊 -->
      <div class="form-upper">

        <!-- 左上: 起點與終點 (新版) -->
        <div class="location-selector-container-out">
          <div class="location-selector-container">
            <div class="location-item" @click="openLocationModal('出發地')">
              <span class="location-title f1">{{ originLocation ? originLocation.city : '出發地' }}</span>
              <span class="location-prompt f5">{{ originLocation ? originLocation.code : '請選擇出發地' }}</span>
            </div>
            <div class="swap-icon-container" @click="swapLocations">
              <span class="swap-icon">⇌</span>
            </div>
            <div class="location-item" @click="openLocationModal('目的地')">
              <span class="location-title f1">{{ destinationLocation ? destinationLocation.city : '目的地' }}</span>
              <span class="location-prompt f5">{{ destinationLocation ? destinationLocation.code : '請選擇目的地' }}</span>
            </div>
          </div>
          <p v-if="formErrors.origin || formErrors.destination" class="error-message">請選擇出發地和目的地。</p>
        </div>


        <!-- 右上: 行程類型 -->
        <div class="form-group">
          <label for="trip-type">行程類型</label>
          <select id="trip-type" class="form-input" v-model="tripType">
            <option value="one-way">單程</option>
            <option value="round-trip">來回</option>
          </select>
        </div>

        <!-- 左中: 出發日期 (新版) -->
        <div class="form-group">
          <label for="departure-date">出發日期</label>
          <div class="input-with-icon">
            <input type="date" id="departure-date" class="form-input" placeholder="請選擇日期" ref="dateInputRef"
              v-model="departureDate">
            <span class="icon calendar-icon" @click="triggerDatePicker">📅</span>
          </div>
          <p v-if="formErrors.departureDate" class="error-message">請選擇出發日期。</p>
        </div>

        <!-- 右中: 選擇艙等 -->
        <div class="form-group">
          <label for="cabin-class">選擇艙等</label>
          <select id="cabin-class" class="form-input" v-model="cabinClass">
            <option value="economy">經濟艙</option>
            <option value="premiumEconomy">豪華經濟艙</option>
            <option value="first">頭等艙</option>
          </select>
        </div>

        <!-- 左下: 優惠代碼 -->
        <div class="form-group">
          <label for="promo-code">優惠代碼</label>
          <input type="text" id="promo-code" class="form-input" placeholder="輸入代碼 (非必填)" v-model="promoCode">
        </div>

        <!-- 右下: 注意事項連結 (新版) -->
        <div class="form-group info-link-container">
          <router-link to="/notes-for-child" class="info-link f5">
            <span class="icon info-icon">ⓘ</span>
            <span>嬰兒及兒童注意事項</span>
          </router-link>
        </div>
      </div>
      <!-- 分隔線 -->
      <hr class="separator">

      <!-- 下層區塊 -->
      <div class="form-lower">
        <button class="search-button" @click="handleSearch">搜尋</button>
      </div>
    </div>

    <!-- 地點選擇彈跳視窗 (新版) -->
    <LocationModal v-if="isLocationModalVisible" :title="locationModalTitle" @close="isLocationModalVisible = false"
      @select="handleLocationSelect" />

  </div>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'; // 導入 onMounted
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/order';
import LocationModal from '@/components/PopUpWindow/LocationModal.vue'; // 導入新的 LocationModal

const router = useRouter();
const orderStore = useOrderStore();

// 表單數據
const tripType = ref('round-trip');
const departureDate = ref('');
const cabinClass = ref('economy');
const promoCode = ref('');

// 控制地點選擇彈跳視窗
const isLocationModalVisible = ref(false);
const locationModalTitle = ref('');
const isSelectingOrigin = ref(true); // 判斷當前選擇的是出發地還是目的地

// 儲存選擇的出發地和目的地
const originLocation = ref(null);
const destinationLocation = ref(null);

// 表單驗證錯誤訊息
const formErrors = reactive({
  origin: false,
  destination: false,
  departureDate: false,
});

// 建立一個 ref 來存取 date input DOM 元素
const dateInputRef = ref(null);

// 開啟地點選擇視窗的函式
const openLocationModal = (type) => {
  locationModalTitle.value = type;
  isSelectingOrigin.value = type === '出發地';
  isLocationModalVisible.value = true;
};

// 處理地點選擇
const handleLocationSelect = (airport) => {
  if (isSelectingOrigin.value) {
    originLocation.value = airport;
    formErrors.origin = false; // 清除錯誤
  } else {
    destinationLocation.value = airport;
    formErrors.destination = false; // 清除錯誤
  }
  isLocationModalVisible.value = false;
};

// 觸發日期選擇器的函式
const triggerDatePicker = () => {
  // .showPicker() 是 HTMLInputElement 的一個方法，可以命令式地顯示選擇器
  dateInputRef.value?.showPicker();
};

// 交換地點的函式
const swapLocations = () => {
  const temp = originLocation.value;
  originLocation.value = destinationLocation.value;
  destinationLocation.value = temp;
};

// 處理搜尋按鈕點擊事件
const handleSearch = () => {
  // 重置錯誤訊息
  formErrors.origin = false;
  formErrors.destination = false;
  formErrors.departureDate = false;

  let hasError = false;

  if (!originLocation.value) {
    formErrors.origin = true;
    hasError = true;
  }
  if (!destinationLocation.value) {
    formErrors.destination = true;
    hasError = true;
  }
  if (!departureDate.value) {
    formErrors.departureDate = true;
    hasError = true;
  }

  if (hasError) {
    return; // 如果有錯誤，停止提交
  }

  const bookingDetails = {
    origin: originLocation.value,
    destination: destinationLocation.value,
    tripType: tripType.value,
    departureDate: departureDate.value,
    cabinClass: cabinClass.value,
    promoCode: promoCode.value,
  };
  orderStore.setBookingDetails(bookingDetails);
  router.push('/search-result');
};

// 在組件掛載時，檢查 Pinia Store 中是否有預設值
onMounted(() => {
  // 檢查是否從首頁搜尋跳轉而來
  if (orderStore.fromHomepageSearch && orderStore.bookingDetails) {
    // 是，則載入資料
    originLocation.value = orderStore.bookingDetails.origin;
    destinationLocation.value = orderStore.bookingDetails.destination;
    tripType.value = orderStore.bookingDetails.tripType;
    departureDate.value = orderStore.bookingDetails.departureDate;
    cabinClass.value = orderStore.bookingDetails.cabinClass;
    promoCode.value = orderStore.bookingDetails.promoCode;

    // 重置旗標，這樣下次直接進入此頁面時不會載入資料
    orderStore.setFromHomepageSearch(false);
  } else {
    // 否，則保持表單為預設或空白狀態
    // 這裡不需要做任何事，因為 ref 的初始值就是我們想要的
  }
});
</script>

<style scoped>
/* 表單外層容器 */
.form-wrapper {
  background-color: var(--color-neutral-form-bg-white);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
}

/* 上層表單: 使用 Grid 佈局 */
.form-upper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 20px 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;
  font-size: 14px;
  color: #666666;
  font-weight: 500;
}

/* --- Start: 新增與修改的樣式 --- */

/* 地點選擇器容器 */
.location-selector-container-out {
  display: flex;
  flex-direction: column;
  /* 修改為垂直排列，以便錯誤訊息顯示 */
  align-items: flex-start;
  /* 垂直置中 */
  flex-grow: 1;
  /* 讓它佔滿可用空間 */
}

.location-selector-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  /* 讓容器佔滿可用空間 */
  border: 1px solid var(--color-neutral-border);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-neutral-form-bg-white);
  height: 100px;
  /* 固定高度 */
  width: 100%;
  /* 確保佔滿父容器寬度 */
}

.location-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: var(--color-primary-brown);
  /* 使用暖棕色文字 */
}

.location-item:hover {
  background-color: var(--color-neutral-form-bg-light-orange);
  /* 淺橘色背景 */
}

.location-title {
  font-weight: bold;
  margin-bottom: 5px;
  /* 與提示文字的間距 */
}

.location-prompt {
  color: #888;
  /* 稍淺的顏色 */
}

.swap-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  /* 固定寬度 */
  background-color: var(--color-neutral-form-bg-light-orange);
  /* 淺橘色背景 */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.swap-icon-container:hover {
  background-color: var(--color-button-hover);
  /* 懸停效果 */
}

.swap-icon {
  font-size: 28px;
  /* 較大的圖示 */
  color: var(--color-primary-brown);
  /* 暖棕色 */
  font-weight: bold;
}

/* 日期輸入框的日曆圖示 */
.calendar-icon {
  cursor: pointer;
}

/* 注意事項連結容器 (修改後) */
.info-link-container {
  justify-content: center;
  /* 主軸(垂直)靠下 */
  align-items: flex-start;
  /* 交錯軸(水平)靠左 */
}

/* --- End: 新增與修改的樣式 --- */


/* 通用輸入框樣式 */
.form-input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  background-color: #fff;
}

.form-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
}

/* 處理 date input 的樣式 */
input[type="date"].form-input {
  position: relative;
  padding-right: 35px;
  /* 為圖示留出空間 */
}

input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  /* 隱藏原生圖示 */
  cursor: pointer;
}

select.form-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2724%27%20height%3D%2724%27%20viewBox%3D%270%200%2024%2024%27%3E%3Cpath%20d%3D%27M7%2010l5%205%205-5z%27%20fill%3D%27%23666%27%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 18px;
}

/* 帶有圖示的輸入框 */
.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon .form-input {
  width: 100%;
}

.input-with-icon .icon {
  position: absolute;
  right: 12px;
  font-size: 18px;
  color: #666666;
  pointer-events: none;
  /* 讓點擊可以穿透圖示本身 */
}

.input-with-icon .calendar-icon {
  pointer-events: auto;
  /* 確保日曆圖示可以被點擊 */
}


.info-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  padding: 0;
}

.info-link:hover {
  text-decoration: underline;
}

.info-link .info-icon {
  font-weight: bold;
}

.separator {
  border: none;
  border-top: 1.5px solid #87969D;
  margin: 30px 0;
}

.form-lower {
  display: flex;
  justify-content: flex-end;
}

.search-button {
  width: 170px;
  height: 40px;
  background-color: #8D6E63;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;
}

.search-button:hover {
  opacity: 0.9;
}

/* 彈跳視窗 Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #FFFFFF;
  padding: 30px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-content h3 {
  margin-top: 0;
  color: #333333;
}

.modal-content p {
  line-height: 1.6;
  color: #666666;
}

.modal-close-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

.modal-close-button:hover {
  opacity: 0.9;
}

/* --- Start: 地點選擇 Modal 的專屬樣式 --- */
.location-modal-content {
  max-width: 700px;
}

.location-picker-body {
  display: flex;
  height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}

.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid #dcdcdc;
}

.sidebar .nav-item {
  padding: 10px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 5px;
}

.sidebar .nav-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.content-view {
  flex: 3;
  padding: 20px;
}

/* Modal 內部顏色 */
.skyblue {
  background-color: #f0f8ff;
}

.lightgray {
  background-color: #f9f9f9;
}

/* --- End: 地點選擇 Modal 的專屬樣式 --- */

/* 錯誤訊息樣式 */
.error-message {
  color: var(--color-semantic-alert);
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
}
</style>
