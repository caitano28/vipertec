<template>
  <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Menu",
  computed: mapState({
    isMenuVisible: (state) => state.isMenuVisible,
  }),
};
</script>

<style>
.menu {
  grid-area: menu;
  background-color: rgb(41, 40, 40);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 2;
}
</style>
