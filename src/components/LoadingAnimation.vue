<template>
    <div class="loading-container">
        <div class="lds-chyron">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="loading-text">
            {{ loadingText }}<span class="dots">{{ dots }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 可透過父層 props 自訂文字
const props = defineProps({
    loadingText: {
        type: String,
        default: '模型載入中'
    }
});

const dots = ref('');
let intervalId;

onMounted(() => {
    let count = 0;
    intervalId = setInterval(() => {
        count = (count + 1) % 4; // 0~3
        dots.value = '.'.repeat(count);
    }, 500);
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>

<style scoped>
.loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: #333;
    font-size: 20px;
    font-family: sans-serif;
    height: 100vh;
    justify-content: center;
}

.lds-chyron,
.lds-chyron div {
    box-sizing: border-box;
}

.lds-chyron {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-chyron div {
    position: absolute;
    top: 33.33333px;
    width: 13.33333px;
    height: 13.33333px;
    border-radius: 50%;
    background: currentColor;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-chyron div:nth-child(1) {
    left: 8px;
    animation: lds-chyron1 0.6s infinite;
}

.lds-chyron div:nth-child(2) {
    left: 8px;
    animation: lds-chyron2 0.6s infinite;
}

.lds-chyron div:nth-child(3) {
    left: 32px;
    animation: lds-chyron2 0.6s infinite;
}

.lds-chyron div:nth-child(4) {
    left: 56px;
    animation: lds-chyron3 0.6s infinite;
}

.loading-text {
    font-size: 2rem;
}

@keyframes lds-chyron1 {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes lds-chyron2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(24px, 0);
    }
}

@keyframes lds-chyron3 {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}
</style>
