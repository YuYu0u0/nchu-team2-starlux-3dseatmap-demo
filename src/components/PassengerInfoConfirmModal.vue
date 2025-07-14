<template>
  <div class="modal fade show d-block" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmModalLabel">確認您的訂單資訊</h5>
          <button type="button" class="btn-close" @click="handleBack" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- 航班資訊 (BookingTicket.vue 樣式) -->
          <div class="ticket-container">
            <div class="flight-info">
              <div class="flight-route">
                <span class="airport-code">{{ orderStore.selectedFlight?.originCode }}</span>
                <img src="/image/icon/icon-arrow-right-blue.svg" alt="arrow" class="arrow-icon" />
                <span class="airport-code">{{ orderStore.selectedFlight?.destinationCode }}</span>
              </div>
              <div class="flight-details">
                <span class="flight-number">{{ orderStore.selectedFlight?.flightNumber }}</span>
                <span class="aircraft-type">{{ orderStore.selectedFlight?.aircraftType }}</span>
              </div>
            </div>

            <div class="time-date-info">
              <div class="departure">
                <span class="time">{{ orderStore.selectedFlight?.departureTime }}</span>
                <span class="date">{{ orderStore.selectedFlight?.departureDate }}</span>
              </div>
              <div class="duration">
                <span class="duration-text">{{ orderStore.selectedFlight?.duration }}</span>
              </div>
              <div class="arrival">
                <span class="time">{{ orderStore.selectedFlight?.arrivalTime }}</span>
                <span class="date">{{ orderStore.selectedFlight?.arrivalDate }}</span>
              </div>
            </div>

            <div class="price-cabin-info">
              <div class="price-display">
                <span class="currency">NT$</span>
                <span class="amount">{{ orderStore.selectedFlight?.ticketPrice.toLocaleString() }}</span>
                <span v-if="orderStore.selectedFlight?.isSpecialOffer" class="special-offer">特價</span>
              </div>
            </div>
          </div>

          <!-- 座位資訊 (SeatCard.vue 樣式) -->
          <div class="seat-info-display">
            <div class="seat-number-display">{{ orderStore.seatDetails?.title }}</div>
            <div class="seat-class-display">{{ orderStore.seatDetails?.class }}</div>
          </div>

          <!-- 旅客資訊 (OrderSummary.vue 樣式) -->
          <div class="summary-section">
            <h3>旅客資訊</h3>
            <p>
              稱謂: {{ passengerInfo.salutation === 'mr' ? '先生' : passengerInfo.salutation === 'ms' ? '小姐' : passengerInfo.salutation === 'other' ? '性別' : '' }}<br>
              姓名: {{ passengerInfo.fullName }}<br>
              電子郵件: {{ passengerInfo.email }}<br>
              手機號碼: {{ passengerInfo.phoneNumber }}<br>
              <span v-if="passengerInfo.membershipId">會員帳號: {{ passengerInfo.membershipId }}</span>
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="handleBack">返回</button>
          <button type="button" class="btn btn-primary" @click="handleNext">下一步</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/order';

const props = defineProps({
  passengerInfo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);

const router = useRouter();
const orderStore = useOrderStore();

const cabinClassDisplay = computed(() => {
  switch (orderStore.selectedFlight?.cabinClass) {
    case 'economy':
      return '經濟艙';
    case 'premiumEconomy':
      return '豪華經濟艙';
    case 'first':
      return '頭等艙';
    default:
      return orderStore.selectedFlight?.cabinClass;
  }
});

const handleBack = () => {
  emit('close');
};

const handleNext = () => {
  router.push('/payment-method');
};
</script>

<style scoped>
/* Modal 基礎樣式 */
.modal {
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
}

.modal-content {
  background-color: var(--color-neutral-form-bg-white);
  color: var(--color-text);
}

.modal-header {
  border-bottom: 1px solid var(--color-neutral-border);
}

.modal-title {
  color: var(--color-primary-dark-blue);
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  border-top: 1px solid var(--color-neutral-border);
}

/* 航班資訊 (BookingTicket.vue 樣式參考) */
.ticket-container {
  background-color: var(--color-neutral-form-bg-white); /* 模態框內背景色 */
  border-radius: 8px;
  box-shadow: none; /* 模態框內不需要額外陰影 */
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr; /* 調整列寬比例，移除選位按鈕列 */
  gap: 10px;
  align-items: center;
  color: var(--color-text);
  border: 1px solid var(--color-neutral-border);
  margin-bottom: 20px;
}

.flight-info, .time-date-info, .price-cabin-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.flight-route {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-primary-dark-blue);
}

.airport-code {
  margin: 0 3px;
}

.arrow-icon {
  width: 18px;
  height: 18px;
}

.flight-details {
  font-size: 13px;
  color: #666;
  margin-top: 3px;
}

.flight-number {
  font-weight: bold;
  margin-right: 3px;
}

.time-date-info {
  display: flex;
  flex-direction: row; /* Changed from column to row */
  justify-content: space-between; /* Added justify-content */
  align-items: center; /* Changed from flex-start to center */
}

.departure, .arrival {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time {
  font-size: 16px;
  font-weight: bold;
  color: var(--color-primary-dark-blue);
}

.date {
  font-size: 12px;
  color: #666;
}

.duration {
  text-align: center;
  color: #999;
  font-size: 11px;
}

.price-cabin-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Changed from flex-start to flex-end */
}

.cabin-class {
  font-size: 13px;
  color: #666;
  margin-bottom: 3px;
}

.cabin-text {
  font-weight: bold;
}

.price-display {
  display: flex;
  align-items: baseline;
}

.currency {
  font-size: 13px;
  font-weight: bold;
  color: var(--color-primary-brown);
}

.amount {
  font-size: 2.5rem; /* Changed from 20px to 2.5rem */
  font-weight: bold;
  color: var(--color-primary-brown);
  margin: 0 2px;
}

.special-offer {
  background-color: var(--color-semantic-success);
  color: white;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 10px;
  margin-left: 3px;
}

/* 座位資訊 (SeatCard.vue 樣式參考) */
.seat-info-display {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-primary-dark-blue);
  color: var(--color-primary-gold);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.seat-number-display {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-primary-gold);
}

.seat-class-display {
  font-size: 2.0rem;
  font-weight: bold;
}

/* 旅客資訊 (OrderSummary.vue 樣式參考) */
.summary-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid var(--color-neutral-border);
  border-radius: 4px;
  background-color: var(--color-neutral-form-bg-white);
}

.summary-section h3 {
  color: var(--color-primary-brown);
  margin-top: 0;
  margin-bottom: 10px;
}

.summary-section p {
  color: var(--color-text);
  line-height: 1.6;
}

/* 按鈕樣式 */
.btn-secondary {
  background-color: #6c757d;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-primary {
  background-color: var(--color-primary-brown);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: var(--color-button-hover);
}
</style>
