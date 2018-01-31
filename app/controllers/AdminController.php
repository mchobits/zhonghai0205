<?php
/**
 * Created by PhpStorm.
 * User: akari
 * Date: 2018/01/29
 * Time: 16:27
 */

class AdminController extends \Phalcon\Mvc\Controller
{
    public function beforeExecuteRoute($dispatcher)
    {

//        // This is executed before every found action
//        //$this->session->set("user-level", "administrator");
//        if (isset($_POST["PHPSESSID"])) {
//            session_id($_POST["PHPSESSID"]);
//        } else if (isset($_GET["PHPSESSID"])) {
//            session_id($_GET["PHPSESSID"]);
//        }
//        if (!$this->session->has("user-level")) {
//            $this->response->redirect("http://www.by-n-by.com", true);
//            return false;
//        }elseif($this->session->get("user-level") != 'administrator'){
//            $this->response->redirect("http://www.by-n-by.com", true);
//            return false;
//        }
//        return true;

    }

    public function indexAction()
    {
        if ($this->request->get("ver") == "v3") {
            $this->view->setMainView('admin/index_v3');
        } else {
            $this->view->setMainView('admin/index');
        }
    }

    public function contactsAction()
    {
        $this->view->setMainView('admin/contacts');
    }
}