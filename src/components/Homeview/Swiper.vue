<template>
    <section class="position-relative hero-slider">
        <div class="slider-container">
            <!-- 作者標註 -->
            <div class="photo-credit">
                Photo by
                <a :href="slides[currentIndex].authorLink" target="_blank" rel="noopener">
                    {{ slides[currentIndex].author }}
                </a>
                on
                <a :href="slides[currentIndex].photoLink" target="_blank" rel="noopener">
                    Unsplash
                </a>
            </div>

            <!-- 輪播圖片 -->
            <div v-for="(slide, index) in slides" :key="index" class="slide"
                :class="{ active: index === currentIndex }">
                <img :src="slide.image" :alt="slide.title" />
                <div class="caption">
                    <h2>{{ slide.title }}</h2>
                    <p>{{ slide.subtitle }}</p>
                </div>
            </div>
        </div>

        <!-- 左右按鈕 -->
        <button class="slider-btn prev f2" @click="prevSlide">
            <img class="slider-btn-img slider-btn-img-left" src="/image/icon/icon-arrow-right-gold.svg"
                alt="previous" />
        </button>
        <button class="slider-btn next f2" @click="nextSlide">
            <img class="slider-btn-img slider-btn-img-right" src="/image/icon/icon-arrow-right-gold.svg" alt="next" />
        </button>

        <!-- 播放按鈕 + 頁碼 -->
        <div class="slider-controls">
            <button class="play-btn" @click="toggleAutoplay">
                <img :src="isAutoplay ? pauseIcon : playIcon" alt="play/pause icon" />
            </button>
            <span class="f5 gold-text mx-2">|</span>
            <span class="f5 gold-text">{{ currentIndex + 1 }} / {{ slides.length }}</span>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const baseUrl = import.meta.env.BASE_URL
const playIcon = `${baseUrl}image/icon/main-icon-play-gold.svg`
const pauseIcon = `${baseUrl}image/icon/main-icon-pause-gold.svg`

const slides = [
    {
        title: '探索世界，從此開始',
        subtitle: '體驗無與倫比的舒適飛行',
        image: `${import.meta.env.BASE_URL}image/swiper/eva-darron-airplane.jpg`,
        author: 'Eva Darron',
        authorLink: 'https://unsplash.com/@evadarron?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        photoLink: 'https://unsplash.com/photos/airplanes-window-view-of-sky-during-golden-hour-oCdVtGFeDC0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    },
    {
        title: '直達夢想目的地',
        subtitle: '用心連結每一次遠行',
        image: `${import.meta.env.BASE_URL}image/swiper/ross-parmly-airplane.jpg`,
        author: 'Ross Parmly',
        authorLink: 'https://unsplash.com/@rparmly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        photoLink: 'https://unsplash.com/photos/aerial-photography-of-airliner-rf6ywHVkrlY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    },
    {
        title: '飛越天際，超越期待',
        subtitle: '專業服務，締造美好旅程',
        image: `${import.meta.env.BASE_URL}image/swiper/chuttersnap-airplane.jpg`,
        author: 'CHUTTERSNAP',
        authorLink: 'https://unsplash.com/@chuttersnap?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        photoLink: 'https://unsplash.com/photos/gray-commercial-airplane-TdbQBWNO2SE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    }
]

const currentIndex = ref(0)
const isAutoplay = ref(true)
let timer

function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % slides.length
}

function prevSlide() {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

function toggleAutoplay() {
    isAutoplay.value = !isAutoplay.value
    if (isAutoplay.value) {
        timer = setInterval(nextSlide, 5000)
    } else {
        clearInterval(timer)
    }
}

onMounted(() => {
    timer = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>

<style scoped>
.gold-text {
    color: var(--color-neutral-navbar-text);
}

.hero-slider {
    height: 450px;
    overflow: hidden;
}

.slider-container {
    position: relative;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 1s ease;
    z-index: 1;
}

.slide.active {
    left: 0;
    opacity: 1;
    z-index: 2;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.caption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
}

.slider-controls {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 1px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0 10px;
    border-radius: 5px;
    z-index: 9999;
}

.slider-controls .play-btn {
    position: static;
    font-size: 1.2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}

.slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 9999;
}

.slider-btn.prev {
    left: 10px;
}

.slider-btn.next {
    right: 10px;
}

.slider-btn-img {
    width: 30px;
    height: 30px;
}

.slider-btn-img-left {
    transform: scaleX(-1);
}

.photo-credit {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    z-index: 9999;
}

.photo-credit a {
    color: white;
    text-decoration: underline;
}
</style>