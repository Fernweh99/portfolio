<template>
 <div id="home">
   <div class="container-fluid content">
     <div class="row">
      <div class="col-12 col-md-4 d-flex justify-content-center">
        <img :src="require('../assets/img/foto_2.jpg')" alt="" class="image">
      </div>
      <div class="col-10 offset-1 col-md-8 offset-md-0 d-flex flex-column justify-content-end">
        <h2 class="display-1 m-0">Hello.</h2>
        <h2 class="display-1 m-0">I'm <span class="my-name">Daniele Di Mento</span></h2>
      </div>
    </div>
     <div class="line"></div>
     <div class="row">
       <div class="col-9">
         <h2 class="display-1 job">Jr. Full Stack Developer</h2>
        </div>
       <div class="col-3 ref-links">
         <a href="https://www.linkedin.com/in/daniele-di-mento-987736232/" target="_blank">
           <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Fernweh99" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/daniele_di_mento/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="scss">
  @import "../assets/scss";
  #home {
    width: 100%;
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 100px;
      .image{
        text-align: end;
        width: 300px;
        height: 340px;
        border-radius: 20px;
        object-fit: cover;
        object-position: center;
      }
      h2 {
        font-weight: 700;
      }
      .my-name {
        color: $secondary-color;
      }
      .line {
        width: 90%;
        height: 8px;
        background: white;
        border-radius: 10px;
        margin: 50px auto 40px auto;
      }
      .job {
        text-align: center;
      }
      .ref-links {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        i {
          font-size: 55px;
        }
        a {
          color: $secondary-color;
          margin: 5px;
        }
      }
    }
  }
</style>