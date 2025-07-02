<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content location-modal-content">
      <button @click="$emit('close')" class="close-icon-button" aria-label="關閉視窗">
        &times;
      </button>

      <h3 class="modal-title f2">{{ title }}</h3>
      <div class="search-bar">
        <input type="text" placeholder="選擇機場" class="search-input f4">
        <img src="/image/icon/nav-icon-search.svg" alt="搜尋" class="search-icon">
      </div>

      <div class="location-picker-body">
        <nav class="sidebar">
          <button
            v-for="region in regions"
            :key="region"
            :class="{ 'nav-item': true, 'active': selectedRegion === region }"
            @click="selectedRegion = region"
          >
            {{ region }}
          </button>
        </nav>
        <div class="content-view">
          <ul class="airport-list">
            <li
              v-for="airport in filteredAirports"
              :key="airport.code"
              class="airport-item"
              @click="selectAirport(airport)"
            >
              <div class="airport-details">
                <span class="airport-city f3">{{ airport.city }}, {{ airport.country }}</span>
                <span class="airport-fullname f5">{{ airport.fullName }}</span>
              </div>
              <span class="airport-code f1">{{ airport.code }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  title: String,
});

const emit = defineEmits(['close', 'select']);

const selectedRegion = ref('熱門城市'); // 預設選中熱門城市

const regions = [
  '台灣', '港澳', '東北亞', '東南亞', '北美洲'
];

const allAirports = {
  '台灣': [
    { city: '臺北', country: '臺灣', fullName: '臺灣桃園國際機場', code: 'TPE' },
    { city: '臺中', country: '臺灣', fullName: '臺中國際機場', code: 'RMQ' },
  ],
  '港澳': [
    { city: '香港', country: '中國', fullName: '香港國際機場', code: 'HKG' },
    { city: '澳門', country: '中國', fullName: '澳門國際機場', code: 'MFM' },
  ],
  '東北亞': [
    { city: '札幌', country: '日本', fullName: '新千歲機場', code: 'CTS' },
    { city: '大阪', country: '日本', fullName: '關西國際機場', code: 'KIX' },
    { city: '東京', country: '日本', fullName: '成田國際機場', code: 'NRT' },
  ],
  '東南亞': [
    { city: '曼谷', country: '泰國', fullName: '素萬那普機場', code: 'BKK' },
    { city: '宿霧', country: '菲律賓', fullName: '麥克坦-宿霧國際機場', code: 'CEB' },
    { city: '吉隆坡', country: '馬來西亞', fullName: '吉隆坡國際機場', code: 'KUL' },
  ],
  '北美洲': [
    { city: '洛杉磯', country: '美國', fullName: '洛杉磯國際機場', code: 'LAX' },
    { city: '西雅圖', country: '美國', fullName: '西雅圖-塔科馬國際機場', code: 'SEA' },
    { city: '舊金山', country: '美國', fullName: '舊金山國際機場', code: 'SFO' },
  ],
};

const filteredAirports = computed(() => {
  return allAirports[selectedRegion.value] || [];
});

const selectAirport = (airport) => {
  emit('select', airport);
  emit('close');
};
</script>

<style scoped>
/* 彈跳視窗通用樣式 */
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
  position: relative;
  background: var(--color-neutral-form-bg-white); /* 溫暖的米白色背景 */
  padding: 30px;
  border-radius: 8px;
  max-width: 900px; /* 增加最大寬度 */
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.close-icon-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  color: var(--color-neutral-border); /* 使用中性色邊框 */
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.close-icon-button:hover {
  color: var(--color-primary-obsidian-gray);
}

.modal-title {
  color: var(--color-primary-obsidian-gray); /* 深色標題 */
  margin-bottom: 20px;
  text-align: center;
}

/* 搜尋欄樣式 */
.search-bar {
  position: relative;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 15px; /* 為圖示留出空間 */
  border: 1px solid var(--color-neutral-border);
  border-radius: 4px;
  background-color: var(--color-neutral-form-bg-light-orange); /* 淺膚色背景 */
  color: var(--color-primary-obsidian-gray);
}

.search-input::placeholder {
  color: var(--color-neutral-text);
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  filter: invert(25%) sepia(15%) saturate(1000%) hue-rotate(330deg) brightness(90%) contrast(80%); /* 調整為棕色 */
}

/* 兩欄式佈局 */
.location-picker-body {
  display: flex;
  flex-grow: 1;
  border: 1px solid var(--color-neutral-border);
  border-radius: 4px;
  overflow: hidden;
}

.sidebar {
  flex: 0 0 200px; /* 固定寬度 */
  display: flex;
  flex-direction: column;
  background-color: var(--color-neutral-form-bg-light-orange); /* 淺膚色背景 */
  border-right: 1px solid var(--color-neutral-border);
  padding: 10px 0;
}

.sidebar .nav-item {
  padding: 12px 20px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: var(--color-primary-obsidian-gray); /* 深色文字 */
  font-size: 16px;
  transition: background-color 0.2s, color 0.2s;
}

.sidebar .nav-item:hover {
  background-color: var(--color-neutral-lower-form-brown); /* 灰褐色懸停 */
  color: var(--color-neutral-form-bg-white); /* 白色文字 */
}

.sidebar .nav-item.active {
  background-color: var(--color-neutral-lower-form-brown); /* 灰褐色選中 */
  color: var(--color-neutral-form-bg-white); /* 白色文字 */
  font-weight: bold;
}

.content-view {
  flex: 1;
  padding: 20px;
  background-color: var(--color-neutral-form-bg-white); /* 米白色背景 */
  overflow-y: auto; /* 內容可滾動 */
}

.airport-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.airport-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  margin-bottom: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.airport-item:hover {
  background-color: var(--color-neutral-lower-form-brown); /* 灰褐色懸停 */
  color: var(--color-neutral-form-bg-white); /* 白色文字 */
}

.airport-item:hover .airport-city,
.airport-item:hover .airport-fullname,
.airport-item:hover .airport-code {
  color: var(--color-neutral-form-bg-white); /* 懸停時文字變白 */
}

.airport-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.airport-city {
  color: var(--color-primary-obsidian-gray); /* 深色城市名 */
  font-weight: bold;
}

.airport-fullname {
  color: var(--color-neutral-text); /* 暖棕色全名 */
  margin-top: 4px;
}

.airport-code {
  color: var(--color-primary-button-brown); /* 暖棕色機場代碼 */
  font-weight: bold;
  margin-left: 20px; /* 留白 */
}
</style>
