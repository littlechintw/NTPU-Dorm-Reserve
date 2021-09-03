<template>
  <v-card elevation="0">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row v-show="!loginStatus" align="center" justify="center" length>
            <about />
          </v-row>

          <div v-show="loginStatus">
            <v-row align="center" justify="center" length>
              <h1>健康聲明</h1>
            </v-row>
            <v-row align="center" justify="center" length>
              <br />
              <v-chip class="ma-2" color="green" outlined>
                北大宿舍開宿
              </v-chip>
              <br />
            </v-row>
            <v-row
              align="center"
              justify="center"
              length
              v-show="!summit_open && init"
            >
              <v-chip class="ma-2" color="red" outlined>
                目前非開放時間
              </v-chip>
            </v-row>
            <v-row align="center" justify="center" length>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="stu_id"
                  type="number"
                  label="學號 / Student ID"
                  required
                  disabled
                ></v-text-field
                ><v-text-field
                  v-model="phone"
                  :rules="idPhone"
                  type="number"
                  label="電話 / Phone"
                  required
                ></v-text-field>
                <v-checkbox
                  v-model="checkbox_law1"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="本人非臺灣疾管署具感染風險民眾追蹤管理機制之對象
                    (居家隔離/居家檢疫/自主健康管理)；另未與前述對象接觸或同居。"
                  required
                ></v-checkbox>
                <v-checkbox
                  v-model="checkbox_law2"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="本人未有疑似呼吸道不適症狀
                    (咳嗽/流鼻水/鼻塞/喉嚨痛/呼吸喘)，且未發燒 (額溫 &lt;
                    37.5°C、耳溫 &lt; 38°C)。"
                  required
                ></v-checkbox>
                <v-checkbox
                  v-model="checkbox_law3"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="本人於 9/03 ~ 9/21 未曾於臺灣境外、高風險地區活動或已經完成隔離等防疫作業"
                  required
                ></v-checkbox>
                <v-checkbox
                  v-model="checkbox_law_data"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="本人已閱讀以下說明並願意提供資料，且以上所有資訊正確無誤。"
                  required
                ></v-checkbox>
                <div>
                  <v-btn
                    :disabled="!checkbox_law_data"
                    color="success"
                    class="mr-4"
                    @click="healthBtn"
                    >送出</v-btn
                  >
                </div>
                <p style="font-size: 12px; color: red">{{ error_msg }}</p>
              </v-form>
            </v-row>

            <div style="height: 50px" />

            <v-row>
              <v-card class="mx-auto" width="344" :disabled="!init">
                <v-container fluid style="text-align: center; width: 87%">
                  <p style="font-size: 16px">個人資料使用說明</p>
                  <p style="font-size: 12px">
                    (一)蒐集機關之名稱：國立臺北大學 學務處 住宿輔導組
                  </p>
                  <p style="font-size: 12px">
                    (二)蒐集之目的：防疫目的，依據「個人資料保護法之特定目的及個人資料之類別」為代號012公共衛生或傳染病防治之特定目的，且不得為目的外利用。
                  </p>
                  <p style="font-size: 12px">
                    (三)蒐集之個人資料項目：學號、電話。
                  </p>
                  <p style="font-size: 12px">
                    (四)個人資料利用之期間：自蒐集日起28日內。
                  </p>
                  <p style="font-size: 12px">
                    (五)個人資料利用之對象及方式：為防堵疫情而有必要時，得提供衛生主管機關依傳染病防治法等規定進行疫情調查及聯繫使用。
                  </p>
                  <p style="font-size: 12px">
                    (六)當事人就其個人資料得依個人資料保護法規定，向蒐集之機關行使權利，包括查詢或請求閱覽、請求製給複製本、請求補充或更正、請求蒐集、處理或利用、請求刪除，及行使方式。
                  </p>
                  <p style="font-size: 12px">
                    (七)當事人不同意提供個人資料對其權益之影響，不得參與活動。
                  </p>
                </v-container>
              </v-card>
            </v-row>
          </div>

          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
    </v-container>
    <div style="height: 50px" />
  </v-card>
</template>

<script>
import About from "../components/About";
const axios = require("axios");
var config = require("../../config.json");
let Base64 = require("js-base64").Base64;

export default {
  name: "Home",
  data() {
    return {
      window_height: 100,
      window_width: 100,
      loginStatus: false,
      stu_id: "",
      phone: "",
      phoneRules: [(v) => (v && v.length === 9) || "請輸入電話正確格式"],
      checkbox_law1: false,
      checkbox_law2: false,
      checkbox_law3: false,
      checkbox_law_data: false,
    };
  },
  components: {
    About,
  },
  methods: {
    healthBtn() {
      if (this.phone === "" || this.phone.length !== 10) {
        alert("請填寫正確十碼電話號碼！");
      } else {
        let self = this;
        axios
          .post(config.apiurl + "/health", {
            id: this.$cookie.get("id"),
            session: this.$cookie.get("session"),
            phone: this.phone,
            law1: this.checkbox_law1,
            law2: this.checkbox_law2,
            law3: this.checkbox_law3,
          })
          .then(function (response) {
            self.overlayLoading = false;
            self.$cookie.set("session", response.data.session, 1);
            if (response.data.code === 403) {
              alert("You bad bad :(");
              self.$router.push("/logout");
            }

            self.$router.push("/reserve");
          })
          .catch(function (error) {
            alert(error);
          });
      }
    },
    health_status() {
      let self = this;
      axios
        .post(config.apiurl + "/health_check", {
          id: this.$cookie.get("id"),
          session: this.$cookie.get("session"),
        })
        .then(function (response) {
          self.$cookie.set("session", response.data.session, 1);

          if (response.data.code === 403) {
            alert("You bad bad :(");
            self.$router.push("/logout");
          }
          if (response.data.message === "0" || response.data.message === "1") {
            self.$router.push("/reserve");
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },
    chipGetColor(current, max) {
      console.log("---");
      let cu = parseInt(current);
      let ma = parseInt(max);
      var finalColor = "N/A";
      if (cu >= ma) finalColor = "#FF4F4F";
      else if (cu / ma <= 0.2) finalColor = "#4F9EFF";
      else if (cu / ma > 0.2 && cu / ma <= 0.6) finalColor = "#9EB53E";
      else if (cu / ma > 0.6) finalColor = "#FFAC4F";
      console.log(finalColor);

      finalColor = "color: " + finalColor;
      return finalColor;
    },
    changeStatusData() {
      const d = new Date();
      let date_uuid = (d.getMonth() + 1) * 100 + d.getDate();
      var tmp = [];
      for (var status in this.saveStatusData) {
        if (parseInt(this.saveStatusData[status]["uuid"]) >= date_uuid)
          tmp.push(this.saveStatusData[status]);
      }
      this.statusData = tmp;
    },
  },
  mounted: function () {
    if (this.$cookie.get("session") && this.$cookie.get("id")) {
      this.loginStatus = true;
      this.stu_id = Base64.decode(this.$cookie.get("id"));
      this.health_status();
    }
    this.window_height = window.innerHeight;
    this.window_width = window.innerWidth;
  },
};
</script>
