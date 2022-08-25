<template>
  <v-card elevation="0">
    <!-- 輸入表單 -->
    <v-container v-show="!reserveDone" fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row v-show="!loginStatus" align="center" justify="center" length>
            <about />
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <h1>預約 / Rrserve</h1>
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <br />
          </v-row>
          <v-row v-show="loginStatus" align="center" justify="center" length>
            <v-stepper v-model="e13" vertical min-width="100%">
              <v-stepper-step step="1" :complete="false">
                簡介 / Intro
              </v-stepper-step>

              <v-stepper-content step="1">

                <h4>為因應新冠肺炎疫情，請填寫自我通報健康關懷表，並務必詳細閱讀注意事項。謝謝。</h4>
                <h5>In response to the COVID-19 pandemic, please fill in the
                  following Self-Health Declaration Form and read the precaution carefully. Thank you.</h5>

                <br />

                <h4 style="color: red">本問卷調查之個人相關資料，僅提供政府衛生相關單位、教育部及本校防疫需求使用。</h4>
                <h5 style="color: red">The personal information in this survey is only for the use
                  of government health-related units, the Ministry of Education, and the university's epidemic
                  prevention needs.</h5>

                <br />

                <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card> -->
                <v-btn color="primary" @click="e13 = 2">
                  下一步 / Next
                </v-btn>
              </v-stepper-content>

              <v-stepper-step step="2" :complete="false">
                健康聲明書 / Self-Health Declaration Form
              </v-stepper-step>

              <v-stepper-content step="2">

                <h3>個人資料</h3>
                <v-text-field v-model="health_form.phone" :rules="health_form.phoneRules" label="連絡電話 / Phone"
                  type="number" required>
                </v-text-field>

                <v-divider></v-divider>
                <br />

                <!-- <h3>(一) 自主防疫史</h3> -->
                <v-checkbox v-model="health_form.check_1" label="預計入住報到日，尚於自主防疫(同住密切接觸者)期間">
                </v-checkbox>

                <!-- <h3>(二) COVID-19有關症狀史 Symptoms related to COVID-19</h3> -->
                <v-checkbox v-model="health_form.check_2"
                  label="入住前 3 天內是否出現以下症狀：發燒 (額溫≧ 37.5℃、耳溫≧ 38℃)、咳嗽、喉嚨痛、呼吸道窘迫症狀 (呼吸急促﹑呼吸困難)、流鼻水、肌肉或關節酸痛、四肢無力。Have you had the following symptom(s) in the past 3 days: Fever (forehead temperature≧ 37.5℃, ear temperature≧ 38 ℃), Cough, Sore throat, Shortness of Breath, Dyspnea, Running nose, Muscle soreness or Joint pain, General fatigue.">
                </v-checkbox>

                <br />

                <p v-show="health_form.check_1 || health_form.check_2" style="color: red" strong>
                  如上述問題有選擇「是」者，考慮到宿舍屬於集中式生活空間，請延後報到(請填寫延後入住申請問卷)，待狀況解除後，再另行報到入住。Given that
                  the dormitory is a mixed
                  space where people from different places gather and live, If you select "Yes" on any questions
                  above,
                  we recommend that you delay your check-in until the situation is resolved.</p>

                <v-divider></v-divider>
                <br />

                <v-checkbox v-model="health_form.serious_1"
                  label="本人如隱匿上述防疫事實，將自行承擔相關責任。If I conceal any facts about the pandemic prevention measure above, I will bear all the related responsibility">
                </v-checkbox>

                <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card> -->
                <v-btn color="primary" @click="e13 = 3"
                  :disabled="!health_form.serious_1 || (health_form.phone === '')">
                  下一步 / Next
                </v-btn>
                <v-btn text @click="e13 = 1">
                  返回上一步 / Back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step step="3" :complete="false">
                宿舍防疫宣導 / Epidemic prevention in dormitory
              </v-stepper-step>

              <v-stepper-content step="3">

                <h4>(一) 養成每日量溫習慣，進出宿舍請以酒精消毒雙手，回到寢室請以肥皂洗手。</h4>
                <h5>Develop the habit of measuring temperature every day, disinfect
                  your hands with alcohol when entering and leaving the dormitory, and wash your hands with soap when
                  returning to the room.</h5>
                <br />

                <h4>(二) 離開房間進入公共空間請全程佩戴口罩（包含使用廚房時）；搭乘電梯時請避免交談。</h4>
                <h5>Please wear a mask whenever you leave the room (including
                  when using the kitchen) and avoid conversation when taking the elevator.</h5>
                <br />

                <h4>(三) 寢室內部請自行定期清潔，並以稀釋漂白水 (1:100) 或酒精等消毒。</h4>
                <h5>Please clean and use diluted bleach (1:100) or alcohol to
                  disinfect your room regularly.</h5>
                <br />

                <h4>(四) 疫情警戒期間，請減少跨區交流。宿舍僅開放每日 9 - 21 時，不同棟宿生(辰曦樓不同性別樓層宿生)互訪，每次限額 1 人、限時 1 小時(可延長 1
                  小時)。訪客進入宿舍前須至辦公室辦理登記。</h4>
                <h5>During
                  the epidemic period, please avoid communication between different floors and buildings. The
                  dormitory
                  is only open from 9 am. to 9 pm. daily for mutual visits between residents of different buildings
                  (or
                  residents of different sexes in the Glorious Morn Building). Visitors must check in at the SHS
                  office
                  before entering the dormitory.</h5>
                <br />

                <h4>(五) 住宿期間如有身體不適症狀，如發燒 (額溫≧ 37.5℃、耳溫≧ 38℃)、咳嗽、喉嚨痛、呼吸道窘迫症狀
                  (呼吸急促﹑呼吸困難)、流鼻水、肌肉或關節酸痛、四肢無力等，請先自行快篩，快篩結果如為陽性請立刻通報本組(02-86716784)。※如有發燒症狀，請立刻通報。</h4>
                <h5>If you have any
                  uncomfortable symptoms during your stay, such as fever (forehead temperature > 37.5°C, ear
                  temperature
                  > 38°C), cough, sore throat, respiratory distress (shortness of breath, difficulty breathing), runny
                  nose, muscle or joint pain, limb weakness, etc., please use the rapid test. Please report to SHS
                  (02-86716784) immediately if your rapid test is positive. ★ If you have a fever, please report it
                  immediately.</h5>
                <br />

                <v-checkbox v-model="health_form.serious_2"
                  label="我已詳閱上述宿舍防疫宣導，並於住宿期間願意配合相關規定。I have read through the Epidemic prevention of dormitory in detail, and I am willing to cooperate with the relevant regulations during my stay.">
                </v-checkbox>

                <v-btn color="primary" @click="e13 = 4; updateStatus()" :disabled="!health_form.serious_2">
                  下一步 / Next
                </v-btn>
                <v-btn text @click="e13 = 2">
                  返回上一步 / Back
                </v-btn>
              </v-stepper-content>

              <!-- <v-stepper-step :rules="[() => false]" step="4"> -->
              <v-stepper-step step="4">
                選擇時段 / Choose time
                <!-- <small>Alert message</small> -->
              </v-stepper-step>

              <v-stepper-content step="4">

                <v-radio-group v-model="reserve_form.event_id">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            時間 / Time
                          </th>
                          <th class="text-left">
                            可預約人數 / Available
                          </th>
                          <!-- <th class="text-left">
                            
                          </th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in events_list" :key="item.event_name">
                          <td>
                            <v-radio :label="item.event_name" :value="item.event_id"></v-radio>
                          </td>
                          <td>
                            {{ item.remainReserve }}
                          </td>
                          <!-- <td>
                            <v-progress-linear color="teal" buffer-value="0"
                              :value="item.remainReserve / item.maxReserve * 100" stream>
                            </v-progress-linear>
                          </td> -->
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-radio-group>

                <!-- {
                "date": "2022-09-01",
                "endTime": "2022-09-01 12:00:00",
                "event_id": "09010",
                "event_name": "9/1 (四) 上午",
                "remainReserve": 30,
                "startTime": "2022-09-01 09:00:00"
                }, -->

                <v-btn color="primary" @click="e13 = 5" :disabled="reserve_form.event_id === ''">
                  下一步 / Next
                </v-btn>
                <v-btn text @click="e13 = 3">
                  返回上一步 / Back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step step="5">
                停車券 / Parking ticket
              </v-stepper-step>

              <v-stepper-content step="5">
                <v-container fluid>
                  <h4 style="color: orange">停車券可折抵當日一次停車，且僅有申請者可以於櫃檯領取！</h4>
                  <v-radio-group v-model="reserve_form.parking_radio" mandatory>
                    <v-radio label="需要停車券 / Need" value="y"></v-radio>
                    <v-radio label="不需要停車券 / No Need" value="n"></v-radio>
                  </v-radio-group>
                  <v-text-field v-show="reserve_form.parking_radio === 'y'" v-model="reserve_form.parking"
                    label="車號 / Car ID" required>
                  </v-text-field>
                </v-container>

                <v-btn color="primary" @click="e13 = 6"
                  :disabled="!((reserve_form.parking_radio === 'n') || (reserve_form.parking_radio === 'y' && reserve_form.parking != ''))">
                  下一步 / Next
                </v-btn>
                <v-btn text @click="e13 = 4">
                  返回上一步 / Back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step step="6">
                最後確認 / Review
              </v-stepper-step>

              <v-stepper-content step="6">
                <p v-show="health_form.check_1 || health_form.check_2" style="color: red" strong>
                  由於健康聲明書上述問題有選擇「是」，考慮到宿舍屬於集中式生活空間，請延後報到(請填寫延後入住申請問卷)，待狀況解除後，再另行報到入住。Given that
                  the dormitory is a mixed
                  space where people from different places gather and live, If you select "Yes" on Self-Health
                  Declaration Form,
                  we recommend that you delay your check-in until the situation is resolved.</p>

                <h4>預約時間 / Reserve Time</h4>
                <p style="color: grey">{{ get_event_name(reserve_form.event_id) }}</p>
                <!-- <br /> -->

                <h4>停車券 / Parking ticket</h4>
                <p style="color: grey">{{ reserve_form.parking_radio === 'y' ? '需要停車券 / Need' : '不需要停車券 / No Need' }}
                </p>
                <!-- <br /> -->

                <h4 v-show="reserve_form.parking_radio === 'y'">車號 / Car ID</h4>
                <p style="color: grey" v-show="reserve_form.parking_radio === 'y'">{{ reserve_form.parking }}</p>

                <h4 style="color: red" class="rainbow-text">尚未完成預約，點選確認完成預約 / You need to press "Confirm" to reserve
                </h4>
                <br />

                <v-btn color="primary" @click="addRecord()">
                  確認 / Confirm
                </v-btn>
                <v-btn text @click="e13 = 5">
                  修改 / Modify
                </v-btn>
              </v-stepper-content>
            </v-stepper>
            <v-row align=" center" justify="center" length><br />
            </v-row>
            <v-row align="center" justify="center" length><br /></v-row>
            <v-row align="center" justify="center" length><br /></v-row>

          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-show="reserveDone" fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <h2>已完成預約 / Reserved</h2>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <!-- <v-row align="center" justify="left" length>
            <h3>宿舍 / Dorm</h3>
          </v-row> -->
          <v-row align="center" justify="center" length>
            <v-chip class="ma-2" color="primary" outlined label>
              <v-icon left>
                mdi-home
              </v-icon>
              {{ reserved_form.dorm }}
            </v-chip>
          </v-row>
          <!-- <v-row align="center" justify="left" length>
            <h3>時間 / Time</h3>
          </v-row> -->
          <v-row align="center" justify="center" length>
            <v-chip class="ma-2" color="brown" outlined label>
              <v-icon left>
                mdi-clock
              </v-icon>
              {{ reserved_form.event }}
            </v-chip>
            <v-chip class="ma-2" color="brown" outlined label>
              <v-icon left>
                mdi-car
              </v-icon>
              {{ reserved_form.parking }}
            </v-chip>
          </v-row>
          <!-- <v-row align="center" justify="left" length>
            <h3>停車券 / Parking ticket</h3>
          </v-row> -->
          <!-- <v-row align="center" justify="center" length>
            <v-chip class="ma-2" color="primary" outlined label>
              <v-icon left>
                mdi-car
              </v-icon>
              {{ reserved_form.parking }}
            </v-chip>
          </v-row> -->

          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <v-card width="300px">
              <v-row>
                <v-col cols="12">
                  <v-row align="center" justify="center" length><br /></v-row>
                  <v-row align="center" justify="center" length><br /></v-row>
                  <v-row align="center" justify="center" length>
                    <h2>報到 QRCode</h2>
                  </v-row>
                  <v-row align="center" justify="center" length><br /></v-row>
                  <v-row align="center" justify="center" length>
                    <qr-code :text="reserved_form.qrcode" size="200"></qr-code>
                  </v-row>
                  <v-row align="center" justify="center" length><br /></v-row>
                  <v-row align="center" justify="center" length><br /></v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <h4>可以將此 QRCode 以截圖方式留存，或於當日打開網站亦能顯示此 QRCode</h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <h5>You can save this QRCode as a
              screenshot, or open the site to display the QRCode</h5>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <h4>建議關閉黑暗模式，如 QRCode 背景非為白色，將可能影響掃描</h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <h5>Suggest turn off the "Dark Mode"! If not a white background, it will affect to scan</h5>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <v-divider></v-divider>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <h4>
              請注意，取消預約將有可能喪失原先預約時段，請您慎重操作此功能。
            </h4>
          </v-row>
          <v-row align="center" justify="center" length>
            <h5>
              Notice! This is a dangerous operation, canceling will may lose the time you reserve previously.
            </h5>
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="#B5563E" class="mr-4" v-bind="attrs" v-on="on">
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
          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-overlay v-show="initOverlay">
      <v-progress-circular indeterminate size="64"> </v-progress-circular>
    </v-overlay>
  </v-card>
