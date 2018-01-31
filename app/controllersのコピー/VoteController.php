<?php
/**
 * Created by PhpStorm.
 * User: akari
 * Date: 2017/09/01
 * Time: 午後5:09
 */

class VoteController extends ControllerBase
{
//    private $start_time = '2017-09-05 08:00:00';
//    private $end_time = '2017-09-12 23:55:00';
    //private $start_time = '1505001600000';
    private $start_time = '1505318400000'; //2017/09/14
    private $end_time = '1505923200000'; //2017/09/21
    private $setting;

    public function initialize()
    {
        Settings::addVistor();
        //$candidates_count = $this->modelsManager->executeQuery('SELECT SUM(plus_vote) plus_vote FROM Candidates');
//        $vote_records = VoteRecords::find();
//        $this->view->setVar('vote_count', $vote_records->count() + intval($candidates_count[0]->plus_vote));
        //$vote_records = $this->modelsManager->executeQuery('SELECT COUNT(id) vote_counts FROM VoteRecords');
        //$this->view->setVar('vote_count', intval($vote_records[0]->vote_counts) + intval($candidates_count[0]->plus_vote));
        $this->view->setVar('vote_count', '计算中....');

        $this->view->setVar('vistor_count', Settings::getVistorCount());

        $this->view->setVar('start_time', $this->start_time);
        $this->view->setVar('end_time', $this->end_time);
        $this->view->setVar('is_started', ($this->start_time < (time() * 1000))? 1 : 0);
        $this->view->setVar('is_ended', ($this->end_time < (time() * 1000)) ? 1 : 0);

        $this->view->setVar('is_jigou', false);
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
        $this->view->setVar('current_selected_page', null);


    }

    /**
     * 投票系统首页
     */
    public function indexAction()
    {
        if ($this->is_weixin()) {
            if (!$this->session->has('user_id') || !$this->session->has('user_nickname')) {
                $this->dispatcher->forward([
                    'controller' => 'wechat',
                    'action' => 'auth',
                    'params' => array('redirect' => $_SERVER['REQUEST_URI'])
                ]);
            }
        }

        $pageNum = $this->request->getQuery('pageNum','int',1);

        if ($pageNum > 3 || intval($pageNum) == 0) {
            $pageNum = 1;
        }


        $vote_type = $this->dispatcher->getParam('vote_type');

        $current_selected_page = null;
        $candidates = null;
//        $phql = 'SELECT Candidates.id, Candidates.head_img_url, Candidates.name,Candidates.number_id,Candidates.company,
//                      Candidates.plus_vote,Candidates.candidate_type,
//                      (SELECT COUNT(1) FROM Candidates) cid,
//                      (SELECT COUNT(VoteRecords.id) FROM VoteRecords WHERE VoteRecords.candidate_id = Candidates.id) v_count
//                      FROM Candidates WHERE Candidates.candidate_type = :Ctype:
//                      ORDER BY Candidates.number_id ASC
//                      LIMIT 10 OFFSET :Coffset:';

        $candidates_builder = $this->modelsManager->createBuilder()
            ->columns(['Candidates.id', 'Candidates.head_img_url', 'Candidates.name','Candidates.number_id',
                'Candidates.company', 'Candidates.plus_vote','Candidates.candidate_type',
                '(SELECT COUNT(1) FROM Candidates) cid',
                '(SELECT COUNT(VoteRecords.id) FROM VoteRecords WHERE VoteRecords.candidate_id = Candidates.id) v_count'])
            ->from('Candidates')
            ->where('Candidates.candidate_type = :Ctype:')
            ->orderBy('Candidates.number_id ASC')
            ->limit(20, ($pageNum - 1) * 20)->getQuery();
        switch ($vote_type){
            case 'best_huliyuan':
                $candidates = $candidates_builder->execute([
                        'Ctype' => 1,
                    ]);
//                $candidates = $this->modelsManager->executeQuery($phql, [
//                        'Ctype' => 1,
//                    ]);
                $current_selected_page = '广东省最美养老护理员';
                $this->view->setVar('totalPage',intval(ceil(55/20)));
                break;
            case 'best_yuanzhang':
                $candidates = $candidates_builder->execute([
                    'Ctype' => 2,
                ]);
                $current_selected_page = '广东省优秀养老院院长';
                $this->view->setVar('totalPage',intval(ceil(30/20)));
                break;
            case 'best_jigou':
                $candidates = $candidates_builder->execute([
                    'Ctype' => 3,
                ]);
                $current_selected_page = '广东省最佳养老机构';
                $this->view->setVar('is_jigou', true);
                $this->view->setVar('totalPage',intval(ceil(35/20)));
                break;
        }
        $result = [];
        foreach ($candidates as $index => $candidate) {
            $candidate->cid = $this->di['hashids']->encode($candidate->id);
            array_push($result, $candidate);
        }

        if ($candidates != null) {

            $this->view->setVar('current_selected_page', $current_selected_page);
            $this->view->setVar('candidates',$result);
        }

        $this->view->setVar('currPage',$pageNum);
        $this->view->setMainView('vote/index');
    }
    /**
     * 验证码
     */

