<template>
  <div class="last-img">
    <div class="center">
      <p class="NotoSansCJKtc-Regular title">地球只有一個<br>而你可以守護它</p>
      <p class="EngGoth title-eng">PROTECT OUR ONE AND ONLY EARTH</p>
      <el-button round class="scroll-btn hidden-md-and-up NotoSansCJKtc-Regular" v-scroll-to="'#form-container'">
        立即連署
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastImg',
  props: {
    msg: String
  },
  methods: {
    scrollToForm () {

      let formPos = document.getElementById("form").offsetTop;
      console.log(formPos);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.last-img {
  padding-left: 10%;
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
    .title {
      font-size: 6rem;
      letter-spacing: 5pt;
      font-weight: bold;
    }
    .title-eng {
      font-size: 2rem;
      letter-spacing: 5pt;
      font-weight: bold;
      border-bottom: 2px solid white;
    }
  }
}
@media (min-width: 992px) and (max-width: 1919px) {
.last-img {
  .center {
    .title {
      font-size: 4rem;
      letter-spacing: 5pt;
      font-weight: bold;
    }
    .title-eng {
      font-size: 1.6rem;
      letter-spacing: 3pt;
      font-weight: bold;
      border-bottom: 2px solid white;
    }
  }
}
}
@media (max-width: 991px) {
  .last-img {
    height: 74vw;
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: bold;
      white-space: nowrap;
      .title {
        font-size: 4rem;
        letter-spacing: 5pt;
        font-weight: bold;
      }
      .title-eng {
        font-size: 1.4rem;
        letter-spacing: 3pt;
        font-weight: bold;
        border-bottom: 1px solid white;
      }
      .scroll-btn {   
        margin-top: 10%;
        position: relative;
        background-color: #eb9062;
        color: white;
        letter-spacing: 2pt;
        font-size: 1.8rem;
        border-radius: 50px;
      }
    }
  } 
}
</style>
