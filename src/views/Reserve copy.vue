<template>
  <v-card elevation="0">
    <v-container fluid>
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
            <br />
          </v-row>
          <v-row
            v-show="userData.reserve"
            align="center"
            justify="center"
            length
          >
            <v-card>
              <v-card v-show="userData.reserve" elevation="0">
                <v-data-table
                  :headers="headers"
                  :items="statusData"
                  items-per-page="50"
                >
                  <template v-slot:item.date="{ item }">
                    <h3 style="color: #2b7a78">
                      {{ item.date }}
                    </h3>
                  </template>

                  <template v-slot:item.time="{ item }">
                    <h3 style="color: #2b7a78">
                      {{ item.time }}
                    </h3>
                  </template>

                  <template v-slot:item.currentPeople="{ item }">
                    <v-chip
                      :color="chipGetColor(item.currentPeople, item.maxPeople)"
                      dark
                    >
                      {{ item.currentPeople }}
                    </v-chip>
                  </template>

                  <template v-slot:item.uuid="{ item }">
                    <v-btn
                      v-show="item.serve"
                      @click="reserveBtn(item)"
                      elevation="2"
                      outlined
                      plain
                      raised
                      small
                      >預約 / Reserve</v-btn
                    >
                    <h3 v-show="!item.serve" style="color: #e76f51">⛔</h3>
                  </template>
                </v-data-table>

                <v-row align="center" justify="left" length>
                  <br /><br />
                </v-row>
              </v-card>
            </v-card>
          </v-row>

          <v-row v-show="loginStatus" align="center" justify="center" length>
            <v-overlay :value="overlayLoading">
              <v-progress-circular
                indeterminate
                size="64"
              ></v-progress-circular>
            </v-overlay>

            <v-overlay :z-index="zIndex" :value="overlay">
              <v-card
                class="mx-auto text-left overflow-y-auto"
                outlined
                v-click-outside="overlayOutside"
              >
                <v-card-title> 確定要預約這個時段嗎？ </v-card-title>
                <v-card-subtitle> Please comfirm the time! </v-card-subtitle>
                <v-card-text>
                  <h3>{{ overlayData.date }}</h3>
                  <h3>{{ overlayData.time }}</h3>
                  <h3 style="color: #c75497">{{ overlayCheckIn }}</h3>
                  <h3 style="color: #c75497">{{ overlayCheck }}</h3>
                  <br />
                  <h3>是否申請停車折扣代碼券？</h3>
                  <h4>Need parking discount coupon?</h4>
                  <v-radio-group v-model="parking" row>
                    <v-radio label="是 / Yes" value="yes"></v-radio>
                    <v-radio label="否 / No" value="no"></v-radio>
                  </v-radio-group>
                  <h3 style="color: #c75497">按下確認按鈕後，將無法修改</h3>
                  <h3 style="color: #c75497">
                    It will can't edit after confirm!
                  </h3>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    class="white--text"
                    color="#2a9d8f"
                    @click="reserveSend(overlayData.uuid)"
                  >
                    確定 / Comfirm
                  </v-btn>

                  <v-btn
                    class="white--text"
                    color="#e76f51"
                    @click="overlay = false"
                  >
                    取消 / Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-overlay>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import About from "../components/About";
const axios = require("axios");
var config = require("../../config.json");

export default {
  name: "Home",
  data() {
    return {
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
          if (response.data.code === 200) {
            if (response.data.message.admin === true) {
              self.$router.push("admin");
            }
            if (response.data.message.record === false) {
              self.saveStatusData = response.data.message.data;
              self.userData.building = response.data.message.build;
              self.userData.reserve = true;
              self.changeStatusData();
            } else {
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
    reserveSend(eventId) {
      if (this.parking === "yes" || this.parking === "no") {
        this.overlayLoading = true;
        this.overlay = false;
        this.userData.reserve = false;
        let self = this;
        axios
          .post(config.apiurl + "/reserve", {
            id: this.$cookie.get("id"),
            session: this.$cookie.get("session"),
            eventId: eventId,
            parking: this.parking,
          })
          .then(function (response) {
            self.overlayLoading = false;
            self.$cookie.set("session", response.data.session, 1);
            if (response.data.code === 200) {
              if (response.data.message.check) {
                self.userData.building =
                  "已經完成預約，請在 " +
                  self.overlayData.date +
                  " " +
                  self.overlayData.time +
                  " 完成離宿工作！";
              } else {
                self.userData.reserve = true;
                self.userData.building = "預約失敗，人數已滿或停止預約";
                self.saveStatusData = response.data.message.data;
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
      } else {
        alert(
          "請填寫是否需要申請停車折扣代碼券 / Please fill in whether need parking discount coupon"
        );
      }
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
      this.updateStatus();
    }
    this.window_height = window.innerHeight;
    this.window_width = window.innerWidth;
  },
};
</script>
