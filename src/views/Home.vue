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
  background-color: burlywood;
  position: relative;
  .title {
    position: absolute;
    bottom: 0;
    width: 50%;
    right: 0;
    padding: 50px 50px;
    .title-1 {
      height:120px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100%;
      background-image: url('../assets/img/title.svg');
    }
    .logo {
      width: 50%;
      float: right;
    }
  }
}
</style>
