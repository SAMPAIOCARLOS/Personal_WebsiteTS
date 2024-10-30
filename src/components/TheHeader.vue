<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';

import Typed from 'typed.js';

interface iconsHeaderType {
    id: number,
    path: String,
    name: String
}

interface Data{
    data_icons_socialHeader: iconsHeaderType[],
    array_names: (string | number)[] | null,
    typed: Typed | null;
}

    export default defineComponent({
        name: 'TheHeader',
        components: { NavBar },
        data(): Data {
            return {
                data_icons_socialHeader: [
                    { id: 1, path: 'https://www.linkedin.com/in/carlos-sampaio-a02651265/', name: 'logo-linkedin' },
                    { id: 2, path: 'https://github.com/SAMPAIOCARLOS', name: 'logo-github' },
                    { id: 3, path: '#', name: 'mail-outline' }
                ],
                array_names: ['Desenvolvedor front-end', 'Front-end developer', 'Desenvolvedor front-end', 'Front-end developer'],
                typed: null
            }
        },
        props: {
            show_btn_theme: { type: Boolean, required: true },
            show_logoNavBar: { type: Boolean, required: true },
            show_iconScroll: { type: Boolean, required: true },
        },
        methods: {
            pass_eventToggle_theme() {
                this.$emit("pass_eventToggle_theme")
            }
        },
        mounted() {
            const options = {
                strings: this.array_names as string[] | null,
                typeSpeed: 80 as number | null, //tempo para os caracteres serem escritos
                backSpeed: 40 as number | null, //tempo para os caracteres serem apagados
                cursorChar: "|" as string | null, //O simbolo que aparece no final
                backDelay: 1000 as number | null, //O tempo antes de apagar o texto
                loop: true as boolean | null // Se o efeito deve repetir indefinidamente
            };

            // Instanciando o Typed.js
            this.typed = new Typed('.typed-element', options);
        }
    })
</script>

<template>
    
    <NavBar @pass_eventToggle_theme="pass_eventToggle_theme" :show_btn_theme="show_btn_theme" :show_logoNavBar="show_logoNavBar"/>

    <header id="header">
        <div id="container_textContent_header">
            <aside id="container_text_header">
                <h2>Olá, Visitante <div id="hand">🖐️</div></h2>

                <h1>Meu nome é Carlos</h1>

                <h2 id="text_typedJS">Sou um: <span class="color_blue alterText typed-element"></span></h2>
            </aside>

            <aside id="container_icons_header">
                <div class="bar_header"></div>

                <div id="box_icons_header">
                    <a :href="item_socialHeader.path" v-for="item_socialHeader in data_icons_socialHeader" :key="item_socialHeader.id" target="blank">
                        <ion-icon :name="item_socialHeader.name"></ion-icon>
                    </a>
                </div>

                <div class="bar_header"></div>
            </aside>

            <aside id="container_icons_scroll">
                <a href="#container_skills">
                    <img v-if="show_iconScroll" src="/src/assets/images/icons_scroll_dark.png" alt="">
                    <img v-else src="/src/assets/images/icons_scroll_white.png" alt="">
                </a>
            </aside>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 100vh;
    padding-top: 5rem;
    display: flex;
    align-items: center;
    background: url('/src/assets/images/pexels-lee-campbell-18167-115655.jpg');
    background-position: center;
    background-size: cover;
}

header::before {
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

header > * {
    position: relative;
    z-index: 2; 
}

#container_textContent_header {
    width: 80vw;
    margin: auto;
    /* border: 3px solid rgb(255, 255, 255); */
    color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
}

#container_text_header {
    /* width: 80%; */
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
h1 {
    font-size: 3.5vw;
    color: var(--color--text);
}
h2 {
    /* width: 100%; */
    font-size: 2vw;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color--text);
    flex-wrap: wrap;
}

#text_typedJS {
    width: 100%;
}
.alterText {
    font-size: 1.7vw;
}
#container_icons_header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    /* border: 3px solid #fff; */
}

.bar_header {
    width: 100px;
    height: 3px;
    background: var(--color--text);
    margin-bottom: 7px;
}

#box_icons_header {
    display: flex;
    gap: 30px;
    font-size: 3vw;
}
#box_icons_header > a {
    color: var(--color--text);
    transition: all 0.5s;
}
#box_icons_header > a:hover {
    color: #4036FF;
}

#container_icons_scroll {
    width: 70px;
}

#container_icons_scroll > a > img {
    width: 100%;
}

@media(max-width: 1000px) {
    h1 {
        font-size: 5vw;
    }
    h2 {
        font-size: 3vw;
    }
    .alterText {
        font-size: 2.2vw;
    }

    #box_icons_header {
        font-size: 4vw;
    }
    #container_icons_scroll {
        width: 50px;
    }
}
@media(max-width: 800px) {
    h1 {
        font-size: 7vw;
    }
    h2 {
        font-size: 5vw;
    }
    .alterText {
        font-size: 4vw;
    }

    #box_icons_header {
        font-size: 6vw;
    }
    #container_icons_scroll {
        width: 50px;
    }
}
@media(max-width: 500px) {
    h1 {
        font-size: 8vw;
    }
    h2 {
        font-size: 6vw;
    }
    .alterText {
        font-size: 5vw;
    }

    #box_icons_header {
        font-size: 7vw;
    }

    #container_textContent_header {
        width: 90vw;
    }

}

@media(max-width: 320px) {
    h1 {
        font-size: 10vw;
    }
    h2 {
        font-size: 8vw;
    }
    .alterText {
        font-size: 7vw;
    }

    #box_icons_header {
        font-size: 9vw;
    }
}
</style>