<template>
    <div id="app">
        <MainPage v-if="loginFlg"></MainPage>
        <Login v-else @login="login"></Login>
    </div>
</template>

<script>
import Login from './components/Page/Login.vue'
import MainPage from './components/Page/MainPage.vue'



export default {
    name: 'App',
    components: {
        Login,
        MainPage
    },
    data: function () {
        return {
            loginFlg: false
        }
    },
    methods: {
        login() {
            this.loginFlg = true;
        }
    }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
