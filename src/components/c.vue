<template>
    <main>
        <header>
            <div class="c">
                <div>
                    <img src="../assets/images/b-titlle.png" alt=""  @click="back()">
                </div>
                <div class="c2">
                    <h1>发现</h1>
                    <router-link to='/e' class="c2-a">登录</router-link>
                </div>
                <div class="c1">
                    <img src="../assets/images/b-titlle1.png" alt="" @click="tab()">
                </div>
            </div>
        </header>
        <div v-show="show">
            <div class="first">
                <ul class="first1">
                    <li v-for='(item,index) in list1' class="first3">
                        <router-link :to='item.path'>
                        <img :src="item.src" alt="">
                        <p class="first2">{{item.con}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w">
            <p>————时尚风向标————</p>
        </div>
        <div class="e" v-for='(item,index) in list'>
            <router-link to=''>
                <p>{{item.msg}}</p>
                <img :src="item.src" alt="">
                <p>{{item.con}}</p>
            </router-link>
        </div>
    </main>
</template>

<script>
    export default{
        data(){
            return{
                list:[
                    {
                        msg:'阿迪品牌日',
                        con:'阿迪品牌日！领券满299减15，满499减25，满699减40，满899减60',
                        src:'./src/assets/images/c1.jpg'
                    },
                    {
                        msg:'七夕相遇',
                        con:'七夕相遇 ，领卷更优惠>>>',
                        src:'./src/assets/images/c2.jpg'
                    },
                    {
                        msg:'森达单品日',
                        con:'低价清仓，低至89元！！',
                        src:'./src/assets/images/c3.jpg'
                    },
                ],
                list1:[
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
                show:false,
                
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
    .c{
        position: relative;
        width: 100%;
        text-align: center;
        overflow: hidden;
        border-bottom: 1px black solid;
        background: #f8f8f8;
    }
    .c div{
        float: left;
        width: 10%;
        padding: 30px 0px;
    }
    .c .c2{
        width: 80%;
    }
    .c2>*{
        display: inline;
    }
    .c2-a{
        float: right;
        margin-right: 10%;
        font-size: 40px;
        margin-top: 20px;
        text-decoration: none;

    }
    .c2 h1{
        font-size: 60px;
        margin-left: 20%;
    }

    .w{
        text-align: center;
        font-size: 50px;
        background: #f8f8f8;
        
    }
    .w p{
        display: inline-block;
        margin: 0px;
        padding-top: 30px;
        padding-bottom: 20px;
    }

    .e{
        border-bottom: 30px solid gray;

    }
    .e p{
        font-size: 40px;
        padding: 0px 10px;
        color: black;
    }
    .router-link-active{
        text-decoration: none;
    }
    .e img{
        width: 100%;
    }


    *{
        margin:0px;
        padding: 0px;
        list-style: none;
        text-decoration: none;
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