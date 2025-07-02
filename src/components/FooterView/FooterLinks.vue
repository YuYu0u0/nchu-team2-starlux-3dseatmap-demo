<template>
    <div class="footer-links">
        <!-- 追蹤社群 -->
        <div class="footer-social-wrapper">
            <div class="footer-social">
                <span class="section-title f5">追蹤</span>
                <div class="icon-group">
                    <div class="footer-icon">
                        <img src="/image/icon/foot-fb.svg" alt="Facebook" />
                    </div>
                    <div class="footer-icon">
                        <img src="/image/icon/foot-youtube.svg" alt="YouTube" />
                    </div>
                    <div class="footer-icon">
                        <img src="/image/icon/foot-ig.svg" alt="Instagram" />
                    </div>
                    <div class="footer-icon">
                        <img src="/image/icon/foot-line.svg" alt="LINE" />
                    </div>
                </div>
            </div>
        </div>

        <!-- 我們的手機服務 -->
        <div class="footer-app-wrapper">
            <div class="footer-app">
                <span class="section-title f5">我們的手機服務</span>
                <div class="icon-group">
                    <img src="/image/icon/foot-app-store.png" alt="App Store" />
                    <img src="/image/icon/foot-google-play.png" alt="Google Play" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer-links {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
}


.footer-social,
.footer-app {
    display: flex;
    flex-direction: column;
}

.section-title {
    color: white;
    margin-bottom: 0.5rem;
}

.icon-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.footer-icon {
    background-color: var(--color-neutral-footer);
    padding: 5px;
    border-radius: 50%;
}

.footer-icon img {
    width: 30px;
    height: 30px;
}

.footer-app img {
    width: 120px;
    height: auto;
}

/* RWD：1024px 以下改為垂直排列 */
@media (max-width: 1024px) {
    .footer-links {
        gap: 1rem;
        flex-direction: column;
        align-items: center;
    }

    .footer-social-wrapper,
    .footer-app-wrapper {
        width: 100%;
        margin-bottom: 2rem;
    }
}
</style>
