<script setup>
const { data: products } = await useFetch('/api/products')

const perPage = ref(1)
</script>
<template>
    <div>
        <h2>Lista de productos</h2>
        <label for="perPage">mostrar:</label>
        <input type="number" id="perPage" v-model="perPage">
        <label for="perPage">Productos</label>

        <ProductsProductList :products="products" :per-page="perPage"/>
    </div>
</template>