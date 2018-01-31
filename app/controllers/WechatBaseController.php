<?php
/**
 * Created by PhpStorm.
 * User: akari
 * Date: 2017/08/31
 * Time: 午後4:41
 */

class WechatBaseController extends ControllerBase
{
    protected $wx_user;

    public function initialize()
    {
        $this->wxoauth();
        $this->wx_user = $this->session->get('wx_user');
    }
    /**
     * [wxoauth 微信登录认证]
     * @Author   Jason
     * @DateTime 2016-12-13T11:02:28+0800
     * @return Phalcon\Http\Response
     */
    private function wxoauth()
    {
        if ( !$this->session->has('user_id') ) {
            if ( $this->request->has('state') && $this->request->has('code') ) {
                $this->session->set('wx_user', $this->wxapp->oauth->user());
                return $this->response->redirect( $this->session->get('target_url') )->send();
            }

            $this->session->set('target_url', $this->request->getURI());
            $scopes = $this->config->wechat->scopes;
            if (is_string($scopes)) {
                $scopes = array_map('trim', explode(',', $scopes));
            }
            return $this->wxapp->oauth->scopes( $scopes )->redirect()->send();
        }
    }
}