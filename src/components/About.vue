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
            <h3 style="color: #4c4c6d">8 月 26 日 下午 1 時開放預約</h3>
          </v-row>
          <v-row align="center" justify="center" length>
            <h4 style="color: gray">Start at 1 pm, Aug 26</h4>
          </v-row>
          <!-- <v-row align="center" justify="center" length>
            <br />
          </v-row>
          <v-row align="center" justify="center" length>
            <h3 style="color: #a93f29">
              整理完成請於寢室電話撥打 <strong>59146</strong>
            </h3>
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
          <v-row align="center" justify="center" length>
            <v-card class="mx-auto" elevation="0" width="150">
              <v-row align="center" justify="center" length>
                <h3>9/1 ~ 9/4</h3>
              </v-row>
            </v-card>
            <v-card width="10px"></v-card>
            <v-divider vertical></v-divider>
            <v-col>
              <v-card class="mx-auto" elevation="0" color="#E8F6EF">
                <v-row align="center" justify="center" length>
                  <h4>09:00 - 12:00, 14:00 - 17:00</h4>
                </v-row>
              </v-card>
            </v-col>
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
            <h3>
              <a
                href="https://www.ntpu.edu.tw/admin/a8/org/a8-9/news.php"
                target="_blank"
                >https://www.ntpu.edu.tw/admin/a8/org/a8-9/news.php</a
              >
            </h3>
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
          <v-row align="center" justify="left" length>
            <h4>Q1. 這次開宿時段有限制人數嗎？</h4>
          </v-row>
          <v-row align="center" justify="left" length>
            <h5 style="color: gray">
              Ans. 有的，您可以登入系統查看該棟各時段剩餘可預約人數。
            </h5>
          </v-row>
          <v-row align="center" justify="left" length>
            <h4>Q2. 預約錯了或是想要取消怎麼辦？</h4>
          </v-row>
          <v-row align="center" justify="left" length>
            <h5 style="color: gray">
              Ans.
              在預約完成後，確認頁面有取消預約按鈕，按照步驟操作即可重新預約。
            </h5>
          </v-row>
          <v-row align="center" justify="left" length>
            <h4>Q3. 家長可以進入校園 / 可以與家人開車進入校園？</h4>
          </v-row>
          <v-row align="center" justify="left" length>
            <h5 style="color: gray">
              Ans. 可以，可以直接進入校園，離校前需進行繳費。
            </h5>
          </v-row>
          <v-row align="center" justify="left" length>
            <h4>Q4. 出現帳號未授權訊息怎麼辦？</h4>
          </v-row>
          <v-row align="center" justify="left" length>
            <h5 style="color: gray">
              Ans.
              可以再次確認是否輸入正確的學號，或是確認自己是否有三峽校區床位！
            </h5>
          </v-row>          <v-row align="center" justify="center" length>
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
