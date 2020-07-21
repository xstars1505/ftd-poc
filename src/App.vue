<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <Toast></Toast>
  </div>
</template>

<script>
import Toast from "primevue/toast";

export default {
  name: "App",
  components: { Toast }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
