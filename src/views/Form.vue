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
            <el-input autocomplete="on" placeholder="greenpeace@gmail.com" v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-row :gutter="30">
            <el-col :span="10">
              <el-form-item label="姓氏" prop="lastName" required>
                <el-input autocomplete="on" v-model="ruleForm.lastName" placeholder="王"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="名字" prop="firstName" required>
                <el-input autocomplete="on" v-model="ruleForm.firstName" placeholder="小明"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :md="24" :xl="17">
              <el-form-item label="電話（0912345678 或 02-23612351）" prop="phone" required>
                <el-input autocomplete="on" v-model="ruleForm.phone" placeholder="0912345678"></el-input>
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

        <!-- <form
          method="post"
          @submit.prevent="test"
          id="testForm"
          >
          <input type="hidden" name="hidden" class="en__hiddenFields" value />
          <input
            type="hidden"
            name="sessionId"
            value="8c45bf2eeb0b4aedb4eeb6a527fbfe9c-server10228"
          />
          <input type="hidden" name="gatewaykey" value />
          <input type="hidden" name="gatewayaccountid" value />
          <input type="hidden" name="gatewaymode" value />

          <ul class="en__errorList"></ul>

          <div class="en__component en__component--row en__component--row--1">
            <div class="en__component en__component en__component--column en__component--column--1">
              <div class="en__component en__component--copyblock" style="">
                <p class="text-right progress-call">號召更多朋友參與，達到目標：15萬</p>
              </div>
              <div class="en__component en__component--widgetblock">
                <div class="enWidget enWidget--progressBar">
                  <div class="enWidget__display">
                    <div class="enWidget__bar">
                      <div
                        class="enWidget__progress"
                        style="border: 1px solid rgb(240, 240, 240); background: rgb(255, 255, 255) none repeat scroll 0% 0%; height: 10px;"
                      >
                        <div
                          class="enWidget__fill"
                          style="background-color: rgb(253, 162, 47); width: 81%;"
                        >
                          <span
                            class="enWidget__fill__count"
                            style="color: rgb(255, 255, 255);"
                          >122,134</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="en__component en__component--row en__component--row--1">
            <div class="en__component en__component en__component--column">
              <div class="en__component en__component--formblock" style>
                <div class="en__field en__field--text en__field--404021 en__field--emailAddress">
                  <label for="en__field_supporter_emailAddress" class="en__field__label" style>電子信箱*</label>
                  <div class="en__field__element en__field__element--text">
                    <input
                      id="en__field_supporter_emailAddress"
                      type="email"
                      class="en__field__input en__field__input--text"
                      name="supporter.emailAddress"
                      value
                      placeholder="電子信箱*"
                    />
                  </div>
                </div>
                <div class="en__field en__field--text en__field--404020 en__field--NOT_TAGGED_19">
                  <label
                    for="en__field_supporter_NOT_TAGGED_19"
                    class="en__field__label"
                    style
                  >中文姓名*</label>
                  <div class="en__field__element en__field__element--text">
                    <input
                      id="en__field_supporter_NOT_TAGGED_19"
                      type="text"
                      class="en__field__input en__field__input--text"
                      name="supporter.NOT_TAGGED_19"
                      value
                      placeholder="中文姓名*"
                    />
                  </div>
                </div>
                <div class="en__field en__field--text en__field--482596 en__field--lastName">
                  <div class="en__field__error re__field">姓氏格式不正確，請不要輸入數字或符號</div>
                  <label for="en__field_supporter_lastName" class="en__field__label" style>姓氏*</label>
                  <div class="en__field__element en__field__element--text">
                    <input
                      id="en__field_supporter_lastName"
                      type="text"
                      class="en__field__input en__field__input--text"
                      name="supporter.lastName"
                      value
                      placeholder="姓氏*"
                    />
                  </div>
                </div>
                <div class="en__field en__field--text en__field--482595 en__field--firstName">
                  <div class="en__field__error re__field">名字格式不正確，請不要輸入數字或符號</div>
                  <label for="en__field_supporter_firstName" class="en__field__label" style>名字*</label>
                  <div class="en__field__element en__field__element--text">
                    <input
                      id="en__field_supporter_firstName"
                      type="text"
                      class="en__field__input en__field__input--text"
                      name="supporter.firstName"
                      value
                      placeholder="名字*"
                    />
                  </div>
                </div>
                <div class="en__field en__field--text en__field--404022 en__field--phoneNumber">
                  <div class="en__field__error re__field">請輸入連絡電話</div>
                  <label for="en__field_supporter_phoneNumber" class="en__field__label" style>連絡電話*</label>
                  <div class="en__field__element en__field__element--text">
                    <input
                      id="en__field_supporter_phoneNumber"
                      type="tel"
                      class="en__field__input en__field__input--text"
                      name="supporter.phoneNumber"
                      value
                      placeholder="連絡電話*"
                    />
                    <div
                      class="en__field__error en__field__phoneExample"
                      style="color:#28529b;"
                    >電話格式範例：0912345678 或 02-23612351</div>
                  </div>
                </div>
                <div class="en__field en__field--select en__field--404023 en__field--NOT_TAGGED_6">
                  <label for="en__field_supporter_NOT_TAGGED_6" class="en__field__label" style>出生年份</label>
                  <div class="en__field__element en__field__element--select">
                    <select
                      id="en__field_supporter_NOT_TAGGED_6"
                      class="en__field__input en__field__input--select"
                      name="supporter.NOT_TAGGED_6"
                    >
                      <option value>出生年份</option>
                      <option value="01/01/2019">2019</option>
                      <option value="01/01/2018">2018</option>
                      <option value="01/01/2017">2017</option>
                      <option value="01/01/2016">2016</option>
                      <option value="01/01/2015">2015</option>
                      <option value="01/01/2014">2014</option>
                      <option value="01/01/2013">2013</option>
                      <option value="01/01/2012">2012</option>
                      <option value="01/01/2011">2011</option>
                      <option value="01/01/2010">2010</option>
                      <option value="01/01/2009">2009</option>
                      <option value="01/01/2008">2008</option>
                      <option value="01/01/2007">2007</option>
                      <option value="01/01/2006">2006</option>
                      <option value="01/01/2005">2005</option>
                      <option value="01/01/2004">2004</option>
                      <option value="01/01/2003">2003</option>
                      <option value="01/01/2002">2002</option>
                      <option value="01/01/2001">2001</option>
                      <option value="01/01/2000">2000</option>
                      <option value="01/01/1999">1999</option>
                      <option value="01/01/1998">1998</option>
                      <option value="01/01/1997">1997</option>
                      <option value="01/01/1996">1996</option>
                      <option value="01/01/1995">1995</option>
                      <option value="01/01/1994">1994</option>
                      <option value="01/01/1993">1993</option>
                      <option value="01/01/1992">1992</option>
                      <option value="01/01/1991">1991</option>
                      <option value="01/01/1990">1990</option>
                      <option value="01/01/1989">1989</option>
                      <option value="01/01/1988">1988</option>
                      <option value="01/01/1987">1987</option>
                      <option value="01/01/1986">1986</option>
                      <option value="01/01/1985">1985</option>
                      <option value="01/01/1984">1984</option>
                      <option value="01/01/1983">1983</option>
                      <option value="01/01/1982">1982</option>
                      <option value="01/01/1981">1981</option>
                      <option value="01/01/1980">1980</option>
                      <option value="01/01/1979">1979</option>
                      <option value="01/01/1978">1978</option>
                      <option value="01/01/1977">1977</option>
                      <option value="01/01/1976">1976</option>
                      <option value="01/01/1975">1975</option>
                      <option value="01/01/1974">1974</option>
                      <option value="01/01/1973">1973</option>
                      <option value="01/01/1972">1972</option>
                      <option value="01/01/1971">1971</option>
                      <option value="01/01/1970">1970</option>
                      <option value="01/01/1969">1969</option>
                      <option value="01/01/1968">1968</option>
                      <option value="01/01/1967">1967</option>
                      <option value="01/01/1966">1966</option>
                      <option value="01/01/1965">1965</option>
                      <option value="01/01/1964">1964</option>
                      <option value="01/01/1963">1963</option>
                      <option value="01/01/1962">1962</option>
                      <option value="01/01/1961">1961</option>
                      <option value="01/01/1960">1960</option>
                      <option value="01/01/1959">1959</option>
                      <option value="01/01/1958">1958</option>
                      <option value="01/01/1957">1957</option>
                      <option value="01/01/1956">1956</option>
                      <option value="01/01/1955">1955</option>
                      <option value="01/01/1954">1954</option>
                      <option value="01/01/1953">1953</option>
                      <option value="01/01/1952">1952</option>
                      <option value="01/01/1951">1951</option>
                      <option value="01/01/1950">1950</option>
                      <option value="01/01/1949">1949</option>
                      <option value="01/01/1948">1948</option>
                      <option value="01/01/1947">1947</option>
                      <option value="01/01/1946">1946</option>
                      <option value="01/01/1945">1945</option>
                      <option value="01/01/1944">1944</option>
                      <option value="01/01/1943">1943</option>
                      <option value="01/01/1942">1942</option>
                      <option value="01/01/1941">1941</option>
                      <option value="01/01/1940">1940</option>
                      <option value="01/01/1939">1939</option>
                      <option value="01/01/1938">1938</option>
                      <option value="01/01/1937">1937</option>
                      <option value="01/01/1936">1936</option>
                      <option value="01/01/1935">1935</option>
                      <option value="01/01/1934">1934</option>
                      <option value="01/01/1933">1933</option>
                      <option value="01/01/1932">1932</option>
                      <option value="01/01/1931">1931</option>
                      <option value="01/01/1930">1930</option>
                      <option value="01/01/1929">1929</option>
                      <option value="01/01/1928">1928</option>
                      <option value="01/01/1927">1927</option>
                      <option value="01/01/1926">1926</option>
                      <option value="01/01/1925">1925</option>
                      <option value="01/01/1924">1924</option>
                      <option value="01/01/1923">1923</option>
                      <option value="01/01/1922">1922</option>
                      <option value="01/01/1921">1921</option>
                      <option value="01/01/1920">1920</option>
                      <option value="01/01/1919">1919</option>
                      <option value="01/01/1918">1918</option>
                      <option value="01/01/1917">1917</option>
                      <option value="01/01/1916">1916</option>
                      <option value="01/01/1915">1915</option>
                      <option value="01/01/1914">1914</option>
                      <option value="01/01/1913">1913</option>
                      <option value="01/01/1912">1912</option>
                      <option value="01/01/1911">1911</option>
                      <option value="01/01/1910">1910</option>
                      <option value="01/01/1909">1909</option>
                      <option value="01/01/1908">1908</option>
                      <option value="01/01/1907">1907</option>
                      <option value="01/01/1906">1906</option>
                      <option value="01/01/1905">1905</option>
                      <option value="01/01/1904">1904</option>
                      <option value="01/01/1903">1903</option>
                      <option value="01/01/1902">1902</option>
                      <option value="01/01/1901">1901</option>
                    </select>
                  </div>
                </div>
                <input
                  type="hidden"
                  class="en__field__input en__field__input--hidden"
                  name="supporter.NOT_TAGGED_28"
                  value="TW"
                />

                <div
                  class="en__field en__field--checkbox en__field--question en__field--7276 en__field--email-ok-taiwan"
                >
                  <label class="en__field__label" style>
                    我要即時收到最新專案訊息，知道更多參與和協助的方法。（綠色和平尊重並保障您的個人隱私資料，您隨時可取消訂閱，請參考
                    <a href="https://www.greenpeace.org/taiwan/policies/privacy-and-cookies/">隱私保護政策</a>。）
                  </label>
                  <div class="en__field__element en__field__element--checkbox">
                    <div class="en__field__item">
                      <input
                        id="en__field_supporter_questions_7276"
                        checked
                        type="checkbox"
                        class="en__field__input en__field__input--checkbox"
                        value="Y"
                        name="supporter.questions.7276"
                      />
                      <label
                        for="en__field_supporter_questions_7276"
                        class="en__field__label en__field__label--item"
                      >我要即時收到最新專案訊息，知道更多參與和協助的方法。（綠色和平尊重並保障您的個人隱私資料，您隨時可取消訂閱，請參考隱私保護政策。）</label>
                    </div>
                  </div>
                </div>

                <div class="en__submit">
                  <button>立即連署</button>
                </div>
              </div>
            </div>
          </div>
        </form> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
