<template>
  <v-card elevation="0">
    <v-container v-show="!manage" fluid>
      <v-row>
        <v-col cols="12">
          <v-row
            v-show="userData.loadDone"
            align="center"
            justify="center"
            length
          >
            <v-form
              ref="form"
              v-model="valid"
              v-on:submit.prevent="search"
              lazy-validation
            >
              <v-text-field
                v-model="stuid"
                label="學號 / Student ID"
                type="number"
                required
              ></v-text-field>
              <v-btn color="#87C1A2" class="mr-4" @click="search">搜尋</v-btn>
            </v-form>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>

          <v-row
            v-show="userData.loadDone"
            align="center"
            justify="center"
            length
          >
            <v-btn outlined color="#B5563E" class="mr-4" @click="updateStatus"
              >更新已登入資訊</v-btn
            >
          </v-row>

          <v-row v-show="loginStatus" align="center" justify="center" length>
            <br />
          </v-row>

          <v-row
            v-show="userData.loadDone"
            align="center"
            justify="center"
            length
          >
            <v-btn
              outlined
              class="mr-4"
              :href="downloadHref"
              target="_blank"
              @click="csv"
              >下載 csv</v-btn
            >
          </v-row>

          <v-row v-show="!loginStatus" align="center" justify="center" length>
            <v-btn href="/login" elevation="2" outlined plain raised
              >Login</v-btn
            >
          </v-row>

          <v-row v-show="loginStatus" align="center" justify="center" length>
            <h1>{{ userData.building }}</h1>
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <br />
          </v-row>
          <v-row
            v-show="userData.loadDone"
            align="center"
            justify="center"
            length
          >
            <v-data-table
              :headers="headers"
              :items="statusData"
              class="elevation-1"
            >
              <!-- <template v-slot:item.calories="{ item }">
                <v-chip :color="getColor(item.calories)" dark>
                  {{ item.calories }}
                </v-chip>
              </template> -->
              <template v-slot:item.d="{ item }">
                <h3 style="color: #2b7a78">{{ item.d }}</h3>
              </template>

              <template v-slot:item.p="{ item }">
                <h3 v-show="item.p === 'n'" style="color: #2b7a78">❌</h3>
                <h3 v-show="item.p !== 'n'" style="color: #2b7a78">
                  {{ item.p }}
                </h3>
              </template>

              <template v-slot:item.h="{ item }">
                <h3 v-show="item.h === '0'" style="color: #2b7a78">❌</h3>
                <h3 v-show="item.h !== '0'" style="color: #2b7a78">✔️</h3>
              </template>

              <template v-slot:item.c="{ item }">
                <h3 v-show="item.c === 'n'" style="color: #2b7a78">❌</h3>
                <h3 v-show="item.c !== 'n'" style="color: #2b7a78">✔️</h3>
              </template>

              <template v-slot:item.vi="{ item }">
                <h3 v-show="item.vi === 'False'" style="color: #2b7a78">❌</h3>
                <h3 v-show="item.vi !== 'False'" style="color: #2b7a78">✔️</h3>
              </template>

              <template v-slot:item.de="{ item }">
                <!-- <v-btn
                  dark
                  color="#B5563E"
                  class="mr-4"
                  @click="recordDelete(item.s)"
                  >刪除</v-btn
                > -->
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      outlined
                      color="#B5563E"
                      class="mr-4"
                      v-bind="attrs"
                      v-on="on"
                    >
                      確認刪除？
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="recordDelete(item)">
                      <v-list-item-title> 按下去就刪除了 </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>

            <!-- <v-card>
              <v-tabs v-model="tab" background-color="primary" dark>
                <v-tab
                  v-for="item in tabItems"
                  :key="item.tab"
                  @click="changeStatusData(item.tab)"
                >
                  {{ item.tab }}
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in tabItems" :key="item.tab">
                  <v-card v-show="userData.loadDone" elevation="0">
                    <v-data-table
                      :headers="headers"
                      :items="statusData"
                      items-per-page="500"
                    >
                      <template v-slot:item.d="{ item }">
                        <h3 style="color: #2b7a78">{{ item.d }}</h3>
                      </template>

                      <template v-slot:item.p="{ item }">
                        <h3 v-show="item.p === 'n'" style="color: #2b7a78">
                          ❌
                        </h3>
                        <h3 v-show="item.p !== 'n'" style="color: #2b7a78">
                          {{ item.p }}
                        </h3>
                      </template>
                    </v-data-table>

                    <v-row align="center" justify="left" length>
                      <br /><br />
                    </v-row>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card> -->
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
      <div style="height: 30px" />
      <v-divider />
    </v-container>

    <v-container fluid>
      <div style="height: 30px" />
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length>
            <h1>報到頁面</h1>
          </v-row>
          <v-row align="center" justify="center" length>
            <!-- <h1>樓長權限</h1> -->
            <v-form
              ref="form"
              v-model="valid"
              v-on:submit.prevent="masterSearch"
              lazy-validation
            >
              <v-text-field
                v-model="masterStuid"
                label="學號 / Student ID"
                required
              ></v-text-field>
              <v-btn color="#87C1A2" class="mr-4" @click="masterSearch"
                >搜尋</v-btn
              >
            </v-form>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <v-card class="mx-auto" width="344" elevation="0">
              <v-row
                align="center"
                justify="center"
                style="background-color: #e9c46a"
                length
              >
                <h3>{{ checkInUserData.note }}</h3>
              </v-row>
              <v-row align="center" justify="left" length>
                <br />
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>學號： {{ checkInUserData.stuid }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>姓名： {{ checkInUserData.name }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>棟別： {{ checkInUserData.build }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>房床號： {{ checkInUserData.detail }}</h3>
              </v-row>
              <!-- <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>續住： {{ checkInUserData.cont }}</h3>
              </v-row> -->
              <v-row
                v-show="checkInUserData.reserve_exist"
                align="center"
                justify="left"
                length
              >
                <h3>應報到時間： {{ checkInUserData.date }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.reserve_exist"
                align="center"
                justify="left"
                length
              >
                <h3>停車優惠券： {{ checkInUserData.parking }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>是否報到： {{ checkInUserData.checkin }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>是否繳費： {{ checkInUserData.bill }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>臨時卡編號： {{ checkInUserData.cardid }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>是否領取停車券： {{ checkInUserData.coupon }}</h3>
              </v-row>
              <v-row
                v-show="checkInUserData.user_exist"
                align="center"
                justify="left"
                length
              >
                <h3>目前訪客是否還在宿舍： {{ checkInUserData.visitor }}</h3>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.visitorId !== 'None'
                "
                align="center"
                justify="left"
                length
              >
                <h3>訪客身分證： {{ checkInUserData.visitorId }}</h3>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.visitorId !== 'None'
                "
                align="center"
                justify="left"
                length
              >
                <h3>訪客電話： {{ checkInUserData.visitorPhone }}</h3>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.visitorId !== 'None'
                "
                align="center"
                justify="left"
                length
              >
                <h3>訪客開始時間： {{ checkInUserData.visitorStart }}</h3>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.visitorId !== 'None'
                "
                align="center"
                justify="left"
                length
              >
                <h3>訪客結束時間： {{ checkInUserData.visitorEnd }}</h3>
              </v-row>
            </v-card>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row
            v-show="checkInUserData.user_exist"
            align="center"
            justify="center"
            length
          >
            <v-card class="mx-auto" width="344" elevation="0">
              <v-divider />
            </v-card>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <v-card class="mx-auto" width="344" elevation="0">
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <br />
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <h3 style="background-color: #e9c46a">
                  請確認宿生本人身分，可問他姓名確認，並量體溫
                </h3>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <br />
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <h4>繳費 (不知道去哪繳，可以說去繳學雜費的地方)</h4>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="center"
                length
              >
                <v-switch v-model="checkinBill">
                  <template v-slot:label>
                    <!-- <h3>{{ showTextBill(checkinBill) }}</h3> -->
                  </template>
                </v-switch>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <h4>臨時卡號碼 (沒有請填 0)</h4>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="center"
                length
              >
                <div style="width: 200px">
                  <v-text-field
                    v-model="checkinCardId"
                    label="臨時卡號碼"
                    type="number"
                    counter="4"
                  >
                  </v-text-field>
                </div>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.parking !== '不需要' &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <h4>停車優惠券 (有看到這行就給他優惠券，並打勾)</h4>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.parking !== '不需要' &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="center"
                length
              >
                <v-switch v-model="checkinCoupon">
                  <template v-slot:label>
                    <!-- <h3>{{ showTextBill(checkinBill) }}</h3> -->
                  </template>
                </v-switch>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.visitorId === 'None' &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <h4>
                  訪客
                  (請訪客量體溫，質押訪客本人身分證，僅訪客本人可進出，不可換人，限制一人與
                  30 分鐘，並提醒因實聯制需記錄身分證與電話)
                </h4>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.visitorId === 'None' &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="center"
                length
              >
                <v-switch v-model="checkinVisitor">
                  <template v-slot:label>
                    <!-- <h3>{{ showTextBill(checkinBill) }}</h3> -->
                  </template>
                </v-switch>
              </v-row>
              <v-row
                v-show="
                  checkinVisitor &&
                  checkInUserData.visitor != 'True' &&
                  checkInUserData.visitorId === 'None' &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="center"
                length
              >
                <div style="width: 200px">
                  <v-text-field
                    v-model="checkinVisitorId"
                    label="訪客身分證"
                    counter="10"
                  >
                  </v-text-field>
                </div>
              </v-row>
              <v-row
                v-show="
                  checkinVisitor &&
                  checkInUserData.visitor != 'True' &&
                  checkInUserData.visitorId === 'None' &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="center"
                length
              >
                <div style="width: 200px">
                  <v-text-field
                    v-model="checkinVisitorPhone"
                    label="訪客電話"
                    type="number"
                    counter="10"
                  >
                  </v-text-field>
                </div>
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <br />
              </v-row>
              <v-row
                align="center"
                justify="center"
                v-show="!hasSubmit"
                style="background-color: #FF2A14"
                length
              >
                <h3>請記得按下送出</h3>
              </v-row>
              <v-row
                align="center"
                justify="center"
                style="background-color: #e9c46a"
                length
              >
                <h3>{{ checkInUserData.note }}</h3>
              </v-row>
              <v-row
                align="center"
                justify="left"
                length
              >
                <br />
              </v-row>
              <v-row
                v-show="
                  checkInUserData.user_exist &&
                  checkInUserData.stuid.length === 9
                "
                align="center"
                justify="left"
                length
              >
                <v-btn color="#87C1A2" class="mr-4" @click="masterCheckin">
                  報到 / 更新資料
                </v-btn>
              </v-row>
            </v-card>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-overlay v-show="initOverlay">
      <v-progress-circular indeterminate size="64"> </v-progress-circular>
    </v-overlay>
  </v-card>
</template>

<script>
const axios = require("axios");
var config = require("../../config.json");
let Base64 = require("js-base64").Base64;

export default {
  name: "Home",
  data() {
    return {
      initOverlay: true,
      window_height: 100,
      window_width: 100,
      stuid: "",
      stuidRules: [
        (v) => !!v || "請輸入學號",
        (v) => (v && v.length === 9) || "請輸入學號正確格式",
      ],
      masterStuid: "",
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
      loginStatus: false,
      userData: {
        uuid: "N/A",
        building: "Loading...",
        reserve: false,
      },
      tab: null,
      tabItems: [
        { tab: "9/18", content: "" },
        { tab: "9/19", content: "" },
        { tab: "9/20", content: "" },
        { tab: "9/21", content: "" },
      ],
      saveStatusData: [],
      statusData: [],
      headers: [
        { text: "日期", value: "d" },
        { text: "學號", value: "s" },
        { text: "棟別", value: "b" },
        { text: "停車券", value: "p" },
        { text: "是否健康", value: "h" },
        { text: "報到", value: "c" },
        { text: "訪客是否在宿舍", value: "vi" },
        { text: "訪客開始時間", value: "vs" },
        { text: "刪除", value: "de" },
      ],
      downloadHref: "N/A",
      manage: false,
      checkInUserData: {
        bill: "N/A",
        build: "N/A",
        cardid: "N/A",
        checkin: "N/A",
        cont: "N/A",
        coupon: "N/A",
        date: "N/A",
        detail: "N/A",
        name: "N/A",
        parking: "N/A",
        reserveTime: "N/A",
        reserve_exist: false,
        user_exist: false,
        note: "",
      },
      checkinBill: false,
      checkinCardId: "",
      checkinCoupon: false,
      checkinVisitor: false,
      checkinVisitorId: "",
      checkinVisitorPhone: "09",
      searchLoading: false,
      hasSubmit: true,
    };
  },
  components: {},
  methods: {
    reserveBtn(item) {
      this.window_height = window.innerHeight;
      this.window_width = window.innerWidth;
      this.overlay = !this.overlay;
      this.overlayData = item;
    },
    overlayOutside() {
      this.overlay = false;
    },
    updateStatus() {
      this.userData.building = "Loading...";
      this.userData.loadDone = false;
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
          ac: true,
        })
        .then(function (response) {
          console.log(response.data);
          self.$cookie.set("session", response.data.session, 1);
          self.csv();
          self.userData.building = "";
          if (response.data.message.admin !== true) {
            alert("Why you here?");
            self.$router.push("/");
          }
          self.manage = response.data.message.master;
          if (response.data.code === 200) {
            self.saveStatusData = response.data.message.data;
            self.userData.loadDone = true;
            // self.changeStatusData("7/16");
            self.statusData = response.data.message.data;
            self.initOverlay = false;
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
    recordDelete(item) {
      this.initOverlay = true;
      this.userData.loadDone = false;
      let self = this;
      axios
        .post(config.apiurl + "/admin_delete", {
          id: this.$cookie.get("id"),
          session: this.$cookie.get("session"),
          s: item.s,
          d: item.d,
        })
        .then(function (response) {
          console.log(response.data);
          self.$cookie.set("session", response.data.session, 1);
          self.csv();
          if (response.data.code === 200) {
            self.saveStatusData = response.data.message.data;
            self.userData.loadDone = true;
            // self.changeStatusData("7/16");
            self.statusData = response.data.message.data;
            self.initOverlay = false;
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
    masterSearch() {
      var stuid_this = this.masterStuid;
      if (!this.searchLoading && stuid_this.length <= 12) {
        self.searchLoading = true;
        if (this.masterStuid.length === 12) {
          stuid_this = Base64.decode(stuid_this);
        }
        if (this.masterStuid.length === 10) {
          this.visitor_end();
        } else {
          this.initOverlay = true;
          this.hasSubmit = false;
          this.checkInUserData.note = "";
          this.checkinBill = false;
          this.checkinCardId = "";
          this.checkinCoupon = false;
          this.checkinVisitor = false;
          this.checkinVisitorId = "";
          this.checkinVisitorPhone = "09";
          let self = this;
          axios
            .post(config.apiurl + "/checkin_search", {
              id: this.$cookie.get("id"),
              session: this.$cookie.get("session"),
              s: stuid_this,
            })
            .then(function (response) {
              console.log(response.data);
              self.$cookie.set("session", response.data.session, 1);
              if (response.data.code === 200) {
                // self.saveStatusData = response.data.message.data;
                self.checkInUserData = response.data.message.data;
                if (self.checkInUserData.cardid !== "還未報到") {
                  self.checkinCardId = self.checkInUserData.cardid;
                }
                if (
                  self.checkInUserData.coupon !== "還未報到" &&
                  self.checkInUserData.coupon === "True"
                ) {
                  self.checkinCoupon = true;
                }
                if (
                  self.checkInUserData.bill !== "還未報到" &&
                  self.checkInUserData.bill === "True"
                ) {
                  self.checkinBill = true;
                }
                self.checkInUserData.stuid = stuid_this;
                self.masterStuid = "";
                self.initOverlay = false;
                self.searchLoading = false;
              } else {
                self.$cookie.set("session", response.data.session, 1);
              }
              if (response.data.code === 403) {
                alert("You bad bad :(");
                self.$router.push("/logout");
              }
            })
            .catch(function (error) {
              self.initOverlay = false;
              alert("請重新登入");
              alert(error);
            });
        }
      }
    },
    visitor_end() {
      let stuid_this = this.masterStuid;
      this.initOverlay = true;
      let self = this;
      axios
        .post(config.apiurl + "/checkin_visitor_end", {
          id: this.$cookie.get("id"),
          session: this.$cookie.get("session"),
          visitorId: stuid_this,
        })
        .then(function (response) {
          console.log(response.data);
          self.$cookie.set("session", response.data.session, 1);
          if (response.data.code === 200) {
            self.checkInUserData = response.data.message.data;
            self.checkInUserData.stuid = stuid_this;
            self.masterStuid = "";
            self.initOverlay = false;
            self.searchLoading = false;
            self.hasSubmit = true;
          } else {
            self.$cookie.set("session", response.data.session, 1);
          }
          if (response.data.code === 403) {
            alert("You bad bad :(");
            self.$router.push("/logout");
          }
        })
        .catch(function (error) {
          self.initOverlay = false;
          alert("請重新登入");
          alert(error);
        });
    },
    masterCheckin() {
      // this.checkinBill = false;
      // this.checkinCardId = "";
      // this.checkinCoupon = false;
      if (this.checkinCardId === "") {
        alert("請填寫臨時卡號碼");
      } else if (
        this.checkinVisitor &&
        (this.checkinVisitorId === "" ||
          this.checkinVisitorPhone === "" ||
          this.checkinVisitorId.length != 10 ||
          this.checkinVisitorPhone.length != 10)
      ) {
        alert("請填寫正確訪客資訊");
      } else {
        this.initOverlay = true;
        this.userData.loadDone = false;
        let self = this;
        axios
          .post(config.apiurl + "/checkin_edit", {
            id: this.$cookie.get("id"),
            session: this.$cookie.get("session"),
            s: this.checkInUserData.stuid,
            bill: this.checkinBill,
            cardId: this.checkinCardId,
            coupon: this.checkinCoupon,
            visitor: this.checkinVisitor,
            visitorId: this.checkinVisitorId,
            visitorPhone: this.checkinVisitorPhone,
          })
          .then(function (response) {
            console.log(response.data);
            self.$cookie.set("session", response.data.session, 1);
            self.csv();
            if (response.data.code === 200) {
              let tmp = self.checkInUserData.stuid;
              self.checkInUserData = response.data.message.data;
              self.checkInUserData.stuid = tmp;
              self.initOverlay = false;
              self.hasSubmit = true;
            } else {
              self.$cookie.set("session", response.data.session, 1);
            }
            if (response.data.code === 403) {
              alert("You bad bad :(");
              self.$router.push("/logout");
            }
          })
          .catch(function (error) {
            self.initOverlay = false;
            alert("請重新登入");
            alert(error);
          });
      }
    },
    chipGetColor(current, max) {
      if (current >= max) return "#FF4F4F";
      else if (current / max <= 0.2) return "#4F9EFF";
      else if (current / max > 0.2 && current / max <= 0.6) return "#9EB53E";
      else if (current / max > 0.6) return "#FFAC4F";
    },
    changeStatusData(date) {
      var tmp = [];
      for (var status in this.saveStatusData) {
        if (this.saveStatusData[status]["d"] === date) {
          tmp.push(this.saveStatusData[status]);
        }
      }
      this.statusData = tmp;
    },
    showTextBill(checkinBill) {
      if (checkinBill) return "已經繳費";
      else return "還沒繳費";
    },
    search() {
      var tmp = [];
      for (var status in this.saveStatusData) {
        if (this.saveStatusData[status]["s"] === this.stuid) {
          tmp.push(this.saveStatusData[status]);
        }
      }
      this.statusData = tmp;
      this.stuid = "";
    },
    csv() {
      this.downloadHref =
        config.apiurl +
        "/admin/access/csv/" +
        Math.random() * 100 +
        "/" +
        this.$cookie.get("session") +
        "/" +
        this.$cookie.get("id");
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
