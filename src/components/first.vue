<template>
    <main class="first">
        <ul class="first1">
            <li v-for='(item,index) in list1' class="first3">
                <router-link :to='item.path'>
                    <img :src="item.src" alt="">
                    <p class="first2">{{item.con}}</p>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </main>
</template>

<script>
    export default{
                data(){
                    return{
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
                                path:'/c',
                                con:'发现',
                                src:'./src/assets/images/pic3.png'
                            },
                            {
                                path:'/d',
                                con:'购物车',
                                src:'./src/assets/images/pic4.png'
                            },
                            {
                                path:'/e',
                                con:'我的',
                                src:'./src/assets/images/pic5.png'
                            },
                        ]
                    }
                }
            }
</script>


<style scoped>
    *{
        margin:0px;
        padding: 0px;
        list-style: none;
    }
    .first{
        width: 100%;
    }
    .first .first1{
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 80px;
    border-top: 1px brown solid;
    background-color: rgba(255,255,255 ,1 );
    }
    .first .first3{
        float: left;
        width: 20%;
        text-align: center;
    }
    .first .first2{
        position: absolute;
        font-size: 30px;
        width: 20%;
        text-align: center;
    }
    .first img{
        vertical-align: top;
        width: 40px;
        height: 41px;
    }
</style>