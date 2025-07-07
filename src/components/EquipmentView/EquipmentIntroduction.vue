<template>
    <section class="equipment-page">
        <h1 class="equipment-title">艙等介紹</h1>
        <div class="class-list">
            <div class="class-item" v-for="item in classes" :key="item.title">
                <img :src="item.image" :alt="item.title" />
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
            </div>
        </div>

        <h1 class="equipment-title">機上設備介紹</h1>
        <div class="equipment-list">
            <div class="equipment-item" v-for="item in equipment" :key="item.title">
                <img :src="item.image" :alt="item.title" />
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL;
const classes = [
    {
        title: '頭等艙',
        description: '提供專屬私人空間、頂級座椅及尊榮服務，享受極致舒適與隱私。',
        image: `${baseUrl}image/equipment/FirstClass.png`,
    },
    {
        title: '豪華經濟艙',
        description: '座椅空間加大，提供更多腿部伸展與舒適座椅，是長途旅行的理想選擇。',
        image: `${baseUrl}image/equipment/PremiumEconomyClass.png`,
    },
    {
        title: '經濟艙',
        description: '結合舒適與經濟性，提供完善服務與便利座位配置。',
        image: `${baseUrl}image/equipment/EconomyClass.png`,
    },
];

const equipment = [
    {
        title: '個人電視',
        description: '提供多種電影、影集及音樂，隨時享受娛樂。',
        image: `${baseUrl}image/equipment/IFE.png`,
    },
    {
        title: '專屬小冰箱',
        description: '保持飲品冰涼，隨時取用，旅途更舒適。',
        image: `${baseUrl}image/equipment/Mini-fridge.png`,
    },
    {
        title: '獨立廁所',
        description: '保持潔淨、配備洗手設施，提供旅程中的方便與隱私。',
        image: `${baseUrl}image/equipment/Lavatory.png`,
    },
    {
        title: '調光窗戶',
        description: '自由調節透光度，享受明亮或柔和的機艙氛圍。',
        image: `${baseUrl}image/equipment/EDW.png`,
    },
];
</script>

<style scoped>
.equipment-page {
    margin-bottom: 2rem;
    padding: 0 2rem;
}

.equipment-title {
    text-align: center;
    font-size: 2rem;
    margin: 3rem 0 2rem;
    color: var(--color-primary-gold);
}

/* 艙等樣式 */
.class-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.class-item {
    background: #274a61;
    color: #fff;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.class-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.class-item img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.class-item h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.class-item p {
    font-size: 0.95rem;
    text-align: start;
}

/* 設備樣式 */
.equipment-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.equipment-item {
    background: #274a61;
    color: #fff;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.equipment-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.equipment-item img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.equipment-item h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.equipment-item p {
    font-size: 0.95rem;
    text-align: start;
}
</style>
