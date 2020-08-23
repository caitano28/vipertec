<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible }">
    <NavBar title="ViperTec" logo="logovt.svg" :hideToggle="false" />
    <Content />

    <Menu />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "./components/template/NavBar";
import Menu from "./components/template/Menu";
import Content from "./components/template/Contet";

export default {
  name: "App",
  components: {
    Menu,
    NavBar,
    Content,
  },
  computed: mapState({ isMenuVisible: (state) => state.isMenuVisible }),
};
</script>

<style>
@font-face {
  font-family: "Roboto-Regular";
  src: url("./assets/fonts/Roboto-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
:root {
  --main-color: white;
  --primary-color: black;
  --secundary-color: red;
  --background-color: rgb(241, 240, 240);
}
* {
  font-family: "Roboto-Regular";
}
/* tamanho da font-awasome */
.svg-inline--fa {
  height: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  background-color: var(--background-color);
  grid-template-rows: 74px 1fr auto;
  grid-template-columns: 350px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu content";
  z-index: 1;
}
#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "content content";
}
body {
  margin: 0;
}
.icon-color {
  color: var(--primary-color);
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}

/* 2dp elevation modified*/
.sombra {
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
/*******************
  Utility Classes
*******************/
.hide {
  display: none !important;
}

.left-align {
  text-align: left;
}

.right-align {
  text-align: right;
}

.center,
.center-align {
  text-align: center;
}

.left {
  float: left !important;
}

.right {
  float: right !important;
}
/* container css */
.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
}

@media only screen and (min-width: 601px) {
  .container {
    width: 85%;
  }
}

@media only screen and (min-width: 993px) {
  .container {
    width: 70%;
  }
}
</style>
