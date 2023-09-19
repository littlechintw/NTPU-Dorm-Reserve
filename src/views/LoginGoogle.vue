<template>
    <div class="hello">
        <button @click="loginWithGoogle">使用Google登錄</button>
        <el-row>
            <el-button type="primary" icon="fas fa-edit" @click="handleClickLogin" :disabled="!isInit">get
                authCode</el-button>
            <el-button type="primary" icon="fas fa-edit" @click="handleClickSignIn" v-if="!isSignIn"
                :disabled="!isInit">sign in</el-button>
            <el-button type="primary" icon="fas fa-edit" @click="handleClickSignOut" v-if="isSignIn"
                :disabled="!isInit">sign out</el-button>
            <el-button type="primary" icon="fas fa-edit" @click="handleClickDisconnect"
                :disabled="!isInit">disconnect</el-button>
            <i class="fas fa-edit"></i>
            <p>isInit: {{ isInit }}</p>
            <p>isSignIn: {{ isSignIn }}</p>

            <el-button type="primary" icon="fas fa-edit" @click="handleClickUpdateScope" :disabled="!isInit">update
                scope</el-button>
        </el-row>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            isInit: false,
            isSignIn: false,
        };
    },
    methods: {
        async handleClickUpdateScope() {
            const option = new window.gapi.auth2.SigninOptionsBuilder();
            option.setScope("email https://www.googleapis.com/auth/drive.file");
            const googleUser = this.$gAuth.GoogleAuth.currentUser.get();
            try {
                await googleUser.grant(option);
                console.log("success");
            } catch (error) {
                console.error(error);
            }
        },

        handleClickLogin() {
            this.$gAuth
                .getAuthCode()
                .then((authCode) => {
                    //on success
                    console.log("authCode", authCode);
                })
                .catch((error) => {
                    //on fail do something
                });
        },

        async handleClickSignIn() {
            try {
                const googleUser = await this.$gAuth.signIn();
                if (!googleUser) {
                    return null;
                }
                console.log("googleUser", googleUser);
                console.log("getId", googleUser.getId());
                console.log("getBasicProfile", googleUser.getBasicProfile());
                console.log("getAuthResponse", googleUser.getAuthResponse());
                console.log(
                    "getAuthResponse",
                    this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
                );
                this.isSignIn = this.$gAuth.isAuthorized;
            } catch (error) {
                //on fail do something
                console.error(error);
                return null;
            }
        },

        async handleClickSignOut() {
            try {
                await this.$gAuth.signOut();
                this.isSignIn = this.$gAuth.isAuthorized;
                console.log("isSignIn", this.$gAuth.isAuthorized);
            } catch (error) {
                console.error(error);
            }
        },

        handleClickDisconnect() {
            window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
        },

        loginWithGoogle() {
            gapi.load('auth2', () => {
                gapi.auth2.getAuthInstance({
                    client_id: '54064734422-1nk5g1ag3n29qbqpero42krrtpdkugmd.apps.googleusercontent.com', // 替換為您的Google客戶端ID
                }).then(auth2 => {
                    auth2.signIn().then(googleUser => {
                        const id_token = googleUser.getAuthResponse().id_token;

                        // 現在，您可以在這裡將id_token發送到後端進行驗證和授權
                        // 使用axios或其他HTTP庫將信息發送到Flask後端或其他後端服務
                    }).catch(error => {
                        console.error('Google登錄失敗:', error);
                    });
                });
            });
        },
    },

    created() {
        let that = this;
        let checkGauthLoad = setInterval(function () {
            that.isInit = that.$gAuth.isInit;
            that.isSignIn = that.$gAuth.isAuthorized;
            if (that.isInit) clearInterval(checkGauthLoad);
        }, 1000);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
</style>