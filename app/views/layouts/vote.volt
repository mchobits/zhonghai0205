<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-type" content="text/html">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta http-equiv="Pragma" content="no-cache">
    <meta name="format-detection" content="telephone=no, email=no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script type="application/javascript" src="https://cdn.vote.commerce.ys69.cn/js/jquery.min.js"></script>
    <script type="application/javascript" src="/js/common.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.vote.commerce.ys69.cn/css/bootstrap.css">
    <link type="text/css" rel="stylesheet" href="/css/common.css?v=1.43">
    <link type="text/css" rel="stylesheet" href="https://cdn.vote.commerce.ys69.cn/js/layui/css/layui.css">

    <script type="application/javascript" src="https://cdn.vote.commerce.ys69.cn/js/bootstrap.js"></script>
    <script type="application/javascript" src="https://cdn.vote.commerce.ys69.cn/js/layui/layui.js"></script>
    <script>
        var BASEURL = "https://vote.commerce.ys69.cn/";
        var layer = {};
        layui.use('layer', function(){
            layer = layui.layer;
        });
    </script>

    <script type="text/javascript" src="https://cdn.vote.commerce.ys69.cn/js/masonry-docs.min.js"></script>
    <script type="text/javascript" src="https://cdn.vote.commerce.ys69.cn/js/jquery.lazyload.min.js"></script>
</head>

<title>"老有所依 天使在身边"</title>
<body>

<link type="text/css" rel="stylesheet" href="https://cdn.vote.commerce.ys69.cn/css/h5.css?v=20170831">
<script type="text/javascript" src="https://cdn.vote.commerce.ys69.cn/js/swiper.min.js"></script>
<script type="text/javascript" src="https://cdn.vote.commerce.ys69.cn/js/jQuery.textSlider.js"></script>
<script type="text/javascript" src="/js/h5.js?v=20170910"></script>

<link type="text/css" rel="stylesheet" href="https://cdn.vote.commerce.ys69.cn/css/swiper.min.css">
<link type="text/css" rel="stylesheet" href="https://cdn.vote.commerce.ys69.cn/css/animate.min.css">

