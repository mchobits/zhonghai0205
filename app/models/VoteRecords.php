<?php

class VoteRecords extends \Phalcon\Mvc\Model
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
    public $voter_id;

    /**
     *
     * @var integer
     * @Column(type="integer", length=20, nullable=true)
     */
    public $candidate_id;

    /**
     *
     * @var integer
     * @Column(type="integer", length=15, nullable=true)
     */
    public $create_time;

    /**
     *
     * @var integer
     * @Column(type="integer", length=10, nullable=true)
     */
    public $type;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("homestead");
        $this->setSource("vote_records");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'vote_records';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return VoteRecords[]|VoteRecords|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return VoteRecords|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
