<?php
/**
 * Created by PhpStorm.
 * User: akari
 * Date: 2017/09/05
 * Time: 午後2:15
 */

class Settings extends \Phalcon\Mvc\Model
{
    public $setting_name;

    public $setting_value;

    public function initialize()
    {
        $this->setSchema("homestead");
        $this->setSource("settings");
    }

    public function getSource()
    {
        return 'settings';
    }


    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }


    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

    public static function getVistorCount()
    {
        $vistor =  parent::findFirst(
            [
                'conditions' => 'setting_name = ?1',
                'bind'       => [
                    1 => 'visitor_count',
                ]
            ]
        );
        return $vistor->setting_value;
    }

    public static function addVistor()
    {
        $vistor = parent::findFirst(
            [
                'conditions' => 'setting_name = ?1',
                'bind'       => [
                    1 => 'visitor_count',
                ]
            ]
        );
        $vistor->setting_value = intval($vistor->setting_value) + 1;
        return $vistor->update();
    }

    public static function addShareTimeline()
    {
        $vistor = parent::findFirst(
            [
                'conditions' => 'setting_name = ?1',
                'bind'       => [
                    1 => 'share_timeline',
                ]
            ]
        );
        $vistor->setting_value = intval($vistor->setting_value) + 1;
        return $vistor->update();
    }

    public static function addShareAppMessage()
    {
        $vistor = parent::findFirst(
            [
                'conditions' => 'setting_name = ?1',
                'bind'       => [
                    1 => 'share_app_message',
                ]
            ]
        );
        $vistor->setting_value = intval($vistor->setting_value) + 1;
        return $vistor->update();
    }
}