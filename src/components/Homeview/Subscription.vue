<template>
    <section class="subscribe-section">
        <div class="subscribe-container" :style="bgStyle">
            <div class="subscribe-content">
                <h2>永不錯過優惠</h2>
                <p>訂閱即可率先收到我們的獨家優惠。</p>
                <div class="subscribe-inputs">
                    <input type="email" placeholder="電子郵件地址" />
                    <input type="text" placeholder="首選出發城市" />
                </div>
                <div class="subscribe-checkbox">
                    <input type="checkbox" id="agree" />
                    <label for="agree">
                        我希望收到來自星宇航空的優惠和最新消息。我已閱讀並了解
                        <RouterLink to="/">隱私聲明</RouterLink>。
                    </label>
                </div>
                <button class="subscribe-button">訂閱</button>
            </div>

            <div class="photo-credit">
                Photo by
                <a href="https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank" rel="noopener">
                    Sean Oulashin
                </a>
                on
                <a href="https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank" rel="noopener">
                    Unsplash
                </a>
            </div>
        </div>
    </section>
</template>


<script setup>
const bgStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 1) 70%), url('${import.meta.env.BASE_URL}image/sean-oulashin-sub.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};
</script>

<style scoped>
.subscribe-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

.subscribe-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    /* 讓內容靠右 */
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: 350px;
    /* 區塊高度可依需求調整 */
    border-radius: 1rem;
    overflow: hidden;
    color: #fff;
}

.subscribe-content {
    flex: 0 0 50%;
    /* 內容寬度占容器50% */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
}

.subscribe-content h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.subscribe-content p {
    margin-bottom: 1.5rem;
    color: #ccc;
}

.subscribe-inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
}

.subscribe-inputs input {
    flex: 1 1 45%;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
}

.subscribe-checkbox {
    display: flex;
    align-items: flex-start;
    /* 關鍵：讓 checkbox 與多行文字對齊 */
    gap: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    max-width: 100%;
}

.subscribe-checkbox input[type="checkbox"] {
    margin-top: 0.2rem;
    /* 微調checkbox與文字垂直對齊 */
    flex-shrink: 0;
    /* 不讓checkbox被壓縮變形 */
}

.subscribe-checkbox label {
    flex: 1;
    /* 讓長文字自動換行並占滿剩餘空間 */
}

.subscribe-checkbox a {
    color: #fff;
    text-decoration: underline;
    word-break: break-word;
    /* 連結很長會換行不超出容器 */
}

.subscribe-button {
    padding: 0.75rem 2rem;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.subscribe-button:hover {
    background-color: #fff;
    color: #000;
}

.photo-credit {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    z-index: 2;
    text-align: right;
}

.photo-credit a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
}

.photo-credit a:hover {
    color: #fff;
}


/* 響應式調整 */
@media (max-width: 768px) {
    .subscribe-container {
        flex-direction: column;
        height: auto;
    }

    .subscribe-content {
        flex: 1 1 100%;
        max-width: 100%;
        padding: 1.5rem;
    }
}
</style>