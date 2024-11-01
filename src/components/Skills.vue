<script lang="ts">
import { defineComponent } from 'vue';

interface iconsSkills {
    id: number | null,
    nameIcon: string | null,
    name: string | null,
}

interface Data {
    namesSkilss: string[],
    data_iconsSkills: iconsSkills[],
    highlightedIndex: HTMLElement | null
}

export default defineComponent({
    name: 'Skills',
    data(): Data {
        return {
            namesSkilss: ['HTML', 'CSS', 'JAVASCRIPT', 'VUE.JS', 'GIT', 'GITHUB', 'FIGMA'],
            data_iconsSkills: [
                { id: 1, nameIcon: 'logo-html5', name: 'HTML' },
                { id: 2, nameIcon: 'logo-css3', name: 'CSS' },
                { id: 3, nameIcon: 'logo-javascript', name: 'JAVASCRIPT' },
                { id: 4, nameIcon: 'logo-vue', name: 'VUE' },
                { id: 5, nameIcon: 'git-branch-outline', name: 'GIT' },
                { id: 6, nameIcon: 'logo-github', name: 'GITHUB' },
                { id: 7, nameIcon: 'logo-figma', name: 'FIGMA' }
            ],
            highlightedIndex: null
        }
    },
    methods: {
        highlight(index: number) {
            this.highlightedIndex = index
        },
        removehighlight() {
            this.highlightedIndex = null
        },
        getHighlightClass(index: number) {
            if (this.highlightedIndex === index) {
                switch(index) {
                    case 0: return 'highlighted_html';
                    case 1: return 'highlighted_css';
                    case 2: return 'highlighted_js';
                    case 3: return 'highlighted_vue';
                    case 4: return 'highlighted_git';
                    case 5: return 'highlighted_github';
                    case 6: return 'highlighted_figma';
                    default: return '';
                }
            }
            return '';
        }
    },

})
</script>

<template>
    <div id="container_skills">
        <div class="container_main_center">
            <div id="container_group_content_skills">

                <section id="container_textContent_skills">
                    <h2 class="color_blue">Conheça um pouco</h2>

                    <h1>HABILIDADES</h1>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate iusto laboriosam reiciendis deserunt minus, sapiente doloremque autem, repellendus quo, at assumenda enim. Maxime quaerat, iure numquam ipsam nulla natus aliquid!</p>

                    <div id="box_namesSkills">
                        <h2 class="color_blue">hard skills</h2>
                        <ul id="list_namesSkills">
                            <li v-for="(itemSkill, index) in namesSkilss" :key="index" @mouseover="highlight(index)" @mouseleave="removehighlight(index)">
                                {{ itemSkill }}
                            </li>
                        </ul>
                    </div>
                </section>

                <section id="container_icons_tech">
                    <ul id="list_iconsTech">
                        <li v-for="(item_iconSkills, index) in data_iconsSkills" :key="index" :class="getHighlightClass(index)">
                            <ion-icon :name="item_iconSkills.nameIcon"></ion-icon>
                            <p class="nameTech">{{ item_iconSkills.name}}</p>
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    </div>
</template>

<style scoped>
#container_skills {
    width: 100%;
    min-height: 100vh;
    /* border: 3px solid red; */
    background: var(--img--background);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

}

#container_group_content_skills {
    width: 100%;
    min-height: 100vh;
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

#container_textContent_skills {
    /* border: 3px solid green; */
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
h1 {
    font-size: 3vw;
    color: var(--color--text);
}
h2 {
    font-weight: bold;
    font-size: 2vw;
}

p {
    color: var(--color--text);
    font-size: 1.4vw;
}
#list_namesSkills {
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 20px;
}

#list_namesSkills > li {
    transition: all 0.3s;
    list-style: none;
    color: var(--color--text);
    font-size: 1.3vw;
    cursor: pointer;
    font-weight: bold;
}

#list_namesSkills > li:hover {
    color: #4036FF;
}



#container_icons_tech {
    /* border: 3px solid #fff; */
    width: 45%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 100px;
}

#list_iconsTech {
    list-style: none;
    /* border: 2px solid red; */
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}
#list_iconsTech > li {
    font-size: 4vw;
    transition: all 0.4s;
    color: var(--color--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s;
}
#list_iconsTech > li:hover {
    scale: 1.2;
}
.nameTech {
    font-size: 0.9rem;
}

@media(max-width: 1130px) {
    #container_group_content_skills {
        justify-content: space-between;
    }
}
@media(max-width: 1050px) {
    #container_textContent_skills {
        width: 100%;
        padding: 50px 0;
    }

    h1 {
        font-size: 5ex;
    }
    h2 {
        font-size: 4vw;
    }

    p {
        font-size: 2.5vw;
    }
    #list_namesSkills > li {
        font-size: 2.5vw;
    }

    #container_icons_tech {
        width: 100%;
    }
    #list_iconsTech {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #list_iconsTech > li {
        font-size: 6vw;
    }
    .nameTech {
        font-size: 1.2rem;
    }
}

@media(max-width: 800px) {
    #list_iconsTech {
        justify-content: left;
    }
}

@media(max-width: 500px) {

    h1 {
        font-size: 7vw;
    }
    h2 {
        font-size: 5vw;
    }
    p {
        font-size: 4vw;
    }
    #list_iconsTech > li {
        font-size: 9vw;
        width: 40%;
    }
    #list_namesSkills > li {
        font-size: 3.5vw;
    }
}

@media(max-width: 300px) {
    #list_iconsTech > li {
        font-size: 30vw;
        width: 100%;
    }
}
</style>