<template>
  <div class="home">
    <div class="title">
      <div class="logo">
        <img src="@/assets/img/gp-logo.png" width="100%" alt="">
      </div>
      <div class="nav-container">
        <el-button class="nav-button is-active">
          我要連署
        </el-button>
        <el-button class="nav-button" @click="directTo('https://change.greenpeace.org.tw/2019/plastic-copvote/')">
          網路票選
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
    directTo(url) {
      window.location.href = url;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  overflow: hidden;
  height: 55vw;
  background-image: url('../assets/img/web_header.jpg');
  background-size: 101% 101%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  .title {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    padding: 50px 100px;
    display: flex;
    .logo {
      width: 30%;
      // float: left;
    }
    .nav-container {
      width: 70%;
      padding-left: 5%;
      .nav-button {
        margin-left: 5%;
        background-color: transparent;
        border: none;
        font-size: 1.4rem;
        color: #644837;
        border-radius: 0;
      }
      .nav-button.is-active {
        border-bottom: 2px solid #644837;
      }
      .nav-button:hover {
        color: #eb9062;
        border-bottom: 2px dashed #eb9062;
      }
    }
  }
}
@media (max-width: 991px) {
  .home {
    background-image: url('../assets/img/mobile_header.jpg');
    background-size: cover;
    background-position: top;
    z-index: 200;
    height: 95vw;
    .title {
      padding: 10px;
      top: 0;
      float: right;
      .logo {
        width: 50%;
        padding-left: unset;
      }
      .nav-container {
        padding-left: unset;
        .nav-button {
          padding: 5px 10px;
          margin-left: 5%;
          background-color: transparent;
          border: none;
          font-size: 1rem;
          color: #644837;
          border-radius: 0;
        }
        .nav-button.is-active {
          border-bottom: 2px solid #644837;
        }
        .nav-button:hover {
          color: #eb9062;
          border-bottom: 2px dashed #eb9062;
        }
      }
    }
  }
}
</style>
