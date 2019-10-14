<template>
  <div class="home">
    <div class="title">
      <div class="title-1"></div>
      <div class="logo">
        <img src="@/assets/img/gp-logo.png" width="100%" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  height: 55vw;
  background-image: url('../assets/img/web_header.jpg');
  background-size: 101% 101%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  .title {
    position: absolute;
    bottom: 30px;
    width: 80%;
    right: 0;
    padding: 50px 50px;
    .title-1 {
      height:120px;
      // background-repeat: no-repeat;
      // background-position: center center;
      // background-size: 100%;
    }
    .logo {
      width: 60%;
      float: right;
    }
  }
}
@media (max-width: 991px) {
  .home {
    background-image: url('../assets/img/mobile_header.jpg');
    background-size: cover;
    background-position: center;
    z-index: 200;
    height: 50vh;
    .title {
      padding: 60px 25px;
      .title-1 {
        height: 30px;
      }
    }
  }
}
</style>
