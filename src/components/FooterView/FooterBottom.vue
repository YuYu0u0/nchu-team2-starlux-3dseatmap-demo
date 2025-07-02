<template>
    <footer class="footer-bottom">
        <div class="footer-logo">
            <img id="logo-white" src="/image/icon/starlux-logo-white.png" alt="星宇航空logo (純白款)">
        </div>
        <div class="footer-copyright">
            <img id="five-stars" src="/image/icon/foot-5-Star.png" alt="5-star">
            <div class="copyright-text">
                <span class="f6">2025. 星宇航空3D選位網站</span>
                <span class="f6">此專案作品網站參考星宇航空官網設計</span>
                <span class="f6">建議瀏覽器為 Google Chrome、Safari</span>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer-bottom {
    width: 100%;
    padding: 20px;
    background-color: var(--color-neutral-footer);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#logo-white {
    width: 150px;
    height: 30px;
}

#five-stars {
    width: 96px;
    height: 96px;
    margin-right: 2rem;
}

.footer-copyright {
    display: flex;
    align-items: center;
}

.copyright-text span {
    display: block;
}

span.f6 {
    color: white;
}

@media (max-width:1023px) {

    .footer-bottom,
    .footer-copyright {
        flex-direction: column;
        align-self: center;
    }

    #five-stars {
        margin-top: 1rem;
        margin-right: 0;
    }

    .copyright-text {
        margin-top: 0.5rem;
    }

    .copyright-text span {
        margin-top: 0.3rem;
        text-align: center;
    }
}
</style>