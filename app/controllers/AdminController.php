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

        if (!$this->session->has("user-level")) {
            $this->response->redirect("/admin/login", true);
            return false;
        }elseif($this->session->get("user-level") != 'administrator'){
            $this->response->redirect("/admin/login", true);
            return false;
        }
        return true;

    }

    public function indexAction()
    {
        if ($this->request->get("ver") == "v3") {
            $this->view->setMainView('admin/index_v3');
        } else {
            $this->view->setMainView('admin/index');
        }

        $member_count = $this->modelsManager->executeQuery('SELECT COUNT (1) totalMember FROM Members ');
        $man_member_count = $this->modelsManager->executeQuery('SELECT COUNT (1) totalMember FROM Members v WHERE v.sex = 1 AND v.join_event = 1 ');
        $girl_member_count = $this->modelsManager->executeQuery('SELECT COUNT (1) totalMember FROM Members v WHERE v.sex = 2 AND v.join_event = 1 ');
        $this->view->setVar('totalMember', intval($member_count[0]->totalMember));
        $this->view->setVar('manTotalMember', intval($man_member_count[0]->totalMember));
        $this->view->setVar('girlTotalMember', intval($girl_member_count[0]->totalMember));


        //$this->view->setVar("members", $members);



    }

    public function contactsAction()
    {
        $members = Members::find([
            'conditions' => 'join_event = ?1',
            'bind'       => [
                1 => 1,
            ]]);

        $this->view->setVar("members", $members);
        $this->view->setMainView('admin/contacts');
    }

    public function profileAction()
    {
        $mid = $this->request->get("mid","int");

        $member = Members::findFirst($mid);

        $want_lover = Members::findFirst($member->love_id);


        $lovers = Members::find([
            'conditions' => 'love_id = ?1',
            'bind'       => [
                1 => $mid,
            ]
        ]);
        $this->view->setVar("want_lover", $want_lover);
        $this->view->setVar("lovers", $lovers);
        $this->view->setVar("member", $member);
        $this->view->setMainView('admin/profile');
    }




}