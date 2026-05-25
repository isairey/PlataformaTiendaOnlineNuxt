<script setup>
defineProps({
    buttonType: String,
    text: String
})
</script>
<template>
    <button :type="buttonType">{{ text }}</button>    
</template>

<style scoped>
button{
    border-radius: 5px;
    background-color: white;
    padding: 5px;
    margin: 10px 0;
}
button:hover{
    border: 2px dotted;
}
</style>