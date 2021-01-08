<template>
    <div class="login-mapper">
        <div class="login">
            <div class="login-hd">
                <div class="login-item ">账户登录</div>
                <div class="login-item login-selected">管理员登录</div>
            </div>

            <h1 class="login_scan_panel_pwd_title">账户登录</h1>
            <div class="login-item-content">
                <label for="userCd">账户:</label>
                <input type="text" id="userCd" v-model="userCd">
            </div>
            <div class="login-item-content">
                <label for="passWd">密码:</label>
                <input type="text" id="passWd" v-model="passWd">
            </div>
            
            <div class="login-button">
                <div class="login-user-button">
                    <button type="button" class="btn btn-primary" @click="login">登录</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: {
        msg: String
    },
    data() {
        return {
            userCd: '',
            passWd: ''
        }
    },
    created() {
        this.$common.manageCookie.getCookie('userCd', (data) => {
            this.userCd = data;
        })
        this.$common.manageCookie.getCookie('passWd', (data) => {
            this.passWd = data;

        })
        if (this.userCd || this.passWd) {
            this.login();
        }
        
    },
    methods: {
        login() {
            // http
            console.log('login')
            // 成功
            this.$common.manageCookie.setCookie('userCd', this.userCd);
            this.$common.manageCookie.setCookie('passWd', this.passWd);
            this.$emit('login');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
