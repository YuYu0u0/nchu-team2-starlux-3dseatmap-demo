<template>
  <div class="page-container">

    <div class="container">
      <!-- 上方區塊: Logo -->
      <header class="header-section">
        <NavbarSimple />
      </header>
    </div>

    <!-- 滿版分隔線 -->
    <div class="full-width-hr">
      <hr />
    </div>

    <div class="container">
      <!-- 機票規則內容區塊 -->
      <TicketInfo />

      <!-- 訂票區 -->
      <section class="booking-section">
        <BookingTicket v-for="flight in flights" :key="flight.id" :flight="flight"
          :cabinClass="orderStore.bookingDetails?.cabinClass || 'economy'" />
      </section>
      <!-- 返回列 -->
      <SearchAgain />

      <!-- 注意事項 -->
      <Notice />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useOrderStore } from '@/stores/order';
import BookingTicket from '@/components/SearchResultView/BookingTicket.vue';
import NavbarSimple from '@/components/NavbarView/NavbarSimple.vue';
import TicketInfo from '@/components/SearchResultView/TicketInfo.vue';
import Notice from '@/components/SearchResultView/Notice.vue';
import SearchAgain from '@/components/SearchResultView/SearchAgain.vue';

const orderStore = useOrderStore();

// 模擬航班數據
// 輔助函式：生成指定範圍內的隨機整數
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 輔助函式：生成隨機時間 (HH:MM 格式，分鐘數為 15 的倍數)
function getRandomTime(startHour, endHour, prevTime = null) {
  let minTotalMinutes = startHour * 60;
  if (prevTime) {
    const [prevH, prevM] = prevTime.split(':').map(Number);
    minTotalMinutes = prevH * 60 + prevM + 15; // 確保至少比前一個時間晚 15 分鐘
  }

  const maxTotalMinutes = endHour * 60 + 45; // 結束小時的最大可能分鐘數 (例如 22:45)

  // 如果計算出的最小分鐘數超過了最大可能分鐘數，表示無法在當天找到後續時間
  if (minTotalMinutes > maxTotalMinutes) {
    // 返回當天最晚的時間作為 fallback，或者可以根據需求拋出錯誤或返回空
    return `${String(endHour).padStart(2, '0')}:45`;
  }

  // 在有效範圍內生成一個隨機的總分鐘數，且為 15 的倍數
  let totalMinutes = getRandomInt(Math.ceil(minTotalMinutes / 15), Math.floor(maxTotalMinutes / 15)) * 15;

  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;

  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

// 計算抵達日期和時間的輔助函式
function calculateArrivalTime(departureDateStr, departureTimeStr, durationStr) {
  if (!departureDateStr || !departureTimeStr || !durationStr) {
    return { date: '', time: '' };
  }

  // 解析出發日期和時間
  const departureDateTime = new Date(`${departureDateStr}T${departureTimeStr}:00`);

  // 解析飛行時間 (例如: '3小時45分' -> 3小時45分)
  const durationParts = durationStr.match(/(\d+)小時(?:(\d+)分)?/);
  let durationMinutes = 0;
  if (durationParts) {
    const hours = parseInt(durationParts[1]);
    const minutes = durationParts[2] ? parseInt(durationParts[2]) : 0;
    durationMinutes = hours * 60 + minutes;
  }

  // 計算抵達時間
  const arrivalDateTime = new Date(departureDateTime.getTime() + durationMinutes * 60 * 1000);

  // 格式化抵達日期和時間
  const arrivalDate = arrivalDateTime.toLocaleDateString('zh-TW', { year: 'numeric', month: 'numeric', day: 'numeric' });
  const arrivalTime = arrivalDateTime.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });

  return { date: arrivalDate, time: arrivalTime };
}

// 輔助函式：生成指定範圍內由百位數開始的隨機價格
function getRandomPrice(min, max) {
  const price = Math.floor(Math.random() * ((max / 100) - (min / 100) + 1)) * 100 + min;
  return price;
}

