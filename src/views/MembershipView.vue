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
        <main class="container membership-page">

            <h1 class="f1">會員相關</h1>
            <!-- 會員等級示意 -->
            <section class="level-section">
                <h2 class="f2">會員等級</h2>
                <div class="levels">
                    <div class="level-card">
                        <h3>銀卡 Silver</h3>
                        <p>累積20,000哩</p>
                    </div>
                    <div class="level-card">
                        <h3>金卡 Gold</h3>
                        <p>累積50,000哩</p>
                    </div>
                    <div class="level-card">
                        <h3>黑卡 Black</h3>
                        <p>累積100,000哩</p>
                    </div>
                </div>
            </section>

            <!-- 會員優惠 -->
            <section class="benefits-section">
                <h2 class="f2">會員專屬優惠</h2>
                <ul>
                    <li>專屬機場貴賓室</li>
                    <li>免費行李額度升級</li>
                    <li>優先登機</li>
                    <li>機票折扣</li>
                </ul>
            </section>

            <!-- 注意事項 -->
            <section class="notice-section">
                <h2 class="f2">注意事項</h2>
                <ol>
                    <li>會員資格有效期為入會日起一年。</li>
                    <li>里程累積與升等規則依航空公司公告為準。</li>
                    <li>會員優惠不得與其他促銷併用。</li>
                </ol>
            </section>

            <!-- 聯絡方式 -->
            <section class="contact-section">
                <h2 class="f2">聯絡我們</h2>
                <p>客服專線：0800-000-000</p>
                <p>Email：service@airline.com</p>
            </section>
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


import { ref } from 'vue';

const username = ref('');
const password = ref('');

function handleLogin() {
    console.log('帳號:', username.value);
    console.log('密碼:', password.value);
    alert(`模擬登入成功！\n帳號：${username.value}`);
    // 這裡可以呼叫 API，或 emit 給父組件
}
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

section {
    margin-bottom: 2rem;
}

main.container {
    margin: 0 auto;
    padding: 2rem;
    color: var(--color-primary-gold);
}

.membership-page section {
    margin-bottom: 3rem;
}

.membership-page h1 {
    margin-bottom: 2rem;
}

.membership-page h2 {
    /* color: var(--color-primary-dark-blue); */
    border-bottom: 2px solid var(--color-primary-gold);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
}


.level-section .levels {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (min-width: 600px) {
    .level-section .levels {
        flex-direction: row;
        justify-content: space-between;
    }
}

.level-card {
    flex: 1;
    background: var(--color-neutral-form-bg-light-orange);
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid var(--color-border);
}

.level-card h3 {
    font-size: 20px;
    /* f3 */
    color: var(--color-primary-dark-blue);
    margin-bottom: 0.5rem;
}

.level-card p {
    font-size: 16px;
    /* f4 */
    color: var(--color-neutral-lower-form-brown);
}

.benefits-section ul,
.notice-section ol {
    margin-left: 1.5rem;
}

.benefits-section li,
.notice-section li {
    font-size: 16px;
    /* f4 */
    margin-bottom: 0.75rem;
}

.contact-section p,
.contact-section a {
    text-decoration: none;
}

.contact-section a:hover {
    text-decoration: underline;
}
</style>
