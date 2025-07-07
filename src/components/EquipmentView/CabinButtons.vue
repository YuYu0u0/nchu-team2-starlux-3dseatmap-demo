<template>
    <div class="button-column d-flex flex-column align-items-center gap-3 my-4 my-lg-5 mb-lg-0 ">
        <h3 class="text-white mb-2 vertical-text">座椅</h3>
        <button v-for="cabin in cabins" :key="cabin" class="btn btn-lg px-4 custom-btn vertical-text"
            :class="{ active: selected === cabin }" @click="handleClick(cabin)" :disabled="disabled">
            {{ cabin }}
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    selected: String,
    disabled: Boolean
});
const emit = defineEmits(['select']);

const cabins = ["頭等艙", "豪華經濟艙", "經濟艙"];

function handleClick(item) {
    emit('select', item);
}
</script>

<style scoped>
.custom-btn {
    border: 2px solid var(--color-primary-gold);
    color: var(--color-primary-gold);
    background-color: transparent;
    transition: all 0.3s;
    white-space: nowrap;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
}

.custom-btn:hover,
.custom-btn:focus,
.custom-btn.active {
    background-color: var(--color-primary-gold);
    color: #333;
}

.custom-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
