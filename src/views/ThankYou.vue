<template>
  <div class="thank">
    <div class="content-container NotoSansCJKtc-Regular">
      <div class="title">
        <p class="EngGoth">THANK YOU</p>
      </div>
      <div class="subtitle">
        <p>感謝您參加連署，成為推動源頭減塑的力量！</p>
      </div>
      <div class="text-1">
        <p>過去我們成功推動限用塑膠袋收費、禁用塑膠微粒，和2019年7月實施的內用禁止提供一次用塑膠吸管，等多場環境減塑勝利。</p>
      </div>
      <div class="text-2">
        <p>實踐源頭減塑，需要您進一步的支持，一起為減塑拿下更多里程碑！</p>
      </div>
      <div class="counting-bar-container">
        <div class="counting-bar-out">
          <div class="counting-bar-in">

          </div>
        </div>
        <div class="counting-text">
          <p>號召更多朋友參與，達到目標： <span class="inlight">15</span> 萬</p>
        </div>
      </div>
      <div class="btn-container">
        <el-row :gutter="24">
          <el-col :xs="{span: 18, offset: 3}" :sm="{span: 12}">
            <el-button round class="fb-share-btn">
              FACEBOOK分享
            </el-button>
          </el-col>
          <el-col :xs="{span: 18, offset: 3}" :sm="{span: 12}">
            <el-button round class="donate-btn">
              捐款支持
            </el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blank',
  props: {
    msg: String
  },
  created() {
    $(function() {
      //tracking code
      window.dataLayer = window.dataLayer || [];
      
      dataLayer.push({
          'event': 'gaEvent',
          'eventCategory': 'petitions',
          'eventAction': 'signup',
          'eventLabel': '2019-plastic_retailer',
          'eventValue' : undefined
      });
      
      dataLayer.push({
          'event': 'fbqEvent',
          'contentName': '2019-plastic_retailer',
          'contentCategory': 'Petition Signup'
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.thank {
  p {
    margin: unset;
  }
  .inlight {
    color: #eb9062;
  }
  box-shadow: 10px -5px 15px 0 rgba(214, 207, 207, 0.5);
  background-color: #f9f9f9;
  letter-spacing: 3pt;
  .content-container {
    padding: 5% 14%;
    color: #644837;
    .title {
      width: 100%;
      text-align: center;
      color: #eb9062;
      font-size: 4rem;
      margin-bottom: 5%;
    }
    .subtitle {
      width: 100%;
      text-align: center;
      color: #a5a5a5;
      margin-bottom: 15%;
    }
    .text-1 {
      margin-bottom: 10%;
    }
    .counting-bar-container {
      padding-top: 10%;
      .counting-bar-out {
        border: 1px solid black;
        padding: 5px;
        background-color: white;
        border-radius: 20px;
        width: 100%;  
        .counting-bar-in {
          border-radius: 20px;
          background-color: #eb9062;
          width: 80%;  
          height: 20px;
        }
      }
      .counting-text {
        padding-top: 25px;
      }
    }
    .btn-container {
      padding-top: 10%;
      padding-bottom: 8%;
      .fb-share-btn {
        border-radius: 50px;
        font-size: 1.2rem;
        color: white;
        background-color: #eb9062;
        width: 100%;
        padding: 8% 20%;
      }
      .donate-btn {
        width: 100%;
        border-radius: 50px;
        font-size: 1.2rem;
        color: white;
        background-color: #ffc91c;
        padding: 8% 20%;
      }
    }
  }
}
@media (max-width: 1919px) and (min-width: 992px) {
  .thank {
    .content-container {
      .btn-container {
        .fb-share-btn {
          padding: 8% 10%;
        }
        .donate-btn {
          padding: 8% 10%;
        }
      }
    }
  } 
}
@media (max-width: 991px) {
  .thank {
    margin-top: -52vh;
    padding-top: 54vh;
    .content-container {
      .btn-container {
        .fb-share-btn {
          letter-spacing: 3pt;
          padding: 8% 10%;
          margin-bottom: 10%;
        }
        .donate-btn {
          letter-spacing: 3pt;
          padding: 8% 10%;
        }
      }
    }
  } 
}
</style>