<link rel="stylesheet" href="//at.alicdn.com/t/font_1uv0ssx5hvrnewmi.css">
<style>

    body:before{
    }
    .background{background:#e64e0e;border:none;}
    .borderclor{border:#e64e0e;}
    .competitor-list .borderleftcolor{border-left-color:#e64e0e;}
    .fontcolor{color:#e64e0e;}
    .border{border:0.1rem solid #e64e0e;}
    .unback{background-color:#ccc;border:none;}
    #baoming-panel img{border-radius: 0.3rem;}
    .active-count-down{ text-align: center; margin-top:1rem; font-size:13px; }
    .active-count-down span { background: #f6e0ec; padding:0.2rem; margin:0.1rem; border-radius: 0.3rem; color: #d0555c; min-width: 2rem; display: inline-block; }
    .tps{color:#d0555c;}
    .tps1{color:#666;}
    #music-container { width:4rem; height:4rem;padding-top: 0.3rem; padding-left: 0.5rem; border-radius: 50%; z-index: 10; margin-top:1rem}
    .play{
        animation: rotation 3s linear infinite;
    }

    #music-container i{ display: block; width:3rem; height:3rem; line-height: 3rem; text-align: center; display: block;}
    @-webkit-keyframes rotation{ from {-webkit-transform: rotate(0deg);} to {-webkit-transform: rotate(360deg);} }

    .business-info{
        color: #fff;    }
    .business-info button{
        color: #666;    background: #fff;    }

    .switch-type-dialog{ padding:1rem; }
    .switch-type-dialog h4{
        margin:1rem 0;
        text-align: center;
    }
    .switch-type-dialog .code-review{
        height:4rem;
        display: flex;
        flex-direction: row;
        justify-content:center;
        margin:1rem auto;
    }
    .switch-type-dialog .code-review button{
        display: table;
        height:100%;
        width:17rem;
        background: #f1f1f1;
        border-radius:4rem; -webkit-border-radius: 4rem;
    }

    .switch-type-dialog h5 {
        margin: 1rem 0;
        margin-bottom: 28px;
        text-align: center;
    }
</style>

<div class="bg"></div>
<div class="swiper-container" style='margin-bottom:1px;'>
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <a href=""><img width='100%' data-src="https://cdn.vote.commerce.ys69.cn/vote_banner/banner1.png?x-oss-process=image/resize,w_720" style='border-radius:2px;' class='swiper-lazy'></a>
        </div>
        <div class="swiper-slide">
            <a href=""><img width='100%' data-src="https://cdn.vote.commerce.ys69.cn/vote_banner/banner2.png?x-oss-process=image/resize,w_720" style='border-radius:2px;' class='swiper-lazy'></a>
        </div>
        <div class="swiper-slide">
            <a href=""><img width='100%' data-src="https://cdn.vote.commerce.ys69.cn/vote_banner/banner3.png?x-oss-process=image/resize,w_720" style='border-radius:2px;' class='swiper-lazy'></a>
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>

<div class="count row background" style='border-radius:2px;'>
    <p class="col-xs-6"><i class="layui-icon">&#xe600;</i> 投票数<br/>{{ vote_count }}</p>
    <p class="none-border col-xs-6"><i class="layui-icon">&#xe609;</i> 访问量<br/>{{ vistor_count }}</p>
</div>
{% if current_selected_page != null %}
<div class="count row background" style='border-radius:2px; padding: 0px;'>
    <p class="none-border col-xs-12"><i class="layui-icon">&#xe60c;</i> 当前为: {{ current_selected_page }}投票</p>
</div>
{% endif %}
<div id="verify-code-dialog" class="verify-code-dialog layui-hide">
    <h4>请输入图片验证码</h4>
    <div class="code-review">
        <img src="" id='imgcode' onclick="javascript:this.src='https://vote.commerce.ys69.cn/get_code?tm='+Math.random();">
        <button><i class="iconfont icon-refresh code_refresh"></i></button>
    </div>
    <div class="code-review">
        <!--<input type="hidden" name="code">-->
        <input data-order="1" type="number" id='yzcode' style='width:10rem;border:1px solid #ccc;'>
        <button style='font-size:12px;' class='yztoupiao'>确认</button>
    </div>
</div>

<div id="switch-type-dialog" class="switch-type-dialog layui-hide">
    <h5>请选择评选项目</h5>
    <div class="code-review" style="margin-bottom: 24px;">
        <!--<input type="hidden" name="code">-->

        <button style='font-size:15px;' class='switch-type-button' link-to="best_huliyuan">评选最美养老护理员</button>
    </div>

    <div class="code-review" style="margin-bottom: 24px;">
        <!--<input type="hidden" name="code">-->

        <button style='font-size:15px;' class='switch-type-button' link-to="best_yuanzhang">评选优秀养老院院长</button>
    </div>

    <div class="code-review" style="margin-bottom: 24px;">
        <!--<input type="hidden" name="code">-->

        <button style='font-size:15px;' class='switch-type-button' link-to="best_jigou">评选最佳养老机构</button>
    </div>
</div>

<div>
</div>
<div class="active-count-down"></div>
<div class="wd-per-90 sort">
    <a class="bts layui-btn layui-btn-warm" id="do_switch" >
        <i class="layui-icon" style='font-size:14px;'>&#xe613;</i>
        切换评选项目
    </a>
    <a style="border: 0.1rem solid #fff;border-top: 0; border-bottom: 0;" class="bts layui-btn layui-btn-warm" href="/vote_sort">
        <i class="layui-icon" style='font-size:18px;'>&#xe604;</i> 当前排名
    </a>
    <a class="bts layui-btn layui-btn-warm" href="https://mp.weixin.qq.com/mp/homepage?__biz=MzI0MTUxMzQ3OQ==&hid=1&sn=0b125978f1307fc9f0eaaae10fd4e355&scene=1&devicetype=iOS10.3.3&version=16050f21&lang=zh_CN&nettype=WIFI&ascene=1&fontScale=100&wx_header=1&from=singlemessage&isappinstalled=0">
        <i class="layui-icon" style='font-size:16px;'>&#xe620;</i> 活动报道</a>
</div>
<div class="shadow"></div>



<script>
    var is_end = {{ is_ended }};
    var is_started = {{ is_started }};

    var yzm = 1;

    $(function(){
        $('.bts').eq(0).addClass('background');

        count_down();

        var swiper = new Swiper('.swiper-container', {
            lazyLoading : true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 3000,
        });

        $("#scrollDiv").textSlider({line: 1, speed: 500, timer: 1500});


        $('.code_refresh').click(function() {
            var url = U('/get_code')+"?tm="+Math.random();
            $('#imgcode').attr('src', url);
        })
    });


    function count_down(){


        var nowTime = new Date().getTime();

        var start = {{ start_time }};
        var startTime = new Date(start);

        var end = {{ end_time }};
        var endTime = new Date(end);
        var t = 0;
        if (nowTime < startTime.getTime()) {
            status = '开始';
            t = startTime.getTime() - nowTime;
        } else {
            var status = '结束';
            t = endTime.getTime() - nowTime;
        }
        if (t < 0){
            var y = endTime.getFullYear();
            var m = 9;
            var d = 20;
            var h = 24;
            var i = 00;
            var s = 00;
            var html = '<p style="font-size:13px"><i class="layui-icon fontcolor">&#xe60e;</i> 投票于<span>'+y+'</span>年<span>'+m+'</span>月<span>'+d+'</span>日<span>'+h+'</span>时<span>'+i+'</span>分<span>'+s+'</span>秒<span style="background: none;">'+status+'</span></p>';
            $('.active-count-down').html(html);
            return false;
        }
        if (t > 0) {
            var d = Math.floor(t/1000/60/60/24);
            var h = Math.floor(t/1000/60/60%24);
            var i = Math.floor(t/1000/60%60);
            var s = Math.floor(t/1000%60);

            var html = '<p style="font-size:13px;"><i class="layui-icon fontcolor">&#xe60e;</i> 投票<span style="background: none;">'+status+'</span>倒计时<span>'+d+'</span>天<span>'+h+'</span>时<span>'+i+'</span>分<span>'+s+'</span>秒</p>';
            $('.active-count-down').html(html);
            setTimeout(count_down, 1000);
        }
        if (t == 0) {
            location.reload();
        }
    }

</script>


{% block content %}
{% endblock %}


<div class="rule-container">
    <h2 class='fontcolor border'>活动规则</h2>
    <div class="rule-content">
        <p>
            <span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(250, 250, 250); font-size: 12px;">投票开始时间：2017-09-14 00:00:00&nbsp;</span></p>
        <p><span style="font-size: 12px;"><span style="font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(250, 250, 250);">投票截止时间：2017-09-20 24:00:00</span>
    <br/><span style="font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(250, 250, 250);">投票规则: &nbsp; 每人每日每奖项可投1次，每次每个奖项至少投1票，至多投10票，当次投票不能重复选择</span>
                <br/>
    <br/><span style="font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(250, 250, 250);">活动介绍: &nbsp; “福彩杯” 2017广东养老院服务质量建设专项行动之</span>“老有所依 天使在身边”<span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; font-size: 12px; background-color: rgb(250, 250, 250);">大型公益活动</span>，是今年广东省推进养老院服务质量建设专项行动的一件大事，是对全省养老机构、养老机构管理人员和一线护理人员的重大关爱，是提高养老服务业社会认知和社会影响的一项重大措施。</span>
        </p>
        <p></p>
        <p><span style="font-size: 12px;"></span></p>
        <p class="p1"><span style="font-size: 12px;">主办单位<span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; font-size: 14px; background-color: rgb(250, 250, 250);">：&nbsp;</span>广东省民政厅</span>
        </p>
        <p class="p1"><span style="font-size: 12px;">支持单位<span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; font-size: 14px; background-color: rgb(250, 250, 250);">：&nbsp;</span>广东省福利彩票发行中心</span>
        </p>
        <p class="p1"><span style="font-size: 12px;">承办单位<span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; font-size: 14px; background-color: rgb(250, 250, 250);">：&nbsp;</span>广东省养老服务业商会</span>
        </p>
        <p class="p1"><span style="font-size: 12px;">协办单位<span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; font-size: 14px; background-color: rgb(250, 250, 250);">：&nbsp;</span>各地级以上市民政局</span>
        </p>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 广东养乐堂健康管理服务有限责任公司</span></p>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 广州市海珠区养乐社会工作服务中心</span></p>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 广州桃子体育文化产业有限公司</span></p>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 广东先锋越野运动有限公司</span></p>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;《康乐年华》栏目</span></p>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 佛山市顺康达医疗科技有限公司</span></p>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 广东省养老服务业协会</span></p>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 广州养老服务产业协会</span></p>
        <p class="p1"><span style="font-size: 12px;">联合支持单位<span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; font-size: 14px; background-color: rgb(250, 250, 250);">：&nbsp;</span>广东跨采展览有限公司</span>
        <p class="p1"><span style="font-size: 12px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广州慈铭门诊部有限公司</span></p>
        <p class="p1"><span style="font-size: 12px;">评选范围<span style="color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, 微软雅黑, Tahoma, Arial, sans-serif; background-color: rgb(250, 250, 250);">：</span> &nbsp;广州、深圳、珠海、东莞、佛山、中山、惠州、汕头、江门、茂名、肇庆、湛江、&nbsp;梅州、汕尾、河源、清远、韶关、揭阳、阳江、潮州、云浮</span>
        </p>
        </p>
    </div>
</div>

<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>

    wx.config({{ wxconfig }});
    wx.ready(function(){
        wx.checkJsApi({
            jsApiList: [
                'getLocation',
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ]
        });

        wx.onMenuShareTimeline({
            title: '“福彩杯”2017广东“老有所依 天使在身边”大型公益活动投票入口',
            link: "https://vote.commerce.ys69.cn/",
            imgUrl: 'https://vote.commerce.ys69.cn/img/link_img.jpg',
            trigger: function (res) {

            },
            success: function (res) {
                var url = U('record_share');
                $.post(url, {type:1});
            },
            cancel: function (res) {

            },
            fail: function (res) {

            }
        });

        wx.onMenuShareAppMessage({
            title: '“福彩杯”2017广东“老有所依 天使在身边”活动投票',
            desc: '投票开始时间：2017-09-14 投票截止时间：2017-09-20',
            link: 'https://vote.commerce.ys69.cn/',
            imgUrl: 'https://vote.commerce.ys69.cn/img/link_img.jpg',
            type: 'link',
            dataUrl: '',
            success: function () {
                var url = U('record_share');
                $.post(url, {type:2});
            },
            cancel: function () {

            }
        });
        wx.hideMenuItems({
            menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp','menuItem:share:facebook', 'menuItem:share:QZone', 'menuItem:editTag', 'menuItem:delete', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:readMode', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email']
        });
    });


</script>
<div class="footer" style='padding-bottom: 6rem !important'>
    <div class="note">
        <a href=""><p>广东省养老服务业商会提供技术支持</p></a>
    </div>
</div>
</body>

</html>