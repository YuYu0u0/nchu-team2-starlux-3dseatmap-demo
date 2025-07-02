<template>
  <div class="page-container">
    <!-- Header 區塊 -->
    <header class="container header-bg-color">
      <Navbar />
    </header>

    <!-- Main 內容區塊 -->
    <main class="container">
      <!-- 上方 Div -->
      <div class="main-top main-top-bg f2">
        訂單確認
      </div>
      <!-- 下方 Div -->
      <div class="main-bottom main-bottom-bg">
        <OrderSummary />
      </div>
    </main>

    <!-- Footer 頁腳區塊 -->
    <footer class="container-fluid">
      <FooterTop />
      <FooterBottom />
    </footer>
  </div>
</template>

<script setup>
import Navbar from '@/components/NavbarView/Navbar.vue';
import FooterTop from '@/components/FooterView/FooterTop.vue';
import FooterBottom from '@/components/FooterView/FooterBottom.vue';
import OrderSummary from '@/components/OrderSummary.vue';
</script>

<style scoped>
/* Main 區塊 */
main.container {
  margin-bottom: 30px; /* 增加 main 與 footer 之間的間距 */
}

.main-top-bg {
  height: 93px;
  display: flex;
  align-items: center;
  color: #ffffff;
}

.main-bottom-bg {
  /* height: 466px; */ /* 移除固定高度，讓內容自動撐開 */
}

/* Footer 區塊 */
footer.container-fluid {
  padding: 0;
}
</style>