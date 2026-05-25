<template>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Inicio</NuxtLink></li>
                <li><NuxtLink to="/about">Acerca de</NuxtLink></li>
                <li><NuxtLink to="/products">Productos</NuxtLink></li>
                <li><NuxtLink to="/categories">Categorias</NuxtLink></li>
            </ul>
        </nav>
    </header>
    <slot/>
    <footer>
        <small>Tienda - 2025</small>
    </footer>
</template>