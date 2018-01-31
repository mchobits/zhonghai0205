<?php
/**
 * Created by PhpStorm.
 * User: akari
 * Date: 2017/08/31
 * Time: 午後5:11
 */

use Phalcon\Mvc\Dispatcher;
use EasyWeChat\Foundation\Application;
use Symfony\Component\Yaml\Yaml;

class WechatController extends ControllerBase
{
    /**
     *
     */
    public function authAction()
    {
        $user_id = $this->session->get('user_id');
        // $user_id = false;
        //$redirect = $this->request->get('redirect');
        $redirect = $this->dispatcher->getParam('redirect');
        if (!$user_id) {
            $code = $this->request->get('code', 'string');
            $weixin = $this->easywechat;

            // 无CODE
            if (!$code) {
                if ($redirect) {
                    $this->session->set('redirect', $redirect);
                }
                $weixin->oauth->scopes(['snsapi_base'])->redirect()->send();
            }
            // 已授权
            $user = $weixin->oauth->user();

            $voter = Voters::findFirst(
                [
                    'conditions' => 'open_id = ?1',
                    'bind'       => [
                        1 => $user->getId(),
                    ]
                ]

            );
            if (!$voter) {
                $voter = new Voters();
                $voter->id = dk_get_next_id();
                $voter->open_id = $user->getId();
                $voter->save();

            }

            if ($user->getNickname()) {
                $original = $user->getOriginal();
                $voter->nickname = $user->getNickname();
                $voter->head_img_url = $user->getAvatar();
                $voter->sex = $original['sex'];
                $voter->country = $original['country'];
                $voter->province = $original['province'];
                $voter->city = $original['city'];
                $voter->unionid = isset($original['unionid']) ? $original['unionid'] : $user->getId();
                $voter->access_token = $user->getToken()->access_token;
                $voter->refresh_token = $user->getToken()->refresh_token;
                $voter->update();
            }

            if (!$voter->nickname) {
                $weixin->oauth->scopes(['snsapi_userinfo'])->redirect()->send();
            } else {
                $this->session->set('user_id', $voter->id);
                $this->session->set('user_nickname', $voter->nickname);
                $redirect = $this->session->get('redirect');
            }

        }
        // 跳转
        $redirect = $redirect ? $redirect : '/';
        return $this->response->redirect($redirect)->send();
        // $this->view->disable();
    }
}