const qs = require('qs');

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
  created() {
    this.getPetitionOne();
  },
  methods: {
    async getPetitionOne() {
      // try {
      //   let res = await axios.get('https://cors-anywhere.herokuapp.com/https://act.greenpeace.org/page/40031/petition/1');
      //   let petitionOne = res.data;
      //   let html = petitionOne.toString();

      //   let i = html.search("sessionId");
      //   let sessionId = html.substr(i, 100)

      //   console.log(sessionId);
      // } catch (err) {
      //   console.log(err);
      // }
    },

    async test () {

      try {
        var form = document.getElementById('testForm');
        console.log(form);
        var formData = new FormData(form);
        console.log(formData);
        
        let res = await axios.post('https://act.greenpeace.org/page/40031/petition/2', formData, { headers: {'Content-Type': 'multipart/form-data'  }});
        let response = res.data;

        console.log(res);
      } catch (err) {
        console.log(err)
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
        
        this.$emit("thankYou");
        let year = dayjs(this.ruleForm.yearOfBirth).format("DD/MM/YYYY");

        let formData = new URLSearchParams();
        formData.append("sessionId", "2b3ede609e844beebee2571434f15a36-server9800");
        formData.append("supporter.emailAddress", this.ruleForm.email);
        formData.append("supporter.lastName", this.ruleForm.lastName);
        formData.append("supporter.firstName", this.ruleForm.firstName);
        formData.append("supporter.phoneNumber", this.ruleForm.phoneNumber);
        formData.append("supporter.NOT_TAGGED_6", year);
        formData.append("supporter.questions.7276", this.ruleForm.moreInfo);
        formData.append("supporter.NOT_TAGGED_19", this.ruleForm.lastName + this.ruleForm.fisrtName);
        formData.append("supporter.NOT_TAGGED_28", "TW");

        let res = await axios.post('https://act.greenpeace.org/page/40031/petition/2', formData, { headers: {'Content-Type': 'application/x-www-form-urlencoded' }});
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
    font-size: 1.4rem;
    margin-top: -50vh;
    padding-top: 52vh;
    .content-container {
      .title {
        font-size: 1.8rem;
        line-height: 1.6;
      }
      .subtitle {
        font-size: 1.4rem;
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