</template>

<script>
import About from "../components/About";
// import Announcement from "../components/Announcement.vue";
const axios = require("axios");
var config = require("../../config.json");
// let Base64 = require("js-base64").Base64;

export default {
  name: "Home",
  data() {
    return {
      e13: 1,
      initOverlay: true,
      window_height: 100,
      window_width: 100,
      overlay: false,
      reserveDone: false,

      health_form: {
        phone: "",
        phoneRules: [
          (v) => !!v || "Required",
          (v) => (v && v.length === 10) || "Required 10 numbers",
        ],
        check_1: false,
        check_2: false,
        serious_1: false,
        serious_2: false,
      },

      reserve_form: {
        'event_id': "",
        'parking_radio': "",
        'parking': ""
      },

      reserved_form: {
        'dorm': "",
        'event': "",
        'parking': "",
        'qrcode': "test",
      },

      events_list: [],
    };
  },
  components: {
    About,
    // Announcement,
  },
  methods: {
    updateStatus() {
      let self = this;
      self.initOverlay = true;
      axios({
        method: 'post',
        url: config.apiurl + "/get_events",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            // console.log(response.data)
            self.events_list = response.data.message.events;
            self.reserveDone = response.data.message.reserved;

            if (response.data.message.reserved === true) {
              self.reserved_form.event = response.data.message.reserved_data.event
              self.reserved_form.parking = response.data.message.reserved_data.parking
              if (self.reserved_form.parking === 'no') {
                self.reserved_form.parking = '無停車 / No parking'
              }
              self.reserved_form.qrcode = response.data.message.reserved_data.qrcode
              self.reserved_form.dorm = response.data.message.reserved_data.dorm
            }
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
    addRecord() {
      let self = this;
      self.initOverlay = true;
      if (self.reserve_form.parking_radio === 'n') {
        self.reserve_form.parking = 'no'
      }
      axios({
        method: 'post',
        url: config.apiurl + "/reserve_event",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
        data: {
          event: self.reserve_form.event_id,
          parking: self.reserve_form.parking,
          health_form: {
            phone: self.health_form.phone,
            check_1: self.health_form.check_1,
            check_2: self.health_form.check_2,
          }
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            self.updateStatus();
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
    recordDelete() {
      let self = this;
      axios({
        method: 'post',
        url: config.apiurl + "/cancel_reserve",
        headers: {
          'Authorization': self.$cookie.get("token"),
        },
      })
        .then(function (response) {
          self.initOverlay = false;
          console.log(response.data);
          self.initOverlay = false;
          if (response.data.code === 200) {
            location.reload();
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
    get_event_name(event_id) {
      let self = this;
      for (let i = 0; i < self.events_list.length; i++) {
        if (self.events_list[i].event_id === event_id) {
          return self.events_list[i].event_name;
        }
      }
    },
  },
  mounted: function () {
    if (this.$cookie.get("token")) {
      this.loginStatus = true;
      this.updateStatus();
    }
    this.window_height = window.innerHeight;
    this.window_width = window.innerWidth;
  },
};
</script>

<style scoped>
@keyframes hue {
  from {
    filter: hue-rotate(0);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}
.rainbow-text {
  display: inline-block;
  position: relative;
  font-weight: 500;
  color: transparent;
  animation: hue 1.5s linear infinite;
  background-image: linear-gradient(to right bottom, rgb(255, 0, 0), rgb(255, 128, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 128), rgb(0, 255, 255), rgb(0, 128, 255), rgb(0, 0, 255), rgb(128, 0, 255), rgb(255, 0, 255), rgb(255, 0, 128));
  -webkit-background-clip: text;
}
</style>