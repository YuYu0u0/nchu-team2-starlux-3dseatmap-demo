<template>
    <nav class="navbar navbar-expand-lg navbar-starlux f5">
        <div class="container navbar-container d-flex justify-content-center align-items-center pe-0">
            <!-- LOGO -->
            <div class="d-flex align-items-center">
                <router-link to="/">
                    <img src="/image/icon/starlux-logo-classic-no-text.svg" alt="STARLUX Logo" class="logo-img" />
                </router-link>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.navbar-starlux {
    max-width: 1318px;
    width: 100%;
    height: 54px;
    background-color: var(--color-neutral-bg-dark-blue);
    padding: 0.3rem 1rem;
}

.logo-img {
    width: 36px;
    height: 30px
}
</style>