<template>
    <main>
        <div class="one">
            <div class="one1">
                <router-link to='/'><img src="../assets/images/b-titlle.png" alt=""></router-link>
            </div>
            <div class="one2">
                <input type="text" placeholder="请输入关键字">
            </div>
            <div class="one3">
                <router-link to='/'><img src="../assets/images/b-titlle1.png" alt=""></router-link>
            </div>
        </div>

        <div class="two">
            <ul class="two1">
                <li v-for='(item,index) in list1' @click="flags=index" :class="{P:flags==index}">{{item.con}}</li>
            </ul>
            <ul v-for='(item,index) in list2' v-show="flags==index" class="nav">
                <li v-for='i in item.list'>
                    <div class="dev">
                        <router-link :to='i.path'>
                                <img :src="i.src" alt="">
                                <span class="a">{{i.nav}}</span>
                        </router-link>
                        <p class="p1">
                            <span>$918</span>
                            <del>$1199</del>
                            <span class="t"></span>
                        </p>
                        <p>
                            <span class="t1">限时</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
                list1:[
                {   
                    class:'P',
                    con:'综合'
                },
                {
                    class:'P',
                    con:'销量'
                },
                {
                    class:'P',
                    con:'价格'
                },
                {
                    class:'P',
                    con:'新品'
                }
                ],
                list2:[
                {
                    list:[
                        {
                            src:'./src/assets/images/shoe1.jpg',
                            path:'/',
                            nav:'adidas阿迪达斯2020中性X9000L4Pure跑步鞋FW8387'
                        },
                         {
                            src:'./src/assets/images/shoe2.jpg',
                            path:'/',
                            nav:'adidas阿迪达斯2020中性X9000L4Pure跑步鞋FW8387'
                        },
                         {
                            src:'./src/assets/images/shoe3.jpg',
                            path:'/',
                            nav:'Nike耐克女子W EPIC PHNTM REACT FK JDI跑步鞋CI1290-001'
                        },
                         {
                            src:'./src/assets/images/shoe1.jpg',
                            path:'/',
                            nav:'niao'
                        },
                         {
                            src:'./src/assets/images/shoe1.jpg',
                            path:'/',
                            nav:'niao'
                        },
                    ]
                },
                 {
                    list:[
                        {
                            src:'./src/assets/images/shoe1.jpg',
                            path:'/',
                            nav:'niao'
                        },
                    ]
                },
                 {
                    list:[
                        {
                            src:'./src/assets/images/shoe1.jpg',
                            path:'/',
                            nav:'niao'
                        },
                    ]
                },
                ],
                flags:0,
            }
        flags=0;
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
    }
    .one div{
        float: left;
        margin: 20px 40px;
    }
    .one3{
        float: right;
    }
    .one2{
        width: 64%;
    }
    .one input{
        width: 100%;
        height: 60px;
        border: black solid 1px;
        background: url('../assets/images/search.png') no-repeat;
        background-position-x: 100%;
        font-size: 30px;
    }

    .P{
        color: red;
    }
    .two li{
        float: left;
    }
    .two1{
        overflow: hidden;
        border-bottom: black solid 1px;
    }
    .two1 li{
        width:10%;
        margin: 30px 5%;
        font-size: 40px;
    }

    .nav{
        overflow: hidden;
    }
    .nav li{
        width: 48%;
        float: left;
        padding-right: 15px;
        
    }
    a>*{
        text-align: center;
    }
    .dev img{
        width: 100%;
        height: auto;
    }
    .dev .a{
        display: -webkit-inline-box;
        height: 90px;
        font-size: 40px;
        color: black;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .router-link-active{
        text-decoration: none;
    }
    
    .dev span{
        font-size: 40px;
        color: red;
    }
    .dev del{
        font-size: 40px;
        padding-left: 25px;
    }
    .dev .t{
        display: inline-block;
        background: url(../assets/images/shoe2.png) no-repeat center center;
        background-size: 100%;
        width: 60px;
        height: 30px;
    }
    .dev .p1{
        padding-top: 20px;
    }
    .dev .t1{
        border: 1px solid red;
        border-radius: 25px;
    }
</style>