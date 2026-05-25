<script setup>
const props = defineProps({
    products: Object,
    perPage: Number,
})

const filteredProducts = computed(()=>{
    return props.products.slice(0, props.perPage)
}) 
</script>
<template>
    <div>
        <ProductsProductCard v-for="p in filteredProducts" :key="p.id" :id="p.id" :name="p.name"/>
    </div>
</template>