<template>
  <div class="footer">
    <div class="content-container">
      <el-row :gutter="15">
        <el-col :span="4">
          <p>© 2019 Greenpeace</p>
        </el-col>
        <el-col :span="9" :offset="1">
          <p>
            綠色和平致力於為地球發生，
  我們的存在是因為脆弱的地球需要改變、需要行動。
  但保護地球的使命不能僅靠綠色和平來完成，
  「您」就是改變世界的力量！
          </p>
        </el-col>
        <el-col :span="9" :offset="1">
          <el-row :gutter="15">
            <el-col :span="6">
              <el-button plain round class="footer-btn">
                主頁
              </el-button>
            </el-col>
            <el-col :span="17">
              <el-button plain round class="footer-btn">
                隱私政策與個人資料收集聲明
              </el-button>
            </el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :span="10">
              <el-button plain round class="footer-btn">
                捐助支持
              </el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  overflow: hidden;
  padding-left: 40vw;
  background-color: #eb9062;
  color: white;
  font-size: 0.8rem;
  .content-container {
    padding: 40px 0;
    .footer-btn {
      font-size: 0.8rem;
      width: 100%;
      margin: 10px 0;
      padding: 8px 16px;
      color: white;
      background-color: transparent;
    }
  }
  
}
</style>
