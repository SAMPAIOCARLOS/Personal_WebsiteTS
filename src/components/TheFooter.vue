<script lang="ts">
import { defineComponent } from 'vue';

// Interface para itens da lista
interface ItensList {
  name: string;
  path: string;
}

// Interface para as listas de rodapé
interface ListsFooter {
  title: string;
  itensList: ItensList[];
}

interface Data {
  data_lists_footer: ListsFooter[][];
}

export default defineComponent({
  name: 'TheFooter',
  data(): Data {
    return {
      data_lists_footer: [
        [
          {
            title: 'Links contato',
            itensList: [
              { name: 'Inicio', path: 'http://localhost:3000/#header' },
              { name: 'Habilidades', path: 'http://localhost:3000/#container_skills' },
              { name: 'Projetos', path: 'http://localhost:3000/#container_project' },
              { name: 'Contato', path: '' }
            ]
          }
        ],
        [
          {
            title: 'Links contato',
            itensList: [
              { name: 'sampaiocarlos957@gmail.com', path: '' },
              { name: '(99)99999-9999', path: '' }
            ]
          }
        ],
        [
          {
            title: 'Redes sociais',
            itensList: [
              { name: 'Instagram', path: 'https://www.instagram.com/cadusilvaasp/' },
              { name: 'Linkedin', path: 'https://www.linkedin.com/in/carlos-sampaio-a02651265/' },
              { name: 'Github', path: 'https://github.com/SAMPAIOCARLOS' }
            ]
          }
        ]
      ]
    };
  }
});
</script>


<template>
    <footer>
        <div class="container_main_center">
            <div id="container_content_footer">
                <div id="box_logo">
                    <img src="/src/assets/images/CARLOS SAMPAIO _ DEV_DARK.png" alt="">

                    <p class="phrase_footer">Cada linha de código é um passo em direção a transformar ideias em realidade.</p>

                    <p class="phrase_footer">Nos vemos em breve!</p>
                </div>
                <div id="container_listsFooter">
                    <ul v-for="Arrays_obj in data_lists_footer" :key="Arrays_obj">
                        <li v-for="ObjTo_array in Arrays_obj" :key="ObjTo_array">
                            <h1>{{ ObjTo_array.title }}</h1>
                            <p v-for="arrayToObj in ObjTo_array.itensList" :key="arrayToObj">
                                <a :href="arrayToObj.path">{{ arrayToObj.name }}</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    /* border: 2px solid blue; */
    padding: 50px 0;
    background: var(--color--background);
    color: var(--color--text);
    
}
#container_content_footer {
    display: flex;
    justify-content: space-between;
}
#box_logo {
    width: 20%;
}
#box_logo > img {
    object-fit: contain;
    width: 80%;
}
.phrase_footer {
    font-weight: 100;
    font-size: 12px;
    margin-top: 20px;
}

#container_listsFooter {
    width: 70%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

ul {
    list-style: none;
    display: flex;
}
li {
    text-align: center;
    font-weight: 200;
}
a {
    color: var(--color--text);
    text-decoration: none;
}

@media(max-width: 1000px) {
    #box_logo {
        width: 30%;
    }
}
@media(max-width: 820px) {
    #container_content_footer {
        flex-wrap: wrap;
    }
    #box_logo {
        width: 100%;
    }
    #container_listsFooter {
        width: 100%;
    }
}

@media(max-width: 550px) {
    #container_content_footer {
        gap: 30px;
    }
    ul {
        width: 100%;
        justify-content: center;
    }
}

@media(max-width: 320px) {
    h1 {
        font-size: 7vw;
    }
    p {
        font-size: 4vw;
    }
}
</style>