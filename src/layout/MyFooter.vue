<template>
  <footer>
    <p class="m-0">Site completely handcrafted with VueJs © Daniele Di Mento</p>
  </footer>
</template>

<script>
export default {
 name: 'MyFooter',
}
</script>

<style lang="scss" scoped>
  footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(131, 141, 150, 0.458);
    text-align: center;
    z-index: 10;
  }
</style>