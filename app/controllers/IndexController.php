<?php
use Phalcon\Mvc\View;

class IndexController extends ControllerBase
{

    public function indexAction()
    {
//        if ($this->is_weixin()) {
////            if (!$this->session->has('user_id') || !$this->session->has('user_nickname')) {
////                return $this->dispatcher->forward([
////                    'controller' => 'wechat',
////                    'action' => 'auth',
////                    'params' => array('redirect' => $_SERVER['REQUEST_URI'])
////                ]);
////            }


        $weixin = $this->easywechat;

        $js = $weixin->jssdk;

        $wxconfig = $js->buildConfig(
            array(
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
            ), false, false, true);

        $this->session->set('wxconfig', $wxconfig);

            $this->view->disableLevel(
                View::LEVEL_MAIN_LAYOUT
            );
//            $this->view->setMainView('index/index');
//        } else {
//            $weixin = $this->easywechat;
//
//            $js = $weixin->jssdk;
//
//            $this->view->wxconfig = $js->buildConfig(
//                array('checkJsApi',
//                    'openLocation',
//                    'getLocation',
//                    'onMenuShareTimeline',
//                    'onMenuShareAppMessage',
//                    'hideAllNonBaseMenuItem',
//                ), false);
//            // echo "请在微信端打开此页面";
//
//            $this->view->setMainView('index/not_wechat');
//        }

        $this->view->setMainView("index/index");
    }

    public function countInitAction()
    {
        echo "ok";
        exit;
    }

    public function putTestAction()
    {
        echo '{"code": 0}';
        exit;
    }

    public function initMsgAction()
    {
        echo '{ "code": 0, "nickname": "梁衍儿" }';
        exit;
    }

    public function getJWinXinInfoAction()
    {

        $wxconfig = $this->session->get('wxconfig');

        $wxconfig = json_decode($wxconfig);


        echo '{
            "timestamp": "'.$wxconfig->timestamp.'",
            "nonce": "'.$wxconfig->nonceStr.'",
            "signature": "'.$wxconfig->signature.'",
            "appId": "'.$wxconfig->appId.'"
        }';
        exit;
    }

    public function subScoreAction()
    {
        echo '{
	        "code": 0,
	        "isVip": 0,
	        "hasMoney": true
        }';
        exit;
    }
}

