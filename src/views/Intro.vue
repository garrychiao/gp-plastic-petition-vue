<template>
  <div class="intro">
    <div class="content-container">
      <div class="paragraph">
        <p class="NotoSansCJKtc-Regular hidden-sm-and-down">全臺十大零售通路內的生鮮蔬果、烘焙、熟食和蛋類區<br>約 
          <span class="EngGoth inlight emphasis">77%</span> 的品項<span class="inlight">使用塑膠包裝</span>
        </p>
        <p class="NotoSansCJKtc-Regular hidden-md-and-up mobile-text-head">全臺十大零售通路內的
        </p>
        
        <p class="NotoSansCJKtc-Regular hidden-md-and-up">生鮮蔬果、烘焙、熟食和蛋類區<br>約 
          <span class="EngGoth inlight emphasis">77%</span> 的品項<span class="inlight">使用塑膠包裝</span>
        </p>
        <p class="NotoSansCJKtc-Regular">這些塑膠短短被我們用不到 <span class="EngGoth inlight emphasis">1</span>
            週<br>就會造成環境超過<span class="EngGoth inlight emphasis">1</span>世紀的負面影響</span>
        </p>
      </div>
      <div class="img-container hidden-sm-and-down">
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
      <div class="img-container hidden-md-and-up">
        <el-row :gutter="15">
          <el-col :span="9" :offset="3">
            <img src="@/assets/img/mobile_seagull.jpg" width="100%" alt="">
            <img src="@/assets/img/mobile_crab.jpg" width="100%" alt="">
          </el-col>
          <el-col :span="9">
            <img src="@/assets/img/mobile_turtle.jpg" width="100%" alt="">
            <img src="@/assets/img/mobile_trash.jpg" width="100%" alt="">
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
@media (max-width: 991px) {
  .intro {
    height: auto;
    padding-left: unset;
    letter-spacing: 2pt;
    .mobile-text-head {
      margin-bottom: 20px;
    }
    .img-container {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  } 
}
</style>
