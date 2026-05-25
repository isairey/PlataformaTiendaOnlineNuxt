<script setup>
const {data: categories} = await useFetch('/api/categories')
</script>
<template>
    <h1>Lista de categorias:</h1>
    <CategoriesCard v-for="c in categories" :id="c.id" :name="c.name"></CategoriesCard>
</template>