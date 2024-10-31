<script lang="ts">
import { defineComponent } from 'vue'

interface dataIconsTech {
    name_icon: string;
    name_tech: string;
    color: string
}

interface data_project {
    id: number;
    path_img: string;
    title: string;
    text: string;
    data_Icon: dataIconsTech[];
}

interface Data {
    dataCards_project: data_project[]
}

export default defineComponent({
    name: "CardsProject",
    data(): Data {
        return {
            dataCards_project: [
                { 
                    id: 1,
                     path_img: '/src/assets/images/detalhes_telas_website.png',
                      title: 'Personal WebSite',
                       text: 'Este projeto é um portfólio pessoal interativo desenvolvido com Vue.js. ',
                        data_Icon: [
                            { name_icon: 'logo-vue', name_tech: 'Vue', color: '#42B883' }
                        ],
                },
                { 
                    id: 2,
                     path_img: '/src/assets/images/detalhes_telas_easybank.png',
                      title: 'Easybank',
                       text: 'Este é um projeto de landing page com quatro seções para promover o banco Easybank.',
                        data_Icon: [
                            { name_icon: 'logo-vue', name_tech: 'Vue', color: '#42B883' }
                        ],
                },
                { 
                    id: 3,
                     path_img: '/src/assets/images/detalhes_telas_discoverland.png',
                      title: 'Discover land',
                       text: 'Este projeto exibe fotos de países e informações detalhadas em um modal, com um campo de busca.',
                        data_Icon: [
                            { name_icon: 'logo-vue', name_tech: 'Vue', color: '#42B883' }
                        ],
                },
                { 
                    id: 4,
                     path_img: '/src/assets/images/detalhes_telas_agendamento_fmrb.png',
                      title: 'Agedamento FMRB',
                       text: 'Projeto governamental para desenvolvimento de um sistema de agendamento de visitas para à (FMRB).',
                        data_Icon: [
                            { name_icon: 'logo-html5', name_tech: 'HTML5', color: '#F05032' },
                            { name_icon: 'logo-css3', name_tech: 'CSS3', color: '#1098fa' },
                            { name_icon: 'logo-javascript', name_tech: 'JAVASCRIPT', color: '#F7DF1E' }
                        ],
                }
            ]
        }
    }
})
</script>

<template>
    <div v-for="itemDataProject in dataCards_project" :key="itemDataProject.id" class="cardProject">
        <div class="contaier_imgProject">
            <img :src="itemDataProject.path_img" alt="">
        </div>
        <div class="textContent_cardProject">
            <h1>{{ itemDataProject.title }}</h1>

            <p>{{ itemDataProject.text }}</p>

            <ul>
                <li v-for="itemData_icon in itemDataProject.data_Icon" :key="itemData_icon">
                    <ion-icon :name="itemData_icon.name_icon" :style="{ color: itemData_icon.color }"></ion-icon>
                    <p>{{ itemData_icon.name_tech }}</p>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
.cardProject {
    /* border: 3px solid gainsboro; */
    width: 45%;
    min-width: 30rem;
}
.contaier_imgProject {
    /* border: 3px solid rgb(34, 255, 0); */
    width: 100%;
    height: 20rem;
}
.contaier_imgProject > img {
    object-fit: contain;
    width: 100%;
    height: 110%;
}

.textContent_cardProject {
    /* border: 2px solid red; */
    padding: 15px 90px 0 90px;
    color: var(--color--text);
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
}
h1 {
    font-weight: 300;
}
p {
    font-weight: 200;
}
ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
}

ion-icon {
    font-size: 2.5vw;
    /* color: #42B883; */
    transition: all 0.3s;
    cursor: pointer;
}
ion-icon:hover {
    scale: 1.2;
}
@media(max-width: 1093px) {
    .cardProject {
        width: 70%;
    }
}

@media(max-width: 600px) {
    .cardProject {
        min-width: 100%;
    }
}
</style>