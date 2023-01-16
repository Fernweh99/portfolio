<template>
  <div id="main-links">
    <div class="cs_links">
      <ul>
        <li>
          <router-link @click="$emit('closeBarLinks')" :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link @click="$emit('closeBarLinks')" :to="{name: 'resume'}">Resume</router-link>
        </li>
        <li>
          <router-link @click="$emit('closeBarLinks')" :to="{name: 'works'}">Works</router-link>
        </li>
        <li>
          <router-link @click="$emit('closeBarLinks')" :to="{name: 'contacts'}">Contacts</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLinks',
}
</script>

<style lang="scss">
  @import "../assets/scss";
  #main-links {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 300px;
      height: 100%;
      max-height: 100%;
      overflow: hidden;
      flex-basis: 300px;
      flex-shrink: 0;
      background-color: rgb(52, 49, 49);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      border-width: 0 2px 0 0;
      border-color: $primary-color;
      border-style: solid;
      .cs_links{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        a{
          position: relative;
          font-size: 60px;
          text-decoration: none;
          color: white;
          &.router-link-exact-active{
            color: $secondary-color;
            &::after{
              content: "";
              position: absolute;
              height: 4px;
              width: 80%;
              border-radius: 10px;
              background: $secondary-color;
              transition: width .2s;
              left: 0;
              bottom: 0;
            }
          }
        }
        a::after{
          content: "";
          position: absolute;
          height: 4px;
          width: 0;
          border-radius: 10px;
          background: $secondary-color;
          transition: width .2s;
          left: 0;
          bottom: 0;
        }
        a:hover::after {
          width: 80%;
        }
        li {
          list-style-type: none;
        }
        .ref-links {
          display: flex;
          justify-content: space-between;
          i {
            font-size: 60px;
          }
        }
      }
    }
</style>