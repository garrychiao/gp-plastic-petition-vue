<template>
  <div class="footer">
    <div class="content-container">
      <el-row :gutter="15">
        <el-col :xs="24" :md="4">
          <p class="copyright">© 2019 Greenpeace</p>
        </el-col>
        <el-col :xs="24" :md="9" :offset="1">
          <p class="intro">
            綠色和平致力於為地球發生，
  我們的存在是因為脆弱的地球需要改變、需要行動。
  但保護地球的使命不能僅靠綠色和平來完成，
  「您」就是改變世界的力量！
          </p>
        </el-col>
        <el-col :xs="24" :md="9" :offset="1">
          <el-row :gutter="15">
            <el-col :sm="12" :lg="6">
              <el-button plain round class="footer-btn" @click="openLink('https://www.greenpeace.org/taiwan')">
                主頁
              </el-button>
            </el-col>
            <el-col :sm="24" :lg="17" class="hidden-lg-and-down">
              <el-button plain round class="footer-btn">
                隱私政策與個人資料收集聲明
              </el-button>
            </el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :sm="24" :xl="6">
              <el-button plain round class="footer-btn" @click="openLink('http://act.greenpeace.org/page/45804/donate/1')">
                支持我們
              </el-button>
            </el-col>
            <el-col :sm="24" :xl="17" class="hidden-xl-only">
              <el-button plain round class="footer-btn" @click="openLink('https://www.greenpeace.org/taiwan/policies/privacy-and-cookies')">
                隱私政策與個人資料收集聲明
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
  },
  methods: {
    openLink (link) {
      // console.log(link)
      window.open(
        link + "?utm_campaign=2019-plastic_retailer&utm_source=change.greenpeace.org.tw&utm_medium=referral&utm_content=footer_link",
        '_blank'
      )
    }
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
      // width: 100%;
      margin: 10px 0;
      padding: 8px 16px;
      color: white;
      background-color: transparent;
    }
  }
}
@media (max-width: 991px) {
  .footer {
    background-image: url('../assets/img/mobile_footer.jpg');
    background-position: center bottom;
    background-size: cover;
    padding: 0 10px 20px 10px;
    .content-container {
      padding: unset;
      .copyright {
        transform: scale(0.8);
        float: right;
      }
      .intro {
        width: 70%;
      }
      .footer-btn {
        font-size: 0.8rem;
        width: auto;
        margin: 10px 0;
        padding: 8px 16px;
        color: white;
        background-color: transparent;
      }
    }
  } 
}
</style>
