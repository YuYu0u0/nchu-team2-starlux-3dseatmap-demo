<template>
  <div class="form-page-container">
    <div class="form-wrapper">
      <!-- 上層表單區塊 -->
      <div class="form-upper">
        <!-- 稱謂 -->
        <div class="form-group">
          <label for="salutation">稱謂</label>
          <select id="salutation" class="form-input" v-model="salutation" :class="{ 'input-error': formErrors.salutation }">
            <option value="">請選擇</option>
            <option value="mr">先生</option>
            <option value="ms">小姐</option>
            <option value="mrs">女士</option>
          </select>
          <p v-if="formErrors.salutation" class="error-message">請選擇稱謂。</p>
        </div>

        <!-- 姓名 -->
        <div class="form-group">
          <label for="fullName">姓名</label>
          <input type="text" id="fullName" class="form-input" placeholder="請輸入姓名" v-model="fullName" :class="{ 'input-error': formErrors.fullName }">
          <p v-if="formErrors.fullName" class="error-message">請輸入姓名。</p>
        </div>

        <!-- 電子郵件 -->
        <div class="form-group">
          <label for="email">電子郵件</label>
          <input type="email" id="email" class="form-input" placeholder="請輸入電子郵件" v-model="email" :class="{ 'input-error': formErrors.email }">
          <p v-if="formErrors.email" class="error-message">請輸入有效的電子郵件格式。</p>
        </div>

        <!-- 手機號碼 -->
        <div class="form-group">
          <label for="phoneNumber">手機號碼</label>
          <input type="tel" id="phoneNumber" class="form-input" placeholder="請輸入手機號碼" v-model="phoneNumber" :class="{ 'input-error': formErrors.phoneNumber }">
          <p v-if="formErrors.phoneNumber" class="error-message">請輸入手機號碼。</p>
        </div>

        <!-- 會員帳號 -->
        <div class="form-group">
          <label for="membershipId">會員帳號</label>
          <input type="text" id="membershipId" class="form-input" placeholder="選填" v-model="membershipId">
        </div>

        <!-- 隱私政策同意 -->
        <div class="form-group checkbox-group">
          <input type="checkbox" id="privacyPolicy" v-model="privacyPolicyAgreed">
          <label for="privacyPolicy">同意星宇航空的隱私政策</label>
          <p v-if="formErrors.privacyPolicyAgreed" class="error-message">您必須同意隱私政策。</p>
        </div>
      </div>
      <!-- 分隔線 -->
      <hr class="separator">

      <!-- 下層區塊 -->
      <div class="form-lower">
        <button class="back-button" @click="goBack">返回</button>
        <button class="confirm-button" @click="handleNextStep">下一步</button>
      </div>
    </div>
  </div>

  <!-- 確認彈跳視窗 -->
  <PassengerInfoConfirmModal
    v-if="showConfirmModal"
    :passengerInfo="orderStore.passengerInfo"
    @close="showConfirmModal = false"
  />
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useOrderStore } from '@/stores/order';
import { ref, reactive } from 'vue';
import PassengerInfoConfirmModal from '@/components/PassengerInfoConfirmModal.vue';

const router = useRouter();
const orderStore = useOrderStore();

// 表單數據
const salutation = ref('');
const fullName = ref('');
const email = ref('');
const membershipId = ref(''); // Changed from confirmEmail
const phoneNumber = ref('');
const privacyPolicyAgreed = ref(false);

// 表單驗證錯誤訊息
const formErrors = reactive({
  salutation: false,
  fullName: false,
  email: false,
  phoneNumber: false,
  privacyPolicyAgreed: false,
});

// 控制彈跳視窗顯示
const showConfirmModal = ref(false);

const goBack = () => {
  router.back();
};

const handleNextStep = () => {
  // 1. 重置錯誤狀態
  Object.keys(formErrors).forEach(key => {
    formErrors[key] = false;
  });

  let hasError = false;

  // 2. 執行驗證
  if (!salutation.value) {
    formErrors.salutation = true;
    hasError = true;
  }
  if (!fullName.value.trim()) {
    formErrors.fullName = true;
    hasError = true;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailPattern.test(email.value)) {
    formErrors.email = true;
    hasError = true;
  }
  if (!phoneNumber.value.trim()) {
    formErrors.phoneNumber = true;
    hasError = true;
  }
  if (!privacyPolicyAgreed.value) {
    formErrors.privacyPolicyAgreed = true;
    hasError = true;
  }

  // 3. 如果有錯誤，則停止執行
  if (hasError) {
    return;
  }

  // 4. 如果驗證通過，儲存資訊並顯示 Modal
  orderStore.setPassengerInfo({
    salutation: salutation.value,
    fullName: fullName.value,
    email: email.value,
    membershipId: membershipId.value,
    phoneNumber: phoneNumber.value,
    privacyPolicyAgreed: privacyPolicyAgreed.value,
  });

  showConfirmModal.value = true;
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

.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.checkbox-group input[type="checkbox"] {
  width: auto;
  height: auto;
  margin: 0;
}

/* 錯誤訊息樣式 (從 BookingForm.vue 複製) */
.error-message {
  color: var(--color-semantic-alert);
  font-size: 12px;
  margin-top: 5px;
}

/* 驗證失敗的輸入框樣式 */
.input-error {
  border-color: var(--color-semantic-alert) !important;
}
</style>

<style>
/* 頁面容器 */
.form-page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  background-color: #f4f4f4;
  min-height: 100vh;
}
</style>
