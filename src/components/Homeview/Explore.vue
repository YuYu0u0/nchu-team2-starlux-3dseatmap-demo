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

.slides-wrapper {
    display: flex;
    gap: 1rem;
    overflow: hidden;
    justify-content: center;
    transition: all 0.3s ease;
}

/* RWD: 每個 slide 的寬度固定，wrapper 不限制死長度 */
.slide {
    flex: 0 0 auto;
}

/* 可根據裝置調整圖片大小 */
.plane-window {
    width: 180px;
    height: 224px;
}

@media (max-width: 992px) {
    .plane-window {
        width: 150px;
        height: 200px;
    }
}
</style>


<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
const baseUrl = import.meta.env.BASE_URL;
const spots = [
    { name: '台北', image: `${baseUrl}image/city/Taipei.jpg` },
    { name: '洛杉磯', image: `${baseUrl}image/city/LosAngeles.jpg` },
    { name: '東京', image: `${baseUrl}image/city/Tokyo.jpg` },
    { name: '台中', image: `${baseUrl}image/city/Taichung.jpg` },
    { name: '曼谷', image: `${baseUrl}image/city/Bangkok.jpg` },
    { name: '宮古島', image: `${baseUrl}image/city/Miyako-jima.jpg` },
    { name: '安大略', image: `${baseUrl}image/city/Ontario.jpg` },
    { name: '雅加達', image: `${baseUrl}image/city/Jakarta.jpg` },
    { name: '香港', image: `${baseUrl}image/city/HongKong.jpg` },
    { name: '西雅圖', image: `${baseUrl}image/city/Seattle.jpg` },
    { name: '富國島', image: `${baseUrl}image/city/PhuQuoc.jpg` },
    { name: '清邁', image: `${baseUrl}image/city/ChiangMai.jpg` },
    { name: '舊金山', image: `${baseUrl}image/city/SanFrancisco.jpg` },
    { name: '札幌', image: `${baseUrl}image/city/Sapporo.jpg` },
    { name: '新加坡', image: `${baseUrl}image/city/Singapore.jpg` },
    { name: '大阪', image: `${baseUrl}image/city/Osaka.jpg` },
];

const currentIndex = ref(0)
const slidesToShow = ref(getSlidesToShow()) // 改成 ref

const maxIndex = computed(() =>
    Math.max(spots.length - slidesToShow.value, 0)
)

const visibleSpots = computed(() => {
    if (spots.length <= slidesToShow.value) {
        return spots
    }
    return spots.slice(currentIndex.value, currentIndex.value + slidesToShow.value)
})

function prevSlide() {
    if (currentIndex.value > 0) currentIndex.value--
}

function nextSlide() {
    if (currentIndex.value < maxIndex.value) currentIndex.value++
}

// 根據螢幕寬度調整 slidesToShow
function getSlidesToShow() {
    const width = window.innerWidth
    if (width < 576) return 1
    if (width < 768) return 2
    if (width < 992) return 3
    if (width < 1200) return 4
    return 5
}

function handleResize() {
    slidesToShow.value = getSlidesToShow()
    // 當 slidesToShow 改變時，防止 currentIndex 超出 maxIndex
    if (currentIndex.value > maxIndex.value) {
        currentIndex.value = maxIndex.value
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>
