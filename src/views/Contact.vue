<script lang="ts">
import { defineComponent } from 'vue'

import NavBar from '../components/NavBar.vue'
import TheFooter from '../components/TheFooter.vue'
import Form from '../views/Form.vue'
import ButtonScroll from '../components/ButtonScroll.vue'
import CardsContact from '../views/CardsContact.vue'


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
    data_createCards: dataCreateCards[];
    path_href: string
}

export default defineComponent({
    name: 'Contact',
    components: { NavBar, TheFooter, Form, ButtonScroll, CardsContact },
    data(): Data {
        return {
            data_createInput: [
                { id: 1, name: 'Nome', type: 'text', class: 'inputs' },
                { id: 2, name: 'Telefone', type: 'text', class: 'inputs' },
                { id: 3, name: 'Email', type: 'text', class: 'inputs' },
            ],
            data_createCards: [
                { id: 1, path_icon: 'call-outline', title: 'Numero de telefone', description: '(99) 98513-7413' },
                { id: 2, path_icon: 'mail-outline', title: 'Email para contato', description: 'sampaiocarlos957@gmail.com' },
                { id: 3, path_icon: 'location-outline', title: 'Endereço', description: 'São luis MA' },
                { id: 4, path_icon: 'logo-linkedin', title: 'Linkedin', description: 'Link do linkedin' },
            ],
            path_href: '#container_formContact'
        }
    },
    props: {
        show_btn_theme: { type: Boolean, required: true },
        show_logoNavBar: { type: Boolean, required: true },
        show_iconScroll: { type: Boolean, required: true },
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

                    <ButtonScroll :show_iconScroll="show_iconScroll" :pathHref="path_href"/>
                </div>
            </div>
        </div>

        <div id="container_formContact">
            <div class="container_main_center">
                <div id="subContainer_formContact">

                    <Form :dataCreateForm="data_createInput"/>


                    <div id="container_cards">
                        <CardsContact :data_createCards="data_createCards"/>
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
    height: 90%;
     /* cor preta com 50% de opacidade */
    z-index: 1; /* coloca o overlay atrás do conteúdo */

    background: var(--background--container);
    padding-top: 5rem;
}

#headerContact > * {
    position: relative;
    z-index: 2; 
}

#box_textContect_header {
    /* border: 2px solid red; */
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
    width: 100%;
    min-height: 100vh;
    /* border: 4px solid rgb(77, 255, 0); */
    background: url('../assets/images/fundo_contactForm.png') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
}


#subContainer_formContact {
    /* border: 4px solid #fff; */
    width: 100%;
    min-height: 70vh;
    margin: 90px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#container_cards {
    /* border: 4px solid blue; */
    width: 40%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    
}

@media(max-width: 1200px) {
 #container_cards {
    width: 50%;
 }
}
@media(max-width: 1000px) {
    #subContainer_formContact {
        flex-wrap: wrap;
        gap: 50px;
    }

    #container_cards {
        width: 100%;
    }
}

@media(max-width: 900px) {
    h1 {
        font-size: 7vw;
    }
}

@media(max-width: 600px) {
    h1 {
        font-size: 9vw;
    }
}
@media(max-width: 500px) {
    #container_cards {
        flex-wrap: wrap;
        justify-content: center;
    }
}
@media(max-width: 300px) {
    h1 {
        font-size: 12vw;
    }
}
</style>