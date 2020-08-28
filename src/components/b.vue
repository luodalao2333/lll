<template>
    <main>
        <div class="one">
            <div class="one1">
                <img src="../assets/images/b-titlle.png" alt=""  @click="back()">
            </div>
            <div class="one2">
                <router-link to='/search'><input type="text" placeholder="请输入关键字"></router-link>
            </div>
            <div class="one3">
                <img src="../assets/images/b-titlle1.png" alt="" @click="tab()">
            </div>
        </div>

        <div v-show="show">
            <div class="first">
                <ul class="first1">
                    <li v-for='(item,index) in list4' class="first3">
                        <router-link :to='item.path'>
                        <img :src="item.src" alt="">
                        <p class="first2">{{item.con}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <section class="two">
            <div class="two1">
                <ul>
                    <li v-for='(item,index) in list2' @click='flagsnew=index' :class="{P:flagsnew==index}">
                        {{item.con}}
                    </li>
                </ul>
            </div>
            <div class="two2">
                <div class="top">
                    <h1>热门大牌推荐</h1>
                </div>
                <div class="button" v-for='(item,index) in list1' v-show='flagsnew==index'>
                    <ul>
                        <h1 class="h">{{item.title}}</h1>
                        <li v-for="i in item.list">
                            <router-link :to='i.path'>
                                <img :src="i.src" alt="">
                               <p>{{i.con}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default{
        data(){
            return{
                list2:[
                    {   
                        class:'P',
                        con:'大牌推荐',
                        
                    },
                    {
                        class:'P',
                        con:'全部品牌',
                        
                    },
                    {
                        class:'P',
                        con:'女鞋',
                        
                    },
                    {
                        class:'P',
                        con:'男鞋',
                        
                    },
                    {
                        class:'P',
                        con:'运动',
                        
                    },
                    {
                        class:'P',
                        con:'户外',
                       
                    },
                    {
                        class:'P',
                        con:'童鞋',
                       
                    },
                ],
                list1:[
                    {   
                        title:'品牌大全',
                        list:[
                            
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-2.png',
                                con:'耐克'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-3.png',
                                con:'三叶草'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-4.png',
                                con:'阿迪休闲'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-5.png',
                                con:'奥力给'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-6.png',
                                con:'哦豁'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-7.png',
                                con:'雪之下'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-8.png',
                                con:'团子'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-9.png',
                                con:'一色小恶魔'
                            },
                        ],
                        title:'品牌大全',
                        
                    },
                    {   
                        title:'233',
                        list:[
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                        ],
                    },
                    {
                        list:[
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                        ]
                    },
                    {
                        list:[
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                        ]
                    },
                    {
                        list:[
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                        ]
                    },
                    {
                        list:[
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                        ]
                    },
                    {
                        list:[
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/b-two.png',
                                con:'阿迪达斯'
                            },
                        ]
                    }
                ],
                flagsnew:3,
                show:false,
                list4:[
                        {
                            path:'/a',
                            con:'首页',
                            src:'./src/assets/images/pic1.png'
                        },
                        {
                            path:'/b',
                            con:'分类',
                            src:'./src/assets/images/pic2.png'
                        },
                        {
                            path:'/',
                            con:'发现',
                            src:'./src/assets/images/pic3.png'
                        },
                        {
                            path:'/d',
                            con:'购物车',
                            src:'./src/assets/images/pic4.png'
                        },
                    ],
            }
        },

        methods:{
                back(){
                    this.$router.go(-1)
                },
                tab(){
                    this.show=!this.show;
                }
            }
    }
</script>

<style scoped>
    *{
        list-style: none;
        margin: 0px;
        padding: 0px;
        text-decoration: none;
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
        font-size: 50px;
    }

    .two{
        overflow: hidden;
        width: 100%;
    }
    .two>div{
        float: left;
    }
    .two1{
        width: 20%;

    }
    .two1 li{
        widows: 100%;
        height: 80px;
        font-size: 40px;
        border-top: black solid 1px;
        text-align: center;
        line-height: 80px;
    }
    
    .two2{
        width: 79%;
        border-left: black solid 1px;
    }
    .two2 .top{
        font-size: 40px;
        height: 150px;
        text-align: center;
        line-height: 150px;
    }
    .two .button ul{
        overflow: hidden;
    }
    .two .button li{
        float: left;
        width: 33.33%;
        text-align: center;
        font-size: 40px;
    }
    .button .h{
        text-align: center;
        font-size: 40px;
    }
    .two img{
        width: 100%;
        height: auto;
    }

    .router-link-active{
        text-decoration:none;
    }
    .P{
        color: red;
    }

    .first .first1{
        background-color:rgba(102, 102, 102,0.5);
        overflow: hidden;
        width: 100%;
        height: 110px;
        border-top: 1px brown solid;
    }
    .first .first3{
        float: left;
        width: 25%;
        text-align: center;
    }
    .first .first2{
        font-size: 30px;
        width: 100%;
        color: white;
    }
    .first img{
        vertical-align: top;
        width: 66px;
        height: 66px;
    }
</style>