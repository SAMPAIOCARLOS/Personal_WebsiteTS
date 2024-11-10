<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';

interface Data {
  BodyElement: HTMLElement;
  show_btn_theme: boolean;
  show_logoNavBar: boolean;
  show_iconScroll: boolean;
  theme: string;
}

export default defineComponent({
  name: 'App',
  components: { TheHeader, TheMain, TheFooter },
  data(): Data {
    return {
      BodyElement: document.body,  // Definindo diretamente
      show_btn_theme: false,  // Iniciado como false
      show_logoNavBar: false, // Iniciado como false
      show_iconScroll: false, // Iniciado como false
      theme: localStorage.getItem('theme') || 'light',  // Valor padrão 'light'
    };
  },
  mounted() {
    if (this.theme === 'light') {
      this.BodyElement.classList.add('theme_Light');
      this.show_btn_theme = true;
      this.show_logoNavBar = true;
      this.show_iconScroll = true;
    }
  },
  methods: {
    toggle_theme() {
      const isLight = this.BodyElement.classList.toggle("theme_Light");

      if (isLight) {
        console.log("light");
        this.show_btn_theme = true;
        this.show_logoNavBar = true;
        this.show_iconScroll = true;
        localStorage.setItem('theme', 'light');
      } else {
        console.log("dark");
        this.show_btn_theme = false;
        this.show_logoNavBar = false;
        this.show_iconScroll = false;
        localStorage.setItem('theme', 'dark');
      }
    }
  },
  computed: {
    showHeaderAndMain() {
      const hideOnRoutes = ['Details', 'Contact'];
      return !hideOnRoutes.includes(this.$route.name as string);
    }
  }
});
</script>


<template>
  <TheHeader v-if="showHeaderAndMain" @pass_eventToggle_theme="toggle_theme" :show_btn_theme="show_btn_theme" :show_logoNavBar="show_logoNavBar" :show_iconScroll="show_iconScroll"/>

  <TheMain v-if="showHeaderAndMain"/>

  <TheFooter v-if="showHeaderAndMain"/>

  <router-view 
  @pass_eventToggle_theme="toggle_theme"
   :show_btn_theme="show_btn_theme"
   :show_logoNavBar="show_logoNavBar"
   :show_iconScroll="show_iconScroll"
  >
  </router-view>

</template>

<style scoped>

</style>
