<script lang="ts">
import { defineComponent, onBeforeUnmount, PropType } from 'vue';
import NavBar from './NavBar.vue';
import ButtonScroll from './ButtonScroll.vue';
import Typed from 'typed.js';

interface IconHeaderType {
  id: number;
  path: string;
  name: string;
}

interface TypedOptions {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  cursorChar: string;
  backDelay: number;
  loop: boolean;
}

interface Data {
  data_icons_socialHeader: IconHeaderType[];
  array_names: string[];
  typed: Typed | null;
  path_href: string;
}

export default defineComponent({
  name: 'TheHeader',
  components: { NavBar, ButtonScroll },
  data(): Data {
    return {
      data_icons_socialHeader: [
        { id: 1, path: 'https://www.linkedin.com/in/carlos-sampaio-a02651265/', name: 'logo-linkedin' },
        { id: 2, path: 'https://github.com/SAMPAIOCARLOS', name: 'logo-github' },
        { id: 3, path: 'https://mail.google.com/mail/u/1/?pli=1#inbox', name: 'mail-outline' }
      ],
      array_names: ['Desenvolvedor front-end', 'Front-end developer', 'Desenvolvedor front-end', 'Front-end developer'],
      typed: null,
      path_href: '#container_skills'
    };
  },
  props: {
    show_btn_theme: { type: Boolean as PropType<Boolean>, required: true },
    show_logoNavBar: { type: Boolean as PropType<Boolean>, required: true },
    show_iconScroll: { type: Boolean as PropType<Boolean>, required: true }
  },
  methods: {
    pass_eventToggle_theme(): void {
      this.$emit('pass_eventToggle_theme');
    }
  },
  mounted() {
    const options: TypedOptions = {
      strings: this.array_names,
      typeSpeed: 80,
      backSpeed: 40,
      cursorChar: '|',
      backDelay: 1000,
      loop: true
    };

    // Instanciando o Typed.js
    this.typed = new Typed('.typed-element', options);
  },
  beforeUnmount() {
    // Limpeza da instância de Typed.js
    if (this.typed) {
      this.typed.destroy();
    }
  }
});
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

            <ButtonScroll :show_iconScroll="show_iconScroll" :pathHref="path_href"/>

            
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