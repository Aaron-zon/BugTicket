<template>
    <div class="container-fluid">
        <HeaderBar class="header"></HeaderBar>
        <LeftNavs class="left-navs"></LeftNavs>
        <MainBox class="main-box"></MainBox>
    </div>
</template>

<script>
import HeaderBar from '../../common/HeaderBar.vue'
import LeftNavs from '../../common/LeftNavs.vue'
import MainBox from '../../common/MainBox.vue'


export default {
    name: 'MainPage',
    components: {
        HeaderBar,
        LeftNavs,
        MainBox
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
