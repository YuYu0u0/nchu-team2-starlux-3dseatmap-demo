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
    <main id="threed-area"
      class="container-fluid d-flex flex-lg-row flex-column align-items-start justify-content-center">
      <CabinButtons :selected="selectedItem" @select="handleSelection" :disabled="!isModelReady" />
      <div class="threed-area my-4 my-lg-5 d-flex justify-content-center align-items-center">
        <!-- 顯示目前選擇結果 -->
        <EquipmentIntroduction3D :selectedItem="selectedItem" @model-loaded="onModelLoaded" />
      </div>
      <FeatureButtons :selected="selectedItem" @select="handleSelection" :disabled="!isModelReady" />
    </main>
    <section class="white-placeholder">
      <EquipmentIntroduction />
    </section>


    <!-- Footer 頁腳區塊 -->
    <footer class="container-fluid">
      <FooterTop />
      <FooterBottom />
    </footer>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Navbar from '@/components/NavbarView/Navbar.vue';
import FooterTop from '@/components/FooterView/FooterTop.vue';
import FooterBottom from '@/components/FooterView/FooterBottom.vue';

import CabinButtons from '@/components/EquipmentView/CabinButtons.vue';
import FeatureButtons from '@/components/EquipmentView/FeatureButtons.vue';
import EquipmentIntroduction3D from '@/components/EquipmentView/EquipmentIntroduction3D.vue';
import EquipmentIntroduction from '@/components/EquipmentView/EquipmentIntroduction.vue';

const selectedItem = ref(null);
const isModelReady = ref(false);

function handleSelection(item) {
  selectedItem.value = item;
}

function onModelLoaded() {
  isModelReady.value = true;
}
</script>


<style scoped>
/* Main 區塊 */
main {
  height: 100vh;
  padding: 0;
}

.threed-area {
  width: 80%;
  height: 80vh;
  /* background-color: antiquewhite; */
  /* 移除背景色，讓 3D 畫面顯示 */
}


/* Footer 區塊 */
footer.container-fluid {
  padding: 0;
}

.white-placeholder {
  width: 100%;
  /* 可以根據需要調整高度 */
}
</style>
