<template>
  <div class="promise">
    <div class="content-container">
      <el-row type="flex" justify="space-around" class="header">
        <el-col :md="16" :xs="24" :sm="24">
          <p class="NotoSansCJKtc-Regular">超市減塑 四大訴求</p>
          <p class="NotoSansCJKtc-Regular">【一起鼓勵零售通路來減塑】</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="{span: 10, offset: 1}" class="item">
          <el-row>
            <el-col :span="4">
              <span class="EngGoth inlight emphasis w-10percent">1</span>
            </el-col>
            <el-col :span="20">
              <p class="NotoSansCJKtc-Medium subtitle">提出整體減塑政策</p>
              <p class="NotoSansCJKtc-Regular text">減塑需要長期的規劃，業者應承諾整體塑膠減量目標。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :md="{span: 10, offset: 1}" class="item">
          <el-row>
            <el-col :span="4">
              <span class="EngGoth inlight emphasis w-10percent">2</span>
            </el-col>
            <el-col :span="20">
              <p class="NotoSansCJKtc-Medium subtitle">設定全面淘汰一次性塑膠年限</p>
              <p class="NotoSansCJKtc-Regular text">包含塑膠包裝以及製品，業者需有明確目標和時間表。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :md="{span: 10, offset: 1}" class="item">
          <el-row>
            <el-col :span="4">
              <span class="EngGoth inlight emphasis w-10percent">3</span>
            </el-col>
            <el-col :span="20">
              <p class="NotoSansCJKtc-Medium subtitle">倡議與創新</p>
              <p class="NotoSansCJKtc-Regular text">以重複使用為原則，開發可規模化的替代方案，並投入員工訓練以及消費者溝通，推廣替代方案。</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :md="{span: 10, offset: 1}" class="item">
          <el-row>
            <el-col :span="4">
              <span class="EngGoth inlight emphasis w-10percent">4</span>
            </el-col>
            <el-col :span="20">
              <p class="NotoSansCJKtc-Medium subtitle">資訊透明</p>
              <p class="NotoSansCJKtc-Regular text">全面盤點並公布塑膠足跡，包括塑膠包裝以及塑膠製品的重量、數量以及種類，並公開減塑成果，引領臺灣零售產業一起邁向無塑。</p>
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
@media (max-width: 991px) {
  .promise {
    height: auto;
    padding: 10% 0 20% 0;
    letter-spacing: 3pt;
    .content-container {
      .header {
        line-height: 2;
        font-size: 1.7rem;
      }
      .item {
        margin-top: 10%;
        padding: 0 12% 0 16%;
        .emphasis {
          font-size: 5rem;
          line-height: 1;
        }
        .subtitle {
          padding-top: 9%;
          font-size: 1.5rem;
        }
        .text {
          padding-top: 9%;
          font-size: 1.5rem;
        }
      }
    }
  }
}
@media (max-width: 768px) and (max-width: 991px) {
  .promise {
    .content-container {
      .item {
        .subtitle {
          padding-top: 4%;
        }
        .text {
          padding-top: 4%;
        }
      }
    }
  }
}
</style>
