<?php
if (!defined('BASEPATH'))
    exit('No direct access allowed.');

/**
 * MY_Auth_Controller
 *
 * Auth Class
 * @author      zhukejin@msn.com
 * @version     1.0
 * @since       1.0 
 */
class MY_Auth_Controller extends CI_Controller {
	public $_data = array();
    protected $passport = false;

    public function __construct() {
        parent::__construct();

        $this->_checkWhiteList();

        $this->_is_logined();

    }

    private function _is_logined() {
        //这里进行auth 认证

    	if ($this->session->user) {
    		$this->_data['username'] = $this->session->user['username'];
    		$this->_data['valid'] = true;
    		$this->_data['state'] = $this->session->user['state'];
    	} else {
    		$this->_data['valid'] = false;
    		$this->_data['msg'] = '您的登录信息已失效';

            // 过滤登陆接口
            if (!$this->passport) {
                echo json_encode($this->_data);exit;
            }

    	}
    }

    private function _checkWhiteList () {
        $uri = $this->uri->segment(3);
        if ($uri === 'login') {
            $this->passport = true;
        }
    }
}

?>