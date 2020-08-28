<template>
    <main>
        <header>
        <div class="d">
            <div>
                <img src="../assets/images/b-titlle.png" alt="">
            </div>
            <div class="d2">
                <h1>购物车</h1>
                <router-link to='/e' class="d2-a">登录</router-link>
            </div>
            <div class="d1">
                <img src="../assets/images/b-titlle1.png" alt="">
            </div>
        </div>
        </header>
        <div class="top">
            <p>
                <span @click="change()" :class={current:show[list.length]}></span>
                <em>百丽优购</em>
            </p>
        </div>
        
        <ul class="A">
            <li v-for="(item,index) in list" @click="tog(index,$event)">
                <span :class={current:show[index]}></span>
                <div class="p">
                    <div class="p1">{{item.con}}</div>
                    <div>
                        <div class="p2">
                            <img :src="item.src" alt="">
                            <p class="w">限时</p>
                        </div>
                        <div>
                            <ul class="p4">
                                <li>{{item.con1}}<p class="k1">{{item.con2}}</p></li>
                                <li>{{item.con3}}</li>
                                <li>{{item.con4}}</li>
                            </ul>
                        </div>
                        <p class="r">
                            <a href="" class="r1"></a>
                            <input type="number" name="" id="" value="1">
                            <a href="" class="r3"></a>
                            <em class="r2"></em>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="y">
            <div class="y1">
                <span @click="change()" :class={current:show[list.length]}></span>
                <em>全部</em>
                <button>去结算</button>
                <p class="y2">
                    <em>总计:$ 0(不含运费)</em>
                </p>
            </div> 
                      
        </div>
        <b v-show="false">{{msg}}</b>
    </main>
</template>

