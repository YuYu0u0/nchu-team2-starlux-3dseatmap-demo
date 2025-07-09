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
            <h1>電子設備與鋰電池須知</h1>

            <section>
                <h2>定額能量計算公式</h2>
                <p>
                    Wh (瓦特小時) = mAh (毫安培小時) ÷ 1000 × Volt (電壓)
                </p>
                <p>
                    例：一個 10000 mAh 的行動電源，電壓 3.7V，定額能量 = 10000 ÷ 1000 × 3.7 = 37 Wh。
                </p>
            </section>

            <section>
                <h2>鋰電池攜帶規範</h2>

                <h3>裝置於設備中的電池</h3>
                <table>
                    <thead>
                        <tr>
                            <th>鋰電池容量</th>
                            <th>手提</th>
                            <th>託運</th>
                            <th>需經星宇航空同意</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>≤ 100 Wh / 2g</td>
                            <td>可攜帶</td>
                            <td>可攜帶</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>100 Wh / 2g &lt; 容量 ≤ 160 Wh / 8g</td>
                            <td>可攜帶</td>
                            <td>可攜帶</td>
                            <td>是</td>
                        </tr>
                        <tr>
                            <td>&gt; 160 Wh / 8g</td>
                            <td>禁止攜帶</td>
                            <td>禁止攜帶</td>
                            <td>—</td>
                        </tr>
                    </tbody>
                </table>
                <p>上述裝置每人可攜帶數量總計為：15 顆<sup>*</sup></p>

                <h3>備用電池（含行動電源）</h3>
                <table>
                    <thead>
                        <tr>
                            <th>鋰電池容量</th>
                            <th>手提</th>
                            <th>需經星宇航空同意</th>
                            <th>每人可攜帶數量</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>≤ 100 Wh / 2g</td>
                            <td>可攜帶</td>
                            <td>否</td>
                            <td>20 顆<sup>*</sup></td>
                        </tr>
                        <tr>
                            <td>100 Wh / 2g &lt; 容量 ≤ 160 Wh / 8g</td>
                            <td>可攜帶</td>
                            <td>是</td>
                            <td>2 顆</td>
                        </tr>
                        <tr>
                            <td>&gt; 160 Wh / 8g</td>
                            <td>禁止攜帶</td>
                            <td>—</td>
                            <td>—</td>
                        </tr>
                    </tbody>
                </table>
                <p class="note"><sup>*</sup> 超過以上數量需事先告知並取得星宇航空同意。<br />有關輪椅電池規範請參考「輪椅／行動輔具」頁面。</p>
            </section>

            <section>
                <h2>注意事項</h2>
                <ul>
                    <li>鋰電池必須符合聯合國測試和標準手冊第 3 部分 38.3 節的測試要求。</li>
                    <li>託運裝有鋰電池的電子設備，需採取保護措施，避免損壞及意外啟動，且設備必須完全關閉（非睡眠模式）。</li>
                    <li>設備內鋰離子電池功率小於 2.7 Wh 或鋰金屬電池鋰含量小於 0.3g，可例外。</li>
                    <li>智慧型行李箱相關規定，請詳見頁面內容。</li>
                    <li>電子煙及其備用電池禁止託運，僅能手提，並禁止航程中使用或充電。</li>
                    <li>內建鋰電池的可攜式電風扇只能手提，禁止託運。</li>
                    <li>以鋰電池驅動的小型代步工具禁止攜帶手提及託運。</li>
                    <li>含鉛酸電池的產品禁止攜帶。</li>
                </ul>
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
</script>

<style scoped>
.container {
    margin: 0 auto;
    padding: 20px;
    line-height: 1.6;
    color: var(--color-primary-gold);
}

h1 {
    color: var(--color-primary-gold);
    margin-bottom: 20px;
}

h2 {
    color: var(--color-primary-gold);
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid var(--color-primary-gold);
    padding-bottom: 5px;
}

h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--color-primary-gold);
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
    font-size: 0.95rem;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
}

th {
    background-color: #f0f4f8;
    color: var(--color-primary-dark-blue);
    font-size: 1.25rem;
    font-weight: 600;
}

.note {
    font-size: 0.85rem;
    color: #666;
    margin-top: 0;
    margin-bottom: 20px;
}

ul {
    padding-left: 20px;
}

li {
    margin-bottom: 8px;
}
</style>
