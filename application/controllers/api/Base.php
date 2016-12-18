<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH . '/libraries/REST_Controller.php';

class Base extends REST_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('base_model', 'model');
    }

    public function login_post()
    {
        $data = $this->post();
        $res = $this->model->checkLogin($data);

        if ($res) {
            if ($res['status'] === '1') {
                $newdata = array(
                    'uid' => $res['uid'],
                    'username' => $res['name'],
                    'cellphone' => $res['cellphone'],
                    'status' => $res['status'],
                );

                $this->session->set_userdata('user', $newdata);

                // 登录接口 手动设置 _data
                $this->_data['valid'] = true;
                $this->_data['uid'] = $res['uid'];
                $this->_data['username'] = $res['name'];
                $this->_data['cellphone'] = $res['cellphone'];
                $this->_data['status'] = $res['status'];
                $this->_data['msg'] = '';

                $this->dataFormat();

            } else {
                $this->dataFormat('您的账号已经被冻结，请联系管理员', false);
            }
        } else {

            // 删除之前的 session
            $this->_deleteSession();
            $this->dataFormat('用户名或密码错误', false);
        }

    }

    public function login_get()
    {
        $this->_deleteSession();
        $this->dataFormat('已注销登录', false);
    }

    // 初始状态， 获取一些数据
    public function index_get()
    {
        $this->dataFormat();
    }

    // 检查用户权限
    private function _checkUser()
    {
        if ($this->session->user['group'] != '2') {
            $this->dataFormat('暂无权限', false);
        }
    }

    // 获得所有用户
    public function user_get()
    {
        $this->_checkUser();

        $res = $this->model->getAllUser();

        $this->dataFormat($res);
    }

    // 新增用户
    public function user_post()
    {
        $this->_checkUser();

        $username = $this->post('username');

        // 判断用户是否存在
        $oldUser = $this->model->getAUser($username);


        if ($oldUser > 0) {
            $this->dataFormat('此用户名已存在', false);
        }

        $password = $this->post('password');
        $status = $this->post('status') ?: '1';

        $data = array(
            'name' => $username,
            'pswd' => $password,
            'status' => $status,
            'ctime' => date('Y-m-d H:i:s'),
//            'update_time' => date('Y-m-d H:i:s'),
        );

        $res = $this->model->addUser($data);

        if ($res) {
            $this->dataFormat('添加成功');
        } else {
            $this->dataFormat('添加失败', false);
        }

    }

    // 删除用户
    public function user_delete()
    {

        print_r($this->input->get_request_header('uid', TRUE));
        print_r($this->input->get_request_body('uid', true));
        $this->_checkUser();

        $id = $this->delete('uid');

        print_r($id);exit;

        $res = $this->model->deleteUser($id);

        $this->lq();
        if ($res) {
            $this->dataFormat('删除成功');
        } else {
            $this->dataFormat('删除失败', false);
        }
    }

    // 更新用户
    public function user_put()
    {
        $this->_checkUser();

        $id = $this->put('uid');
        $status = $this->put('status');

        $data = array(
            'status' => $status
        );

        $res = $this->model->updateUser($data, $id);

        if ($res) {
            $this->dataFormat('更新成功');
        } else {
            $this->dataFormat('更新失败', false);
        }
    }

    private function _deleteSession()
    {
        // 删除之前的 session
        $this->session->unset_userdata('user');
        $this->_data['valid'] = false;
        $this->_data['username'] = null;
        $this->_data['status'] = null;
        $this->_data['cellphone'] = null;
        $this->_data['uid'] = null;
    }
}
