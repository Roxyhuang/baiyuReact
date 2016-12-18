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
class MY_Auth_Controller extends CI_Controller
{
    public $_data = array();
    protected $passport = false;

    public function __construct()
    {
        parent::__construct();

        $this->_checkWhiteList();

        $this->_is_logined();

    }

    /**
     * 如果是某些权限页面，可以在这里进行权限开关
     */
    private function _is_logined()
    {
        //这里进行auth 认证

        $this->_data['username'] = $this->session->user['username'];


        if ($this->session->user) {
            $this->_data['valid'] = true;
            $this->_data['status'] = $this->session->user['status'];
        } else {
            $this->_data['valid'] = false;
            $this->_data['msg'] = '暂未登陆';


            // 过滤白名单接口
            if (!$this->passport) {
//                echo json_encode($this->_data);exit;
            }

        }
    }


    private function _checkWhiteList()
    {
        $uri = $this->uri->segment(3);
        if ($uri === 'login') {
            $this->passport = true;
        }
    }
}

?>