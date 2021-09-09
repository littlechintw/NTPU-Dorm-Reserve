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
            <v-card>
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
                  <!-- - -->
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
                  <!-- - -->
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length>
            <h1>樓長權限</h1>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
const axios = require("axios");
var config = require("../../config.json");

export default {
  name: "Home",
  data() {
    return {
      window_height: 100,
      window_width: 100,
      stuid: "",
      stuidRules: [
        (v) => !!v || "請輸入學號",
        (v) => (v && v.length === 9) || "請輸入學號正確格式",
      ],
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
      ],
      downloadHref: "N/A",
      manage: false,
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
            self.changeStatusData("7/16");
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
