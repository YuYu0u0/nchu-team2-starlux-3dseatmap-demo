<template>
    <!-- 上方導覽列 -->
    <nav class="navbar navbar-expand-lg navbar-starlux f5">
        <div class="container navbar-container d-flex justify-content-between align-items-center pe-0">
            <!-- LOGO -->
            <div class="d-flex align-items-center">
                <router-link to="/">
                    <img src="/image/icon/starlux-logo-classic.png" alt="STARLUX Logo" class="logo-img me-2" />
                </router-link>
            </div>


            <!-- 右側：搜尋 + 漢堡按鈕 -->
            <div class="d-flex align-items-center">
                <router-link to="/comming-soon" class="nav-link d-flex align-items-center me-1" id="searchIcon">
                    <img src="/image/icon/nav-icon-search.svg" alt="搜尋" />
                </router-link>

                <!-- 漢堡按鈕 -->
                <button class="navbar-toggler d-lg-none ms-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#starluxNavbar" aria-controls="starluxNavbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <img :src="menuIconSrc" :alt="menuIconAlt" id="menuIcon" />
                </button>
            </div>
        </div>

        <!-- 折疊內容 -->
        <div class="collapse navbar-collapse" id="starluxNavbar" ref="collapseRef">
            <div class="container navbar-container d-flex flex-column flex-lg-row justify-content-end align-items-start align-items-lg-center pt-lg-0 pt-1 px-0"
                style="gap: 0.5rem;">
                <!-- 桌機右側功能列 -->
                <ul class="navbar-nav d-none d-lg-flex align-items-center flex-row">
                    <li class="nav-item">
                        <div class="divider"></div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/comming-soon" class="nav-link d-flex align-items-center">
                            <span class="me-1">béshopping</span>
                            <img src="/image/icon/nav-icon-new-page-white.svg" alt="開新頁面-白" />
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <div class="divider"></div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/comming-soon" class="nav-link d-flex align-items-center">
                            <span class="gold-text text-nowrap">臺灣 / Taiwan（繁體中文）</span>
                            <img src="/image/icon/nav-icon-language-skin.svg" alt="地球" class="ms-2" />
                        </router-link>
                    </li>
                    <li class="nav-item ms-3">
                        <router-link to="/comming-soon" class="nav-link d-flex align-items-center">
                            <span class="gold-text text-nowrap me-1">登入</span>
                            <img src="/image/icon/nav-icon-member-skin.svg" alt="會員" />
                        </router-link>
                    </li>
                </ul>

                <!-- 手機版功能列 -->
                <ul class="navbar-nav d-lg-none flex-column w-100 px-2 nav-list f5 nav-phone">
                    <li class="nav-item" v-for="(item, index) in mobileMenuItems" :key="'mobile-' + index">
                        <router-link :to="item.path" class="nav-link nav-main-list">
                            <span class="f3">{{ item.text }}</span>
                        </router-link>
                    </li>
                    <li class="nav-ite nav-right-item">
                        <router-link to="/comming-soon" class="nav-link d-flex align-items-center f5">
                            <span class="me-1 brown-text">béshopping</span>
                            <img src="/image/icon/nav-icon-new-page-brown.svg" alt="開新頁面-棕" />
                        </router-link>
                    </li>
                    <li class="nav-item nav-right-item">
                        <router-link to="/comming-soon" class="nav-link d-flex align-items-center f5">
                            <span class="brown-text me-1">登入</span>
                            <img src="/image/icon/nav-icon-member-brown.svg" alt="會員" />
                        </router-link>
                    </li>
                    <li class="nav-item nav-right-item">
                        <router-link to="/comming-soon" class="nav-link nav-main-list">
                            <span class="navbar-text d-flex align-items-center f5">
                                <span class="brown-text">臺灣 / Taiwan（繁體中文）</span>
                                <img src="/image/icon/nav-icon-language-brown.svg" alt="地球" class="ms-2" />
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- 桌機下方主選單 -->
    <div id="main-menu" class="main-menu-wrapper d-none d-lg-block w-100">
        <div class="container navbar-container">
            <ul class="navbar-nav main-menu d-flex flex-row text-center justify-content-around">
                <li class="nav-item" v-for="(item, index) in desktopMenuItems" :key="'desktop-' + index">
                    <router-link :to="item.path" class="nav-link text-white btn btn-link f4">
                        {{ item.text }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        const baseUrl = import.meta.env.BASE_URL;
        return {
            baseUrl,
            menuIconSrc: `${baseUrl}image/icon/nav-icon-menu.svg`,
            menuIconAlt: "漢堡條",
            desktopMenuItems: [
                { text: "預訂行程", path: "/booking" },
                { text: "班機動態", path: "/flightstatus" },
                { text: "機上設備", path: "/equipment#threed-area" },
                { text: "新規宣導", path: "/announcement" },
                // { text: "體驗星宇", path: "/comming-soon" },
                { text: "COSMILE會員", path: "/membership" },
                { text: "旅客須知", path: "/passengerfaq" },
            ],
            mobileMenuItems: [
                { text: "預訂行程", path: "/booking" },
                { text: "班機動態", path: "/flightstatus" },
                { text: "機上設備", path: "/equipment" },
                { text: "新規宣導", path: "/announcement" },
                // { text: "體驗星宇", path: "/comming-soon" },
                { text: "COSMILE會員", path: "/membership" },
                { text: "旅客須知", path: "/passengerfaq" },
            ],

        };
    },
    mounted() {
        const collapse = this.$refs.collapseRef;
        collapse.addEventListener("show.bs.collapse", () => {
            this.menuIconSrc = `${this.baseUrl}image/icon/nav-icon-menu-close.svg`;
            this.menuIconAlt = "關閉選單";
        });
        collapse.addEventListener("hide.bs.collapse", () => {
            this.menuIconSrc = `${this.baseUrl}image/icon/nav-icon-menu.svg`;
            this.menuIconAlt = "漢堡條";
        });
    },
};
</script>

