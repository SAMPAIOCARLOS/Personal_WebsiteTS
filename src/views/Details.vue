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
        pass_eventToggle_theme(): void {
            this.$emit("pass_eventToggle_theme")
        }
    }
})
</script>

<template>

    <NavBar @pass_eventToggle_theme="pass_eventToggle_theme" :show_btn_theme="show_btn_theme" :show_logoNavBar="show_logoNavBar"/>

    <!-- <img :src="$route.query.img_card" alt="Imagem do Card" class="card-image">
    <h2 class="card-title">{{ $route.query.title }}</h2>
    <p class="card-description">{{ $route.query.description }}</p> -->

    <div id="container_details">
        <div id="container_headerDetails">
            <div id="boxImgDetails">
                <img :src="$route.query.img_logoName" alt="">
            </div>

            <span style="color: #fff;">
                Ainda em desenvolvimento...
            </span>
        </div>

    </div>

    <TheFooter />
</template>

<style scoped>
#container_details {
    width: 100%;
    min-height: 100vh;
    /* border: 3px solid red; */
    padding-top: 5rem;
    background-color: black;
}

#container_headerDetails {
    /* border: 3px solid #fff; */
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#boxImgDetails {
    width: 70%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
}
#boxImgDetails > img {
    width: 100%;
    object-fit: contain;
}
</style>