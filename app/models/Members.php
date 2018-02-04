<?php

class Members extends \Phalcon\Mvc\Model
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
     * @Column(column="open_id", type="string", length=45, nullable=false)
     */
    public $open_id;

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
     * @Column(column="province", type="string", length=45, nullable=true)
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
     * @Column(column="head_img_url", type="string", length=255, nullable=true)
     */
    public $head_img_url;

    /**
     *
     * @var string
     * @Column(column="privilege", type="string", length=45, nullable=true)
     */
    public $privilege;

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
     * @Column(column="real_name", type="string", length=255, nullable=true)
     */
    public $real_name;

    /**
     *
     * @var string
     * @Column(column="avatar", type="string", length=255, nullable=true)
     */
    public $avatar;

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
     * @var string
     * @Column(column="age", type="string", length=50, nullable=true)
     */
    public $age;

    /**
     *
     * @var integer
     * @Column(column="mobile", type="integer", length=255, nullable=true)
     */
    public $mobile;

    /**
     *
     * @var string
     * @Column(column="has_pet", type="string", length=50, nullable=true)
     */
    public $has_pet;

    /**
     *
     * @var string
     * @Column(column="pet_story", type="string", nullable=true)
     */
    public $pet_story;

    /**
     *
     * @var integer
     * @Column(column="result_point", type="integer", length=50, nullable=true)
     */
    public $result_point;

    /**
     *
     * @var integer
     * @Column(column="create_time", type="integer", length=255, nullable=true)
     */
    public $create_time;

    private $cid;

    public $love_id;

    public function getCid()
    {
        $hashids = $this->di['hashids'];
        return $hashids->encode($this->id);

    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("zh20180205");
        $this->setSource("members");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'members';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Members[]|Members|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Members|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
