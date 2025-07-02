<template>
    <router-link to="/booking" class="return-section">
        <button id="search-again">
            <span class="f5">重新搜索 </span>
            <img src="/image/icon/icon-search-again.svg" alt="">
        </button>
    </router-link>

</template>
<style scoped>
.return-section {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

#search-again {
    width: 400px;
    height: 40px;
    background-color: #08202d;
    color: var(--color-neutral-navbar-text);
    border-radius: 9999px;
    border: none;
}
</style>