    public function getCodeAction()
    {
        if ($this->is_weixin()) {
            $acaptcha = new \ValidateCode(100,40,'png',4,1);;
            $acaptcha->show();
            $this->session->set('code', $acaptcha->verifyCode);
            exit();
        }

    }
    /**
     * 投票方法
     */

    public function doVoteAction()
    {
        $this->view->disable();
        $this->response->setContentType('application/json', 'UTF-8');

        if ($this->request->isAjax() && $this->is_weixin() && $this->request->isPost()) {

            $voter_id = intval($this->session->get('user_id'));

            if (!$this->session->has('user_id') || $voter_id == 0) {
                return $this->response->setContent(json_encode(array(
                    'flag' => 102,
                    'msg' => '在PC端无法进行投票，请用手机微信打开！'
                )));
            }

//            $code = intval($this->request->get('code'));
//
//            // $response = new \Phalcon\Http\Response();
//            if ($code != $this->session->get('code')) {
//                return $this->response->setContent(json_encode(array(
//                    'flag' => 400,
//                    'msg' => '验证码错误'
//                )));
//            }
//
//            if ($this->session->has('code')) {
//                $this->session->remove('code');
//            }


            if ($this->start_time > (time() * 1000)) {
                return $this->response->setContent(json_encode(array(
                    'flag' => 102,
                    'msg' => '本投票将于2017年9月14日开始~'
                )));
            }

            if ($this->end_time < (time() * 1000)) {
                return $this->response->setContent(json_encode(array(
                    'flag' => 103,
                    'msg' => '本投票已经结束了,详细评选结果公示请留意广东省民政厅官网！'
                )));
            }


            $userid = $this->request->get('id');

            $this->db->begin();
            $hashids = $this->di['hashids'];
            $real_user_id = $hashids->decode($userid);
            // $real_user_id = intval($real_user_id);
            $today = strtotime('today');
            $tomorrow = strtotime('+1 day');


            $candidate = Candidates::findFirst($real_user_id[0]);

            if (!$candidate->id) {
                $this->db->commit();
                return $this->response->setContent(json_encode(array(
                    'flag' => 403,
                    'msg' => '投票失败，参数错误，请刷新页面重试'
                )));
            }

            $phql = 'SELECT COUNT(id) AS total FROM VoteRecords 
                      WHERE VoteRecords.candidate_id = :candidateId:
                      AND VoteRecords.voter_id = :voterId: 
                      AND VoteRecords.create_time > :today: 
                      AND VoteRecords.create_time < :tomorrow:';

            $already = $this->modelsManager->executeQuery($phql, [
                'candidateId' => $real_user_id[0],
                'tomorrow' => $tomorrow,
                'today' => $today,
                'voterId' => $voter_id
            ]);
            
            if ($already[0]->total) {
                $this->db->commit();
                return $this->response->setContent(json_encode(array(
                    'flag' => 104,
                    'msg' => '投票失败<br>此'.$this->setCandidateContent($candidate->candidate_type).'你已经投过了！'
                        .'<br>小提示:同一'
                        .$this->setCandidateContent($candidate->candidate_type).'一天只能投一票哦！<br>明天再来吧！'
                )));
            };

            $phql = 'SELECT COUNT(id) AS total FROM VoteRecords 
                      WHERE VoteRecords.voter_id = :voterId: 
                      AND VoteRecords.type = :candidateType:
                      AND VoteRecords.create_time > :today: 
                      AND VoteRecords.create_time < :tomorrow:';
            $count = $this->modelsManager->executeQuery($phql, [
                'voterId' => $voter_id,
                'today' => strtotime('today'),
                'tomorrow' => strtotime('+1 day'),
                'candidateType' => $candidate->candidate_type
            ]);
            if ($count[0]->total >= 10) {
                $this->db->commit();
                return $this->response->setContent(json_encode(array(
                    'flag' => 105,
                    'msg' => '投票失败<br>'
                        .'您今天在'.$this->setCandidateContent($candidate->candidate_type).'评选项目的投票数已经用完！'
                )));
            };

            $vote_record = new VoteRecords();
            $vote_record->id = dk_get_next_id();
            $vote_record->candidate_id = $real_user_id[0];
            $vote_record->voter_id = $voter_id;
            $vote_record->create_time = time();
            $vote_record->type = $candidate->candidate_type;
            $vote_record->save();

            $this->db->commit();

            $still_count = 10 - 1 - $count[0]->total;

            return $this->response->setContent(json_encode(array(
                'flag' => 100,
                'msg' => '投票成功<br>今天你还可以在'
                    .$this->setCandidateContent($candidate->candidate_type)
                    .'评选项目投 '. $still_count .' 票<br>'
                    .'小提示：点击左下方的按钮能快速切换评选项目哦'
            )));
        } else {
            return $this->response->setContent(json_encode(array(
                'flag' => 500,
                'msg' => '请在微信内打开此投票系统'
            )));
        }
    }

//    public function doNewVoterAction()
//    {
//        $faker = \Faker\Factory::create('zh_CN');
//        for ($i = 1; $i < 36; $i += 1) {
//            $candidate = new Candidates();
//            $candidate->id = dk_get_next_id();
//            $candidate->number_id = $i;
//            $candidate->name = $faker->company;
//            $candidate->head_img_url = $faker->imageUrl($width = 300, $height = 300);
//            $candidate->candidate_type = 3;
//            $candidate->save();
//        }
//        die('ok');
//
//    }

//    public function doNewVoterAction()
//    {
//        $faker = \Faker\Factory::create('zh_CN');
//        for ($i = 1; $i < 21; $i+=1) {
//            $candidate = new Candidates();
//            $candidate->id = dk_get_next_id();
//            $candidate->number_id = $i;
//            $candidate->name = $faker->company;
//            $candidate->head_img_url = $faker->imageUrl($width = 300, $height = 300);
//            $candidate->candidate_type = 3;
//            $candidate->save();
//        }
//        die('ok');
//
//    }

