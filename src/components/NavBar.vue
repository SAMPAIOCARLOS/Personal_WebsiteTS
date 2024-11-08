<script lang="ts">
import { defineComponent, ref } from 'vue'
import ButtonsTheme from './ButtonsTheme.vue'
import ListNav from './ListNav.vue'
import ListFull from './ListFull.vue'

  interface navBarType {
    id: number,
    text_content: string,
    path: string,
    icon: string
  }

  interface Data {
    data_path_NavBar: navBarType[]
    show_listFull: boolean,
  }

export default defineComponent({
    name: 'NavBar',
    components: { ListNav, ButtonsTheme, ListFull },
    props: {
        show_btn_theme: { type: Boolean, required: true },
        show_logoNavBar: { type: Boolean, required: true }
    },
    data(): Data {
        return {
            data_path_NavBar: [
                {id: 1, text_content: 'Inicio', path: 'http://localhost:3000/#header', icon: 'home-outline'},
                {id: 2, text_content: 'Habilidades', path: 'http://localhost:3000/#container_skills', icon: 'hammer-outline'},
                {id: 3, text_content: 'Projetos', path: 'http://localhost:3000/#container_project', icon: 'bag-check-outline'},
                {id: 4, text_content: 'Contato', path: '', icon: 'call-outline'}
            ],
            show_listFull: false,
            
        }
    },
    methods: {
        toggle_btn() {
            
            const hamburguerRef = this.$refs.hamburguerRef as HTMLElement

            if(hamburguerRef) {
                hamburguerRef.classList.toggle("active")

                if(hamburguerRef.classList.contains('active')) {
                    this.show_listFull = true
                } else {
                    this.show_listFull = false
                }
            }
        },
        open_listFull(ListFull_element: HTMLElement): void {
            ListFull_element.classList.add('active')
        },
        pass_eventToggle_theme(): void {
            this.$emit("pass_eventToggle_theme")
        }
    }
})
</script>

<template>
    
    <nav>
        <div class="container_main_center">
            <div id="content_navBar">
                <div id="container_logo">
                    <a href="http://localhost:3000">
                        <img src="/src/assets/images/CARLOS SAMPAIO _ DEV_LIGHT.png" alt="imagem da logo principal" v-if="show_logoNavBar">
                        <img src="/src/assets/images/CARLOS SAMPAIO _ DEV_DARK.png" alt="imagem da logo principal" v-else>
                    </a>
                </div>

                <ListNav id="listNav_navbar" :data_listNav="data_path_NavBar"/>

                <ButtonsTheme id="button_navbar" @toggleTheme="pass_eventToggle_theme" :show_btn_theme="show_btn_theme"/>


                <div class="hamburguer" @click="toggle_btn" ref="hamburguerRef">
                    <span class="line-span"></span>
                    <span class="line-span"></span>
                    <span class="line-span"></span>
                </div>

            </div>

            <ListFull v-if="show_listFull" @event_showListFull="open_listFull" :data_path_NavBar="data_path_NavBar" @toggle_theme="pass_eventToggle_theme" :show_btn_theme="show_btn_theme"/>
        </div>
    </nav>

</template>

<style scoped>
nav {
    /* border: 1px solid red; */
    width: 100vw;
    height: 5rem;
    background-color: var(--color--background);
    position: fixed;
    z-index: 1000;
}
#content_navBar {
    width: 100%;
    height: 5rem;
    /* border: 2px solid blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#container_logo {
    width: 25%;
    min-width: 20rem;
}
#container_logo > a > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}



.hamburguer {
    display: none;
    flex-direction: column;
    gap: 5px;
    z-index: 1000;
}



.hamburguer.active {
    position: fixed;
    top: 3%;
    left: 90%;

    /* descomentar caso precise mover o botão de lugar apos add de class */
}

.line-span {
    width: 30px;
    height: 3px;
    border-radius: 10px;
    background-color: #ffffff;
    transition: 0.5s;
}

.hamburguer.active .line-span:nth-child(2) {
    opacity: 0;
    transition: 0.3s;
}
.hamburguer.active .line-span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    transition: 0.5s;
    /* background-color: #000000; */
}
.hamburguer.active .line-span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    transition: 0.5s;
    /* background-color: #000000; */
}


.line-span:nth-child(1) {
    background-color: var(--color--text);
}
.line-span:nth-child(2) {
    background-color: var(--color--text);
}
.line-span:nth-child(3) {
    background-color: var(--color--text);
}


@media(max-width: 1000px) {
    .hamburguer {
        display: flex;
    }

    #listNav_navbar {
        display: none;
    }
    #button_navbar {
        display: none;
    }
}

@media(max-width: 500px) {
    #container_logo {
        min-width: 14rem;
    }
}
@media(max-width: 320px) {
    #container_logo {
        min-width: 10rem;
    }
}

@media(max-width: 250px) {
    #container_logo {
        min-width: 7rem;
    }
}

</style>
