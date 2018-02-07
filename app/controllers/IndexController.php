<?php
use Phalcon\Mvc\View;


class IndexController extends ControllerBase
{

    public function indexAction()
    {
        if ($this->is_weixin()) {
            if (!$this->session->has('user_id') || !$this->session->has('user_nickname')) {
                return $this->dispatcher->forward([
                    'controller' => 'wechat',
                    'action' => 'auth',
                    'params' => array('redirect' => $_SERVER['REQUEST_URI'])
                ]);
            }
        }


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

        $user_id = intval($this->session->get('user_id'));
        $user = Members::findFirst(
            [
                'conditions' => 'id = ?1',
                'bind' => [
                    1 => $user_id,
                ]
            ]
        );

        $this->view->setVar("user", $user);
        $this->view->setMainView("index/index");
    }

    public function countInitAction()
    {
        $this->view->disable();

        $response = new \Phalcon\Http\Response();

        $response->setContent("OK");

        return $response;
    }

    public function putTestAction()
    {
        return $this->sendJson([]);
    }

    public function initMsgAction()
    {
        $res = ["nickname" => $this->session->get("user_nickname")];
        return $this->sendJson($res);
        //echo '{ "code": 0, "nickname": "梁衍儿" }';
        //exit;
    }

    public function getJWinXinInfoAction()
    {

        $wxconfig = $this->session->get('wxconfig');

        $wxconfig = json_decode($wxconfig);

        $this->view->disable();

        $response = new \Phalcon\Http\Response();

        $response->setContent(json_encode(array(
            "timestamp" => $wxconfig->timestamp,
            "nonce" => $wxconfig->nonceStr,
            "signature" => $wxconfig->signature,
            "appId" => $wxconfig->appId
        )));

        return $response;
//
//
//        echo '{
//            "timestamp": "'.$wxconfig->timestamp.'",
//            "nonce": "'.$wxconfig->nonceStr.'",
//            "signature": "'.$wxconfig->signature.'",
//            "appId": "'.$wxconfig->appId.'"
//        }';
//        exit;
    }

    public function subScoreAction()
    {
        if ($this->request->isAjax() && $this->is_weixin() && $this->request->isPost()) {
            $score = $this->request->getPost("score", "int", 0);

            $user_id = intval($this->session->get('user_id'));
            $member = Members::findFirst(
                [
                    'conditions' => 'id = ?1',
                    'bind'       => [
                        1 => $user_id,
                    ]
                ]
            );

            $member->result_point = $score;
            $member->update();
            $this->session->set("member_score", $score);
            $res = ["isVip" => 0, "hasMoney" => true, "score"=> $member->result_point];
            return $this->sendJson($res);
        }
        exit;
    }

    public function getHbAction()
    {
        echo '{"code": 0, "money": 100 }';
        exit;
    }

    public function pipeiAction()
    {
        $data_id = $this->request->getPost("data_id", "int");
        if ($this->request->isAjax() && $this->is_weixin() && $this->request->isPost()) {


            $user_id = intval($this->session->get('user_id'));
            $user = Members::findFirst(
                [
                    'conditions' => 'id = ?1',
                    'bind' => [
                        1 => $user_id,
                    ]
                ]
            );



            if ($data_id == 0) {
                return $this->sendJson(["my_avatar" => $user->avatar, "lover_avatar" => "img3/no_pic.png"]);
            }

            $lover = Members::findFirst(
                [
                    'conditions' => 'id = ?1',
                    'bind' => [
                        1 => $data_id,
                    ]
                ]
            );

            if (!$lover) {
                return $this->sendJson(["code" => '400']);
            }

            $user->love_id = $data_id;
            $user->update();

            return $this->sendJson(["my_avatar" => $user->avatar, "lover_avatar" => $lover->avatar]);

        }

    }

    public function buildGeXingImgAction()
    {
        $user_id = intval($this->session->get('user_id'));
        $score = intval($this->session->get('member_score'));
        //$head_img_url = $this->session->get('head_img_url');

        if ($user_id != 0 && $score != 0) {

            $member = Members::findFirst(
                [
                    'conditions' => 'id = ?1',
                    'bind'       => [
                        1 => $user_id,
                    ]
                ]
            );
            $filename = BASE_PATH.'/public/upload/avatar/' . $user_id . "_avatar.jpg";

            if (!file_exists($filename)) {
                $this->downloadAvatar($member->head_img_url, $user_id);
            }

            $gexingImg = new GeXingPic();
            $res = $gexingImg->build_xgt($user_id,  $member->result_point, $member->nickname);

            if ($res) {
                return $this->sendJson(["gx_pic" => "upload/gexing/".$user_id.".jpg"]);
            } else {
                return $this->sendJson([]);
            }


        }
    }

    public function registerAction()
    {
        if ($this->request->isAjax() && $this->is_weixin() && $this->request->isPost()) {
            $real_name = $this->request->getPost("nickName", "string", "无名氏");
            $phone = $this->request->getPost("phone", "int");
            $age = $this->request->getPost("age", "int", "0");
            $has_pet = $this->request->getPost("pet", "string", "无");
            $pet_story = $this->request->getPost("story", "striptags", "无");
            $mediaId = $this->request->getPost("media_id", "string", "");

            $user_id = intval($this->session->get('user_id'));
            $member = Members::findFirst(
                [
                    'conditions' => 'id = ?1',
                    'bind' => [
                        1 => $user_id,
                    ]
                ]
            );
            $file_name = $user_id + time();
            if ($mediaId != "") {
                $app = $this->easywechat;
                $stream = $app->media->get($mediaId);
                //var_dump($stream);
                if(is_array($stream)) {
                    return $this->sendJson(["code" => $stream["errcode"], "message"=>$stream["errmsg"]]);
                }
                $stream->saveAs(BASE_PATH.'/public/upload', $file_name);
                $member->avatar = '/upload/'.$file_name;
            } else {
                $member->avatar = $member->head_img_url;
            }

            $member->join_event = 1;
            $member->real_name = $real_name;
            $member->mobile = $phone;
            $member->age = $age;
            $member->has_pet = $has_pet;
            $member->pet_story = $pet_story;
            $member->update();

            if ($member->sex == 1) {
                $select_sex = 2;
            } else if ($member->sex == 2) {
                $select_sex = 1;
            }

            $pipei_members =$this->modelsManager->createBuilder()
                ->columns(["Members.id", "Members.avatar", 'Members.cid', 'Members.real_name'])
                ->from("Members")
                ->where("Members.sex = :select_sex:" ,["select_sex" => $select_sex])
                ->andWhere("Members.id != :id:" ,["id" => $member->id])
                ->andWhere("Members.hide != 1")
                ->andWhere("Members.join_event = 1")
                ->andWhere("Members.result_point <= :point:", ["point" => $member->result_point + 5])
                ->andWhere("Members.result_point >= :point2:", ["point2" => $member->result_point - 5])
                ->orderBy("rand()")
                ->limit(5)
                ->getQuery()
                ->execute();




        }
        return $this->sendJson(["count"=> count($pipei_members), "pipei_members" => $pipei_members]);
    }

    public function loginAction()
    {
        if ($this->request->isGet()){
            return $this->view->setMainView('admin/login');
        } else {
            $username = $this->request->getPost("email", "string");
            $password = $this->request->getPost("password", "string");
            if ($username == getenv('MANAGER_USERNAME') && $password == getenv('MANAGER_PASSWORD')) {
                $this->session->set("user-level", "administrator");
                $this->response->redirect("/admin/index");
            } else {
                $this->response->redirect("/admin/login");
            }

        }
    }
}

