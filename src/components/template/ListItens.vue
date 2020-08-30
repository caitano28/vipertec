<template>
  <ul>
    <li v-for="(item, i) in itens" :key="i">
      <router-link :to="item.href" class="navlink">
        <i class="icon-align" :class="item.icon"></i>
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListItens",
  props: {
    itens: Array,
  },
  data: () => ({}),
};
</script>

<style>
.icon-align {
  margin-right: 10px;
}
</style>
