<template>
  <v-card elevation="0">
    <!-- 輸入表單 -->
    <v-container v-show="healthWrite && !reserveDone" fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row v-show="!loginStatus" align="center" justify="center" length>
            <about />
          </v-row>

          <v-row v-show="loginStatus" align="center" justify="center" length>
            <h1>{{ userData.building }}</h1>
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <h3>房床位: {{ userData.room }}</h3>
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <br />
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <h3 style="background-color: #e9c46a">{{ userData.note }}</h3>
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <v-divider style="" />
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <div style="padding-top: 30px" />
          </v-row>

          <v-row
            v-show="userData.reserve && !reviewShow"
            align="center"
            justify="center"
            length
          >
            <v-card elevation="0">
              <v-card v-show="userData.reserve" elevation="0">
                <h2 style="width: 100%; text-align: center">🔻時段選擇🔻</h2>
                <h4 style="width: 100%; text-align: center; color: gray">
                  Select time
                </h4>
                <v-radio-group v-model="reserveTime">
                  <v-radio
                    v-for="item in statusData"
                    :key="item"
                    :value="item.uuid"
                    :disabled="item.maxPeople - item.currentPeople <= 0"
                  >
                    <template v-slot:label>
                      <div>
                        <v-chip
                          class="ma-2"
                          :color="
                            chipGetColor(item.currentPeople, item.maxPeople)
                          "
                        >
                          {{ item.date }}
                          <!-- <div style="width: 10px; display: inline-block" /> -->
                        </v-chip>
                        <!-- {{ item.time }} -->
                        <div style="width: 3px; display: inline-block" />

                        尚可預約
                        <div
                          style="
                            width: 20px;
                            display: inline-block;
                            text-align: center;
                          "
                        >
                          <strong>
                            {{ item.maxPeople - item.currentPeople }}
                          </strong>
                        </div>
                        人
                      </div>
                      <div style="height: 30px" />
                    </template>
                  </v-radio>
                </v-radio-group>

                <div style="height: 10px" />
                <h2 style="width: 100%; text-align: center">
                  🔻是否需停車優惠券🔻
                </h2>
                <h4 style="width: 100%; text-align: center; color: gray">
                  Parking Coupon
                </h4>
                <h4 style="width: 100%; text-align: center">
                  優惠券限當日一次進出，且僅有一張
                </h4>
                <h5 style="width: 100%; text-align: center; color: gray">
                  Just for one time parking at the check-in day!
                </h5>
                <v-radio-group
                  v-model="carCoupon"
                  :disabled="userData.reserveStatus != 1"
                >
                  <v-radio value="y">
                    <template v-slot:label>
                      <div>是，需要 / Yes</div>
                    </template>
                  </v-radio>

                  <v-text-field
                    v-model="carId"
                    :rules="carIdRules"
                    :counter="8"
                    label="車號 / License plate number"
                    required
                    :disabled="carCoupon == 'n'"
                    style="padding-left: 30px"
                  ></v-text-field>
                  <v-radio value="n">
                    <template v-slot:label>
                      <div>否，不需要 / No</div>
                      <div style="height: 50px" />
                    </template>
                  </v-radio>
                </v-radio-group>

                <v-row align="center" justify="center" length>
                  <v-btn
                    class="white--text"
                    color="#2a9d8f"
                    @click="formCheckBtn"
                    :disabled="userData.reserveStatus != 1"
                  >
                    確定 / Comfirm
                  </v-btn>
                </v-row>
                <v-row align="center" justify="left" length>
                  <br />
                </v-row>
              </v-card>
            </v-card>
          </v-row>

          <v-row v-show="reviewShow">
            <v-col cols="12">
              <v-row align="center" justify="center" length>
                <h1>請檢查以下填寫資料</h1>
              </v-row>
              <v-row align="center" justify="center" length>
                <div style="height: 50px" />
              </v-row>
              <v-row align="center" justify="center" length>
                <h3>
                  預約時間：
                  <a style="color: #e76f51">{{ checkData.time }}</a>
                </h3>
              </v-row>
              <v-row align="center" justify="center" length>
                <h3>
                  停車券： <a style="color: #e76f51">{{ checkData.carData }}</a>
                </h3>
              </v-row>
              <v-row align="center" justify="center" length>
                <div style="height: 50px" />
              </v-row>
              <v-row align="center" justify="center" length>
                <v-btn
                  class="white--text"
                  color="#2a9d8f"
                  @click="formCheckReserveBtn"
                  >確定 / Comfirm</v-btn
                >
                <div style="width: 20px" />
                <v-btn
                  class="white--text"
                  color="#f4a261"
                  @click="formCheckEditBtn"
                  >修改 / edit</v-btn
                >
              </v-row>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- 輸入完成顯示 -->
    <v-container v-show="reserveDone" fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <v-card class="mx-auto" width="344" elevation="1">
              <br />
              <v-container fluid>
                <v-row>
                  <v-col cols="12" align="center">
                    <v-row align="center" justify="center" length>
                      <qr-code :text="qrcodeText" size="200"></qr-code>
                    </v-row>
                    <v-row align="center" justify="center" length>
                      <br />
                    </v-row>
                    <v-row align="center" justify="center" length>
                      <h4>開宿專用 QRCode</h4>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
              <br />
            </v-card>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <h2>
              {{ checkData.build }}
            </h2>
          </v-row>
          <v-row align="center" justify="center" length>
            <h2>
              {{ checkData.room }}
            </h2>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <h3>您的開宿時間 / Check-in time：</h3>
          </v-row>
          <v-row align="center" justify="center" length>
            <h3>
              <a style="color: #e76f51">{{ checkData.time }}</a>
            </h3>
          </v-row>
          <v-row align="center" justify="center" length>
            <h3>停車券 / Parking Coupon：</h3>
          </v-row>
          <v-row align="center" justify="center" length>
            <h3>
              <a style="color: #e76f51">{{ checkData.carData }}</a>
            </h3>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>

          <v-row align="center" justify="center" length>
            <h4>
              如有家長開車進入校園需求，請點選下方按鈕進行申請，一次以兩人為限，且僅適用於開宿當天，訪客可進入校園，但無法進入宿舍，如有進入宿舍需求，請至各棟櫃台辦理訪客登記，宿舍訪客僅限一人。
            </h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <v-btn
              color="#87C1A2"
              class="mr-4"
              :href="checkData.visitorUrl"
              target="_blank"
            >
              國立臺北大學訪客一日通行碼申請
            </v-btn>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row
            align="center"
            justify="center"
            length
            v-show="!checkData.checkin"
          >
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="#B5563E"
                  class="mr-4"
                  v-bind="attrs"
                  v-on="on"
                >
                  取消預約 / Cancel reserve
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="recordDelete()">
                  <v-list-item-title>
                    按下這個按鈕即取消 / Sure?
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
          <v-row
            align="center"
            justify="center"
            length
            v-show="checkData.checkin"
          >
            <h1>已經完成報到</h1>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- 實聯制登記 -->
    <v-container v-show="!healthWrite" fluid>
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
    <div style="height: 30px" />

    <v-overlay v-show="initOverlay">
      <v-progress-circular indeterminate size="64"> </v-progress-circular>
    </v-overlay>
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
      initOverlay: true,
      healthWrite: false,
      window_height: 100,
      window_width: 100,
      overlay: false,
      overlayLoading: false,
      overlayData: {
        date: "N/A",
        time: "N/A",
        currnetPeople: "N/A",
        maxPeople: "N/A",
        uuid: "N/A",
        serve: false,
      },
      overlayCheckIn: "N/A",
      overlayCheck: "N/A",
      loginStatus: false,
      userData: {
        uuid: "N/A",
        building: "Loading...",
        reserve: false,
      },
      tab: null,
      tabItems: [
        { tab: "7/16", content: "Tab 1 Content" },
        { tab: "7/17", content: "Tab 2 Content" },
        { tab: "7/18", content: "Tab 3 Content" },
        { tab: "7/19", content: "Tab 4 Content" },
        { tab: "7/20", content: "Tab 5 Content" },
        { tab: "7/21", content: "Tab 6 Content" },
        { tab: "7/22", content: "Tab 7 Content" },
      ],
      saveStatusData: [],
      statusData: [],
      headers: [
        { text: "日期 / Date", value: "date" },
        { text: "時間 / Time", value: "time" },
        { text: "目前人數 / Current People", value: "currentPeople" },
        { text: "總人數 / Max People", value: "maxPeople" },
        { text: "預約 / Reserve", value: "uuid" },
      ],
      parking: "N/A",
      stu_id: "",
      phone: "",
      phoneRules: [(v) => (v && v.length === 9) || "請輸入電話正確格式"],
      checkbox_law1: false,
      checkbox_law2: false,
      checkbox_law3: false,
      checkbox_law_data: false,
      reserveTime: "",
      carCoupon: null,
      carId: "",
      reviewShow: false,
      reserveDone: false,
      checkData: {
        time: "",
        carData: "",
        parking: "",
        build: "",
        room: "",
      },
      qrcodeText: "",
    };
  },
  components: {
    About,
  },
  methods: {
    reserveBtn(item) {
      this.window_height = window.innerHeight;
      this.window_width = window.innerWidth;
      this.overlay = !this.overlay;
      this.overlayData = item;
      if (parseInt(item.uuid) <= 726) {
        this.overlayCheckIn = "報到 Check-in | 8:30 - 15:00";
        this.overlayCheck = "檢查 Checking | 13:00 - 15:30";
      } else {
        this.overlayCheckIn = "";
        this.overlayCheck = "檢查 Checking | 9:00 - 15:30";
      }
    },
    overlayOutside() {
      this.overlay = false;
    },
    updateStatus() {
      this.userData.reserve = false;
      this.statusData = [
        {
          date: "Loading...",
          time: "",
          currentPeople: 0,
          maxPeople: 0,
          uuid: "N/A",
          serve: false,
        },
      ];
      let self = this;
      axios
        .post(config.apiurl + "/status", {
          id: this.$cookie.get("id"),
          session: this.$cookie.get("session"),
        })
        .then(function (response) {
          console.log(response.data);
          self.$cookie.set("session", response.data.session, 1);
          self.initOverlay = false;
          if (response.data.code === 200) {
            if (response.data.message.admin === true) {
              self.$router.push("admin");
            }
            if (response.data.message.health_status !== false) {
              self.healthWrite = true;
            }
            if (response.data.message.record === false) {
              self.saveStatusData = response.data.message.data;
              self.userData.building = response.data.message.build;
              self.userData.room = response.data.message.room;
              self.userData.reserveStatus = response.data.message.reserveStatus;
              self.checkData.build = response.data.message.build;
              self.checkData.room = response.data.message.room;
              self.userData.note = response.data.message.note;
              self.userData.reserve = true;
              self.changeStatusData();
            } else {
              self.reserveDone = true;
              self.qrcodeText = self.$cookie.get("id");
              self.checkData.time = response.data.message.data;
              self.checkData.build = response.data.message.build;
              self.checkData.room = response.data.message.room;
              self.checkData.date = response.data.message.date;
              self.checkData.checkin = response.data.message.checkin;
              self.checkData.visitorUrl = response.data.message.visitorUrl;
              if (response.data.message.parking !== "n") {
                self.checkData.carData =
                  "需要（" + response.data.message.parking + "）";
              } else {
                self.checkData.carData = "不需要";
              }
              self.userData.building =
                "已經完成預約，請在 " +
                response.data.message.data +
                " 完成離宿工作！";
              if (response.data.message.parking) {
                self.userData.building += " (含停車折扣券)";
              }
            }
          } else {
            self.$cookie.set("session", response.data.session, 1);
          }
          if (response.data.code === 403) {
            alert("You bad bad :(");
            self.$router.push("/logout");
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },
    recordDelete() {
      this.initOverlay = true;
      let self = this;
      axios
        .post(config.apiurl + "/user_delete", {
          id: this.$cookie.get("id"),
          session: this.$cookie.get("session"),
          d: this.checkData.date,
        })
        .then(function (response) {
          console.log(response.data);
          self.$cookie.set("session", response.data.session, 1);
          self.initOverlay = false;
          if (response.data.code === 200) {
            self.initOverlay = false;
            location.reload();
          }
          if (response.data.code === 403) {
            alert("You bad bad :(");
            self.$router.push("/logout");
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },
    healthBtn() {
      if (this.phone === "" || this.phone.length !== 10) {
        alert("請填寫正確十碼電話號碼！");
      } else {
        this.initOverlay = true;
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
            self.initOverlay = false;
            if (response.data.code === 403) {
              alert("You bad bad :(");
              self.$router.push("/logout");
            }

            location.reload();
          })
          .catch(function (error) {
            alert(error);
          });
      }
    },
    formCheckBtn() {
      if (
        this.reserveTime === "" ||
        (this.carCoupon === "y" && this.carId === "") ||
        this.carCoupon === null
      ) {
        alert("請確認所有資料已經完成");
      } else {
        if (this.carCoupon !== "n") {
          this.carId = this.carId.toUpperCase();
          this.checkData.carData = "需要（" + this.carId + "）";
          this.checkData.parking = this.carId;
        } else {
          this.checkData.carData = "不需要";
          this.checkData.parking = "n";
        }
        for (var i = 0; i < this.saveStatusData.length; i++) {
          if (this.saveStatusData[i].uuid === this.reserveTime) {
            this.checkData.time =
              this.saveStatusData[i].date + " " + this.saveStatusData[i].time;
          }
        }
        console.log(this.saveStatusData);
        this.reviewShow = true;
      }
    },
    formCheckEditBtn() {
      this.reviewShow = false;
    },
    formCheckReserveBtn() {
      this.initOverlay = true;
      let self = this;
      self.userData.note = "";
      axios
        .post(config.apiurl + "/reserve", {
          id: this.$cookie.get("id"),
          session: this.$cookie.get("session"),
          eventId: this.reserveTime,
          parking: this.checkData.parking,
        })
        .then(function (response) {
          self.initOverlay = false;
          self.reviewShow = false;
          self.$cookie.set("session", response.data.session, 1);
          if (response.data.code === 200) {
            if (response.data.message.check) {
              self.reserveDone = true;
              self.qrcodeText = self.$cookie.get("id");

              location.reload();
            } else {
              self.userData.reserve = true;
              self.userData.note = "預約失敗，人數已滿或停止預約";
              self.saveStatusData = response.data.message.data;
              self.reserveTime = "";
              self.changeStatusData();
            }
          } else {
            self.$cookie.set("session", response.data.session, 1);
          }
          if (response.data.code === 403) {
            alert("You bad bad :(");
            self.$router.push("/logout");
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
      else if (ma - cu > 10) finalColor = "#4F9EFF";
      else if (ma - cu > 5 && ma - cu <= 10) finalColor = "#9EB53E";
      else if (ma - cu <= 5) finalColor = "#FFAC4F";
      console.log(ma - cu);
      console.log(finalColor);

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
      this.updateStatus();
    }
    this.window_height = window.innerHeight;
    this.window_width = window.innerWidth;
  },
};
</script>
