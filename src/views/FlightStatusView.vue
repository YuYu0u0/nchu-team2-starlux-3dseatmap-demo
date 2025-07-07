<template>
    <div class="page-container">
        <!-- Header 區塊 -->
        <header class="container header-bg-color">
            <Navbar />
        </header>

        <!-- 滿版分隔線 -->
        <div class="full-width-hr">
            <hr />
        </div>
        <!-- Main 內容區塊 -->
    <main class="container">
      <!-- 上方 Div -->
      <div class="main-top main-top-bg f2">
        班機時刻表
      </div>
      <!-- 下方 Div -->
      <div class="main-bottom main-bottom-bg">
        <FlightSearchForm />
      </div>
    </main>

        <!-- Footer 頁腳區塊 -->
        <footer class="container-fluid">
            <FooterTop />
            <!-- 下方 Div: 版權聲明 -->
            <FooterBottom />
        </footer>
    </div>
</template>

<script setup>
import Navbar from '@/components/NavbarView/Navbar.vue';
import FooterTop from '@/components/FooterView/FooterTop.vue'
import FooterBottom from '@/components/FooterView/FooterBottom.vue';
import FlightSearchForm from '@/components/FlightStatusView/FlightSearchForm.vue';

</script>

<style scoped>
.full-width-hr {
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
    /* 滿版寬度 */
}

.full-width-hr hr {
    border: none;
    border-top: 1px solid gray;
    margin: 0;
}

.main-top-bg {
  display: flex;
  align-items: center;
  color: #ffffff; /* 這裡我先用白色，如果專案有定義變數，後續可以調整 */
  padding: 20px 0;
}

.main-bottom-bg {
  margin-bottom: 20px;
}
</style>
