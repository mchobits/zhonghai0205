<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\View;

class ControllerBase extends Controller
{
    protected function is_weixin()
    {
        if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
            return true;
        }
        return false;
    }
    public function initialize()
    {
        $this->view->setVar("baseURL",getenv('BASE_URL'));
    }

    protected function sendJson($data) {
        if($this->request->isAjax() == true) {
            $this->view->disableLevel(array(
                View::LEVEL_ACTION_VIEW => true,
                View::LEVEL_LAYOUT => true,
                View::LEVEL_MAIN_LAYOUT => true,
                View::LEVEL_AFTER_TEMPLATE => true,
                View::LEVEL_BEFORE_TEMPLATE => true
            ));

            $this->view->disable();
            $this->response->setStatusCode(200);
            $this->response->setContentType('application/json', 'UTF-8');

            if (is_array($data)) {
                $data['code'] = isset($data['code']) ?: 0;
                $data['message'] = isset($data['message']) ?: '';
                $data = json_encode($data);
            }

            $this->response->setContent($data);
        } else {
            $this->response->setStatusCode(405);
            $this->response->setContent("405 Method Not Allow");
        }

        return $this->response->send();

    }

    protected function downloadAvatar($url, $filename = '')
    {

        $path = BASE_PATH.'/public/upload/avatar/';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        $file = curl_exec($ch);
        curl_close($ch);
        // $filename = pathinfo($url, PATHINFO_BASENAME);
        $resource = fopen($path . $filename."_avatar.jpg", 'a');
        fwrite($resource, $file);
        fclose($resource);
    }
}
