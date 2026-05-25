<template>

  <div class="container">
    <div class="auth-container">
        <slot></slot>
    </div>
  </div>

</template>

<style scoped>
.container{
    background-color: black;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.auth-container{
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
}
</style>