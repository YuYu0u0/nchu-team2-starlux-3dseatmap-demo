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
        付款方式
      </div>
      <!-- 下方 Div -->
      <div class="main-bottom main-bottom-bg">
        <PaymentForm />
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
import PaymentForm from '@/components/PaymentForm.vue';
</script>

<style scoped>
/* Main 區塊 */
.main-top-bg {
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 20px 0; /* 增加上下內邊距 */
}

.main-bottom-bg {
  padding-bottom: 50px; /* 增加底部內邊距 */
}

main.container {
  padding-bottom: 50px; /* 確保 main 元素底部有足夠間距 */
}

/* Footer 區塊 */
footer.container-fluid {
  padding: 0;
}
</style>
