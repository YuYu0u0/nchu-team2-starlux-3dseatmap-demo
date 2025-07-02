<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="animation-container">
        <!-- 這裡可以放置視覺化動畫，例如 SVG 或 Lottie 動畫 -->
        <p>訂購成功！</p>
        <p>感謝您的訂購，祝您旅途愉快！</p>
      </div>
      <button class="home-button" @click="goToHome">回首頁</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['close']);

const goToHome = () => {
  emit('close'); // 關閉彈窗
  router.push('/'); // 回到首頁
};
</script>

<style scoped>
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
  background: var(--color-background);
  padding: 40px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.animation-container {
  margin-bottom: 20px;
}

.animation-container p {
  font-size: 1.2rem;
  color: var(--color-primary-obsidian-gray);
  margin-bottom: 10px;
}

.home-button {
  padding: 10px 20px;
  background-color: var(--color-primary-button-brown);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.3s;
}

.home-button:hover {
  opacity: 0.9;
}
</style>