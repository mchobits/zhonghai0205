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
}
