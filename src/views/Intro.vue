<template>
  <div class="intro">
    <div class="content-container">
      <div class="paragraph">
        <p class="NotoSansCJKtc-Regular">全臺十大零售通路內的生鮮蔬果、烘焙、熟食和蛋類區<br>約 
          <span class="EngGoth inlight emphasis">77%</span> 的品項<span class="inlight">使用塑膠包裝</span>
        </p>
        <p class="NotoSansCJKtc-Regular">這些塑膠短短被我們用不到 <span class="EngGoth inlight emphasis">1</span>
            週<br>就會造成環境超過<span class="EngGoth inlight emphasis">1</span>世紀的負面影響</span>
        </p>
      </div>
      <div class="img-container">
        <el-row :gutter="15">
          <el-col :span="6" :offset="3">
            <img src="@/assets/img/web_crab.jpg" width="100%" alt="">
          </el-col>
          <el-col :span="6">
            <img src="@/assets/img/web_turtle.jpg" width="100%" alt="">
            <img src="@/assets/img/web_seagull.jpg" width="100%" alt="">
          </el-col>
          <el-col :span="6">
            <img src="@/assets/img/web_trash.jpg" width="100%" alt="">
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro {
  overflow: hidden;
  height: 70vw;
  padding-left: 10%;
  color: #644837;
  text-align: center;
  letter-spacing: 5pt;
  padding-top: 10%;
  p {
    font-size: 1.5rem;
  }
  .emphasis {
    font-size: 5rem;
  }
  .img-container {
    img {
      margin-bottom: 10px;
    }
  }
}
</style>
