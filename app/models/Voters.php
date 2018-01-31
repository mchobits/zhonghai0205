<?php

class Voters extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     * @Primary
     * @Column(type="integer", length=20, nullable=false)
     */
    public $id;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=false)
     */
    public $open_id;

    /**
     *
     * @var string
     * @Column(type="string", length=100, nullable=true)
     */
    public $nickname;

    /**
     *
     * @var integer
     * @Column(type="integer", length=10, nullable=true)
     */
    public $sex;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    public $province;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    public $city;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    public $country;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    public $head_img_url;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    public $privilege;

    /**
     *
     * @var string
     * @Column(type="string", length=45, nullable=true)
     */
    public $unionid;

    /**
     *
     * @var string
     * @Column(type="string", length=100, nullable=true)
     */
    public $access_token;

    /**
     *
     * @var string
     * @Column(type="string", length=100, nullable=true)
     */
    public $refresh_token;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("homestead");
        $this->setSource("voters");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'voters';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Voters[]|Voters|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Voters|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
