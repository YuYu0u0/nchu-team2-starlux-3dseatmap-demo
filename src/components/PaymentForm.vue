<template>
  <div class="form-page-container">
    <div class="form-wrapper">
      <!-- 上層表單區塊 -->
      <div class="form-upper">
        <!-- 信用卡號 -->
        <div class="form-group">
          <label for="card-number">信用卡號</label>
          <input type="text" id="card-number" class="form-input" placeholder="XXXX XXXX XXXX XXXX" v-model="cardNumber">
          <p v-if="paymentFormErrors.cardNumber" class="error-message">請輸入信用卡號。</p>
        </div>

        <!-- 持卡人姓名 -->
        <div class="form-group">
          <label for="card-holder-name">持卡人姓名</label>
          <input type="text" id="card-holder-name" class="form-input" placeholder="請輸入持卡人姓名" v-model="cardHolderName">
          <p v-if="paymentFormErrors.cardHolderName" class="error-message">請輸入持卡人姓名。</p>
        </div>

        <!-- 有效日期 -->
        <div class="form-group">
          <label for="expiry-date">有效日期</label>
          <input type="text" id="expiry-date" class="form-input" placeholder="MM/YY" v-model="expiryDate">
          <p v-if="paymentFormErrors.expiryDate" class="error-message">請輸入有效日期。</p>
        </div>

        <!-- CVV -->
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" class="form-input" placeholder="XXX" v-model="cvv">
          <p v-if="paymentFormErrors.cvv" class="error-message">請輸入 CVV。</p>
        </div>

        </div>
      <!-- 分隔線 -->
      <hr class="separator">

      <!-- 下層區塊 -->
      <div class="form-lower">
        <button class="back-button" @click="goBack">上一步</button>
        <button class="confirm-button" @click="handleConfirmOrder">確認訂購</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/order';
import { reactive, ref } from 'vue';

const router = useRouter();
const orderStore = useOrderStore();

// 表單數據
const cardNumber = ref('');
const cardHolderName = ref('');
const expiryDate = ref('');
const cvv = ref('');

// 表單驗證錯誤訊息
const paymentFormErrors = reactive({
  cardNumber: false,
  cardHolderName: false,
  expiryDate: false,
  cvv: false,
});

const goBack = () => {
  router.back();
};

const handleConfirmOrder = () => {
  // 重置錯誤訊息
  paymentFormErrors.cardNumber = false;
  paymentFormErrors.cardHolderName = false;
  paymentFormErrors.expiryDate = false;
  paymentFormErrors.cvv = false;

  let hasError = false;

  if (!cardNumber.value) {
    paymentFormErrors.cardNumber = true;
    hasError = true;
  }
  if (!cardHolderName.value) {
    paymentFormErrors.cardHolderName = true;
    hasError = true;
  }
  if (!expiryDate.value) {
    paymentFormErrors.expiryDate = true;
    hasError = true;
  }
  if (!cvv.value) {
    paymentFormErrors.cvv = true;
    hasError = true;
  }

  if (hasError) {
    return; // 如果有錯誤，停止提交
  }

  // 模擬獲取付款表單數據
  const paymentDetails = {
    cardNumber: cardNumber.value,
    cardHolderName: cardHolderName.value,
    expiryDate: expiryDate.value,
    cvv: cvv.value,
  };
  orderStore.setPaymentDetails(paymentDetails);
  router.push('/order-confirmation'); // 導向新的訂單確認頁面
};
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

.separator {
  border: none;
  border-top: 1.5px solid #87969D;
  margin: 30px 0;
}

.form-lower {
  display: flex;
  justify-content: space-between;
  /* 讓按鈕左右分開 */
  align-items: center;
}

.back-button,
.confirm-button {
  width: 170px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;
}

.back-button {
  background-color: #cccccc;
  color: #333333;
}

.back-button:hover {
  opacity: 0.9;
}

.confirm-button {
  background-color: #8D6E63;
  color: #FFFFFF;
}

.confirm-button:hover {
  opacity: 0.9;
}

/* 錯誤訊息樣式 */
.error-message {
  color: var(--color-semantic-alert);
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
}
</style>