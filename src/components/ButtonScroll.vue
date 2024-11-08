<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ButtonScroll',
    props: {
        show_iconScroll: { type: Boolean, required: true },
        pathHref: { type: String, required: true }
    }
})
</script>

<template>
    <aside id="container_icons_scroll">
        <a :href="pathHref">
            <img v-if="show_iconScroll" src="/src/assets/images/icons_scroll_dark.png" alt="">
            <img v-else src="/src/assets/images/icons_scroll_white.png" alt="">
        </a>
    </aside>
</template>

<style scoped>
#container_icons_scroll {
    width: 70px;
}

#container_icons_scroll > a > img {
    width: 100%;
}


@media(max-width: 1000px) {
    #container_icons_scroll {
        width: 50px;
    }
}

@media(max-width: 800px) {
    #container_icons_scroll {
        width: 50px;
    }
}
</style>
