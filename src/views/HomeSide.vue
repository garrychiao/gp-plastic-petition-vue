<template>
  <div class="home-side">
    <div class="icon">
      <img src="@/assets/img/earth-icon.png" alt="">
    </div>
    <div class="content">
      <p class="NotoSansCJKtc-Regular">我們每一次的消費，都在為我們想要的購物環境投票，而你想要怎樣的購物環境呢？</p>
      <p class="EngGoth">#PLASTICFREE</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSide',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-side {
  p {
    margin: unset;
    padding-top: 10px;
  }
  width: 100%;
  height: 55vw;
  color: white;
  background-color: #eb9062;
  .icon {
    // height: 30px;
    padding: 10% 10% 5% 10%;
    text-align: right;
    img {
      width: 40px;
    }
  }
  .content {
    padding: 0 22% 10% 10%;
    letter-spacing: 3pt;
  }
}
@media (max-width: 1919px) and (min-width: 992px) {
  .home-side {
    .icon {
      padding: 5% 10% 5% 10%;
      img {
        width: 30px;
      }
    }
  }
}
@media (max-width: 991px) {
  .home-side {
    position: relative;
    z-index: 200;
    margin-top: -10vh;
    height: auto;
    width: 60%;
    .icon {
      padding: 10% 10% 0 0;
      img {
        width: 25px;
      }
    }
    .content {
      padding: 0 6% 10% 6%;
    }
  }
}
</style>
