<template>
    <main>
        <div class="one">
            <div class="one1" @click="back()">
            </div>
            <div class="one2">
                <input type="text" placeholder="请输入关键字">
            </div>
        </div>
        <div class="two">
            <div class="two1">
                热门搜索
            </div>
            <ul class="two3">
                <li v-for="(item,index) in list"><router-link to='/'>{{item.con}}</router-link></li>
            </ul>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
                list:[
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                    {
                        con:'百丽'
                    },
                ]
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
     *{
        list-style: none;
        margin: 0px;
        padding: 0px;
    }
    .one{
        width: 100%;
        overflow: hidden;
        border-bottom: solid black 1px;
        padding: 20px;
    }
    .one div{
        float: left;
        
    }
    .one1{
        background: url('../assets/images/search0.png') center center no-repeat;
        background-size: 40px auto;
        height: 102px;
        width: 5%;
        margin-right: 5%;
    }
    .one2{
        width: 90%;
    }
    .one input{
        width: 100%;
        height: 100px;
        border: black solid 1px;
        background: url('../assets/images/search.png') no-repeat;
        background-position-x: 100%;
        background-size: 100px;
        font-size: 50px;
    }

    .two{
        padding: 3%;
        width: 100%;
    }
    .two1{
        background: url('../assets/images/hot.png') center left no-repeat;
        background-size: 40px auto;
        font-size: 54px;
        padding-left: 53px;
        margin-bottom: 40px;
    }
    .two3{
        overflow: hidden;
    }
    .two3 li{
        float: left;
        margin: 0px 5px 10px;
    }
    .two3 a{
        display: block;
        color: #666;
        padding: 5px 58px;
        background: #eee;
        border-radius: 5px;
        font-size: 55px;
        line-height: 102px;
        text-decoration: none;
        border-radius: 25px;
    }
</style>