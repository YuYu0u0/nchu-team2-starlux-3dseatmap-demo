<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <!-- 右上角的 X 關閉按鈕 -->
      <button @click="closeNote" class="close-icon-button" aria-label="關閉視窗">
        &times;
      </button>

      <h3>嬰兒及兒童注意事項</h3>

      <h4>嬰兒</h4>
      <p>
        每位父母、法定監護人或18歲成人最多可帶1位嬰兒 （2歲以下且不佔位），如需加購佔位嬰兒票，請聯繫星宇航空客服中心。
      </p>

      <h4>兒童</h4>
      <p>
        每位父母、法定監護人或18歲成人可與最多8位兒童同行，但其中2 - 4歲兒童不得超過3位。
      </p>

      <h4>嬰兒及兒童</h4>
      <p>
        每位父母、法定監護人或18歲成人最多可與1位嬰兒(含佔位嬰兒)以及2位兒童同行。如欲單獨購買嬰兒或兒童票，請聯繫星宇航空客服中心。
      </p>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// 獲取 Vue Router 實例
const router = useRouter();

// 定義關閉函式
const closeNote = () => {
  // 使用 router.back() 返回到前一個頁面
  router.back();
};
</script>

<style scoped>
/* 模擬彈跳視窗的樣式 */
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
  z-index: 2000;
}

.modal-content {
  position: relative;
  /* 為了讓 X 按鈕可以絕對定位 */
  background: var(--color-background);
  padding: 30px 40px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-height: 80vh;
  overflow-y: auto;
}

/* 右上角 X 關閉按鈕樣式 */
.close-icon-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  color: #888;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.close-icon-button:hover {
  color: #000;
}


/* 內容樣式 */
.modal-content h3 {
  margin-top: 0;
  padding-right: 30px;
  /* 避免文字與 X 按鈕重疊 */
  color: #333333;
  margin-bottom: 20px;
}

.modal-content h4 {
  margin-bottom: 10px;
  color: #555;
}

.modal-content p {
  line-height: 1.7;
  color: #666666;
}
</style>
