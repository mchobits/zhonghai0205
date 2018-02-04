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

            $member = Members::findFirst(
                [
                    'conditions' => 'open_id = ?1',
                    'bind'       => [
                        1 => $user->getId(),
                    ]
                ]

            );
            if (!$member) {
                $member = new Members();
                $member->id = dk_get_next_id();
                $member->open_id = $user->getId();
                $member->save();

            }

            if ($user->getNickname()) {
                $original = $user->getOriginal();
                $member->nickname = $user->getNickname();
                $member->head_img_url = $user->getAvatar();
                $member->sex = $original['sex'];
                $member->country = $original['country'];
                $member->province = $original['province'];
                $member->city = $original['city'];
                $member->unionid = isset($original['unionid']) ? $original['unionid'] : $user->getId();
                $member->access_token = $user->getToken()->access_token;
                $member->refresh_token = $user->getToken()->refresh_token;
                $member->create_time = time();
                $member->update();
            }

            if (!$member->nickname) {
                $weixin->oauth->scopes(['snsapi_userinfo'])->redirect()->send();
            } else {
                $this->session->set('user_id', $member->id);
                $this->session->set('user_nickname', $member->nickname);
                $redirect = $this->session->get('redirect');
            }

        }
        // 跳转
        $redirect = $redirect ? $redirect : '/';
        return $this->response->redirect($redirect)->send();
        // $this->view->disable();
    }
}