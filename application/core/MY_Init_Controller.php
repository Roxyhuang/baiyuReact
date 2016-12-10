<?php
if (!defined('BASEPATH'))
    exit('No direct access allowed.');

include 'MY_Auth_Controller.php';

/**
 * MY_Init_Controller
 *
 * Initialize
 * @author      zhukejin@msn.com
 * @version     1.0
 * @since       1.0
 */
class MY_Init_Controller extends MY_Auth_Controller {

    public function __construct() {
        parent::__construct();
    }

    /**
     *  记录用户访问信息
     */
    private function _user_visitLog() {
        // 此处记录log
    }

    /**
     * [dataFormat 格式化输出]
     * @param [string] [$data] [返回信息]
     * @return [type] [description]
     */
    public function dataFormat($data = "",$flag = true , $httpCode = 200) {
        $this->_data['flag'] = $flag;
        $this->_data['data'] = $data;
        $this->response($this->_data, $httpCode);
        exit;
    }

    public function lq() {
        echo $this->db->last_query();
    }


    /* end of function in parent */
}

/* End of file MY_Init_Controller.php */
/* Location: ./application/core/MY_Init_Controller.php */
