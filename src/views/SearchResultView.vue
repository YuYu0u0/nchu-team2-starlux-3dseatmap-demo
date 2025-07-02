<template>
  <div class="container">

    <!-- 上方區塊: Logo -->
    <header class="header-section">
      <NavbarSimple />
    </header>

    <!-- 滿版分隔線 -->
    <div class="full-width-hr">
      <hr />
    </div>

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
const flights = ref([
  {
    id: 'flight-001',
    flightNumber: 'JX002',
    aircraftType: 'A350-900',
    duration: '3小時45分',
    departureDate: '2025年6月25日',
    departureTime: '08:30',
    arrivalDate: '2025年6月25日',
    arrivalTime: '12:15',
    originCode: orderStore.bookingDetails?.origin || 'TPE',
    destinationCode: orderStore.bookingDetails?.destination || 'KIX',
  },
  {
    id: 'flight-002',
    flightNumber: 'JX120',
    aircraftType: 'A330-900NEO',
    duration: '4小時00分',
    departureDate: '2025年6月25日',
    departureTime: '10:00',
    arrivalDate: '2025年6月25日',
    arrivalTime: '14:00',
    originCode: orderStore.bookingDetails?.origin || 'TPE',
    destinationCode: orderStore.bookingDetails?.destination || 'KIX',
  },
  {
    id: 'flight-003',
    flightNumber: 'JX200',
    aircraftType: 'A321NEO',
    duration: '3小時30分',
    departureDate: '2025年6月25日',
    departureTime: '14:00',
    arrivalDate: '2025年6月25日',
    arrivalTime: '17:30',
    originCode: orderStore.bookingDetails?.origin || 'TPE',
    destinationCode: orderStore.bookingDetails?.destination || 'KIX',
  },
]);
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

.full-width-hr {
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  /* 滿版寬度 */
}

.full-width-hr hr {
  border: none;
  border-top: 1px solid gray;
  margin: 0;
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
