<template>
  <div class="form">
    <div class="content-container">
      <div class="title">
        <p class="NotoSansCJKtc-Regular">立即連署，要求各大超市賣場，減少塑膠包裝！</p>
      </div>
      <div class="subtitle">
        <p class="NotoSansCJKtc-Regular">綠色和平會把你的訴求，轉達給各企業。</p>
      </div>
      <div class="marts-icon">
        <el-row :gutter="10">
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4, offset: 1}">
            <img src="@/assets/img/marts/a-mart.png" width="100%" alt />
          </el-col>
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4}">
            <img src="@/assets/img/marts/family.png" width="100%" alt />
          </el-col>
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4}">
            <img src="@/assets/img/marts/px-mart.png" width="100%" alt />
          </el-col>
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4}">
            <img src="@/assets/img/marts/costco.png" width="100%" alt />
          </el-col>
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4}">
            <img src="@/assets/img/marts/wellcome.png" width="100%" alt />
          </el-col>
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4, offset: 1}">
            <img src="@/assets/img/marts/simple-mart.png" width="100%" alt />
          </el-col>
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4}">
            <img src="@/assets/img/marts/rt-mart.png" width="100%" alt />
          </el-col>
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4}">
            <img src="@/assets/img/marts/711.png" width="100%" alt />
          </el-col>
          <el-col :xs="{span: 8}" :sm="{span: 8}" :md="{span: 4}">
            <img src="@/assets/img/marts/carrefour.png" width="100%" alt />
          </el-col>
        </el-row>
      </div>
      <div class="form-inputs">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          label-position="top"
          class="NotoSansCJKtc-Regular"
        >
          <el-form-item label="電子信箱" prop="email" required>
            <el-input placeholder="greenpeace@gmail.com" v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-row :gutter="30">
            <el-col :span="10">
              <el-form-item label="姓氏" prop="lastName" required>
                <el-input v-model="ruleForm.lastName" placeholder="王"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="名字" prop="firstName" required>
                <el-input v-model="ruleForm.firstName" placeholder="小明"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :md="24" :xl="17">
              <el-form-item label="電話（0912345678 或 02-23612351）" prop="phone" required>
                <el-input v-model="ruleForm.phone" placeholder="0912345678"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :md="12" :xl="7">
              <el-form-item label="出生年份" prop="yearOfBirth" required>
                <el-date-picker type="year" v-model="ruleForm.yearOfBirth" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col
              :xs="{span: 3, offset: 1}"
              :sm="{span: 3, offset: 1}"
              :md="{span: 3, offset: 1}"
              :xl="{span: 1, offset: 1}"
            >
              <el-form-item label class="check-box">
                <el-checkbox v-model="ruleForm.moreInfo"></el-checkbox>
              </el-form-item>
            </el-col>
            <el-col :xs="20" :sm="20" :md="20" :xl="21">
              <p
                class="checkbox-text"
              >我要即時收到最新專案訊息，知道更多參與和協助的方法。（綠色和平尊重並保障您的個人隱私資料，您隨時可取消訂閱，請參考隱私保護政策。）</p>
            </el-col>
          </el-row>
          <div class="submit-btn-container">
            <el-form-item>
              <el-button
                round
                class="submit-btn NotoSansCJKtc-Regular"
                @click="submitForm('ruleForm')"
              >立即連署</el-button>
            </el-form-item>
          </div>
        </el-form>

        <form method="post" @submit.prevent="test" id="hiddenForm" style="">
          <input type="hidden" name="hidden" class="en__hiddenFields" value />
          <input
            type="hidden"
            name="sessionId"
            value="8c45bf2eeb0b4aedb4eeb6a527fbfe9c-server10228"
          />
          <input type="hidden" name="gatewaykey" value />
          <input type="hidden" name="gatewayaccountid" value />
          <input type="hidden" name="gatewaymode" value />
          <input
            id="en__field_supporter_emailAddress"
            type="hidden"
            name="supporter.emailAddress"
            value="g50905g@gmail.com"
            placeholder="電子信箱*"
          />
          <input
            id="en__field_supporter_NOT_TAGGED_19"
            type="hidden"
            name="supporter.NOT_TAGGED_19"
            value="chiao"
            placeholder="中文姓名*"
          />
          <input
            id="en__field_supporter_lastName"
            type="hidden"
            name="supporter.lastName"
            value="chiao"
            placeholder="姓氏*"
          />
          <input
            id="en__field_supporter_firstName"
            type="hidden"
            name="supporter.firstName"
            value="chiao"
            placeholder="名字*"
          />
          <input
            id="en__field_supporter_phoneNumber"
            type="hidden"
            name="supporter.phoneNumber"
            value="0958283083"
            placeholder="連絡電話*"
          />
          <select 
            name="supporter.NOT_TAGGED_6" value="1993"></select>
          <input
            id="en__field_supporter_questions_7276"
            checked
            type="hidden"
            value="Y"
            name="supporter.questions.7276"
          />
          <input
            type="hidden"
            name="supporter.NOT_TAGGED_28"
            value="TW"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
