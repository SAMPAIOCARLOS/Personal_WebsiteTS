<script lang="ts">
import { defineComponent } from 'vue'
import CardsProject from './CardsProject.vue'

interface Data {
    name_project: string;
}

export default defineComponent({
    name: 'Projects',
    components: { CardsProject },
    data(): Data {
        return {
            name_project: 'Projetos'
        }
    }
})
</script>

<template>
    <div id="container_project">
        <div class="container_main_center">

            <div id="box_title_center">
                <h1>
                    <span v-for="(letter, index) in name_project" :key="index">
                        {{ letter }}
                    </span>
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
    background-attachment: fixed;
    padding-bottom: 100px;
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
    display: flex;
}
span {
    transition: all 0.3s; 
    display: block;
}
span:hover {
    color: #4036FF;
    text-shadow: 2px 2px 40px #4036ff85;
    transform: translateY(-20px);
    
}

#container_projects {
    /* border: 2px solid red; */
    margin-top: 40px;
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

@media(max-width: 1093px) {
    #container_projects {
        justify-content: center;
    }
}
</style>
