<script lang="ts">
import { defineComponent } from 'vue'

import NavBar from '../components/NavBar.vue'
import TheFooter from '../components/TheFooter.vue'

export default defineComponent({
    name: 'Contact',
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
    <div>contato</div>

    <TheFooter />
</template>

<style scoped>
div {
    width: 100vw;
    min-height: 100vh;
}
</style>