<script setup>
const route = useRoute()
const {data: category} = await useFetch(`/api/categories/${route.params.slug}`)
</script>
<template>
<h1>{{ category?.name }}</h1>
<h2>{{ category?.description }}</h2>
</template>