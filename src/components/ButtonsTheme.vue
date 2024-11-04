<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ButtonsTheme',
        props: {
            show_btn_theme: { type: Boolean, required: true }
        },
        methods: {
            toggle_theme(): void {
                this.$emit('toggleTheme')
            }
        }


    })
</script>

<template>
    <button v-if="!show_btn_theme" @click="toggle_theme">
        <ion-icon name="moon-outline"></ion-icon>
        <p><i>Dark mode</i></p>
    </button>

    <button v-else @click="toggle_theme">
        <ion-icon name="sunny-outline"></ion-icon>
        <p><i>Light mode</i></p>
    </button>
</template>

<style scoped>
button {
    cursor: pointer;
    width: 12%;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.3vw;
    border: none;
    font-weight: 100;
    transition: all 0.3s;
}
button:hover {
    text-shadow: 2px 2px 20px var(--color--shadow);
}
ion-icon {
    font-size: 1.5vw;
    color: var(--color--text);
}
p {
    color: var(--color--text);
}

@media(max-width: 1000px) {
    button {
        width: 80%;
        justify-content: center;
        font-size: 3vw;
    }
    ion-icon {
        font-size: 3vw;
    }
}

@media(max-width: 600px) {
    button {
        width: 80%;
        justify-content: center;
        font-size: 5vw;
    }
    ion-icon {
        font-size: 5vw;
    }
}

</style>