<?php

class Candidates extends \Phalcon\Mvc\Model
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
     * @var integer
     * @Column(type="integer", length=20, nullable=true)
     */
    public $number_id;

    private $cid;

    /**
     *
     * @var string
     * @Column(type="string", length=100, nullable=true)
     */
    public $name;

    public $company;

    /**
     *
     * @var string
     * @Column(type="string", nullable=true)
     */
    public $description;

    /**
     *
     * @var string
     * @Column(type="string", length=255, nullable=true)
     */
    public $head_img_url;

    /**
     *
     * @var integer
     * @Column(type="integer", length=20, nullable=true)
     */
    public $vote_count;

    /**
     *
     * @var integer
     * @Column(type="integer", length=20, nullable=true)
     */
    public $plus_vote;

    public $candidate_type;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("homestead");
        $this->setSource("candidates");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'candidates';
    }

    public function getCid()
    {
        $hashids = $this->di['hashids'];
        return $hashids->encode($this->id);

    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Candidates[]|Candidates|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Candidates|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
