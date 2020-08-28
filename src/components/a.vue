 <template>
    <div>
        <div class="second">
            <div class="second1">
                优购
            </div>
            <div class="second2">
                <router-link to='/search'><input type="text"></router-link>
            </div>    
            <div class="second3">
                <router-link to='/c'>
                    消息
                </router-link>
            </div>
        </div>

        <div class="kt">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="../assets/images/three1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/three2.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/three3.jpg" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- <div class="three">
            <img src="../assets/images/three1.jpg" alt="">
            <div class="three-botton">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> -->

        <div class="four">
            <ul>
                <li  v-for='(item,index) in list4'>
                    <router-link :to='item.path'>
                        <img :src="item.src" alt="">
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="five">
            <h1>热门分类</h1>
            <ul>
                <li v-for='(item,index) in list5'>
                    <router-link :to='item.path'>
                        <img :src="item.src" alt="">
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="six">
            <div class="six1"><img src="../assets/images/six0.jpg" alt=""></div>
            <div class="six2">提醒会员谨防诈骗电话</div>
        </div>

        <div class="seven">
            <ul>
                <li v-for='(item,index) in list6'>
                    <router-link :to='item.path'>
                        <img :src="item.src" alt="">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
                data(){
                    return{
                        list4:[
                            {
                                path:'/test',
                                src:'./src/assets/images/four1.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/four2.png'
                            },
                            {   
                                path:'/',
                                src:'./src/assets/images/four3.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/four4.png'
                            }
                        ],
                        list5:[
                            {
                                path:'/shoe',
                                src:'./src/assets/images/five0.jpg'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/five1.jpg'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/five2.jpg'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/five3.jpg'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/five4.jpg'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/five5.jpg'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/five6.jpg'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/five7.jpg'
                            },
                        ],
                        list6:[
                            {
                                path:'/',
                                src:'./src/assets/images/seven0.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/seven1.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/seven2.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/seven3.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/seven4.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/seven5.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/seven6.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/seven7.png'
                            },
                            {
                                path:'/',
                                src:'./src/assets/images/seven8.png'
                            },
                            {
                                path:'/',
                                src:'../src/assets/images/seven9.png'
                            },
                        ]
                        
                    }
                }
            } 
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }

    .second{
        width: 100%;
        overflow: hidden;
        text-align: center;
        background-color: red;
    }
    .second1,.second3{
        width: 10%;
        float: left;
        padding: 5px 5px;
        height: 60px;
        line-height: 60px;
        font-size: 30px;
    }
    .second2{
        width: 73%;
        float: left;
    }
    input{
        width: 100%;
        height: 60px;
        border-radius: 5px;
        border: solid black 1px;
        background:  url('../assets/images/search.png') no-repeat left;
        background-size: 30px 30px;
        background-position-x: 5%;
        background-color: seashell;
        margin-top: 5px;
        font-size: 30px;
    }


    /* .three{
        width: 100%;
        position: relative;
    }
    .three img{
        width: 100%;
        height: auto;
    }
    .three-botton{
        position: absolute;
        bottom: 0px;
        text-align: center;
        width: 100%;
    }
    .three-botton span{
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 10px;
        margin: 0px 3px;
        cursor: pointer;
        border: 1px solid rgba(255,255,255,0.5);
    } */

    
    .four ul{
        width: 100%;
        overflow: hidden;
    }   
    .four li{
        float: left;
        width: 25%;
        text-align: center;
    }
    .four img{
        width: 100%;
        height: auto;
    }


    .five ul{
        width: 100%;
        overflow: hidden;
    }
    .five li{
        float: left;
        width: 25%;
        text-align: center;
    }
    .five img{
        width: 100%;
        height: auto;
    }


    .six{
        width: 100%;
        overflow: hidden;
    }
    .six>div{
        float: left;
    }
    .six1{
        width: 20%;
    }
    .six1 img{
        width: 90%;
        height: auto;
        padding: 2px;
        border-right: red 1px solid;
    }
    .six2{
        width: 80%;
        font-size: 36px;
        line-height: 41px;
    }

    .seven ul{
        width: 100%;
        overflow: hidden;
    }
    .seven li{
        width: 20%;
        float: left;
    }
    .seven img{
        width: 100%;
        height: auto;
    }

</style>
<style>
    .kt img{
    width: 100%;
    height: 600px;
    }
    .kt .mint-swipe{
        height: 600px;
    }
    .kt .mint-swipe-indicator{
        opacity: 0.9;
    }
    
</style>