const cabinClassPrices = {
  economy: {
    short: { min: 8000, max: 15000 },
    medium: { min: 12000, max: 25000 },
  },
  premiumEconomy: { min: 50000, max: 90000 },
  first: { min: 80000, max: 150000 },
};

const flights = ref([]);
const numberOfFlights = getRandomInt(1, 5);
let prevDepartureTime = null;

for (let i = 0; i < numberOfFlights; i++) {
  const flightNumber = `JX${String(getRandomInt(1, 300)).padStart(3, '0')}`;
  const aircraftTypes = ['A350-900', 'A330-NEO', 'A321NEO'];
  const aircraftType = aircraftTypes[getRandomInt(0, aircraftTypes.length - 1)];

  const durationHours = getRandomInt(3, 6);
  const durationMinutes = getRandomInt(0, 3) * 15; // 0, 15, 30, 45
  const duration = `${durationHours}小時${durationMinutes > 0 ? durationMinutes + '分' : ''}`;

  const departureDate = orderStore.bookingDetails?.departureDate;
  const departureTime = getRandomTime(6, 22, prevDepartureTime); // 假設航班在早上6點到晚上10點之間
  prevDepartureTime = departureTime;

  const { date: arrivalDate, time: arrivalTime } = calculateArrivalTime(departureDate, departureTime, duration);

  // 計算價格
  let price = 0;
  const cabinClass = orderStore.bookingDetails?.cabinClass || 'economy';

  if (cabinClass === 'economy') {
    if (durationHours <= 4) { // 假設短程航線 <= 4 小時
      price = getRandomPrice(cabinClassPrices.economy.short.min, cabinClassPrices.economy.short.max);
    } else {
      price = getRandomPrice(cabinClassPrices.economy.medium.min, cabinClassPrices.economy.medium.max);
    }
  } else if (cabinClass === 'premiumEconomy') {
    price = getRandomPrice(cabinClassPrices.premiumEconomy.min, cabinClassPrices.premiumEconomy.max);
  } else if (cabinClass === 'first') {
    price = getRandomPrice(cabinClassPrices.first.min, cabinClassPrices.first.max);
  }

  flights.value.push({
    id: `flight-${i + 1}`,
    flightNumber,
    aircraftType,
    duration,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
    originCode: orderStore.bookingDetails?.origin?.code || 'TPE',
    destinationCode: orderStore.bookingDetails?.destination?.code || 'KIX',
    ticketPrice: price, // 將價格直接儲存到 flight 物件中
    isSpecialOffer: false, // 預設為 false，稍後處理最低價和特價
  });
}

// 根據 departureTime 排序航班
flights.value.sort((a, b) => {
  const timeA = new Date(`2000/01/01 ${a.departureTime}`);
  const timeB = new Date(`2000/01/01 ${b.departureTime}`);
  return timeA - timeB;
});

// 找出所有航班中的最低價
let minOverallPrice = Infinity;
flights.value.forEach(flight => {
  if (flight.ticketPrice < minOverallPrice) {
    minOverallPrice = flight.ticketPrice;
  }
});

// 將第一筆航班的價格設定為最低價，並標註為特價
if (flights.value.length > 0) {
  flights.value[0].ticketPrice = Math.round(minOverallPrice * 0.8 / 100) * 100; // 應用特價折扣並確保百位數
  flights.value[0].isSpecialOffer = true;
}

console.log('SearchResultView - flights.value:', JSON.stringify(flights.value, null, 2));

</script>

<style scoped>
/* 通用 section 樣式，用於置中內容 */
section,
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* 1. Header 區塊 */
.header-section {
  height: 54px;
}



/* 3. 訂票區區塊 */
.booking-section {
  /* height: 600px; */
  /* 移除固定高度，讓內容自動撐開 */
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* 增加 BookingTicket 之間的間距 */
}
</style>
