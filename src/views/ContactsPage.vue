<template>
  <div id="contacts">
    <div class="container">
      <h1 class="display-1 text-center">Contacts</h1>
      <!-- iteractive info box -->
      <div class="wrapper">
        <!-- index boxes -->
        <div 
          v-for="box in dateBoxes" 
          :key="box.uniqueName"
          @click="toggleCtyBox(box)"
          class="box text-center"
          :class="box.visible == true ? 'active' : ''"
        >
          <i :class="box.icon"></i>
          <h3>{{box.title}}</h3>
        </div>
        <!-- main content box -->
        <div class="content-main">
          <!-- show if active contact info -->
          <div v-show="activeName == 'contacts'" class="contacts-info">
            <h4>Contact information</h4>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="d-flex align-items-center my-3">
                  <i class="fa-solid fa-location-dot circle"></i>
                  <div class="ms-3">
                    <h5>Address</h5>
                    <span>Spadafora, 98048 Messina, Italy</span>
                  </div>
                </div>
                <div class="d-flex align-items-center my-3">
                  <i class="fa-solid fa-mobile-screen circle"></i>
                  <div class="ms-3">
                    <h5>Phone</h5>
                    <span>+39 3703076119</span>
                  </div>
                </div>
                <div class="d-flex align-items-center my-3">
                  <i class="fa-regular fa-envelope circle"></i>
                  <div class="ms-3">
                    <h5>Email</h5>
                    <a href="mailto:daniele.dimento@gmail.com">daniele.dimento@gmail.com</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 text-center mt-3">
                <h4>Follow me</h4>
                <div class="ref-links">
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
          <!-- show if active form email -->
          <div v-show="activeName == 'email'" class="form-email">
            <div class="row">
              <div class="col-12">
                <h4 class="mb-1">Contact form</h4>
              </div>
              <div v-if="messageModal" :class="successEmail == true ? 'alert-success' : 'alert-danger'" class="alert p-2 mt-0 mb-1 mx-1 col-12" role="alert">
                {{ messageModal }}
              </div>
              <div class="col-12 col-md-6">
                <p class="label"><span class="text-danger">* </span>What is your name?</p>
                <div class="input-group">
                  <span class="input-group-text"><i class="fa-solid fa-signature"></i></span>
                  <input type="text" id="name" v-model="form.name" class="form-control" placeholder="es: Mario">
                </div>

                <p class="label"><span class="text-danger">* </span>And your email?</p>
                <div class="input-group">
                  <span class="input-group-text"><i class="fa-regular fa-envelope"></i></span>
                  <input type="email" v-model="form.email" placeholder="mario@example.com" class="form-control">
                </div>
              </div>
              <div class="col-12 col-md-6">
                <p class="label"><span class="text-danger">* </span>Write me here..</p>
                <textarea class="form-control message" v-model="form.message" id="exampleFormControlTextarea1" placeholder="Right there!" rows="5"></textarea>
              </div>
              <div class="col-12">
                <p class="label"><span class="text-danger">* </span>..About?</p>
                <div class="abouts-container">
                  <div 
                    v-for="about in abouts"
                    :key="about"
                    @click="activeAbtBox(about)"
                    :class="about == form.aboutQuery ? 'active' : ''"
                    class="about-box">

                    <span>{{about}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div @click="sendEmail" class="send-email">
              <span>Send <i class="fa-solid fa-paper-plane"></i></span>
            </div>
            <Loader v-if="loadingEmail"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import Loader from '@/components/Loader.vue';
export default {
  components: { Loader },
  name: 'ContactsPage',
  data() {
    return {
      dateBoxes : [
        {
          icon: 'fa-solid fa-circle-info',
          title: 'Contacts info',
          uniqueName : 'contacts',
          visible: true,
        },
        {
          icon: 'fa-solid fa-paper-plane',
          title: 'Send me an email',
          uniqueName: 'email',
          visible: false,
        },
      ],
      abouts: [
        'Job', 'Collaboration', 'More info', 'just talk'
      ],
      activeName: 'contacts',
      loadingEmail: false,
      openModal: false,
      messageModal: '',
      successEmail: false,
      form: {
        name: '',
        email: '',
        message: '',
        aboutQuery: '',
      }
    }
  },
  methods: {
    toggleCtyBox(currentBox) {
      this.dateBoxes.forEach(item => {
        item.visible = false;
      });
      currentBox.visible = true;
      this.activeName = currentBox.uniqueName;
    },
    activeAbtBox(newQuery) {
      this.form.aboutQuery = newQuery;
    },
    errorForm() {
      this.loadingEmail = false;
      this.successEmail = false;
      this.messageModal = 'All params are require!';
    },
    resetForm() {
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      this.form.aboutQuery = "";
    },
    validEmail(email) {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (validRegex.test(email)) {
        return true;
      } else {
        return false;
      }
    },
    sendEmail() {
      this.loadingEmail = true
      if (!this.form.email || !this.form.name || !this.form.message || !this.form.aboutQuery) {
        this.errorForm();
      }
      else if (!this.validEmail(this.form.email)) {
        this.loadingEmail = false;
        this.successEmail = false;
        this.messageModal = 'Enter a valid email!';
      }
      else {
        emailjs.send('service_l6wef4o', 'template_gpprqqk', this.form, '3FSwyc4R_ZRfDpgiQ')
        .then(() => {
          this.loadingEmail = false;
          this.successEmail = true;
          this.messageModal = "Message sent!"

        }, () => {
          this.loadingEmail = false;
          this.successEmail = false;
          this.messageModal = "Ops.. something went wrong, retry later"
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss";
#contacts {
  overflow-x: hidden; ;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  .container {
    padding-top: 80px;
  }
  // main box
  .wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    max-width: 900px;
    flex-wrap: wrap;
    color: #373232;
    // category boxes
    .box {
      width: calc(100% / 2);
      padding: 20px 0;
      border-radius: 15px 10px 0 0;
      background-color: #d5d5d5;
      cursor: pointer;
      &.active {
        background-color: white;
      }
      i {
        font-size: 40px;
      }
      h3 {
        font-size: 10px;
      }
    }
    // Main Content
    .content-main{
      margin-bottom: 35px;
      min-height: 400px;
      background-color: white;
      border-radius: 0 0 15px 15px;
      width: 100%;
      overflow: scroll;
      .contacts-info,
      .address-info,
      .form-email {
        padding: 15px 25px;
      }
      //contact info
      i {
        &.circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #373232;
          color: white;
          display: flex;
          font-size: 22px;
          justify-content: center;
          align-items: center;
        }
      } a {
        color: #373232;
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
          color: $primary-color;
          margin: 5px;
        }
      }
      // Form email
      .form-email {
        min-height: 400px;
        position: relative;
        .label {
          margin: 0;
          margin-bottom: 5px;
          font-size: 20px;
        }
        .input-group {
          margin-bottom: 20px;
        }
        .message {
          height: 130px;
        }
        .abouts-container {
          display: flex;
          flex-wrap: wrap;
          max-width: 90%;
        }
        .about-box {
          padding: 10px 15px;
          margin: 5px 10px 5px 0;
          border-radius: 10px;
          background-color: $primary-color;
          color:white;
          cursor: pointer;
          transition: background-color ease-in-out 0.3s;
          &:hover {
            background-color: $secondary-color;
          }
          &.active {
            background-color: $secondary-color;
          }
        }
        .send-email {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 100px;
          width: 100px;
          background-color: $secondary-color;
          text-align: center;
          line-height: 100px;
          border-radius: 15px 0 0 0;
          cursor: pointer;
          color: white;
          font-weight: 800;
          font-size: 25px;
        }
      }
    }
  }
  h1 {
    font-weight: 600;
  }
}
</style>