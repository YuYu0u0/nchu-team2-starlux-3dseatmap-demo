<template>
    <section class="notice-section">
        <h2 class="notice-title f3">注意事項</h2>
        <ol class="notice-list f5">
            <li>來回行程之票價產品價格是以各航段分開顯示，各航段之價格並非單程票價，該顯示價格僅為提供計算所購買的票價產品之參考。</li>
            <li>各航段如選擇不同之票價產品組合時，相應收費標準將以較高者為主。例如：航段中包含全額與基本之票價產品組合時，相關手續費用需依照「基本」票價產品規範收取。</li>
            <li>兒童旅客的票價產品/未發機手續費為成人旅客收費的75%；嬰兒旅客的改票/退票手續費為成人旅客收費的10%。</li>
            <li>旅客各航段所購買之票價產品，可免費或付費預選座位，請詳見「票價產品說明」。INSIGHTER及EXPLORER會員本人依據搭機當日之卡級，可享有免收部分預選座位費用之禮遇，若卡級於搭機日前有更動，尊榮原預選座位不隨會員卡級變動，旅客須重新選擇座位，詳請見「卡級座艙禮遇」。
            </li>
            <li>依據臺灣消費者保護法第19條第2項但書所訂之「通訊交易解除權合理例外情事適用準則」規定，網路購買國際航線票不適用七天解除權。如消費者購買機票後欲退票，將依星宇航空退票規定辦理。於星宇航空官網或App購票機票後，欲辦理機票退費，將按照實際已搭乘行程之適用票價計算，相關退票申請條款與規定，詳見「線上退票」。當日購票、申請退票時間點為原訂航班起飛後4小時內或COSMILE哩程支付機票不適用此線上退票功能，請透過「退票申請」頁面辦理。
            </li>
            <li>星宇航空保留隨時修訂或終止各票價產品、優惠及相關規則之權利，詳見「運送條款」。</li>
            <li>以上規定僅適用於搭乘星宇航空實際營運之航班，非本公司之其他營運人對旅客行程的運送相關責任，按各運送人之運送條款處理。</li>
            <li>機票所扣僅適用於機票票價，不適用於各項附加費(包含不限於訂位服務費、機場服務費、旅客服務費等)、手續費(包含但不限於改票、退票、未登機等服務)與各地機場收取規費等。</li>
            <li>Galactic Wi-Fi進網可能受到氣候、領空限制、衛星訊號、設備更新或技術問題影響，而無法提供服務。機上Wi-Fi若為免費贈品，無提供或服務中斷恕不退費或賠償責任。若另購買Galactic
                Wi-Fi方案但未能使用，本公司將依相關規定退費處理。</li>
            <li>星宇航空可變的服務及票價，將視不同票價產品、航段、均有不同收費標準。詳情請參閱「可變服務及費用」。</li>
            <li>透過星宇航空官網或App購票的機票，可利用「更改航班」及「線上退票」功能進行機票退/改事宜，適用條件詳請見「附加費與退改票須知」說明。</li>
        </ol>

        <div class="related-links">
            <h3 class="related-title f5">
                <img src="/image/icon/icon-link.svg" alt="連結">
                <span>相關連結</span>
            </h3>
            <div class="links f5">
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">附加費與退改票須知</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">各艙等免費行李額度</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">卡級座艙禮遇</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">線上退票</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">退票申請</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">運送條款</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">私人航班運輸條款</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">卡級座艙禮遇</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">更改航班</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">可變服務及費用</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>
                <router-link to="/" class="link-item d-flex align-items-center">
                    <span class="me-1">機場接送服務</span>
                    <img src="/image/icon/nav-icon-new-page-gold.svg" alt="開新頁面-金" />
                </router-link>

            </div>
        </div>
    </section>
</template>

<style scoped>
.notice-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.notice-title {
    margin: 1rem 0;
    color: white;
}

.notice-list {
    list-style-type: decimal;
    padding-left: 3rem;
    color: white;
    margin: 1rem 0 0 0;
}

.notice-list li {
    margin-top: 1rem;
    line-height: 1.6;
}

.related-links {
    padding-top: 2rem;
    padding-bottom: 5rem;

}

.related-title {
    margin-bottom: 1rem;
    color: white;
}

.links {
    display: flex;
    flex-wrap: wrap;

}

.link-item {
    margin-right: 0.5rem;
    color: var(--color-neutral-navbar-text);
}
</style>
