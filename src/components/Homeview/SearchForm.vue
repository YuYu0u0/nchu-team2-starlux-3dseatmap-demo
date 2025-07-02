<template>
  <section class="text-white py-4 search-form">
    <div class="container">
      <form class="row g-2">
        <!-- 左上: 起點與終點 (新版) -->
        <div class="col-12 col-md-6">
          <div class="location-selector-container">
            <div class="location-item" @click="openLocationModal('出發地')">
              <span class="location-title f5">{{ originLocation ? originLocation.city : '出發地' }}</span>
            </div>
            <div class="swap-icon-container" @click="swapLocations">
              <span class="swap-icon">⇌</span>
            </div>
            <div class="location-item" @click="openLocationModal('目的地')">
              <span class="location-title f5">{{ destinationLocation ? destinationLocation.city : '目的地' }}</span>
            </div>
          </div>
          <p v-if="formErrors.origin || formErrors.destination" class="error-message">請選擇出發地和目的地。</p>
        </div>

        <!-- 日期選擇 -->
        <div class="col-6 col-md-3">
          <div class="form-group">
            <label for="departure-date" class="d-none">出發日期</label>
            <div class="input-with-icon">
              <input type="date" id="departure-date" class="form-control" placeholder="請選擇日期" ref="dateInputRef"
                v-model="departureDate">
              <span class="icon calendar-icon" @click="triggerDatePicker">📅</span>
            </div>
            <p v-if="formErrors.departureDate" class="error-message">請選擇出發日期。</p>
          </div>
        </div>

        <!-- 搜尋按鈕 -->
        <div class="col-6 col-md-3">
          <button type="button" class="btn w-100 text-white search-btn" @click="handleSearch">搜尋</button>
        </div>
      </form>
    </div>

    <!-- 地點選擇彈跳視窗 (新版) -->
    <LocationModal v-if="isLocationModalVisible" :title="locationModalTitle" @close="isLocationModalVisible = false"
      @select="handleLocationSelect" />
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/order';
import LocationModal from '@/components/PopUpWindow/LocationModal.vue';

const router = useRouter();
const orderStore = useOrderStore();

// 表單數據
const departureDate = ref('');

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
  const bookingDetails = {
    origin: originLocation.value, // 儲存完整的物件
    destination: destinationLocation.value, // 儲存完整的物件
    tripType: 'round-trip', // 預設為來回，因為首頁沒有單程/來回選項
    departureDate: departureDate.value,
    cabinClass: 'economy', // 預設為經濟艙，因為首頁沒有艙等選項
    promoCode: '',
  };
  orderStore.setBookingDetails(bookingDetails);
  orderStore.setFromHomepageSearch(true); // 設置旗標
  router.push('/booking');
};
</script>

<style scoped>
.search-form {
  background-color: var(--color-neutral-text);
}

.search-btn {
  background-color: var(--color-neutral-bg-dark-blue);
}

/* --- Start: 新增與修改的樣式 --- */

/* 地點選擇器容器 */
.location-selector-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  border: 1px solid var(--color-neutral-border);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-neutral-form-bg-white);
  height: 40px;
  /* 調整高度以適應 input */
  width: 100%;
}

.location-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: var(--color-neutral-text);
}

.location-item:hover {
  background-color: var(--color-neutral-form-bg-light-orange);
}

.location-title {
  font-weight: bold;
}


.swap-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  /* 調整寬度 */
  background-color: var(--color-neutral-form-bg-light-orange);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.swap-icon-container:hover {
  background-color: var(--color-button-hover);
}

.swap-icon {
  font-size: 20px;
  /* 調整圖示大小 */
  color: var(--color-neutral-text);
  font-weight: bold;
}

/* 日期輸入框的日曆圖示 */
.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon .form-control {
  width: 100%;
}

.input-with-icon .icon {
  position: absolute;
  right: 12px;
  font-size: 18px;
  color: #666666;
  pointer-events: none;
}

.input-with-icon .calendar-icon {
  pointer-events: auto;
}

/* 錯誤訊息樣式 */
.error-message {
  color: var(--color-semantic-alert);
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
}

/* 處理 date input 的樣式 */
input[type="date"].form-control {
  position: relative;
  padding-right: 35px;
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
  cursor: pointer;
}

/* --- End: 新增與修改的樣式 --- */
</style>