    /**
     * 选手详情页
     */

    public function candidateDetailAction()
    {
        $id = $this->request->getQuery('id', 'string');
        $real_id = ($this->di['hashids']->decode($id))[0];
        $candidate = null;
        if ($real_id == null && $real_id == 0) {
            return $this->response->redirect('/')->send();
        } else {
            $candidate = Candidates::findFirst($real_id);
            if (!$candidate) return $this->response->redirect('/')->send();
        }

        $candidate_vote_count = VoteRecords::find([
            'conditions' => 'candidate_id = ?1',
            'bind'       => [
                1 => $real_id,
            ]
        ]);
        switch ($candidate->candidate_type) {
            case 1 : $this->view->setVar('current_selected_page', '广东省最美养老护理员');break;
            case 2 : $this->view->setVar('current_selected_page', '广东省优秀养老院院长');break;
            case 3 : $this->view->setVar('current_selected_page', '广东省最佳养老机构');break;
        }
        $this->view->setVar('candidate_vote_count', $candidate_vote_count->count());
        $this->view->setVar('candidate', $candidate);
        $this->view->setMainView('vote/detail');

    }

    /**
     * 投票记录
     */

    public function candidateVoteLogsAction()
    {
        if ($this->request->isAjax() && $this->is_weixin()) {
            $today = strtotime('today');
            $tomorrow = strtotime('+1 day');
            $userid = $this->request->get('userid');
            $real_id = ($this->di['hashids']->decode($userid))[0];
            $result = $this->modelsManager->createBuilder()
                ->columns(['v.id', 'v.city', 'v.nickname', 'v.head_img_url', 'vr.voter_id', 'vr.create_time', 'vr.candidate_id'])
                ->from(['v' => 'Voters'])
                ->addFrom('VoteRecords', 'vr')
                ->where('v.id = vr.voter_id')
                ->andWhere('vr.create_time > :today:', ['today' => $today])
                ->andWhere('vr.create_time < :tomorrow:', ['tomorrow' => $tomorrow])
                ->andWhere('vr.candidate_id = :candidateId:', ['candidateId' => $real_id])
                ->limit(15)
                ->orderBy("vr.create_time DESC")
                ->getQuery()
                ->execute();

            $this->view->setVar('vlogs', $result);
            $this->view->setMainView('vote/vote_logs');
        }

    }

