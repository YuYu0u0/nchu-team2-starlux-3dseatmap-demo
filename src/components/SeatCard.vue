<template>
    <div class="seat-card">
        <div class="seat-info">
            <h2 class="seat-number">{{ seatNumber }}</h2>
            <p class="seat-class">{{ seatClass }}</p>
        </div>

        <div class="seat-introduce">
            <p class="seat-introduce-text">
                {{ seatDescription }}
            </p>
        </div>

        <!-- 價格顯示區塊 -->
        <div class="price-display-container">
            <div class="price-display">
                <span class="currency f5">NT$</span>
                <span class="amount">{{ seatPrice.replace('NT$ ', '') }}</span>
            </div>
        </div>

        <div class="seat-actions">
            <button class="btn confirm" @click="confirmSeat">確認選擇</button>
            <button class="btn back" @click="goBack">返回</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useOrderStore } from '@/stores/order';

const orderStore = useOrderStore();

// 從 Pinia store 中獲取選定的航班資訊
const selectedFlight = computed(() => orderStore.selectedFlight);

const props = defineProps({
    seatNumber: { type: String, required: true },
    seatClass: { type: String, required: true },
    seatDescription: { type: String, default: "" }
});

const emit = defineEmits(["confirm", "back"]);

// 從 selectedFlight 中獲取價格
const seatPrice = computed(() => {
    console.log('SeatCard - selectedFlight.value:', selectedFlight.value);
    console.log('SeatCard - selectedFlight.value?.ticketPrice:', selectedFlight.value?.ticketPrice);
    return selectedFlight.value?.ticketPrice ? `NT$ ${selectedFlight.value.ticketPrice.toLocaleString()}` : 'NT$ 0';
});

const confirmSeat = () => {
    emit("confirm");
};

const goBack = () => {
    emit("back");
};
</script>

<style scoped>
.seat-card {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 300px;
    padding: 24px;
    background-color: var(--color-primary-dark-blue);
    /* 深藍背景 */
    color: var(--color-primary-gold);
    /* 導覽列文字色作為亮色 */
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--color-border);
    font-family: inherit;
}

.seat-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 110px;
}

.seat-info p {
    margin: 0;
}

.seat-number {
    font-size: 3rem;
    color: var(--color-primary-brown);
    /* 按鈕咖啡色 */
}

.seat-class {
    font-size: 1.2rem;
}



/* 價格顯示容器 */
.price-display-container {
    display: flex;
    justify-content: center;
    /* 左右置中 */
    margin-top: 20px;
    /* 與 seat-introduce 的間距 */
    margin-bottom: 20px;
    /* 與 seat-actions 的間距 */
}

/* 價格顯示樣式 (參考 BookingTicket.vue) */
.price-display {
    display: flex;
    align-items: baseline;
}

.price-display .currency {
    font-weight: bold;
    color: var(--color-primary-gold);
}

.price-display .amount {
    font-size: 32px;
    font-weight: bold;
    color: var(--color-primary-gold);
    margin: 0 4px;
}

.seat-introduce {
    min-height: 200px;
}

.seat-introduce p.seat-introduce-text {
    margin: 0;
}

.seat-actions {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 20px;
}

.btn {
    flex: 1;
    padding: 10px 0;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    font-family: inherit;
}

.btn.confirm {
    background-color: var(--color-primary-brown);
    color: var(--color-neutral-form-bg-white);
}

.btn.confirm:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    background-color: var(--color-button-hover);
}

.btn.back {
    background-color: transparent;
    border: 1px solid var(--color-primary-gold);
    color: var(--color-primary-gold);
}

.btn.back:hover {
    background-color: rgba(121, 68, 37, 0.2);
    transform: scale(1.05);
}
</style>
