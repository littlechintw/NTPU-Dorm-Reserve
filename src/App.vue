<template>
  <v-app style="background-color: #feffff">
    <div class="inapp">
      <v-app-bar app dark dense flat color="#264653">
        <v-toolbar-title>
          <a href="/" style="color: white; text-decoration: none"
            >北大宿舍預約系統</a
          >
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          v-show="reserveBtnShow"
          href="/reserve"
          elevation="2"
          outlined
          plain
          raised
          >預約 / Reserve</v-btn
        >
        <v-card width="10px"></v-card>
        <v-btn
          :disabled="closeState"
          :href="btn.url"
          elevation="2"
          outlined
          plain
          raised
          >{{ btn.title }}</v-btn
        >
      </v-app-bar>

      <v-main>
        <!-- <v-card>
          <v-alert type="red" dense text dismissible>
            系統將於 6/8 22:00 ~ 23:00 維護，將短暫無法使用，請您見諒！
          </v-alert>
        </v-card> -->
        <v-card v-show="account">
          <v-alert type="success" dense text dismissible>
            Login as {{ account }}
          </v-alert>
        </v-card>
        <v-card>
          <v-alert v-if="closeState" type="warning" dense text dismissible>
            系統已經關閉
          </v-alert>
        </v-card>
        <div id="router" v-bind:style="{ minHeight: Height + 'px' }">
          <router-view />
        </div>
      </v-main>
    </div>

    <v-footer padless class="font-weight-medium" color="#e9c46a">
      <v-col class="text-center" cols="12" style="font-size: 14px">
        &copy; 2022 Copyright
        <a href="https://littlechintw.github.io">littlechin.tw</a>. All rights
        reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
let Base64 = require("js-base64").Base64;
var config = require("../config.json");
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data: () => ({
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
  }),
  mounted() {
    this.closeState = config.closeState;
    if (this.$cookie.get("token")) {
      this.btn.title = "LOGOUT";
      this.btn.url = "/logout";
      this.reserveBtnShow = true;
      this.account = Base64.decode(this.$cookie.get("id"));
    }
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