<style scoped>
.navbar-starlux {
    max-width: 1318px;
    width: 100%;
    height: 54px;
    margin: 0 auto;
    background-color: var(--color-primary-dark-blue);
    padding: 0.3rem 1rem;
}

.navbar-starlux .nav-link,
.navbar-starlux .navbar-text {
    color: white;
}

.navbar-starlux .nav-link:hover {
    color: #d6a766;
}

.navbar-starlux .divider {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    margin: 0 1rem;
    height: 1.5rem;
}

.gold-text {
    color: var(--color-primary-gold);
}

.brown-text {
    color: var(--color-text);
}

.logo-img {
    height: 24px;
}

.navbar-container {
    width: 100%;
    height: 100%;
}

.navbar-toggler {
    border: none;
    padding: 0;
    background: none;
}

.navbar-toggler img {
    width: 24px;
    height: 24px;
}

.navbar-toggler:focus,
.navbar-toggler:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-primary-gold);
}


.navbar-nav.nav-list {
    background-color: var(--color-neutral-form-bg-white);
    padding: auto;
}

ul.nav-phone {
    z-index: 1000;
}

ul.nav-phone,
ul.nav-phone li {
    margin: 0;
    padding: 0 !important;
    list-style: none !important;
}

ul.nav-phone li {
    border-bottom: #e1d3ca 1px solid;
}

ul.nav-phone li a,
ul.nav-phone li span {
    padding-left: 1rem !important;
}

.nav-main-list {
    color: var(--color-primary-dark-blue) !important;
}

.nav-right-item {
    background-color: var(--color-neutral-form-bg-light-orange);
}

#main-menu {
    max-width: 1318px;
    height: 64px;
}

.main-menu-wrapper {
    background-color: #0f2d3c;
    height: 64px;
    /* 加入固定高度 */
}

.main-menu {
    height: 100%;
}

.main-menu .nav-item {
    display: flex;
    align-items: center;
    height: 100%;
}

.main-menu .btn {
    line-height: 64px;
    padding: 0 1rem;
}
</style>
