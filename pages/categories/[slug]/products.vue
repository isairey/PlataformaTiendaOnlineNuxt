<script setup>
const route = useRoute()
</script>
<template>
<h2>Productos de: {{ route.params.slug }}</h2>
</template>