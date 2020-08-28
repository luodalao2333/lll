<template>
    <main>
        <header>
            <div class="e">
                <div class="e1">
                    <img src="../assets/images/b-titlle.png" alt="">
                </div>
                <h1 class="e2">登入</h1>
            </div>
        </header>
        <div class="w">
            <div class="w1" :class="{line:a==0}">
                <span @click="change()">手机号快捷登入</span>
            </div>
            <div class="w2" @click="change1()" :class="{line:a==1}">
                <span>账号密码登入</span>
            </div>
        </div>

        <div class="r" v-show="a==0">
            <div class="r2">
                <input type="tel" name="" id="" placeholder="手机号" class="r1">
            </div>
            <div class="r3"><mt-button type="primary" class="r3-1">获取验证码</mt-button></div>
            <div>
                <input type="number" name="" id="" placeholder="请输入验证码 " class="r1">
            </div>
        </div>

        <div class="r" v-show="a==1">
            <div class="r22">
                <input type="tel" name="" id="" placeholder="手机号/邮箱" class="r1">
            </div>
            <div>
                <input type="text" name="" id="" placeholder="请输入验证码 " class="r1">
            </div>
        </div>

        <div class="t">
            <mt-button type="primary" class="t1">登录</mt-button>
        </div>
        <div class="t2">
            新会员限时惊喜 首次登录送百元礼包
        </div>

        <div class="y">
            <p>-----第三方平台登录-------</p>
            <div class="y1">
                <span>
                    <img src="../assets/images/QQ.png" alt="">
                </span>
                <span>
                    <img src="../assets/images/zfb.png" alt="">
                </span>
                <span>
                    <img src="../assets/images/wb.png" alt="">
                </span>
            </div>
            <div class="y2">
                <span>首次登录表示您同意</span>
                <router-link to='/'>优购会员注册协议</router-link>
            </div>
        </div>
        <div class="f">
            <p>
                <img src="../assets/images/e0.png" alt="">
                <span>正品保障</span>
            </p>
            <p>
                <img src="../assets/images/e0.png" alt="">
                <span>10天包退货</span>
            </p>
            <p>
                <img src="../assets/images/e0.png" alt="">
                <span>10天补差价</span>
            </p>
        </div>
    </main>
</template>

<script>
    export default{
        data(){
            return{
                a:0
            }
        },
        methods:{
            change(){
                this.a=0
            },
            change1(){
                this.a=1
            }
        }
    }
</script>

<style scoped>
    .e{
        overflow: hidden;
        border-bottom: 1px solid black;
        background: #f8f8f8;
        position: relative;
    }
    .e1{
        width: 10%;
        position: absolute;
        left: 10px;
        top: 20px;
    }
    .e2{
        width: 90%;
        font-size: 50px;
        margin: 20px auto;
        text-align: center;
    }

    .w{
        padding: 0px 30px;
        overflow: hidden;
        font-size: 52px;
    }
    .w>div{
        float: left;
        padding: 0px 6%;
        padding-top: 90px;
    }


    .r{
        margin-top: 30px;
    }
    .r1{
        background: none;
        display: block;
        width: 100%;
        height: 80px;
        font-size: 50px;
        border: none;
    }
    .r2{
        width: 60%;
        display: inline-block;
    }
    .r22{
        width: 100%;
        display: inline-block;
    }
    .r3{
        width: 35%;
        float: right;
        text-align: center;
        font-size: 50px;
        margin-top: 10px;
        margin-bottom: 15px;
        border-left: 1px black solid;
    }
    .r3-1{
        width: 90%;
        height: 80px;
        font-size: 50px;
        background: beige;
        font-weight: 800;
        color: black;
    }

    .t{
        padding-top: 100px;
        widows: 100%;
        text-align: center;
    }
    .t p{
        float: right;
        width: 25%;
        font-size: 30px;
        padding-top: 15px;
    }
    .t1{
        width: 90%;
        height: 100px;
        font-size: 50px;
        background: gray;
    }
    .t2{
        padding-top: 50px;
        font-size: 30px;
        color: red;
        text-align: center;
    }


    .y{
        text-align: center;
        padding-top: 200px;
    }
    .y p{
        font-size: 40px;
        color: #a0a0a0;
    }
    .y1 span{
        margin: 0 8%;
        
    }
    .y1 img{
        widows: 100%;
        height: 120px;
    }
    .y2{
        padding-top: 40px;
    }
    .y2>*{
        font-size: 40px;
    }

    .f>p{
        float: left;
        padding-top: 200px;
        font-size: 30px;
        margin: 0px 7%;
    }
    .f img{
        vertical-align: middle;
        margin-top: -9px;
    }

    .line{
        border-bottom: red 3px solid;
    }
</style>