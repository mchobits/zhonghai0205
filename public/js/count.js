/**
 * 访问统计客户端
 * Created by Administrator on 2016/5/23.
 */


/**
 * 全局变量初始化
 */
var Gcfg = {
    //默认提交地址
    url : "http://mchobits.s3.natapp.cc/Basic/CountInit",
    //初始化分享失败
    initFx : -1,
    //访问提交数据
    init : 0,
    //尝试分享提交
    tryFx : 1,
    //分享成功提交
    SucFx : 2,
    //取消分享
    CanFx : 3,
    //分享错误
    ErrFx : 4,
    //项目唯一名字
    proName : null,

    //分享服务器计算
    fenxiangreq : "http://mchobits.s3.natapp.cc/Basic/GetJWinXinInfo",
    //分享的url,要到服务器验证的本项目地址
    fenxiangurl : getProjectPath(),
    //分享的title :
    fenxiangtitle : "分享",
    //分享的描述
    fenxiangdesc : "分享描述",
    //分享链接
    fenxianglink : getProjectPath(),
    //分享缩略图
    fenxiangimage : "",
    //点击分享回调
    fenxiangcallback : null,
    //分享成功回调
    fenxiangsuccall: null,
};

/**
 * 初始化
 * @param params
 * 可包含参数
 * {
 * url:服务器地址
 * name:项目名
 *
 * }
 */
function init(params){
    params = params == null ? {} : params;
    for(var key in params){
        Gcfg[key] = params[key];
    }
    initfenxiang();
    sendToServer(Gcfg.init);
}

function sendToServer(type){
    //项目名字
    var name = getProjectName();
    $.ajax({
        url:Gcfg.url,
        type:"POST",
        dataType:"text",
        data : {
            proName : name,
            type : type
        },
        error: function(data){
            console.log("erro ",data);
        },
        success: function(data){
            console.log("success ",data);
        }
    });
}

function getProjectName(){
    if(Gcfg.proName != null)
        return Gcfg.proName;
    var url = window.location;
    var name = url.pathname.substr(1,url.pathname.length);
    var index = name.indexOf("/");
    if(index == -1) {
        return name;
    }
    return "fwl_" + name.substr(0,index);
}

function getProjectPath(){
    var url = window.location.href;
    return url;
}


/**
 微信分享
 */

function initfenxiang(){
    $.ajax({
        url: Gcfg.fenxiangreq,
        type: "post",
        data:{"url":Gcfg.fenxiangurl},
        dataType:"json",
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            /* alert(XMLHttpRequest.status);
             alert(XMLHttpRequest.readyState);
             alert(textStatus);
             */
        },
        success: function (data) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonce, // 必填，生成签名的随机串
                signature: data.signature,// 必填，签名，见附录1
                jsApiList: [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onRecordEnd',
                    'playVoice',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'downloadVoice',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard'
                ]
            });


            wx.ready(function () {
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                wx.onMenuShareTimeline({
                    title: Gcfg.fenxiangtitle,
                    link: Gcfg.fenxianglink,
                    imgUrl: Gcfg.fenxiangimage,
                    trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                        //this.title = getTitle();
                        if(Gcfg.fenxiangcallback != null) {
                            var change = Gcfg.fenxiangcallback();
                            this.title = change.title != null ? change.title : this.title;
                            this.link = change.link != null ? change.link : this.link;
                            this.imgUrl = change.imgUrl != null ? change.imgUrl : this.imgUrl;
                        }
                        sendToServer(Gcfg.tryFx);
                    },
                    success: function (res) {
                        sendToServer(Gcfg.SucFx);
                        if(Gcfg.fenxiangsuccall != null) {
                            Gcfg.fenxiangsuccall();
                        }
                    },
                    cancel: function (res) {
                        sendToServer(Gcfg.CanFx);
                    },
                    fail: function (res) {
                        sendToServer(Gcfg.ErrFx);
                    }
                });

                wx.onMenuShareAppMessage({
                    title: Gcfg.fenxiangtitle,
                    desc: Gcfg.fenxiangdesc, // 分享描述
                    link: Gcfg.fenxianglink,
                    imgUrl: Gcfg.fenxiangimage,
                    trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                        if(Gcfg.fenxiangcallback != null) {
                            var change = Gcfg.fenxiangcallback();
                            this.title = change.title != null ? change.title : this.title;
                            this.link = change.link != null ? change.link : this.link;
                            this.imgUrl = change.imgUrl != null ? change.imgUrl : this.imgUrl;
                            this.desc = change.desc != null ? change.desc : this.desc;
                        }
                        sendToServer(Gcfg.tryFx);
                    },
                    success: function (res) {
                        sendToServer(Gcfg.SucFx);
                        if(Gcfg.fenxiangsuccall != null) {
                            Gcfg.fenxiangsuccall();
                        }
                    },
                    cancel: function (res) {
                        sendToServer(Gcfg.CanFx);
                    },
                    fail: function (res) {
                        sendToServer(Gcfg.ErrFx);
                    }
                });
            });

            wx.error(function (res) {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                sendToServer(Gcfg.initFx);
            });
        }
    });
}

