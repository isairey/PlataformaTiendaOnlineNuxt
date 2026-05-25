<script setup>
defineProps({
    name: String,
    id: Number,
})
</script>

<template>
    <article class="product-card">
        <h3>{{ name }}</h3>
        <nuxt-link :to="`/products/${id}`">Ver mas</nuxt-link>
    </article>
</template>

<style scoped>
.product-card{
    background-color: rgb(103, 164, 243);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}
</style>