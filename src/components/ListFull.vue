<script lang="ts">
import { ref, defineComponent } from 'vue';
import ButtonsTheme from './ButtonsTheme.vue';
import ListNav from './ListNav.vue';

export default defineComponent({
    name: 'TheHeader',
    components: { ListNav, ButtonsTheme },
    props: {
        data_path_NavBar: { type: Array, required: true },
        show_btn_theme: { type: Boolean, required: true }
    },
    data() {
        return {
            // Não há necessidade de usar `ref` dentro de `data()`, é preferível usar diretamente no `setup()` ou em `mounted()`.
        };
    },
    mounted() {
        // Verifique se o `list_full` está corretamente referenciado e se existe antes de emitir o evento.
        const list_full = this.$refs.list_full as HTMLElement | null;
        if (list_full) {
            this.$emit('event_showListFull', list_full);
        } else {
            console.warn('Referência a `list_full` não encontrada');
        }
    },
    methods: {
        toggle_theme(): void {
            this.$emit("toggle_theme");
        }
    }
});
</script>


<template>
    <div id="list_full" ref="list_full">
        <ButtonsTheme @click="toggle_theme" :show_btn_theme="show_btn_theme"/>

        <ListNav :data_listNav="data_path_NavBar"/>
    </div>
</template>

<style scoped>
#list_full {
    width: 40%;
    height: 100%;
    position: fixed;
    left: 100%;
    top: 0%;
    background-color: var(--color--background);
    z-index: 100;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-top-left-radius: 5vw;
    border-bottom-left-radius: 5vw;
    overflow: auto;
    gap: 50px;
    padding: 70px 0;
}

#list_full.active {
    left: 60%;
}



@media(min-width: 1000px) {
    #list_full {
        display: none;
    }
    
}

@media(max-width: 750px) {
    #list_full {
    width: 70%;
}

#list_full.active {
    left: 30%;
}
}

@media(max-width: 500px) {
#list_full {
    width: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

}

#list_full.active {
    left: 0%;
}
}
</style>