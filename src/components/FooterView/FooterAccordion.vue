<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#' + collapseId">
                <span>{{ title }}</span>
                <span class="custom-arrow"></span>
            </button>
        </h2>
        <div :id="collapseId" class="accordion-collapse collapse" data-bs-parent="#footerAccordion">
            <div class="accordion-body">
                <ul>
                    <li v-for="(item, i) in items" :key="i">
                        <span v-if="typeof item === 'string'">{{ item }}</span>
                        <span v-else>
                            {{ item.text }}
                            <img v-if="item.icon" src="/image/icon/nav-icon-new-page-white.svg" alt="開新頁面-白" />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    items: Array,
    collapseId: String
})
</script>

<style scoped>
.accordion-button,
.accordion-item,
.accordion-button:focus {
    border-radius: 0 !important;
}

.accordion-body ul li,
.accordion-body ul li span {
    color: white;
}

.accordion-button {
    background-color: transparent;
    color: white;
    padding-left: 0;
    border-bottom: gray 1px solid;
}

.accordion-button:not(.collapsed) {
    background-color: #3b332e;
    color: white;
    box-shadow: none;
}

.accordion-item {
    background-color: #3b332e;
    border: none;
}

.accordion-button::after {
    display: none;
}

.custom-arrow {
    border: solid white;
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(45deg);
    transition: transform 0.3s ease, border-color 0.3s ease;
    margin-left: auto;
}

.accordion-button:not(.collapsed) .custom-arrow {
    transform: rotate(-135deg);
    border-color: lightgray;
}
</style>