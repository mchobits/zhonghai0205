<?php

use Phalcon\Mvc\Controller;

class ControllerBase extends Controller
{
    protected function is_weixin()
    {
        if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
            return true;
        }
        return false;
    }
}
