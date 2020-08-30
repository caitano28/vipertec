<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
.content {
  grid-area: content;
  background-color: var(--background-color);
  padding: 0px;
  width: 100%;
  z-index: 0;
  height: 3000px;
}
</style>
