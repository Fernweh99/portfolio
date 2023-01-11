<template>
  <div class="timeline-card">
    <div class="d-flex">
      <div class="temporal-timeline">
        <div class="timeline">
          <div v-if="last" class="dotline"></div>
        </div>
      </div>
      <div class="content-timeline">
        <h3>{{item.title}}</h3>
        <div class="position-relative">
          <div class="dotline"></div>
          <time>{{item.date}}</time>
        </div>
        <h6 class="my-1">{{item.role}}</h6>
        <span class="badje" v-for="skill, index in item.skills" :key="index">
          {{skill}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TemporalCard',
  props: {
    item: Object,
    last: Boolean,
  }
}
</script>

<style lang="scss">
  @import "../assets/scss";
  .timeline-card {
    margin: -5px 0;
    .dotline{
      border-radius: 50%;
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: goldenrod;
    }
    .temporal-timeline {
      flex-basis: 30px;
      flex-shrink: 0;
      .timeline {
        height: 100%;
        width: 7px;
        border-radius: 8px;
        background-color: $secondary-color;
        position: relative;
        .dotline {
          bottom: 0px;
          left: -4px;
        }
      }
    }.content-timeline {
      padding-bottom: 20px;
      .dotline{
        top: 5px;
        left: -34px;
      } time {
        color: goldenrod
      } .badje {
        display: inline-block;
        padding: 0px 5px;
        background-color: #433f3f;
        color: $secondary-color;
        font-weight: 800;
        margin-left: 10px;
        margin-bottom: 8px;
        border-radius: 5px;
      }
    }
  }
</style>