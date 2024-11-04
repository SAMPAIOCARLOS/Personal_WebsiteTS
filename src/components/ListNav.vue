<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ListNav',
        props: {
            data_listNav: { type: Array, required: true }
        },
        methods: {
            router_contact(title: string): void {
                if(title === 'Contato') {

                    alert(title)
                    this.$router.push({ name: 'Contact', params: { title } });
                }
            }
        }
    })
</script>

<template>
    <ul>
        <li v-for="item_NavBar in data_listNav" :key="item_NavBar.id" @click="router_contact(item_NavBar.text_content)">
            <ion-icon class="icons_lisFull" :name="item_NavBar.icon"></ion-icon>
            <a :href="item_NavBar.path">{{ item_NavBar.text_content }}</a>
        </li>
    </ul>
</template>

<style scoped>
ul {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    list-style: none;
    /* border: 1px solid red; */
}
li {
    font-size: 1.4vw;
    border-bottom: 3px solid transparent;
    padding: 0 0.5rem;
    padding-top: 3px;
    transition: all 0.5s;
}
li:hover {
    border-bottom: 3px solid #4036FF;
}
a {
    text-decoration: none;
    color: var(--color--text);
}

.icons_lisFull {
    display: none;
}

@media(max-width: 1000px) {
    ul {
        flex-direction: column;
        height: 35%;
        min-height: 300px;
        /* align-items: flex-start; */
        border: none;
    }
    li {
        display: flex;
        gap: 10px;
        font-size: 2vw;
        padding: 0 1rem;
    }
    .icons_lisFull {
        display: flex;
        color: var(--color--text);
    }
}

@media(max-width: 750px) {
    li {
        font-size: 3vw;
    }
}
@media(max-width: 600px) {
    li {
        font-size: 4.5vw;
    }
}
</style>