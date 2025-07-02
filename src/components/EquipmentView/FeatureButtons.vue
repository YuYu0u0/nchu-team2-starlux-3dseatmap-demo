<template>
    <div class="button-column d-flex flex-column align-items-center gap-3 my-4 my-lg-5 mb-lg-0">
        <h3 class="text-white mb-2 vertical-text">設備</h3>
        <button v-for="feature in features" :key="feature" class="btn btn-lg px-4 custom-btn vertical-text"
            :class="{ active: selected === feature }" @click="handleClick(feature)">
            {{ feature }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    selected: String
});
const emit = defineEmits(['select']);

const features = ["電視", "小冰箱", "廁所", "調光窗戶", "座椅"];

function handleClick(item) {
    emit('select', item);
}
</script>

<style scoped>
.custom-btn {
    border: 2px solid var(--color-neutral-navbar-text);
    color: var(--color-neutral-navbar-text);
    background-color: transparent;
    transition: all 0.3s;
    white-space: nowrap;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
}

.custom-btn:hover,
.custom-btn:focus,
.custom-btn.active {
    background-color: var(--color-neutral-navbar-text);
    color: #333;
}

.button-column {
    min-width: 120px;
}

.vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    /* 讓中英文排版正常 */
}
</style>
