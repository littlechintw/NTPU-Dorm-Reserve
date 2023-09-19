<template>
  <v-card elevation="0">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <h1 style="color: red">{{ errValue }}</h1>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <div v-show="formShow">

            <!-- <v-row align="center" justify="center" length>
              <button @click="loginWithGoogle">使用Google登入</button>
            </v-row> -->
            <v-row align="center" justify="center" length>
              <h3>請登入 Google Workspace 帳號</h3>
            </v-row>

            <v-row align="center" justify="center" length>
              <h5 style="color: gray">
                Login with your Google Workspace account.
              </h5>
            </v-row>

            <v-row align="center" justify="center" length><br /></v-row>
            <v-row align="center" justify="center" length>
              <div class="google-btn" @click="loginWithGoogleBtn">
                <div class="google-icon-wrapper">
                  <img class="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                </div>
                <div class="btn-text">
                  <b>Sign in with Google</b>
                </div>
              </div>
              <!-- <v-form ref="form" v-model="valid" v-on:submit.prevent="validate" lazy-validation>
                <v-text-field v-model="stuid" :rules="stuidRules" label="學號 / Student ID" type="number"
                  required></v-text-field>
                <v-text-field v-model="pwd" :rules="pwdRules" label="密碼 / Password" type="password"
                  required></v-text-field>
                <v-btn :disabled="!valid" color="#87C1A2" class="mr-4" @click="validate">登入 / Login</v-btn>
              </v-form> -->
            </v-row>
            <v-row align="center" justify="center" length>
              <br />
            </v-row>
          </div>
          <div v-show="formLoadingShow">
            <v-row align="center" justify="center" length><br /></v-row>
            <v-row align="center" justify="center" length>
              <v-progress-circular indeterminate color="amber"></v-progress-circular>
            </v-row>
          </div>
          <br />
          <v-row align="center" justify="center" length style="background-color: #17252a; color: white; zoom: 1.3">
            {{ tipsText }}
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
      valid: false,
      stuid: "",
      stuidRules: [
        (v) => !!v || "請輸入學號",
        (v) => (v && v.length === 9) || "請輸入學號正確格式",
      ],
      pwd: "",
      pwdRules: [(v) => !!v || "請輸入密碼"],
      formShow: true,
      formLoadingShow: false,
      tipsText: "",
      errValue: "",
      tokenValue: "",
    };
  },
  components: {},
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.formShow = false;
        this.formLoadingShow = true;
        this.tipsText = "";
        let self = this;
        axios
          .post(config.apiurl + "/login", {
            stu_id: this.stuid,
            pwd: this.pwd,
          })
          .then(function (response) {
            console.log(response.data);
            if (response.data.code !== 200) {
              self.formShow = true;
              self.formLoadingShow = false;
              self.tipsText = response.data.message;
            } else {
              self.$cookie.set("token", response.data.session, 1);
              self.$router.push("/reserve");
              location.reload();
            }
          })
          .catch(function (error) {
            alert(error);
          });
      }
    },
    loginWithGoogle() {
      this.$cookie.set("token", this.tokenValue, 1);
      this.$router.push("/reserve");
    },
    loginWithGoogleBtn() {
      this.$router.push("/api/google/login");
      location.reload();
    }
  },
  mounted: function () {
    if (this.$cookie.get("token")) {
      this.$router.push("/reserve");
    }
    const params = new URLSearchParams(window.location.search);
    if (params.has('err')) {
      this.errValue = params.get('err');
    }
    if (params.has('token')) {
      this.tokenValue = params.get('token');
      this.loginWithGoogle();
    }
  },
};
</script>

<style scoped>
.google-btn {
  width: 184px;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .25);
  display: flex;
  align-items: center;
  /* 垂直置中 */
  position: relative;

  .google-icon-wrapper {
    position: relative;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    /* 水平置中 */
    align-items: center;
    /* 垂直置中 */
  }

  .google-icon {
    width: 18px;
    height: 18px;
  }

  .btn-text {
    margin-left: 10px;
    /* 增加左側空白 */
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
    display: flex;
    /* 使用 flexbox 排列內容 */
    flex-direction: column;
    /* 垂直排列內容 */
    align-items: center;
    /* 內容垂直置中 */
    justify-content: center;
    /* 內容水平置中 */
  }

  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }

  &:active {
    background: #1669F2;
  }
}

@import url(https://fonts.googleapis.com/css?family=Roboto:500);
</style>