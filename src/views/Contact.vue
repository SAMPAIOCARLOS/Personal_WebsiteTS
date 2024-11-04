<script lang="ts">
import { defineComponent } from 'vue'

import NavBar from '../components/NavBar.vue'
import TheFooter from '../components/TheFooter.vue'
import Form from '../views/Form.vue'

interface dataCreateInputs {
    id: number;
    name: string;
    type: string;
    class: string
}

interface dataCreateCards {
    id: number;
    path_icon: string;
    title: string;
    description: string
}

interface Data {
    data_createInput: dataCreateInputs[];
    data_createCards: dataCreateCards[]
}

export default defineComponent({
    name: 'Contact',
    components: { NavBar, TheFooter, Form },
    data(): Data {
        return {
            data_createInput: [
                { id: 1, name: 'Nome', type: 'text', class: 'inputs' },
                { id: 2, name: 'Telefone', type: 'text', class: 'inputs' },
                { id: 3, name: 'Email', type: 'text', class: 'inputs' },
            ],
            data_createCards: [
                { id: 1, path_icon: 'call-outline', title: 'Numero de telefone', description: '(99) 98513-7413' }
            ]
        }
    },
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

    <div id="container_contact">
        <div id="headerContact">
            <div class="container_main_center">
                <div id="box_textContect_header">
                    <h1>Contate-me</h1>
                    <p><a href="https://www.linkedin.com/in/carlos-sampaio-a02651265/" target="blank">Linkedin</a> | <a href="https://github.com/SAMPAIOCARLOS" target="blank">GitHub</a></p>
                </div>
            </div>
        </div>

        <div id="container_formContact">
            <div id="shadow_container_formContact">
                <div class="container_main_center">
                    <div id="group_FormCard">

                        <Form :dataCreateForm="data_createInput"/>
                        
                        <div id="container_cards">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TheFooter />
</template>

<style scoped>
#container_contact {
    width: 100vw;
    min-height: 100vh;
    /* border: 3px solid red; */
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    color: var(--color--text);
    background-color: black;
}

#headerContact {
    /* border: 3px solid blue; */
    width: 100%;
    height: 90vh;
    background: url("/src/assets/images/fundo_contact.jpg");
    background-position: center;
    background-size: cover;
}

#headerContact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     /* cor preta com 50% de opacidade */
    z-index: 1; /* coloca o overlay atrás do conteúdo */

    background: var(--background--container);
}

#headerContact > * {
    position: relative;
    z-index: 2; 
}

#box_textContect_header {
    border: 2px solid red;
    height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 5vw;
}
a {
    text-decoration: none;
    color: var(--color--text);
}
#container_formContact {
    border: 3px solid green;
    width: 100%;
    min-height: 100vh;
    background: url('/src/assets/images/335e271745aa573c4554952bf96ee698.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    
}

#shadow_container_formContact {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.489), rgba(0, 0, 0, 0.741), rgba(0, 0, 0, 0.873), rgb(0, 0, 0));
    display: flex;
    align-items: center;
}

#group_FormCard {
    /* border: 3px solid red; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}


#container_cards {
    width: 45%;
    border: 3px solid rgb(255, 255, 255);
}
</style>