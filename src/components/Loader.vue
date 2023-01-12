<template>
  <div class="bg-main">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
  .bg-main {
    position: absolute;
    background-color: rgba(128, 128, 128, 0.623);
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

  }
  .spinner-border {
    position: absolute;
    width: 60px !important; 
    height: 60px !important;
    top: 44%;
    left: 46%;
    z-index: 2;
    width: 100px;
  }
</style>