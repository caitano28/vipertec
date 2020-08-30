<template>
  <nav class="sombra nav-header" role="navigation">
    <a
      class="toggle"
      @click="toggleMenu"
      v-if="!hideToggle"
      v-show="!isMenuVisible"
    >
      <i class="fa fa-bars"></i>
    </a>
    <a
      class="toggle"
      @click="toggleMenu"
      v-if="!hideToggle"
      v-show="isMenuVisible"
    >
      <i class="fa fa-times"></i>
    </a>
    <div class="container">
      <router-link to="/" area-label="ViperTec" class="brand-logo">
        <img :src="require(`@/assets/img/${logo}`)" :alt="title" class="logo" />
      </router-link>
      <div class="right hide-on-med-and-down">
        <ListItens :itens="menu" />
        <!-- <li v-for="(item, i) in menu" :key="i">
          <router-link :to="item.href" class="navlink">
            <i class="icon-align" :class="item.icon"></i>
            {{ item.name }}
          </router-link>
        </li> -->
      </div>
    </div>
  </nav>
</template>

<script>
import ListItens from "./ListItens";
import { mapState } from "vuex";
export default {
  name: "NavBar",
  props: {
    title: String,
    logo: String,
    hideToggle: Boolean,
  },
  data: () => ({}),
  // computed: mapState(["isMenuVisible", "menu"]),
  computed: mapState({
    isMenuVisible: (state) => state.isMenuVisible,
    menu: (state) => state.menu,
  }),
  components: { ListItens },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
};
</script>

<style>
/* vai aplicar a media query quando a tela tiver menor que 992px */
@media only screen and (max-width: 992px) {
  nav .brand-logo {
    /* left: 70%; */
    align-items: center;
    top: 20%;
    right: 66%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  nav > div.container {
    margin-left: -0px;
  }
  .logo {
    position: absolute;
    display: flex;
    justify-content: center;
    /* margin-left: 0px; */
    flex-grow: initial;
  }
  .hide-on-med-and-down {
    display: none !important;
  }
}
/* menu da navbar */
a.toggle {
  width: 80px;
  height: 100%;
  font-size: 1.2em;
  color: var(--primary-colo);
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px -120px 0px 0px;
}
a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.1);
  color: var(--secundary-color);
}
.logo {
  max-width: 200px;
  width: auto;
  height: auto;
  margin: 25px 0px 0px 0px;
}
nav .brand-logo {
  position: absolute;
  color: #fff;
  display: flex;
  font-size: 2.1rem;
  align-items: center;
  padding: 0;
}
.nav-header {
  min-height: 74px;
  background-color: var(--main-color);
  grid-area: header;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;
}

.icon-align {
  margin-right: 10px;
}
nav ul {
  margin: 0;
  line-height: 74px;
  /* display: inline-flex; */
}
nav ul li {
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  float: left;
  padding: 0;
}
nav ul a {
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  font-size: 1rem;
  color: #fff;
  padding: 0 15px;
  cursor: pointer;
}
nav ul a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.navlink:link,
.navlink:visited {
  color: var(--primary-color);
  font-weight: 100;
  display: inline-flex;
  text-align: center;
}
.navlink:hover {
  color: var(--secundary-color);
  text-decoration: none;
}
ul li {
  list-style: none;
  display: inline-flex;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
}
</style>
