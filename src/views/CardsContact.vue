<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CardsContact',
    props: {
        data_createCards: { type: Array, required: true }
    }
})
</script>

<template>
    <div v-for="item_CardsContact in data_createCards" :key="item_CardsContact.id" class="card">
        <div class="box_icon">
            <ion-icon :name="item_CardsContact.path_icon"></ion-icon>
        </div>

        <div class="box_text">
            <h2>{{ item_CardsContact.title }}</h2>

            <p>{{ item_CardsContact.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 45%;
    height: 35vh;
    min-height: 13rem;
    background-color: var(--color--background--card);
    border-radius: 8px;
    border: 3px solid transparent;
    transition: all 0.4s;
}

.card:hover {
    border: 3px solid #ffffff;
    box-shadow: 0 0 14px #ffffff;
}
.box_icon {
    width: 100%;
    height: 30%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
}

.box_text {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

h2 {
    font-size: 1.4vw;
}

p {
    font-size: 0.7vw;
}

@media(max-width: 1200px) {
    h2 {
        font-size: 2vw;
        text-align: center;
    }

    p {
        font-size: 1.2vw;
    }
}

@media(max-width: 1000px) {
    h2 {
        font-size: 3.5vw;
    }

    p {
        font-size: 2vw;
    }

    .box_icon {
        font-size: 6vw;
    }

}

@media(max-width: 500px) {
    .card {
        width: 90%;
    }

    h2 {
        font-size: 5.5vw;
    }

    p {
        font-size: 4vw;
    }

    .box_icon {
        font-size: 8vw;
    }
}

@media(max-width: 340px) {
    .card {
        width: 100%;
    }

    .box_icon {
        font-size: 10vw;
    }
}
</style>