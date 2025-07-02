<template>
    <section class="container py-5 aircraft-info">

        <h2 class="text-white my-4 py-5 text-center">機隊介紹</h2>
        <div class="row gy-4 px-5">
            <div v-for="plane in planes" :key="plane.name" class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow border-0 hover-transform d-flex flex-column">
                    <img :src="plane.image" :alt="plane.name" class="card-img-top object-fit-cover" />
                    <div class="card-body d-flex flex-column">
                        <h2 class="card-title h5 mb-3">{{ plane.name }}</h2>
                        <p class="card-text mb-3">{{ plane.description }}</p>
                        <p class="card-text small mt-auto">
                            圖片來源：{{ plane.imageCredit.author }}，
                            <a :href="plane.imageCredit.url" target="_blank" class="text-decoration-underline">CC
                                授權連結</a>
                            （{{ plane.imageCredit.license }}）
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center gap-5 p-5">
            <router-link to="/equipment" class="btn btn-outline-custom btn-lg col-5 col-md-4 col-lg-3 text-center py-3">
                設備介紹
            </router-link>
            <router-link to="/booking" class="btn btn-outline-custom btn-lg col-5 col-md-4 col-lg-3 text-center py-3">
                搜尋航班
            </router-link>
        </div>

    </section>
</template>

<script setup>
const planes = [
    {
        name: "A321neo",
        description: "窄體客機，neo代表新引擎選項，提升燃油效率20%，噪音降低。常用於中短程航線，衍生型A321XLR可執行跨洋航線，座位約180-244位。",
        image: `${import.meta.env.BASE_URL}image/airplane/A321neo.jpg`,
        imageCredit: {
            author: "By BriYYZ from Toronto, Canada",
            url: "https://commons.wikimedia.org/w/index.php?curid=51240603",
            license: "CC BY-SA 2.0",
        },
    },
    {
        name: "A330neo",
        description: "雙走道廣體客機，換裝新型勞斯萊斯引擎，燃油效率提升14%。適用於中長程航線，如A330-900neo可載287-465名乘客，航程可達7,350海浬。",
        image: `${import.meta.env.BASE_URL}image/airplane/A330neo.jpg`,
        imageCredit: {
            author: "By pjs2005 from Hampshire, UK",
            url: "https://commons.wikimedia.org/w/index.php?curid=70942421",
            license: "CC BY-SA 2.0",
        },
    },
    {
        name: "A350-900",
        description: "全新設計的廣體客機，大量採用複合材料，搭載高效能勞斯萊斯引擎。專為中長程至超長程航線打造，約300-350個座位，航程可達8,100海浬，客艙舒適度極佳。",
        image: `${import.meta.env.BASE_URL}image/airplane/A350-900.jpg`,
        imageCredit: {
            author: "By Ken Fielding",
            url: "https://commons.wikimedia.org/w/index.php?curid=32256396",
            license: "CC BY-SA 3.0",
        },
    },
];
</script>

<style scoped>
.container {
    margin: 0 auto;
}

.card {
    color: white;
    background-color: #1d5b7a;
}

.card img {
    height: 240px;
}

.card-body p,
.card-body p a {
    color: white;
}

.btn-outline-custom {
    color: var(--color-neutral-navbar-text);
    border-color: var(--color-neutral-navbar-text);
}

.btn-outline-custom:hover {
    background-color: var(--color-neutral-navbar-text);
    color: #333;
}
</style>