const qs = require("qs");

export default {
  name: "Form",
  props: {
    msg: String
  },
  data() {
    return {
      ruleForm: {
        email: "",
        lastName: "",
        firstName: "",
        phone: "",
        yearOfBirth: "",
        moreInfo: false
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "請輸入電子郵件",
            trigger: "blur"
          }
        ],
        lastName: [{ required: true, message: "請輸入姓氏", trigger: "blur" }],
        firstName: [{ required: true, message: "請輸入名字", trigger: "blur" }],
        phone: [{ required: true, message: "請輸入電話", trigger: "blur" }],
        yearOfBirth: [
          {
            type: "date",
            required: true,
            message: "請選擇出生年份",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async test() {
      try {
        var form = document.getElementById("hiddenForm");
        console.log(form);
        var formData = new FormData(form);
        console.log(formData);

        let res = await axios.post(
          "https://act.greenpeace.org/page/40031/petition/2",
          formData,
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        let response = res.data;

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          console.log("error submit!!");
          return false;
        }
        this.postForm();
      });
    },
    async postForm() {
      try {
        let year = dayjs(this.ruleForm.yearOfBirth).format("YYYY");

        let testObj = {
          sessionId: "2dcf24eb7e5544d6aff3d40c16e9adcf-server10008",
          supporter: {
            emailAddress: this.ruleForm.email,
            lastName: this.ruleForm.lastName,
            firstName: this.ruleForm.firstName,
            phoneNumber: this.ruleForm.phone,
            NOT_TAGGED_6: year,
            NOT_TAGGED_28: "TW",
            questions: {
              7276: "Y"
            }
          },
          hidden: "",
          gatewaykey: "",
          gatewaymode: "",
          gatewayaccountid: ""
        };

        // let data = JSON.stringify(testObj);

        console.log(qs.stringify(testObj));
        // let formData = new URLSearchParams();
        // formData.append("sessionId", "2dcf24eb7e5544d6aff3d40c16e9adcf-server10008");
        // formData.append("supporter.emailAddress", this.ruleForm.email);
        // formData.append("supporter.lastName", this.ruleForm.lastName);
        // formData.append("supporter.firstName", this.ruleForm.firstName);
        // formData.append("supporter.phoneNumber", this.ruleForm.phoneNumber);
        // formData.append("supporter.NOT_TAGGED_6", year);
        // formData.append("supporter.questions.7276", this.ruleForm.moreInfo);

        let res = await axios.post(
          "https://act.greenpeace.org/page/40031/petition/2",
          qs.stringify(testObj),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );
        let response = res.data;

        console.log(res);

        // this.$emit("thankYou");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form {
  p {
    margin: unset;
  }
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 1px;
  box-shadow: 10px -5px 15px 0 rgba(214, 207, 207, 0.5);
  background-color: #f9f9f9;
  .content-container {
    background-color: #f9f9f9;
    padding: 5% 8% 0;
    .title {
      color: #eb9062;
      font-weight: bold;
      letter-spacing: 3pt;
      font-size: 1.4rem;
    }
    .subtitle {
      padding-top: 10px;
      letter-spacing: 3pt;
      color: #644837;
    }
    .form-inputs {
      color: #644837;
      padding: 10px;
      letter-spacing: 1pt;
      width: 92%;
      .check-box {
        margin-bottom: 10px;
      }
      .checkbox-text {
        font-size: 0.8rem;
        // padding-top: 10px;
      }
      .submit-btn-container {
        width: 100%;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 10px;
        .submit-btn {
          background-color: #eb9062;
          color: white;
          letter-spacing: 3pt;
          font-size: 1.2rem;
          border-radius: 50px;
        }
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1919px) {
  .form {
    .content-container {
      .title {
        color: #eb9062;
        font-weight: bold;
        letter-spacing: 3pt;
        font-size: 1.2rem;
      }
      .subtitle {
        padding-top: 10px;
        letter-spacing: 3pt;
      }
      .form-inputs {
        padding: 10px;
        .checkbox-text {
          font-size: 0.8rem;
          padding-top: unset;
        }
        .submit-btn-container {
          padding-top: 10px;
          padding-bottom: 10px;
          .submit-btn {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
@media (max-width: 991px) and (min-width: 768px) {
  .form {
    .content-container {
      .title {
        font-size: 2.5rem !important;
        line-height: 1.6;
      }
      .subtitle {
        font-size: 2rem !important;
        padding-top: 10px;
        letter-spacing: 3pt;
      }
      .form-inputs {
        font-size: 1.6rem;
        .submit-btn-container {
          .submit-btn {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .form {
    margin-top: -50vh;
    padding-top: 52vh;
    .content-container {
      .title {
        font-size: 1.6rem;
        line-height: 1.6;
      }
      .subtitle {
        padding-top: 10px;
        letter-spacing: 3pt;
      }
      .form-inputs {
        padding: 10px;
        .submit-btn-container {
          padding-top: 40px;
          padding-bottom: 10px;
        }
      }
    }
  }
}
</style>
