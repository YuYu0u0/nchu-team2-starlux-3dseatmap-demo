<template>
  <div class="form-page-container">
    <div class="form-wrapper">
      <!-- 上層表單區塊 -->
      <div class="form-upper">
        <!-- 信用卡號 -->
        <div class="form-group">
          <label for="card-number">信用卡號</label>
          <input type="text" id="card-number" class="form-input" placeholder="XXXX XXXX XXXX XXXX">
        </div>

        <!-- 持卡人姓名 -->
        <div class="form-group">
          <label for="card-holder-name">持卡人姓名</label>
          <input type="text" id="card-holder-name" class="form-input" placeholder="請輸入持卡人姓名">
        </div>

        <!-- 有效日期 -->
        <div class="form-group">
          <label for="expiry-date">有效日期</label>
          <input type="text" id="expiry-date" class="form-input" placeholder="MM/YY">
        </div>

        <!-- CVV -->
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" class="form-input" placeholder="XXX">
        </div>

        <!-- 聯絡電話 -->
        <div class="form-group">
          <label for="phone-number">聯絡電話</label>
          <input type="text" id="phone-number" class="form-input" placeholder="請輸入聯絡電話">
        </div>

        <!-- 電子郵件 -->
        <div class="form-group">
          <label for="email">電子郵件</label>
          <input type="email" id="email" class="form-input" placeholder="請輸入電子郵件">
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

const router = useRouter();
const orderStore = useOrderStore();

const goBack = () => {
  router.back();
};

const handleConfirmOrder = () => {
  // 模擬獲取付款表單數據
  const paymentDetails = {
    cardNumber: 'XXXX XXXX XXXX 1234',
    cardHolderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvv: '123',
    phoneNumber: '0912345678',
    email: 'john.doe@example.com',
  };
  orderStore.setPaymentDetails(paymentDetails);
  router.push('/order-confirmation'); // 導向新的訂單確認頁面
};
</script>

<style scoped>
/* 表單外層容器 */
.form-wrapper {
  background-color: var(--color-background);
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
</style>