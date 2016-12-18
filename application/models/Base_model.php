<?php
/**
 * Created by PhpStorm.
 * User: zhukejin
 * Date: 16/12/18
 * Time: 下午1:07
 */

namespace BaseModel;

defined('BASEPATH') OR exit('No direct script access allowed');

class Base_model extends CI_Model {

    const TABLE = 'user';

    public function __construct() {
        parent::__construct();
    }

    public function checkLogin($data) {
        return $this->db->where(array('name' => $data['name'], 'pswd' => $this->_pwd($data['pswd'])))
            ->get(self::TABLE)->row_array();
    }

    public function getAUser($username) {
        return $this->db->select('uid, name, status')->where('name', $username)->get(self::TABLE)->num_rows();
    }

    // get all user
    public function getAllUser () {
        return $this->db->select('uid, name, status')->get(self::TABLE)->result_array();
    }

    // add a user
    public  function addUser ($data) {
        $data['pswd'] = $this->_pwd($data['pswd']);
        return $this->db->insert(self::TABLE, $data);
    }

    // update a user
    public function updateUser ($data, $id) {
        return $this->db->where('uid', $id)->update(self::TABLE, $data);
    }

    // delete a user
    public function deleteUser ($id) {
        return $this->db->where('uid', $id)->delete(self::TABLE);
    }

    private function _pwd($str = '') {
        return md5(sha1($str));
    }
}