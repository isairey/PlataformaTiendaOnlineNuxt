<script setup>
defineProps({
    name: String,
    id: Number,
})
</script>

<template>
    <article class="category-card">
        <h3>{{ name }}</h3>
        <nuxt-link :to="`/categories/${name}`">Ver mas</nuxt-link>
    </article>
</template>

<style scoped>
.category-card{
    background-color: rgb(103, 243, 213);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}
</style>