    /**
     * 投票系统 当前排名页
     */

    public function candidateVoteSortAction()
    {
//        $phql = 'SELECT Candidates.id, Candidates.name, Candidates.company, Candidates.plus_vote,Candidates.candidate_type,
//                      (SELECT COUNT(VoteRecords.id) FROM VoteRecords WHERE VoteRecords.candidate_id = Candidates.id) v_count
//                      FROM Candidates WHERE Candidates.candidate_type = :Ctype: ORDER BY v_count DESC';
        $phql = 'SELECT Candidates.id, Candidates.name, Candidates.company, Candidates.plus_vote,Candidates.candidate_type,
                      (Candidates.vote_count) v_count
                      FROM Candidates WHERE Candidates.candidate_type = :Ctype: ORDER BY v_count DESC';

        $best_huliyuan_sort = $this->modelsManager->executeQuery($phql, ['Ctype' => 1]);
        $best_yuanzhang_sort = $this->modelsManager->executeQuery($phql,['Ctype' => 2]);
        $best_jigou_sort = $this->modelsManager->executeQuery($phql,['Ctype' => 3]);

        $this->view->setVar('best_huliyuan_sort', $best_huliyuan_sort);
        $this->view->setVar('best_yuanzhang_sort', $best_yuanzhang_sort);
        $this->view->setVar('best_jigou_sort', $best_jigou_sort);

        $this->view->setMainView('vote/sort');
    }

    public function showVoteRuleAction()
    {
        $this->view->setMainView('vote/rule');
    }

    public function recordShareAction()
    {
        $share_type = $this->request->get('type', 'int', 1);
        if ($this->request->isAjax() && $this->is_weixin()) {
            if ($share_type == 1) {
                Settings::addShareTimeline();
            } else if ($share_type == 2) {
                Settings::addShareAppMessage();
            } else {
                exit();
            }
        }
        exit();
    }


    private function setCandidateContent($type) {
        switch ($type) {
            case 1 : return '护理员'; break;
            case 2 : return '院长'; break;
            case 3 : return '机构'; break;
        }
    }


}