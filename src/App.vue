<template>
  <!-- Transition on the main links -->
  <Transition name="translate" mode="out-in">
    <main-links v-show="isActive" @closeBarLinks="isActive= false"></main-links>
  </Transition>
  <!-- toggle btn for links -->
  <button-menu @changeActive="isActive = !isActive"></button-menu>
  <!-- use vue router for switching pages -->
  <main :class="{'trans-main': isActive}">
    <Transition name="fade" mode="out-in">
      <router-view></router-view>
    </Transition>
  </main>
  <!-- include footer copyright -->
  <MyFooter/>
</template>

<script>
import MainLinks from './components/MainLinks.vue';
import ButtonMenu from './components/ButtonMenu.vue';
import MyFooter from './layout/MyFooter.vue';

export default {
  name: 'App',
  components: {
    MainLinks,
    ButtonMenu,
    MyFooter,
},
  data(){
    return {
      isActive: false,
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss";
  // Transitions
  html {
    .translate-enter-active,
    .translate-leave-active {
      transition: transform 0.3s linear;
    }
    .translate-enter-from,
    .translate-leave-to {
      transform: translateX(-300px);
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.3s linear;
    }
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
  // Style main
    height: 100%;
    overflow-x: hidden; ;
    body {
      height: 100%;
      overflow-x: hidden; ;
      #app{
        display: flex;
        background-color: $primary-color ;
        height: 100%;
        color: white;
        main {
          height: 100%;
          overflow-x: hidden; ;
          overflow-y: scroll;
          display: flex;
          flex-grow: 1;
          transition: transform 0.3s linear, filter 0.3s linear;
          &.trans-main{
            transform: translateX(300px);
            filter: blur(5px);
            -webkit-filter: blur(5px);
          }
        }
      }
    }
  }
</style>
