<template>
  <div @click="$emit('changeActive')" id="btn-menu">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
  </div>
</template>

<script>
export default {
  name: 'ButtonMenu',
}
</script>

<style lang="scss" scoped>
  #btn-menu {
    position: fixed;
    z-index: 20;
    height: 60px;
    background-color: rgba(45, 45, 45, 0.902);
    top: 35px;
    left: 35px;
    border-radius: 8px;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    *{
      height: 6px;
      background-color: white;
      border-radius: 3px;
      transition: all 0.2s ease;
      &.line-1{
        width: 45px;
        margin-bottom: 5px;
      }
      &.line-2{
        width: 26px;
        margin-bottom: 5px;
      }
      &.line-3{
        width: 33px;
      }
    }
  }
  //Effect btn
  #btn-menu:hover .line-2,
  #btn-menu:hover .line-3 {
    width: 45px;
  }
</style>