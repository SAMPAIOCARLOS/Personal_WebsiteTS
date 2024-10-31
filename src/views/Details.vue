<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Details'
})
</script>

<template>
    <img :src="$route.query.img_card" alt="Imagem do Card" class="card-image">
    <h2 class="card-title">{{ $route.query.title }}</h2>
    <p class="card-description">{{ $route.query.description }}</p>
</template>

<style scoped>
div {
    min-height: 50vh;
}
</style>