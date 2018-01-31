<?php

class Testers extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     * @Primary
     * @Column(column="id", type="integer", length=20, nullable=false)
     */
    public $id;

    /**
     *
     * @var string
     * @Column(column="open_id", type="string", length=45, nullable=true)
     */
    public $open_id;

    /**
     *
     * @var string
     * @Column(column="unionid", type="string", length=45, nullable=true)
     */
    public $unionid;

    /**
     *
     * @var string
     * @Column(column="access_token", type="string", length=255, nullable=true)
     */
    public $access_token;

    /**
     *
     * @var string
     * @Column(column="refresh_token", type="string", length=255, nullable=true)
     */
    public $refresh_token;

    /**
     *
     * @var string
     * @Column(column="nickname", type="string", length=100, nullable=true)
     */
    public $nickname;

    /**
     *
     * @var integer
     * @Column(column="sex", type="integer", length=10, nullable=true)
     */
    public $sex;

    /**
     *
     * @var string
     * @Column(column="head_img_url", type="string", length=255, nullable=true)
     */
    public $head_img_url;

    /**
     *
     * @var string
     * @Column(column="province", type="string", length=25, nullable=true)
     */
    public $province;

    /**
     *
     * @var string
     * @Column(column="city", type="string", length=45, nullable=true)
     */
    public $city;

    /**
     *
     * @var string
     * @Column(column="country", type="string", length=45, nullable=true)
     */
    public $country;

    /**
     *
     * @var string
     * @Column(column="realname", type="string", length=100, nullable=true)
     */
    public $realname;

    /**
     *
     * @var string
     * @Column(column="avatar", type="string", length=255, nullable=true)
     */
    public $avatar;

    /**
     *
     * @var integer
     * @Column(column="result", type="integer", length=100, nullable=true)
     */
    public $result;

    /**
     *
     * @var integer
     * @Column(column="join_event", type="integer", length=2, nullable=true)
     */
    public $join_event;

    /**
     *
     * @var integer
     * @Column(column="hide", type="integer", length=2, nullable=true)
     */
    public $hide;

    /**
     *
     * @var integer
     * @Column(column="create_time", type="integer", length=50, nullable=true)
     */
    public $create_time;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("zh20180205");
        $this->setSource("testers");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'testers';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Testers[]|Testers|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Testers|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
