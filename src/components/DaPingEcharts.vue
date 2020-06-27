<template>
    <div class="charts" style="background: #040f3c;">
        <div class="header">
            古绛供电所综合监控中心
        </div>
        <!--主体-->
        <div class="main clearfix">
            <div class="main-left">
                <div class="border-container">
                    <div class="name-title">
                        供电所基本情况
                    </div>
                    <div id="radar"></div>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
                <div class="border-container">
                    <div class="name-title">
                        ===
                    </div>
                    <div id="graduateyear"></div>
                    <ul class="three-pie clearfix">
                        <li>
                            <div id="sexrate"></div>
                        </li>
                        <li>
                            <div id="householdrate"></div>
                        </li>
                    </ul>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
            </div>
            <div class="main-middle">
                <div class="border-container">
                    <img src="../assets/ditu.png" width="600" height="300" alt=""/>
                    <div class="number-show">
                        <ul>
                            <li>
                                <span class="span-name">服务户数</span>
                            </li>
                            <li>
                                <span class="span-name">第一网格</span>
                            </li>
                            <li>
                                <span class="span-number-show">5399</span>
                            </li>
                            <li>
                                <span class="span-name">第二网格</span>
                            </li>
                            <li>
                                <span class="span-number-show">3850</span>
                            </li>
                            <li>
                                <span class="span-name">第三网格</span>
                            </li>
                            <li>
                                <span class="span-number-show">5719</span>
                            </li>
                        </ul>
                    </div>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
                <div class="border-container">
                    <ul class="teacher-pie clearfix">
                        <li>
                            <div class="name-title">
                                =======
                            </div>
                            <div id="courserate"></div>
                        </li>
                        <li>
                            <div class="name-title">
                                =======
                            </div>
                            <div id="professionrate"></div>
                        </li>
                    </ul>

                    <div class="name-title">
                        ===
                    </div>
                    <div id="changedetail"></div>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
            </div>
            <div class="main-right">
                <div class="border-container">
                    <div class="name-title">
                        ===
                    </div>
                    <table class="table table-kingdargen">
                        <thead>
                        <tr>
                            <th>test1</th>
                            <th>test2</th>
                            <th>test3</th>
                            <th>test4</th>
                            <th>test5</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>a</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>b</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>c</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>d</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>e</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>f</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>g</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>h</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>i</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>k</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>k</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>k</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>k</td>
                            <td>268</td>
                            <td>212</td>
                            <td>342</td>
                            <td>256</td>
                        </tr>
                        </tbody>
                    </table>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
                <div class="border-container">
                    <div class="name-title">
                        ===
                    </div>
                    <div id="juniorservice"></div>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
                <div class="border-container">
                    <div class="name-title">
                        ===
                    </div>
                    <div id="edubalance"></div>
                    <span class="top-left border-span"></span>
                    <span class="top-right border-span"></span>
                    <span class="bottom-left border-span"></span>
                    <span class="bottom-right border-span"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DaPingEcharts"
    }
</script>

