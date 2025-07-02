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
        <main class="container-fluid d-flex flex-lg-row flex-column align-items-start justify-content-center">
            <CabinButtons :selected="selectedItem" @select="handleSelection" />
            <div class="threed-area my-4 my-lg-5 d-flex justify-content-center align-items-center">
                <!-- 顯示目前選擇結果 -->
                <p v-if="selectedItem" class="fs-4 mt-4">
                    你選擇的是：{{ selectedItem }}
                </p>
            </div>
            <FeatureButtons :selected="selectedItem" @select="handleSelection" />
        </main>


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

const selectedItem = ref(null);

function handleSelection(item) {
    selectedItem.value = item;
}
</script>


<style scoped>
/* Main 區塊 */
main {
    padding: 0;
}

.threed-area {
    width: 1500px;
    height: 700px;
    background-color: antiquewhite;
}


/* Footer 區塊 */
footer.container-fluid {
    padding: 0;
}
</style>