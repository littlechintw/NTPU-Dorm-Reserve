<template>
  <v-card elevation="0">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" length><br /></v-row>
          <v-row align="center" justify="center" length>
            <about />
          </v-row>
          <v-row align="center" justify="center" length><br /></v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import About from "../components/About";

export default {
  name: "Home",
  data() {
    return {
      window_height: 100,
      window_width: 100,
    };
  },
  components: {
    About,
  },
  methods: {},
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
