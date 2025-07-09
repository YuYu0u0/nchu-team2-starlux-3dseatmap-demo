<template>
  <div class="order-summary-container">
    <h2>您的訂單摘要</h2>
    <div class="summary-section">
      <h3>預訂資訊</h3>
      <p v-if="orderStore.bookingDetails">
        出發地: {{ orderStore.bookingDetails.origin.city }} ({{ orderStore.bookingDetails.origin.code }})<br>
        目的地: {{ orderStore.bookingDetails.destination.city }} ({{ orderStore.bookingDetails.destination.code }})<br>
        行程類型: {{ tripTypeDisplay }}<br>
        出發日期: {{ orderStore.bookingDetails.departureDate }}<br>
        優惠代碼: {{ orderStore.bookingDetails.promoCode }}
      </p>
      <p v-else>無預訂資訊</p>
    </div>

    <div class="summary-section">
      <h3>選位資訊</h3>
      <p v-if="orderStore.seatDetails && orderStore.selectedFlight">
        座位號: {{ orderStore.seatDetails.title }}<br>
        艙等: {{ orderStore.seatDetails.class }}<br>
        價格: NT$ {{ orderStore.selectedFlight.ticketPrice.toLocaleString() }}
      </p>
      <p v-else>無選位資訊</p>
    </div>

    <div class="summary-section">
      <h3>旅客資訊</h3>
      <p v-if="orderStore.passengerInfo">
        稱謂: {{ orderStore.passengerInfo.salutation === 'mr' ? '先生' : orderStore.passengerInfo.salutation === 'ms' ? '小姐' : orderStore.passengerInfo.salutation === 'mrs' ? '女士' : '' }}<br>
        姓名: {{ orderStore.passengerInfo.fullName }}<br>
        電子郵件: {{ orderStore.passengerInfo.email }}<br>
        手機號碼: {{ orderStore.passengerInfo.phoneNumber }}<br>
      </p>
      <p v-else>無旅客資訊</p>
    </div>

    <div class="summary-section">
      <h3>付款資訊</h3>
      <p v-if="orderStore.paymentDetails">
        信用卡號: {{ orderStore.paymentDetails.cardNumber }}<br>
        持卡人姓名: {{ orderStore.paymentDetails.cardHolderName }}<br>
        有效日期: {{ orderStore.paymentDetails.expiryDate }}<br>
      </p>
      <p v-else>無付款資訊</p>
    </div>

    <div class="order-actions">
      <button class="btn cancel-button f4" @click="handleCancelOrder">取消訂單</button>
      <button class="btn complete-button f4" @click="handleCompleteOrder">完成訂購</button>
    </div>

    <!-- 訂購完成彈出視窗 -->
    <OrderConfirmationModal v-if="showConfirmationModal" @close="showConfirmationModal = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/order';
import OrderConfirmationModal from '@/components/OrderConfirmationModal.vue';

const router = useRouter();
const orderStore = useOrderStore();

const showConfirmationModal = ref(false);

const handleCancelOrder = () => {
  // 這裡可以實作取消訂單的邏輯，例如清空 Pinia Store 中的資料
  orderStore.setBookingDetails(null);
  orderStore.setSeatDetails(null);
  orderStore.setPaymentDetails(null);
  router.push('/'); // 返回首頁
};

const handleCompleteOrder = () => {
  // 這裡可以實作完成訂購的邏輯，例如發送訂單到後端
  showConfirmationModal.value = true; // 顯示訂購完成彈出視窗
};

const tripTypeDisplay = computed(() => {
  if (!orderStore.bookingDetails) return '';
  switch (orderStore.bookingDetails.tripType) {
    case 'one-way':
      return '單程';
    case 'round-trip':
      return '來回';
    default:
      return orderStore.bookingDetails.tripType;
  }
});
</script>

<style scoped>
.order-summary-container {
  background-color: var(--color-neutral-form-bg-white);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.order-summary-container h2 {
  color: var(--color-primary-obsidian-gray);
  margin-bottom: 20px;
  text-align: center;
}

.summary-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid var(--color-neutral-border);
  border-radius: 4px;
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

.order-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.btn {
  width: 170px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;
}

.cancel-button {
  background-color: #cccccc;
  color: #333333;
}

.cancel-button:hover {
  opacity: 0.9;
}

.complete-button {
  background-color: var(--color-primary-brown);
  color: #FFFFFF;
}

.complete-button:hover {
  opacity: 0.9;
}
</style>