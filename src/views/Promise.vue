<template>
  <div class="promise">
    <div class="content-container">
      <el-row type="flex" justify="space-around" class="header">
        <el-col :span="16">
          <p class="NotoSansCJKtc-Regular">我們鼓勵零售商怎麼做？</p>
          <p class="NotoSansCJKtc-Regular">【希望臺灣十大連鎖賣場公開承諾】</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="{span: 10, offset: 1}" class="item">
          <el-row>
            <el-col :span="4">
              <span class="EngGoth inlight emphasis w-10percent">1</span>
            </el-col>
            <el-col :span="20">
              <p class="NotoSansCJKtc-Medium subtitle">提出總體減塑政策</p>
              <p class="NotoSansCJKtc-Regular text">超市減塑需要長期的規劃！零售商減少塑膠使用足跡，需要有完整的減塑政策，才能讓企業確實履行企業社會責任。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :md="{span: 10, offset: 1}" class="item">
          <el-row>
            <el-col :span="4">
              <span class="EngGoth inlight emphasis w-10percent">2</span>
            </el-col>
            <el-col :span="20">
              <p class="NotoSansCJKtc-Medium subtitle">提出總體減塑政策</p>
              <p class="NotoSansCJKtc-Regular text">超市減塑需要長期的規劃！零售商減少塑膠使用足跡，需要有完整的減塑政策，才能讓企業確實履行企業社會責任。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :md="{span: 10, offset: 1}" class="item">
          <el-row>
            <el-col :span="4">
              <span class="EngGoth inlight emphasis w-10percent">3</span>
            </el-col>
            <el-col :span="20">
              <p class="NotoSansCJKtc-Medium subtitle">提出總體減塑政策</p>
              <p class="NotoSansCJKtc-Regular text">超市減塑需要長期的規劃！零售商減少塑膠使用足跡，需要有完整的減塑政策，才能讓企業確實履行企業社會責任。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :md="{span: 10, offset: 1}" class="item">
          <el-row>
            <el-col :span="4">
              <span class="EngGoth inlight emphasis w-10percent">4</span>
            </el-col>
            <el-col :span="20">
              <p class="NotoSansCJKtc-Medium subtitle">提出總體減塑政策</p>
              <p class="NotoSansCJKtc-Regular text">超市減塑需要長期的規劃！零售商減少塑膠使用足跡，需要有完整的減塑政策，才能讓企業確實履行企業社會責任。</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promise',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.promise {
  p {
    margin: unset;
  }
  overflow: hidden;
  height: 55vw;
  padding-left: 10%;
  padding-top: 10%;
  background-color: #f9f9f9;
  color: #644837;
  font-size: 1.5rem;
  letter-spacing: 5pt;
  .content-container {
    .header {
      text-align: center;
    }
    .item {
      margin-top: 10%;
      .emphasis {
        font-size: 5rem;
        line-height: 1;
      }
      .subtitle {
        padding-top: 9%;
        font-size: 1.2rem;
      }
      .text {
        padding-top: 9%;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
