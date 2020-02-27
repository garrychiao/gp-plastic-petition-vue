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
        <p>過去我們與其他團體成功推動<strong>禁用塑膠微粒</strong>以及實施<strong>限用一次性塑膠政策</strong>，這場「減塑運動」會一直持續下去，實踐源頭減塑，需要您進一步的支持，一起為減塑拿下更多里程碑!</p>
      </div>
      <div class="text-2">
        <p>實踐源頭減塑，需要您進一步的支持，一起為減塑拿下更多里程碑！</p>
      </div>
      <div class="counting-bar-container">
        <div class="counting-bar-out">
          <el-progress :stroke-width="22" :percentage="percent" :show-text="false" :color="barColor"></el-progress>
        </div>
        <div class="counting-text">
          <p>連署人數： <span class="inlight">{{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</span></p>
          <p>號召更多朋友參與，達到目標： <span class="inlight">20</span> 萬</p>
        </div>
      </div>
      <div class="btn-container">
        <el-row :gutter="24">
          <el-col :xs="{span: 18, offset: 3}" :sm="{span: 12}">
            <el-button round class="fb-share-btn" @click="share">
              FACEBOOK分享
            </el-button>
          </el-col>
          <el-col :xs="{span: 18, offset: 3}" :sm="{span: 12}">
            <el-button round class="donate-btn" @click="toDonate">
              捐款支持
            </el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Blank',
  props: {
    msg: String
  },
  data() {
    return {
      total: 0,
      percent: 0,
      barColor: '#eb9062',
    }
  },
  created() {
    this.getPetitionNumber();
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
  },
  methods: {
    async getPetitionNumber() {
      try {
        let target = 200000;
        let res = await axios.get('https://act.greenpeace.org/page/widget/399755');
        let response = res.data;
        
        let participation1 = response.data.rows[0].columns[4].value;
        // console.log(participation1);
        let participation2 = response.data.rows[1].columns[4].value;

        this.total = parseInt(participation1) + parseInt(participation2);
        this.percent = this.total / target * 100;
        
        // console.log(total);

        setTimeout(() => {
          this.$emit('removeCover');
        }, 1500);
      } catch (err) {
        console.log(err);
      }
    },
    share() {
      let title = '超市減塑，誰當先鋒 | 綠色和平'
      let text = '立即連署，要求十大零售通路，減少塑膠包裝！'
      let url = "https://act.gp/2NsMNQf"

      if (navigator.share) {
        navigator.share({
            title,
            text,
            url,
        }).then(() => console.log('Successfully shared'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        // console.log(url)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "pop", "width=600, height=400, scrollbars=no");
      }
    },
    toDonate() {
      let donateLink = 'https://act.gp/33tC25S';
      window.open(donateLink, '_blank');
    }
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
      line-height: 1.4;
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
        line-height: 1.4;
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
