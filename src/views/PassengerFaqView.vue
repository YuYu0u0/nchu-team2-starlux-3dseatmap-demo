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
        <main class="faq-container">
            <h1 class="f1">旅客須知</h1>
            <div v-for="(item, index) in faqs" :key="index" class="faq-item" :class="{ active: item.active }">
                <div class="faq-question f3" @click="toggle(index)">
                    {{ index + 1 }}. {{ item.question }}
                </div>
                <div class="faq-answer f4">
                    {{ item.answer }}
                </div>
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

import { reactive } from 'vue';

const faqs = reactive([
    {
        question: '可以攜帶多大的行李？',
        answer: '經濟艙每位旅客免費行李額度為 23 公斤一件，商務艙則可攜帶 32 公斤兩件。',
        active: false,
    },
    {
        question: '我可以攜帶液體上飛機嗎？',
        answer: '手提行李內的液體須裝在 100ml 以內的容器中，並放入容量不超過 1 公升的透明夾鏈袋。',
        active: false,
    },
    {
        question: '機場需要提前多久到達？',
        answer: '建議國際航班起飛前 3 小時到達，國內航班至少提前 1.5 小時。',
        active: false,
    },
    {
        question: '有特殊餐點可選擇嗎？',
        answer: '提供素食、清真餐、低脂餐等多種特殊餐點，請於航班起飛前至少 24 小時預訂。',
        active: false,
    },
    {
        question: '嬰兒或兒童有票價優惠嗎？',
        answer: '2 歲以下嬰兒收取票價 10%，2-12 歲兒童票價約為成人 75%，實際依票務規定為準。',
        active: false,
    },
    {
        question: '需要辦理線上登機嗎？',
        answer: '建議您在航班起飛前 48 小時內辦理線上報到，可節省機場排隊時間。',
        active: false,
    },
    {
        question: '行李遺失該怎麼辦？',
        answer: '若行李未能及時抵達，請立即至行李服務櫃台填寫行李報告，我們會協助您追蹤與送回。',
        active: false,
    }
]);

function toggle(index) {
    faqs[index].active = !faqs[index].active;
}
</script>

<style scoped>


.faq-container {
    max-width: 80%;
    margin: 0 auto;
    padding: 1rem 0;
    color: var(--color-primary-gold);
}

.faq-container h1 {
    margin-bottom: 2rem;
}

.faq-item {
    background: var(--color-neutral-form-bg-white);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
    border: 1px solid var(--color-border);
    overflow: hidden;
}

.faq-question {
    padding: 1.2rem 1.5rem;
    cursor: pointer;
    position: relative;
    font-weight: bold;
    color: var(--color-primary-dark-blue);
    user-select: none;
}

.faq-question::after {
    content: '+';
    position: absolute;
    top: 50%;
    /* 垂直置中 */
    right: 1.5rem;
    transform: translateY(-50%);
    /* 垂直置中 */
    font-size: 2rem;
    color: var(--color-primary-gold);
    transition: transform 0.3s;
}

.faq-item.active .faq-question::after {
    transform: translateY(-50%) rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s ease;
    padding: 0 1.5rem;
    background: var(--color-neutral-form-bg-light-orange);
    color: var(--color-neutral-lower-form-brown);
    font-size: 0.95rem;
    border-top: 1px solid var(--color-border);
}

.faq-item.active .faq-answer {
    max-height: 500px;
    padding: 1rem 1.5rem;
}

.faq-question:hover {
    background-color: var(--color-neutral-form-bg-light-orange);
    color: var(--color-primary-obsidian-gray);
}
</style>
