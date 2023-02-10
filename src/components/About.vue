<template>
  <v-card elevation="0">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <h1 style="zoom: 1.3">北大宿舍預約系統</h1>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <h3 style="color: #4c4c6d">2 月 14 日 上午 9 時開放預約</h3>
          </v-row>
          <v-row align="center" justify="center" length>
            <h4 style="color: gray">Start reserve at 9 am, Feb 14</h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
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
            <h2>開宿公告</h2>
          </v-row>
          <v-row align="center" justify="left" length>
            <h4 style="color: gray">Announcement</h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <a
              href="https://www.ntpu.edu.tw/admin/a8/org/a8-9/news.php"
              target="_blank"
              style="font-weight: bold;"
              >https://www.ntpu.edu.tw/admin/a8/org/a8-9/news.php</a
            >
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
            <h4>1. 以學生資訊系統登入</h4>
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
            <h4>2. 填寫健康聲明書，並挑選合適時間</h4>
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
          <v-row align="center" justify="left" length>
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
          </div>
          <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="left" length>
            <h4 style="color: #264653">
              更多問題請寄電子郵件至
              <a href="mailto:annwu6@mail.ntpu.edu.tw"
                >annwu6 [at] mail.ntpu.edu.tw</a
              >，並請於信件註明學號、姓名與個案狀況
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

export default {
  name: "About",
  data() {
    return {
      qas: [],
    };
  },
  mounted: function () {
    this.qas = qaJson.qa;
  },
};
</script>