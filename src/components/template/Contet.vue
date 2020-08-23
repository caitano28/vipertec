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
  padding: 20px;
  width: 100%;
}
</style>
