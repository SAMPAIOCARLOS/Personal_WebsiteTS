<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'
import TheFooter from '../components/TheFooter.vue'

export default defineComponent({
    name: 'Details',
    components: { NavBar, TheFooter },
    props: {
        show_btn_theme: { type: Boolean, required: true },
        show_logoNavBar: { type: Boolean, required: true },
    },
    methods: {
        pass_eventToggle_theme() {
            this.$emit("pass_eventToggle_theme")
        }
    }
})
</script>

<template>

    <NavBar @pass_eventToggle_theme="pass_eventToggle_theme" :show_btn_theme="show_btn_theme" :show_logoNavBar="show_logoNavBar"/>

    <img :src="$route.query.img_card" alt="Imagem do Card" class="card-image">
    <h2 class="card-title">{{ $route.query.title }}</h2>
    <p class="card-description">{{ $route.query.description }}</p>

    <TheFooter />
</template>

<style scoped>
div {
    min-height: 50vh;
}
</style>