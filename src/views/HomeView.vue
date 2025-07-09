<template>
  <div class="page-container ">
    <!-- Header 區塊 -->
    <header class="container header-bg-color">
      <Navbar />
    </header>

    <!-- 滿版分隔線 -->
    <div class="full-width-hr">
      <hr />
    </div>

    <!-- Main 內容區塊 -->
    <main class="container-fluid">
      <SearchForm />
      <Swiper />
      <Explore />
      <Parallax />
      <PlaneIntro />
      <Subscription />
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
import SearchForm from '@/components/Homeview/SearchForm.vue';
import Swiper from '@/components/Homeview/Swiper.vue';
import Explore from '@/components/Homeview/Explore.vue';
import Parallax from '@/components/Homeview/Parallax.vue';
import PlaneIntro from '@/components/Homeview/PlaneIntro.vue';
import Subscription from '@/components/Homeview/Subscription.vue';
</script>

<style scoped>
/* Main 區塊 */
main {
  padding: 0;
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
