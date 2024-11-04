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
    background: #1B1B1B;
    padding: 2rem;
    border-radius: 10px;
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
    background: #333333;
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
</style>