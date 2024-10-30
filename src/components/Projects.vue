<script lang="ts">
import { defineComponent } from 'vue'
import CardsProject from './CardsProject.vue'

export default defineComponent({
    name: 'Projects',
    components: { CardsProject }
})
</script>

<template>
    <div id="container_project">
        <div class="container_main_center">

            <div id="box_title_center">
                <h1>
                    <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>t</span><span>o</span><span>s</span>
                </h1>

            </div>

            <div id="container_projects">
                <CardsProject />
            </div>
        </div>
    </div>
</template>

<style scoped>
#container_project {
    width: 100%;
    min-height: 100vh;
    background: var(--background--project);
    background-position: center;
    background-size: cover;
}

#box_title_center {
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
}
h1 {
    font-size: 6vw;
    border-bottom: 3px solid gray;
    color: var(--color--text);
    padding: 0 40px;
    cursor: pointer;
}
span {
    transition: all 0.3s; 
}
span:hover {
    color: #4036FF;
    text-shadow: 2px 2px 40px #4036ff85;
}

#container_projects {
    border: 2px solid red;
    margin-top: 40px;
    width: 100%;
    min-height: 50vh;
}
</style>
