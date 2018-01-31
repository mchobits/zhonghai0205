<?php
use EasyWeChat\Foundation\Application;
use Phalcon\Mvc\View;

class IndexController extends ControllerBase
{
    public function indexAction()
    {
        if ($this->is_weixin()) {
//            if (!$this->session->has('user_id') || !$this->session->has('user_nickname')) {
//                return $this->dispatcher->forward([
//                    'controller' => 'wechat',
//                    'action' => 'auth',
//                    'params' => array('redirect' => $_SERVER['REQUEST_URI'])
//                ]);
//            }
            $weixin = $this->easywechat;

            $js = $weixin->js;

            $this->view->wxconfig = $js->config(
                array('checkJsApi',
                    'openLocation',
                    'getLocation',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'hideAllNonBaseMenuItem',
                ), false);


            $this->view->disableLevel(
                View::LEVEL_MAIN_LAYOUT
            );
            $this->view->setMainView('index/index');
        } else {
            $weixin = $this->easywechat;

            $js = $weixin->js;

            $this->view->wxconfig = $js->config(
                array('checkJsApi',
                    'openLocation',
                    'getLocation',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'hideAllNonBaseMenuItem',
                ), false);
            // echo "请在微信端打开此页面";

            $this->view->setMainView('index/not_wechat');
        }
    }
}

