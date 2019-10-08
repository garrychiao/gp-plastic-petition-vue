<template>
  <div class="responsibility">
    <div class="content-container">
      <div class="header">
        <p class="NotoSansCJKtc-Regular">我們可以怎麼做？</p>
      </div>
      <div class="methods">
        <el-row :gutter="15" class="item">
          <el-col :span="3">
            <img src="@/assets/img/responsibility/icon-1.svg" width="100%" alt="">
          </el-col>
          <el-col :span="16" :offset="2">
            <p class="subtitle NotoSansCJKtc-Medium">源頭減塑</p>
            <p class="text">產生塑膠垃圾的速度，遠超過環境負載的能力，從源頭減少才是根本解決之道。</p>
          </el-col>
        </el-row>
        <el-row :gutter="15" class="item">
          <el-col :span="3">
            <img src="@/assets/img/responsibility/icon-2.svg" width="100%" alt="">
          </el-col>
          <el-col :span="16" :offset="2">
            <p class="subtitle NotoSansCJKtc-Medium">重複使用</p>
            <p class="text">每個物品的製造都在消耗資料，要物盡其用，而非用幾次就丟棄。</p>
          </el-col>
        </el-row>
        <el-row :gutter="15" class="item">
          <el-col :span="3">
            <img src="@/assets/img/responsibility/icon-3.svg" width="100%" alt="">
          </el-col>
          <el-col :span="16" :offset="2">
            <p class="subtitle NotoSansCJKtc-Medium">重新思考消費習慣</p>
            <p class="text">現代人生活講求快速、方便，但讓我們方便的同時，是不是讓地球增加更多負擔了呢？</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Responsibility',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.responsibility {
  height: 60vw;
  padding-left: 10%;
  .content-container {
    padding-top: 10%;
    color: #644837;
    font-size: 1.5rem;
    letter-spacing: 5pt;
    .header {
      text-align: center;
    }
    .methods {
      padding: 5% 10% 5% 20%;
      .item {
        padding-top: 5%;
      }
    }
  }
}
</style>
