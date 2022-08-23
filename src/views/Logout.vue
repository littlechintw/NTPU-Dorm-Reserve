<template>
  <v-card elevation="0">
    <h1>Logout...</h1>
    <v-overlay>
      <v-progress-circular indeterminate size="64"> </v-progress-circular>
    </v-overlay>
  </v-card>
</template>

<script>
// const axios = require("axios");
// var config = require("../../config.json");

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  methods: {
    logout() {
      this.$cookie.delete("token");      
      this.$router.push("/");
      location.reload();
      // let self = this;
      // axios
      //   .post(config.apiurl + "/account/logout", {
      //     id: this.$cookie.get("id"),
      //     session: this.$cookie.get("session"),
      //   })
      //   .then(function () {
      //     self.$cookie.delete("session");
      //     self.$cookie.delete("id");
      //     self.$router.push("/");
      //     location.reload();
      //   })
      //   .catch(function (error) {
      //     alert(error);
      //     self.$cookie.delete("session");
      //     self.$cookie.delete("id");
      //     self.$router.push("/");
      //     location.reload();
      //   });
    },
  },
  mounted: function () {
    if (!this.$cookie.get("token")) {
      this.$router.push("/");
    } else {
      this.logout();
    }
  },
};
</script>
