<template>
  <div class="last-img">
    <p class="EngGoth center">PROTECT OUR ONE AND ONLY EARTH</p>
    <el-button round class="scroll-btn hidden-md-and-up NotoSansCJKtc-Regular">
      立即連署
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'LastImg',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.last-img {
  p {
    margin: unset;
  }
  height: 55vw;
  background-image: url('../assets/img/last.jpg');
  background-position: center center;
  background-size: 101% 101%;
  text-align: center;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 2rem;
    border-bottom: 2px solid white;
    font-weight: bold;
  }
}
@media (max-width: 991px) {
  .last-img {
    height: 74vw;
    .center {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.2rem;
      border-bottom: 1px solid white;
      font-weight: bold;
      white-space: nowrap;
    }
    .scroll-btn {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #eb9062;
      color: white;
      letter-spacing: 2pt;
      font-size: 1.8rem;
      border-radius: 50px;
    }
  } 
}
</style>