<style scoped>
    .charts{
        background: #040f3c;
    }
    .header{
        height: 80px;
        position: relative;
        padding-top: 13px;
        font-size: 36px;
        color: #00ffff;
        text-align: center;
        background: url(../assets/bg.png) top center no-repeat;
    }
    .header a.a-access{
        position: absolute;
        right: 3%;
        top: -18%;
    }
    .main{
        padding: 0 30px 30px;
    }
    .main-left,
    .main-right{
        float: left;
        width: 28%;
        padding: 0 10px;
    }
    .main-middle{
        float: left;
        width: 44%;
        padding: 0 10px;
    }

    .border-container {
        position: relative;
        margin-top: 15px;
        padding: 10px;
        border: 1px solid #54dcf2;
    }

    .border-container span.border-span {
        display: block;
        position: absolute;
        width:35px;
        height: 35px;
    }

    .border-container span.top-left {
        top: -4px;
        left:-4px;
        border-top: 3px solid #54dcf2;
        border-left: 3px solid #54dcf2;
    }

    .border-container span.top-right {
        top:-4px;
        right:-4px;
        border-top: 3px solid #54dcf2;
        border-right: 3px solid #54dcf2;
    }

    .border-container span.bottom-left {
        bottom: -4px;
        left: -4px;
        border-bottom: 3px solid #54dcf2;
        border-left: 3px solid #54dcf2;
    }

    .border-container span.bottom-right {
        bottom: -4px;
        right: -4px;
        border-bottom: 3px solid #54dcf2;
        border-right: 3px solid #54dcf2;
    }
    .name-title{
        font-size:20px ;
        color: #00ffff;
    }
    #radar{
        height: 275px;
    }
    #dormitorydetail{
        height: 135px;
    }
    #graduateyear{
        height: 192px;
    }
    .three-pie{
        border-top: 1px solid #2c768a;
        margin: -10px;
        margin-top: 10px;
    }
    .teacher-pie{
        border-bottom: 1px solid #2c768a;
        margin: -10px;
        margin-bottom: 0;
    }
    .three-pie li,
    .teacher-pie li{
        float: left;
        width: 50%;
        border-right: 1px solid #2c768a;
    }
    .teacher-pie li .name-title{
        padding-left:10px ;
        padding-top:10px ;
    }
    .three-pie li:last-child,
    .teacher-pie li:last-child{
        border-right: none;
    }
    #sexrate,
    #nationarate,
    #householdrate{
        height: 266px;
    }
    #mapadd{
        height: 304px;
    }
    .number-show{
        position: absolute;
        top: 20%;
        right: 5%;
    }
    .number-show span.span-name{
        font-size:14px ;
        color:#fffd51 ;
    }
    .number-show span.span-number-show{
        font-size:18px ;
        color:#54b5b5 ;
        font-style: italic;
    }
    .number-show li{
        line-height: 25px;
    }
    #teacherrate,
    #courserate,
    #professionrate{
        height: 200px;
    }
    #agelist{
        height: 130px;
    }
    #changedetail{
        height: 229px;
    }
    .table-kingdargen{
        margin-top: 6px;
        text-align: center;
        margin-bottom: 0;
    }
    .table-kingdargen>thead>tr>th{
        border-bottom: 1px solid #0f4075;
        padding: 2px 8px;
        text-align: center;
        color: #419aff;
        font-size: 12px;
        font-weight: normal;
        border-top: 1px solid #0f4075!important;
    }
    .table-kingdargen tbody tr td{
        padding: 1px 8px;
        font-size: 12px;
        border: none;
        color: #fff;
    }
    .table-kingdargen tbody tr:nth-child(2n){
        background: #1d2a42;
    }
    .table-kingdargen tbody tr:hover{
        background: #1d2a42;
    }
    .table-kingdargen tbody tr td:nth-child(2){
        color: #e9aa00;
    }
    .table-kingdargen tbody tr td:nth-child(3){
        color: #53bf18;
    }
    .table-kingdargen tbody tr td:nth-child(4){
        color: #f9504a;
    }
    .table-kingdargen tbody tr td:nth-child(5){
        color: #12f0e9;
    }
    #juniorservice{
        height: 190px;
    }
    #edubalance{
        height: 203px;
    }
    /*@import url("https://fonts.googleapis.com/css?family=Raleway");*/
    * {
        box-sizing: border-box;
    }

    .copyright {
        position: absolute;
        bottom: 0;
    }
    .copyright a {
        text-decoration: none;
        color: #16a085;
    }
    .copyright a:hover {
        text-decoration: underline;
    }

    .button {
        position: relative;
        padding: 0.5em 1.5em;
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: none;
        font-size: 18px;
        margin: 1em 0.8em;
    }
    .button.type1 {
        color: #00ffff;
    }
    .button.type1.type1::after, .button.type1.type1::before {
        content: "";
        display: block;
        position: absolute;
        width: 20%;
        height: 20%;
        border: 2px solid;
        transition: all 0.6s ease;
        border-radius: 2px;
    }
    .button.type1.type1::after {
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #566473;
        border-right-color: #566473;
    }
    .button.type1.type1::before {
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: #566473;
        border-left-color: #566473;
    }
    .button.type1.type1:hover:after, .button.type1.type1:hover:before {
        width: 100%;
        height: 100%;
    }
</style>