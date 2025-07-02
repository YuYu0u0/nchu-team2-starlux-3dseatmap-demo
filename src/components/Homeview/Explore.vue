<template>
    <section class="explore-carousel text-center text-white">
        <h2 class="title my-5">世界都市</h2>
        <div class="carousel-container">
            <div class="btn-left">
                <button v-if="spots.length > slidesToShow && currentIndex !== 0" class="arrow left" @click="prevSlide"
                    aria-label="上一個">
                    <img src="/image/icon/icon-arrow-left-gold.svg" alt="上一個" class="arrow-icon" />
                </button>
            </div>
            <div class="slides-wrapper">
                <div class="slide" v-for="(spot, index) in visibleSpots" :key="index">
                    <div class="slide-img plane-window">
                        <img :src="spot.image" :alt="spot.name" />
                    </div>
                    <p class="caption my-2">{{ spot.name }}</p>
                </div>
            </div>
            <div class="btn-right">
                <button v-if="spots.length > slidesToShow && currentIndex !== maxIndex" class="arrow right"
                    @click="nextSlide" aria-label="下一個">
                    <img src="/image/icon/icon-arrow-right-gold.svg" alt="下一個" class="arrow-icon" />
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.carousel-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.slides-wrapper {
    display: flex;
    gap: 2rem;
    overflow: hidden;
    width: calc(160px * var(--slides-to-show) + 1rem * (var(--slides-to-show) - 1));
    justify-content: center;
}



.arrow-icon {
    width: 24px;
    height: 24px;
}



.btn-left,
.btn-right {
    width: 50px;
}

button {
    background-color: transparent;
    border: none;
}

.plane-window {
    width: 180px;
    height: 224px;
    background-color: white;
    overflow: hidden;
    border-radius: 50% / 35%;
    /* 橢圓弧效果 */
    border: 15px solid #e0e0e0;
    /* 模擬飛機窗戶的框 */
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    /* 內陰影增加立體感 */
}

.plane-window img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>


<script setup>
import { ref, computed } from 'vue'

const spots = [
    { name: '台北', image: `${import.meta.env.BASE_URL}image/city/Taipei.jpg` },
    { name: '洛杉磯', image: `${import.meta.env.BASE_URL}image/city/LosAngeles.jpg` },
    { name: '東京', image: `${import.meta.env.BASE_URL}image/city/Tokyo.jpg` },
    { name: '台中', image: `${import.meta.env.BASE_URL}image/city/Taichung.jpg` },
    { name: '曼谷', image: `${import.meta.env.BASE_URL}image/city/Bangkok.jpg` },
    { name: '宮古島', image: `${import.meta.env.BASE_URL}image/city/Miyako-jima.jpg` },
    { name: '安大略', image: `${import.meta.env.BASE_URL}image/city/Ontario.jpg` },
    { name: '雅加達', image: `${import.meta.env.BASE_URL}image/city/Jakarta.jpg` },
    { name: '香港', image: `${import.meta.env.BASE_URL}image/city/HongKong.jpg` },
    { name: '西雅圖', image: `${import.meta.env.BASE_URL}image/city/Seattle.jpg` },
    { name: '富國島', image: `${import.meta.env.BASE_URL}image/city/PhuQuoc.jpg` },
    { name: '清邁', image: `${import.meta.env.BASE_URL}image/city/ChiangMai.jpg` },
    { name: '舊金山', image: `${import.meta.env.BASE_URL}image/city/SanFrancisco.jpg` },
    { name: '札幌', image: `${import.meta.env.BASE_URL}image/city/Sapporo.jpg` },
    { name: '新加坡', image: `${import.meta.env.BASE_URL}image/city/Singapore.jpg` },
    { name: '大阪', image: `${import.meta.env.BASE_URL}image/city/Osaka.jpg` },
];


const slidesToShow = 5 // 先示範 3 張可滑動
const currentIndex = ref(0)

const maxIndex = Math.max(spots.length - slidesToShow, 0)

const visibleSpots = computed(() => {
    if (spots.length <= slidesToShow) {
        return spots
    }
    return spots.slice(currentIndex.value, currentIndex.value + slidesToShow)
})

function prevSlide() {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

function nextSlide() {
    if (currentIndex.value < maxIndex) {
        currentIndex.value++
    }
}

</script>
