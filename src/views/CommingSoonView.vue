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
            <CommingSoonCard />
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
import CommingSoonCard from '@/components/CommingSoonCard.vue';

</script>