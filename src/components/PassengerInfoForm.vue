<template>
  <div class="form-page-container">
    <div class="form-wrapper">
      <!-- 上層表單區塊 -->
      <div class="form-upper">
        <!-- 稱謂 -->
        <div class="form-group">
          <label for="salutation">稱謂</label>
          <select id="salutation" class="form-input" v-model="salutation">
            <option value="">請選擇</option>
            <option value="mr">先生</option>
            <option value="ms">小姐</option>
            <option value="mrs">女士</option>
          </select>
        </div>

        <!-- 姓名 -->
        <div class="form-group">
          <label for="fullName">姓名</label>
          <input type="text" id="fullName" class="form-input" placeholder="請輸入姓名" v-model="fullName">
        </div>

        <!-- 電子郵件 -->
        <div class="form-group">
          <label for="email">電子郵件</label>
          <input type="email" id="email" class="form-input" placeholder="請輸入電子郵件" v-model="email">
        </div>

        <!-- 再次輸入電子郵件 -->
        <div class="form-group">
          <label for="confirmEmail">再次輸入電子郵件</label>
          <input type="email" id="confirmEmail" class="form-input" placeholder="請再次輸入電子郵件" v-model="confirmEmail">
        </div>

        <!-- 手機號碼 -->
        <div class="form-group">
          <label for="phoneNumber">手機號碼</label>
          <input type="tel" id="phoneNumber" class="form-input" placeholder="請輸入手機號碼" v-model="phoneNumber">
        </div>

        <!-- 隱私政策同意 -->
        <div class="form-group checkbox-group">
          <input type="checkbox" id="privacyPolicy" v-model="privacyPolicyAgreed">
          <label for="privacyPolicy">同意星宇航空的隱私政策</label>
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
import { ref } from 'vue';
import PassengerInfoConfirmModal from '@/components/PassengerInfoConfirmModal.vue'; // New import

const router = useRouter();
const orderStore = useOrderStore();

// 表單數據
const salutation = ref('');
const fullName = ref('');
const email = ref('');
const confirmEmail = ref('');
const phoneNumber = ref('');
const privacyPolicyAgreed = ref(false);

// 控制彈跳視窗顯示
const showConfirmModal = ref(false); // New ref

const goBack = () => {
  router.back();
};

const handleNextStep = () => {
  // 模擬儲存旅客資訊到 Pinia store
  // 注意：這裡的 passengerInfo 是一個響應式物件，但其屬性不是響應式的
  // 如果需要響應式更新，應該使用 reactive 或 computed
  orderStore.setPassengerInfo({
    salutation: salutation.value,
    fullName: fullName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    privacyPolicyAgreed: privacyPolicyAgreed.value,
  });

  // 顯示確認彈跳視窗
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
</style>