<template>
    <footer class="container-fluid d-flex justify-content-center">
        <div class="footer-top">
            <!-- 桌機版 -->
            <div class="container desktop-footer">
                <div class="row">
                    <FooterColumn title="關於星宇" :items="aboutItems" />
                    <FooterColumn title="條款宣告" :items="termsItems" />
                    <FooterColumn title="相關網站" :items="relatedLinks" />
                    <FooterColumn title="旅客支援" :items="supportItems" />
                </div>
            </div>


            <!-- 行動版 -->
            <div class="accordion container" id="footerAccordion">
                <FooterAccordion title="關於星宇" :items="aboutItems" collapse-id="collapseOne" />
                <FooterAccordion title="條款宣告" :items="termsItems" collapse-id="collapseTwo" />
                <FooterAccordion title="相關網站" :items="relatedLinks" collapse-id="collapseThree" />
                <FooterAccordion title="旅客支援" :items="supportItems" collapse-id="collapseFour" />
            </div>

            <!-- 追蹤社群 -->
            <FooterLinks />
        </div>
    </footer>
</template>

<script setup>
import FooterColumn from '@/components/FooterView/FooterColumn.vue'
import FooterAccordion from '@/components/FooterView/FooterAccordion.vue'
import FooterLinks from '@/components/FooterView/FooterLinks.vue'

const aboutItems = [
    "認識星宇", "媒體中心", "旅遊須知",
    { text: "加入團隊", icon: true },
    "公司治理專區", "投資人專區", "利害關係人專區", "網站導覽"
]

const termsItems = [
    "運送條款", "隱私政策", "Cookie 使用政策", "顧客服務承諾",
    "機坪延誤應變計劃", "智慧財產權、網站暨手機應用程式使用條款", "智慧財產權管理計畫"
]

const relatedLinks = [
    { text: "STARLUX Cargo", icon: true },
    { text: "免稅品購物", icon: true },
    { text: "機上雜誌", icon: true },
    { text: "星宇小舖", icon: true },
    { text: "星宇航空企業會員", icon: true },
    { text: "永續發展", icon: true }
]

const supportItems = [
    "各地聯絡資訊", "機場資訊", "意見回饋", "可選服務及費用",
    "星宇航空航班異動作業辦法",
    { text: "星宇航空利害關係人問卷", icon: true }
]
</script>

<style scoped>
footer.container-fluid {
    background-color: #3b332e;
}

.footer-top {
    width: 80%;
    color: white;
    padding: 40px 20px;
}


.footer-list-title {
    display: block;
    padding-bottom: 2rem;
    border-bottom: gray 1px solid;
}

.footer ul {
    padding-top: 1rem;
    padding-left: 0;
    list-style: none;
}

.footer ul li {
    margin-bottom: 8px;
}

.footer ul li:hover {
    text-decoration: underline;
    cursor: pointer;
}

.footer-social,
.footer-app {
    margin-top: 1.5rem;
}

.section-title {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: white;
}

.icon-group {
    display: flex;
    gap: 12px;
}

.icon-group .footer-icon {
    background-color: var(--color-neutral-footer);
    padding: 10px;
    border-radius: 50%;
}






@media (min-width: 1024px) {
    .accordion {
        display: none;
    }

    .desktop-footer {
        display: block;
    }
}

@media (max-width: 1023px) {
    .desktop-footer {
        display: none;
    }


    /* .footer-social,
    .footer-app {
        justify-content: center !important;
    } */

    .icon-group {
        justify-content: center;
    }
}

@media (max-width:992px) {

    .footer-social,
    .footer-app {
        text-align: center;
        justify-content: center !important;
    }
}
</style>
