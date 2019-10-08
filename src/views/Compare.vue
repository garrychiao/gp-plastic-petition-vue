<template>
  <div class="compare">
    <div class="content-header">
      <p class="NotoSansCJKtc-Regular">輕鬆減塑的第一步：從選擇購物環境開始</p>
    </div>
    <div class="content-container">
      <div class="compare-container">
        <p class="EngGoth floating-subtitle">PROTECT OUR ONE AND ONLY EARTH</p>
        <div class="left">
          <div class="info">
            <p>超市現況</p>
            <el-row type="flex" justify="space-around">
              <el-col :span="16" class="img-div"></el-col>
            </el-row>
          </div>
        </div>
        <div class="right">
          <div class="info">
            <p>超市減塑</p>
            <el-row type="flex" justify="space-around">
              <el-col :span="16" class="img-div"></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Compare',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.compare {
  overflow: hidden;
  p {
    margin: unset;
    font-size: 1.5rem;
  }
  .content-header {
    padding-left: 5%;
    height: 5vw;
    width: 100%;
    color: #644837;
    text-align: center;
    p {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .content-container {
    .floating-subtitle {
      font-size: 1.2rem;
      position: absolute;
      top: 31vw;
      margin-left: -7vw;
      transform: rotate(-90deg);
    }
    .compare-container {
      display: flex;
    }
    color: white;
    text-align: center;
    .left {
      padding-left: 10%;
      background-color: #5c775f;
      height: 50vw;
      width: 45%;
      .img-div {
        background-image: url('../assets/img/web_current.jpg');
      }
    }
    .right {
      background-color: #ffc769;
      height: 50vw;
      width: 45%;
      .img-div {
        background-image: url('../assets/img/web_plasticfree.jpg');
      }
    }
    .info {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      .img-div {
        margin-top: 10%;
        width: 24vw;
        height: 24vw;
        background-position: center center;
        background-size: 102% 102%;
      }
    }
    
  }
}
</style>
