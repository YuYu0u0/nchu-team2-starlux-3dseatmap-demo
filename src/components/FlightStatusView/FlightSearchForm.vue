<template>
  <div class="form-page-container">
    <div class="form-wrapper">
      <!-- 文字說明 -->
      <div class="info-text">
        ⓘ可使用班機動態功能查詢星宇航空最新的班機資訊
      </div>

      <!-- 上層表單區塊 -->
      <div class="form-upper">
        <!-- 左側: 起點與終點 -->
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
        </div>

        <!-- 右側: 搭乘日期 -->
        <div class="form-group">
          <label for="departure-date">搭乘日期</label>
          <div class="input-with-icon">
            <input type="date" id="departure-date" class="form-input" placeholder="請選擇日期" ref="dateInputRef" v-model="departureDate">
            <span class="icon calendar-icon" @click="triggerDatePicker">📅</span>
          </div>
        </div>
      </div>

      <!-- 分隔線 -->
      <hr class="separator">

      <!-- 下層區塊 -->
      <div class="form-lower">
        <button class="search-button" @click="handleSearch">查詢</button>
      </div>
    </div>

    <!-- 地點選擇彈跳視窗 -->
    <LocationModal v-if="isLocationModalVisible" :title="locationModalTitle" @close="isLocationModalVisible = false" @select="handleLocationSelect" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LocationModal from '@/components/PopUpWindow/LocationModal.vue';

// 控制地點選擇彈跳視窗
const isLocationModalVisible = ref(false);
const locationModalTitle = ref('');
const isSelectingOrigin = ref(true);

// 表單數據
const originLocation = ref(null);
const destinationLocation = ref(null);
const departureDate = ref('');

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
  } else {
    destinationLocation.value = airport;
  }
  isLocationModalVisible.value = false;
};

// 交換地點的函式
const swapLocations = () => {
  const temp = originLocation.value;
  originLocation.value = destinationLocation.value;
  destinationLocation.value = temp;
};

// 觸發日期選擇器的函式
const triggerDatePicker = () => {
  dateInputRef.value?.showPicker();
};

// 處理查詢按鈕點擊事件 (無功能)
const handleSearch = () => {
  console.log('查詢按鈕被點擊');
  // 此處不執行任何操作
};
</script>

<style scoped>
/* 複製 BookingForm.vue 的樣式 */
.form-wrapper {
  background-color: var(--color-neutral-form-bg-white);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.form-upper {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 調整左右比例 */
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

.location-selector-container-out {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}

.location-selector-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  border: 1px solid var(--color-neutral-border);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-neutral-form-bg-white);
  height: 100px;
  width: 100%;
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
}

.location-item:hover {
  background-color: var(--color-neutral-form-bg-light-orange);
}

.location-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.location-prompt {
  color: #888;
}

.swap-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  background-color: var(--color-neutral-form-bg-light-orange);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.swap-icon-container:hover {
  background-color: var(--color-button-hover);
}

.swap-icon {
  font-size: 28px;
  color: var(--color-primary-brown);
  font-weight: bold;
}

.calendar-icon {
  cursor: pointer;
}

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

input[type="date"].form-input {
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
}

.input-with-icon .calendar-icon {
  pointer-events: auto;
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

/* 新增的 info-text 樣式 */
.info-text {
  margin-bottom: 20px;
  padding: 15px;
  background-color: var(--color-neutral-form-bg-light-orange);
  border-radius: 8px;
  text-align: start;
  color: var(--color-primary-brown);
}
</style>