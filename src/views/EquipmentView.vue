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
      <CabinButtons :selected="selectedCabin" @select="handleCabinSelection" :disabled="!isModelReady" />
      <div class="threed-area my-4 my-lg-5 d-flex justify-content-center align-items-center">
        <EquipmentIntroduction3D :selectedItem="currentSelectedItem" @model-loaded="onModelLoaded" />
      </div>
      <FeatureButtons :selected="selectedFeature" :selectedCabin="selectedCabin" :disabled="!isFeatureSelectable"
        @select="handleFeatureSelection" />
    </main>

    <section class="white-placeholder">
      <EquipmentIntroduction />
    </section>

    <!-- Footer 頁腳 -->
    <footer class="container-fluid">
      <FooterTop />
      <FooterBottom />
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import Navbar from "@/components/NavbarView/Navbar.vue";
import FooterTop from "@/components/FooterView/FooterTop.vue";
import FooterBottom from "@/components/FooterView/FooterBottom.vue";

import CabinButtons from "@/components/EquipmentView/CabinButtons.vue";
import FeatureButtons from "@/components/EquipmentView/FeatureButtons.vue";
import EquipmentIntroduction3D from "@/components/EquipmentView/EquipmentIntroduction3D.vue";
import EquipmentIntroduction from "@/components/EquipmentView/EquipmentIntroduction.vue";

const selectedCabin = ref(null);
const selectedFeature = ref(null);
const currentSelectedItem = ref(null);
const isModelReady = ref(false);

function handleCabinSelection(cabin) {
  selectedCabin.value = cabin;
  selectedFeature.value = null; // 清除先前選的設備
  currentSelectedItem.value = cabin;
}

function handleFeatureSelection(feature) {
  selectedFeature.value = feature;
  currentSelectedItem.value = feature;
}

function onModelLoaded() {
  isModelReady.value = true;
}

const isFeatureSelectable = computed(() => selectedCabin.value !== null && isModelReady.value);
</script>

<style scoped>
main {
  height: 100vh;
  padding: 0;
}

.threed-area {
  width: 80%;
  height: 80vh;
}

footer.container-fluid {
  padding: 0;
}

.white-placeholder {
  width: 100%;
}
</style>
