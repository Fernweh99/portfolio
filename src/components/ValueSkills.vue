<template>
  <div class="col-4">
    <h4 class="">{{label}}</h4>
  </div>
  <div class="col-8">
    <div v-for="index in 5" :key="index" class="circle" :class="index <= vote ? 'circle-done' : ''"></div>
  </div>
</template>

<script>
export default {
 name: 'ValueSkills',
 props: {
   label: String,
   vote: String,
 },
 data(){
   return {
   }
 }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss";
.circle {
      display: inline-block;
      margin: 2px;
      height: 27px;
      width: 27px;
      border-radius: 50%;
      border: 3px solid goldenrod;
      &.circle-done{
        border-color: $secondary-color;
      }
    }
</style>