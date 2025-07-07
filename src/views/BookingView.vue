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
        旅行，與星宇航空一起開始
        <!-- 您可以在這裡放置 router-view 或其他內容 -->
      </div>
      <!-- 下方 Div -->
      <div class="main-bottom main-bottom-bg">
        <BookingForm />
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
import BookingForm from '@/components/BookingForm.vue'
import Navbar from '@/components/NavbarView/Navbar.vue';
import FooterTop from '@/components/FooterView/FooterTop.vue'
import FooterBottom from '@/components/FooterView/FooterBottom.vue';
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

/* Main 區塊 */
.main-top-bg {
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 20px 0; /* 增加上下內邊距 */
}

.main-bottom-bg {
  margin-bottom: 20px;
}

/* Footer 區塊 */
footer.container-fluid {
  padding: 0;
}


/* 超連結佔位符的顏色 */
.red {
  background-color: #dc3545;
}

.green {
  background-color: #198754;
}

.blue {
  background-color: #0d6efd;
}

/* 響應式調整: 當漢堡選單展開時，導覽列垂直排列 */
@media (max-width: 991.98px) {
  .navigation-bar {
    height: auto;
    flex-direction: column;
    align-items: flex-start !important;
    padding: 10px;
  }

  .nav-button {
    padding: 10px 0;
    width: 100%;
    text-align: left;
  }
}
</style>
