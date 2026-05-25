<script setup>
definePageMeta({
    layout: 'auth'
})
</script>
<template>
    <h2>Iniciar Sesion</h2>

    <label for="user">Usuario</label>
    <input type="text" name="user">

    <label for="password">Contraseña</label>
    <input type="password" name="password">

    <ui-button type="submit" text="Iniciar sesion"/>
</template>