<template>
  <aside class="menu sombra" v-show="isMenuVisible">
    <ListItens :itens="menu" class="menuItem" />
  </aside>
</template>

<script>
import { mapState } from "vuex";
import ListItens from "./ListItens";
export default {
  name: "Menu",
  computed: mapState({
    isMenuVisible: (state) => state.isMenuVisible,
    menu: (state) => state.menu,
  }),
  components: { ListItens },
};
</script>

<style>
.menu {
  grid-area: menu;
  background-color: var(--main-color);
  display: block;
  z-index: 2;
  padding: 0;
  /* height: 100%; */
  margin: 0px;
}
ul.menuItem {
  display: flex;
  flex-direction: column;
  padding-left: 0;
}
.menuItem > li {
  font-size: 1.5em;
  align-items: center;
  justify-items: center;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  /* float: left; */
  padding: 0px;
  margin: 0px;
  line-height: 64px;
}

ul.menuItem a:hover {
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
}
ul.menuItem li a svg {
  margin-left: 10px;
}
</style>