<script>
 export default {
    data(){
        return{
            show:[],
            msg:0,
            list:[
                {
                    con:'Nike耐克2020年新款男子NIKE AIR ZOOM STRUCTURE 22跑步鞋AA1636-002',
                    con1:'颜色：黑/白/铁架黑',
                    con2:'¥649',
                    con3:'尺码：45',
                    con4:'发货：百丽优购',
                    src:'./src/assets/images/t1.jpg'
                },
                {
                    con:'Nike耐克2020年新款男子NIKE AIR ZOOM STRUCTURE 22跑步鞋AA1636-002',
                    con1:'颜色：黑/白/铁架黑',
                    con2:'¥649',
                    con3:'尺码：45',
                    con4:'发货：百丽优购',
                    src:'./src/assets/images/five0.jpg'
                },
                {
                    con:'Nike耐克2020年新款男子NIKE AIR ZOOM STRUCTURE 22跑步鞋AA1636-002',
                    con1:'颜色：黑/白/铁架黑',
                    con2:'¥649',
                    con3:'尺码：45',
                    con4:'发货：百丽优购',
                    src:'./src/assets/images/t1.jpg'
                },
                {
                    con:'Nike耐克2020年新款男子NIKE AIR ZOOM STRUCTURE 22跑步鞋AA1636-002',
                    con1:'颜色：黑/白/铁架黑',
                    con2:'¥649',
                    con3:'尺码：45',
                    con4:'发货：百丽优购',
                    src:'./src/assets/images/t1.jpg'
                },
                {
                    con:'Nike耐克2020年新款男子NIKE AIR ZOOM STRUCTURE 22跑步鞋AA1636-002',
                    con1:'颜色：黑/白/铁架黑',
                    con2:'¥649',
                    con3:'尺码：45',
                    con4:'发货：百丽优购',
                    src:'./src/assets/images/t1.jpg'
                },
                 {
                    con:'Nike耐克2020年新款男子NIKE AIR ZOOM STRUCTURE 22跑步鞋AA1636-002',
                    con1:'颜色：黑/白/铁架黑',
                    con2:'¥649',
                    con3:'尺码：45',
                    con4:'发货：百丽优购',
                    src:'./src/assets/images/t1.jpg'
                },
            ]
        }
    },
    mounted(){
        // 扩展thow的长度
        for(var i=0;i<=this.list.length;i++){
            this.show.push(false)
        }
    },
    methods:{
        tog(a,b){
           
            this.show[a]=!this.show[a];
        //    console.log(b.target);

            // 判断当前的是否全部被选中
           for(var i=0;i<this.show.length;i++){ 
              
                if(this.show[i]==false){
                    this.show[this.list.length]=false;
                    break;
                }
                if(this.show[this.show.length-2]){
                  
                    this.show[this.list.length]=true;
                }
               
            }
             this.msg++;
            
        },
        change(){
           
            if(this.show[this.list.length]){
                for(var i=0;i<this.show.length;i++){
                    this.msg++;
                    // 单纯的数组或者对象变化，不会渲染页面。可以定义一个数据去触发
                    this.show[i]=false
                
                }
            }else{
                for(var i=0;i<this.show.length;i++){
                
                this.msg++;
                // 单纯的数组或者对象变化，不会渲染页面。可以定义一个数据去触发
                this.show[i]=true
               
            }
            }
        }
    },
    mouted(){
        if(this.$route.params==''){
            // axios
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
    .d{
    position: relative;
    width: 100%;
    text-align: center;
    overflow: hidden;
    border-bottom: 1px black solid;
    }
    .d div{
        float: left;
        width: 10%;
        padding: 30px 0px;
    }
    .d .d2{
        width: 80%;
    }
    .d2>*{
        display: inline;
    }
    .d2-a{
        float: right;
        margin-right: 10%;
        font-size: 40px;
        margin-top: 20px;
        text-decoration: none;

    }
    .d2 h1{
        font-size: 60px;
        margin-left: 20%;
    }
    span{
    width: 38px;
    height: 38px;
    display: inline-block;
    background: url('../assets/images/sprite.png') no-repeat -11px -74px;
    transform: scale(0.5);
}
.current{
    background-position: -73px -13px;
}
    .top{
        margin-top: 30px;
        background: #f5f5f5;
        font-size: 50px;
    }
    
    .top em{
        position: relative;
        top: -8px;
    }

    .A li{
        width: 100%;
        font-size: 35px;
        overflow: hidden;
        
    }
    .p1{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 40px;
    }
    .p2{
        padding-right: 5%;
        width: 200px;
        float: left;
        position: relative;
        border: 1px solid black;
    }
    .p2 img{
        width: 200px;
    }
    .w{
        position: absolute;
        top: 5px;
        right: 0px;
        width: 100px;
        height: 40px;
        background: red;
        text-align: center;
        
    }
    .p4{
        overflow: hidden;
        padding-left: 20px;
    }
    .p4 li{
        float: left;
        width: 100%;
    }
    .p4 .k1{
        font-size: 35px;
        display: inline-block;
        padding-left: 42%;
    }

    .r{
        overflow: hidden;
        position: relative;
        left: 30px;
    }
    .r a{
        text-decoration: none;
        display: block;
        height: 60px;
        width: 60px;
        float: left;
    }
    .r1{
        background: url('../assets/images/minus.png') no-repeat center center;
        background-size: 39px auto;
         background-color: #eee;
        border: 1px solid #ccc;
        
    }
    .r3{
        background: url('../assets/images/push.png') no-repeat center center;
        background-size: 39px auto;
        border: 1px solid #ccc;
    }
    .r input{
        height: 60px;
        width: 60px;
        border: 1px solid black;
        float: left;
        font-size: 40px;
        text-align: center;
    }
    .r .r2{
        position: absolute;
        right: 0px;
        bottom: 0px;
        display: block;
        width: 90px;
        height: 46px;
        background: url('../assets/images/del.png') no-repeat center center;
        background-size: 39px auto;
        right: 5%;
    }
    .y{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100px;
        line-height: 117px;
        border-top: 1px solid black;
        background: #f8f8f8;
    }
    .y em{
        font-size: 50px;
        line-height: 100px;
    }
    .y button{
        height: 100px;
        width: 25%;
        border-right: 1px solid black;
        float: right;
        font-size: 40px;
        text-align: center;
        display: block;
        background-color: red;
    }
    .y2{
        float: right;
    }
</style>