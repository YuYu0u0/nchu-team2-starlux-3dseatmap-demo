<template>
    <div class="coming-soon-container">
        <h1>此頁尚未開發</h1>
        <img class="gif" :src="gifSrc" alt="開發中動畫" />
        <p>您所點選的功能或頁面目前尚未完成開發，敬請期待！</p>
        <router-link class="btn-home" to="/">返回首頁</router-link>
    </div>
</template>

<script setup>
const gifSrc = `${import.meta.env.BASE_URL}image/tomorin.gif`
</script>

<style scoped>
.coming-soon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    padding: 20px;
    color: white;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.gif {
    width: 300px;
    max-width: 80%;
    margin-bottom: 30px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 40px;
}

.btn-home {
    display: inline-block;
    padding: 12px 24px;
    background-color: #555;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s;
}

.btn-home:hover {
    background-color: #333;
}
</style>
