<template>
  <v-app style="background-color: #feffff">
    <div class="inapp">
      <v-app-bar app dark dense flat color="#264653">
        <v-toolbar-title>
          <a href="/" style="color: white; text-decoration: none">北大宿舍預約系統</a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-show="reserveBtnShow" href="/reserve" elevation="2" outlined plain raised>預約 / Reserve</v-btn>
        <v-card width="10px"></v-card>
        <v-btn :disabled="closeState" :href="btn.url" elevation="2" outlined plain raised>{{ btn.title }}</v-btn>
      </v-app-bar>

      <v-main>
        <v-card>
          <v-alert type="red" dense text dismissible v-show="!apiStatus && !closeState">
            API seem bad, refresh this page for some times. If not work, please contact IT to solve this problem.
            {{ apiurl }}
          </v-alert>
        </v-card>
        <v-card v-show="account">
          <v-alert type="success" dense text dismissible>
            Login as {{ account }}
          </v-alert>
        </v-card>
        <v-card>
          <v-alert v-if="closeState" type="warning" dense text dismissible>
            系統目前未開放 / The system is not open now
          </v-alert>
        </v-card>
        <div id="router" v-bind:style="{ minHeight: Height + 'px' }">
          <router-view />
        </div>
      </v-main>
    </div>

    <v-footer padless class="font-weight-medium" color="#e9c46a">
      <v-col class="text-center" cols="12" style="font-size: 14px">
        &copy; 2021 - {{ dynamicYear }} Copyright
        <a href="https://littlechintw.github.io">littlechin.tw</a>. All rights
        reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
const axios = require("axios");
let Base64 = require("js-base64").Base64;
var config = require("../config.json");
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data: () => ({
    apiStatus: true,
    btn: {
      title: "LOGIN",
      url: "/login",
    },
    reserveBtnShow: false,
    account: "",
    login: false,
    Height: 0,
    Width: 0,
    closeState: false,
    apiurl: "",
    dynamicYear: new Date().getFullYear(),
  }),
  methods: {
    checkApiAlive() {
      let self = this;
      this.apiurl = config.apiurl
      axios({
        method: 'get',
        url: config.apiurl + "/monitor",
      })
        .then(function (response) {
          console.log('API OK')
          console.log(response)
        })
        .catch(function (error) {
          console.log('API BAD')
          self.apiStatus = false
          console.log(error)

        });
    },
    checkForCookie() {
      if (this.$cookie.get("token")) {
        this.btn.title = "LOGOUT";
        this.btn.url = "/logout";
        this.reserveBtnShow = true;
        this.account = Base64.decode(this.$cookie.get("id"));
      }
    }
  },
  mounted() {
    this.checkApiAlive()
    this.closeState = config.closeState;

    this.checkForCookie();
    const checkCookieInterval = setInterval(this.checkForCookie, 1000); // 每 1 秒檢查一次

    this.Height = document.documentElement.clientHeight - 90;
    this.Width = document.documentElement.clientWidth;
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - 100;
    };
  },
};
</script>

<style>
@import "./assets/font/font.css";

/* div {
  font-family: Open Huninn;
} */
.inapp {
  width: 80%;
  margin-left: 10%;
}

#app {
  font-family: Open Huninn;
}
</style>
