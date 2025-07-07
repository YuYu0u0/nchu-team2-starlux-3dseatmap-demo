<template>
    <div class="parallax-hero">
        <div class="parallax-hero-bg" :style="{
            backgroundImage: `url('${background}')`,
            transform: `translateY(${offsetY * speed}px)`
        }">

        </div>

        <div class="parallax-hero-content">
            <h2>{{ title }}</h2>
            <RouterLink to="/booking">
                <button>{{ buttonText }}</button>
            </RouterLink>

        </div>

        <div class="photo-credit">
            Photo by
            <a href="https://unsplash.com/@yipleonardo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank" rel="noopener">
                Leonardo Yip
            </a>
            on
            <a href="https://unsplash.com/photos/window-view-of-airplane-during-golden-hour-rn-NLirHQPY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank" rel="noopener">
                Unsplash
            </a>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
    title: { type: String, default: '立即探索精彩目的地' },
    buttonText: { type: String, default: '立即預訂' },
    background: { type: String, default: `${import.meta.env.BASE_URL}image/leonardo-yip-vacation.jpg` },
    speed: { type: Number, default: 0.3 }, // 可自訂移動速度
})

const emit = defineEmits(['click'])

const offsetY = ref(0)

const handleScroll = () => {
    offsetY.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})


</script>

<style scoped>
.parallax-hero {
    position: relative;
    height: 150vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.parallax-hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background-size: cover;
    background-position: center;
    will-change: transform;
    z-index: -1;
}

.parallax-hero-content {
    margin-top: 50vh;
    text-align: center;
    color: white;
}

.parallax-hero-content h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.parallax-hero-content button {
    font-size: 1.25rem;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #d4af37;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s;
}

.parallax-hero-content button:hover {
    background-color: #b89a2c;
}

.photo-credit {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: right;
    z-index: 1;
}

.photo-credit a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: underline;
}

.photo-credit a:hover {
    color: #fff;
}
</style>
