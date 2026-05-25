<script setup>
const route = useRoute();
const {data: product} = await useFetch(`/api/products/${route.params.id}`)
</script>

<template>

    <h2>Detalle del  {{ product.name }}</h2>
    <h3>Precio: {{ product.price }}</h3>
    <h4>Categoria: {{ product.category.name }}</h4>
</template>