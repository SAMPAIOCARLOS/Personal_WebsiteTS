<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';


  interface Data {
    BodyElement: HTMLElement | null;
    show_btn_theme: boolean | null;
    show_logoNavBar: boolean | null;
    show_iconScroll: boolean | null;
    theme: string | null;
  }

  export default defineComponent({
    name: 'App',
    components: { TheHeader, TheMain },
    data(): Data {
      return {
        BodyElement: null,
        show_btn_theme: null,
        show_logoNavBar: null,
        show_iconScroll: null,
        theme: localStorage.getItem('theme')
      }
    },
    mounted() {
      this.BodyElement = document.body;

        if (this.theme === 'light') {
          this.BodyElement.classList.add('theme_Light');
          this.show_btn_theme = true;
          this.show_logoNavBar = true;
          this.show_iconScroll = true;
        }
    },
    methods: {
      toggle_theme() {

        this.BodyElement.classList.toggle("theme_Light");

        if(this.BodyElement.classList.contains("theme_Light")) {
          console.log("dark");
          this.show_btn_theme = true;
          this.show_logoNavBar = true;
          this.show_iconScroll = true;

          localStorage.setItem('theme', 'light');
        } else {
          console.log("light");
          this.show_btn_theme = false;
          this.show_logoNavBar = false;
          this.show_iconScroll = false;
          localStorage.setItem('theme', 'dark');
        }
      }
    }
  })
</script>

<template>
  <TheHeader  @pass_eventToggle_theme="toggle_theme" :show_btn_theme="show_btn_theme" :show_logoNavBar="show_logoNavBar" :show_iconScroll="show_iconScroll"/>

  <TheMain />
</template>

<style scoped>

</style>
