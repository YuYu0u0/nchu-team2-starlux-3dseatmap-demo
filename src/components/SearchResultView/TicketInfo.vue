<template>
    <section class="flight-ticket-rules">
        <div class="header">
            <router-link to="/" class="back-arrow">
                <img src="/image/icon/icon-arrow-stem-right-gold.svg" alt="返回">
            </router-link>
            <h2 class="title f2">搜尋票價產品</h2>
        </div>
        <div class="rules-list">
            <ol class="f5">
                <li>下述所顯示時間皆為當地時間，票價適用於目前選取的日期與航班，且為所有旅客購買的票價產品總價，包含機票票價、各項附加費與各地機場稅金等。</li>
                <li>星宇航空其他銷售管道，如官方App，或許能提供更優惠價格。</li>
                <li>所選擇的艙等可能在部分航段上無提供該產品，請於下方搜尋結果確認艙等票價。</li>
                <li>提醒您，若於起飛前24小時內購買票價等艙產品，由於餐食準備時間及客製，受此影響，故會有以商務艙餐食替代之可能性，造成您的不便，敬請見諒，感謝您的理解與支持。</li>
                <li>Galactic Wi-Fi進網可能受到氣候、領空限制、衛星訊號、設備更新或技術問題影響，而無法提供服務。機上Wi-Fi若為免費贈品，無提供或服務中斷恕不退費或賠償責任。若另購買Galactic
                    Wi-Fi方案但未能使用，本公司將依相關規定退費處理。</li>
                <li>星宇航空僅於本公司營運的國際線航班提供服務（包括選座位和餐食、預購行李及機上免稅品等），非星宇航空營運的航班，請洽實際營運航空公司。班機時刻請於出票前再次與實際營運航空公司確認。</li>
                <li>下列顯示之部分票價產品規定，僅適用於搭乘星宇航空實際營運之航班，詳細資訊依下列條卡說明。</li>
            </ol>
        </div>
    </section>
</template>

<style scoped>
.flight-ticket-rules {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
}

.header {
    margin-top: 1rem;
}

.back-arrow {
    margin-right: 0.5rem;
}

.back-arrow img {
    width: 16px;
    height: 16px;
}

.title {
    margin: 4px 0 0 0;
}

.rules-list {
    list-style-type: decimal;
}

.rules-list li {
    margin-top: 0.75rem;
    line-height: 1.6;
}
</style>
