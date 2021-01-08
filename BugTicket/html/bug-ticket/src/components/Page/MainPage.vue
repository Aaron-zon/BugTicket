<template>
    <div class="container-fluid main">
        <HeaderBar class="header"></HeaderBar>
        <LeftNavs class="left-navs"></LeftNavs>
        <!-- <MainBox class="main-box"></MainBox> -->
        <router-view class="main-box"></router-view>
    </div>
</template>

<script>
import HeaderBar from '../Parts/HeaderBar.vue'
import LeftNavs from '../Parts/LeftNavs.vue'
// import MainBox from '../Parts/MainBox.vue'


export default {
    name: 'MainPage',
    components: {
        HeaderBar,
        LeftNavs,
        // MainBox
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
