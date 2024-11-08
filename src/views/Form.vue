<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Form',
    props: {
        dataCreateForm: { type: Array, required: true }
    }
})
</script>

<template>
    <form>

        <aside>
            <h2>Contate-me</h2>

            <h1>Entre em contato</h1>
        </aside>

        <aside v-for="item_createInputs in dataCreateForm" :key="item_createInputs.id">
            <label :for="item_createInputs.name">{{ item_createInputs.name }}: </label>
            <input :type="item_createInputs.type" :id="item_createInputs.name" :class="item_createInputs.class">
        </aside>

        <aside>
            <label for="message">Mensagem:</label>
            <textarea name="message" id="message" class="inputs"></textarea>
        </aside>

        

        <aside>
            <button>Enviar</button>
        </aside>
    </form>
</template>

<style scoped>
form {
    width: 40%;
    min-height: 70vh;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
    color: var(--color--text);
    background: var(--color--background--form);
    backdrop-filter: blur(10px);
    padding: 4rem 2rem;
    border-radius: 10px;
    background: blur(2px);
}
aside {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.inputs {
    padding: 10px;
    outline: none;
    border: 3px solid transparent;
    background: var(--color--background--inputs);
    /* backdrop-filter: blur(20px); */
    border-radius: 5px;
    transition: all 0.3s;
    color: var(--color--text);
    
}

.inputs:focus {
    border: 3px solid #005eff;
    box-shadow: 0px 0px 7px #005eff;
}
textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 7rem;
    max-height: 7rem;
}

h1 {
    font-size: 2.5vw;
}

button {
    padding: 5px;
    border: none;
    transition: all 0.3s;
    border-radius: 6px;
    background-color: #4036FF;
    font-size: 1.7vw;
    font-weight: bold;
    color: #ffffff;
}


@media(max-width: 1000px) {
    form {
        width: 100%;
    }
}
@media(max-width: 800px) {
    h1 {
        font-size: 4.5vw;
    }

    button {
        font-size: 3vw;
    }

}

@media(max-width: 600px) {
    h1 {
        font-size: 6.5vw;
    }

    button {
        font-size: 5vw;
    }

}

@media(max-width: 600px) {
    h1 {
        font-size: 7.5vw;
    }

    button {
        font-size: 6vw;
    }

}
</style>