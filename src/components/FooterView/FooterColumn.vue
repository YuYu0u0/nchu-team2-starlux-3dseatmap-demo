<template>
    <div class="col-md-3">
        <span class="f4 footer-list-title">{{ title }}</span>
        <ul>
            <li class="f5" v-for="(item, i) in items" :key="i">
                <span v-if="typeof item === 'string'">{{ item }}</span>
                <span v-else>
                    {{ item.text }}
                    <img v-if="item.icon" src="/image/icon/nav-icon-new-page-white.svg" alt="開新頁面-白" />
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    items: Array
})
</script>
<style scoped>
.col-md-3 {
    padding: 0.1rem;
}

.footer-list-title {
    display: block;
    padding-bottom: 2rem;
    border-bottom: gray 1px solid;
}

ul {
    padding-top: 1rem;
    padding-left: 0;
    list-style: none;
}

ul li {
    margin-bottom: 8px;
}


ul li:hover {
    text-decoration: underline;
    cursor: pointer;
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
}
</style>
