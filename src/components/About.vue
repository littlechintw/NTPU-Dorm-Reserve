<template>
  <v-card elevation="0">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <h1 style="zoom: 1.3">國立臺北大學 三峽校區 宿舍預約系統</h1>
          </v-row>
          <v-row align="center" justify="center" length>
            <h3>National Taipei University Sanxia Campus Dormitory Reservation System</h3>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <v-img src="dormLogo.png" max-width="200px"></v-img>
          </v-row>
          <v-row align="center" justify="center" length>
            <p class="ma-2">預約開放時間 / Reservation Opening Period</p>
          </v-row>
          <v-row align="center" justify="center" length>
            <v-chip outlined>{{ reserveTime }}</v-chip>
          </v-row>

          <v-row align="center" justify="center" length>
            <br />
          </v-row>

          <v-row align="center" justify="center" length>
            <v-chip class="ma-2" color="green" text-color="white" small v-show="reserveStatus">
              開放中 / Open
            </v-chip>
            <v-chip class="ma-2" color="red" text-color="white" small v-show="!reserveStatus">
              關閉中 / Close
            </v-chip>
          </v-row>
          <v-row align="center" justify="center" length>
            <h4 style="color: gray; zoom: 0.8">非即時狀態顯示，以實際登入狀態為主</h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <h4 style="color: gray; zoom: 0.8">Non-real-time status display, based on actual login status</h4>
          </v-row>

          <!-- <v-row align="center" justify="center" length>
            <h4 style="color: gray">Start reserve at 9 am, Feb 14</h4>
          </v-row> -->
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <v-divider></v-divider>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <h2>開宿公告</h2>
          </v-row>
          <v-row align="center" justify="left" length>
            <h4 style="color: gray">Announcement</h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <a href="https://new.ntpu.edu.tw/osa/news?tag=住輔組" target="_blank"
              style="font-weight: bold;">https://new.ntpu.edu.tw/osa/news?tag=住輔組</a>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <v-divider></v-divider>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <h2>操作說明</h2>
          </v-row>
          <v-row align="center" justify="left" length>
            <h4 style="color: gray">Instructions</h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <h4>1. 以學生資訊系統帳號密碼登入</h4>
          </v-row>
          <v-row align="center" justify="left" length>
            <h5 style="color: gray">
              Login with your student information system account.
            </h5>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <h4>2. 挑選合適時間</h4>
          </v-row>
          <v-row align="center" justify="left" length>
            <h5 style="color: gray">Select the time.</h5>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <h4>3. 完成預約，請在約定時間完成開宿工作！</h4>
          </v-row>
          <v-row align="center" justify="left" length>
            <h5 style="color: gray">Done!</h5>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <v-btn href="/login" elevation="2" outlined plain raised>
              前往登入頁面 / Reserve
            </v-btn>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <v-divider></v-divider>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <!-- <v-row align="center" justify="left" length>
            <h2>Q & A</h2>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <div v-for="qa in qas" :key="qa">
            <v-row align="center" justify="left" length>
              <h4>{{ qa.q }}</h4>
            </v-row>
            <v-row align="center" justify="left" length>
              <h5 style="color: gray">{{ qa.a }}</h5>
            </v-row>
            <v-row align="center" justify="center" length>
              <br />
            </v-row>
          </div> -->
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <h4 style="color: #264653">
              更多問題請寄電子郵件至
              <a href="mailto:annwu6@mail.ntpu.edu.tw">annwu6 [at] mail.ntpu.edu.tw</a>，並請於信件註明學號、姓名與個案狀況
            </h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
var qaJson = require("../config/qa.json");
const axios = require("axios");
var config = require("../../config.json");

export default {
  name: "About",
  data() {
    return {
      qas: [],
      reserveStatus: false,
      reserveTime: "",
    };
  },
  methods: {
    updateStatus() {
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'get',
        url: config.apiurl + "/reserveTime",
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            self.reserveTime = response.data.message.time;
            self.reserveStatus = response.data.message.reserve;
          } else {
            console.log(response.data)
          }
          if (response.data.code === 403) {
            alert("You bad bad :(");
            self.$router.push("/logout");
          }
        })
        .catch(function (error) {
          if (error.response.status === 403) {
            self.$router.push("/logout");
          }
          else {
            alert(error);
          }
        });
    },
  },
  mounted: function () {
    this.qas = qaJson.qa;
    this.updateStatus();
  },
};
</script>