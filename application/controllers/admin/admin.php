<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 后台默认控制器
 */
class Admin extends CI_Controller{
	/**
	 * 默认方法
	 */
    public function index(){
        $this->load->view('admin/index.html');
    }


    /**
     * 默认欢迎
     */
    public function copy(){
        $this->load->view('admin/copy.html');
    }
    /**
     * 修改密码
     */
    public function change(){
        $this->load->view('admin/change_passwd.html');
    }
    /**
     * 修改动作
     */
    public function change_passwd(){
        $this->load->model('admin_model', 'admin');
        $username = $this->session->userdata('username');
        $userData = $this->admin->check($username);
        $passwd = $this->input->post('passwd');
        if(md5($passwd) != $userData[0]['passwd']) error('原始密码错误');

        $passwdF = $this->input->post('passwdF');
        $passwdS = $this->input->post('passwdS');

        if($passwdF != $passwdS) error('两次密码不相同');


        $uid = $this->session->userdata('uid');

        $data = array(
            'passwd'	=> md5($passwdF)
        );
        $this->admin->change($uid,$data);

        success('admin/admin/change', '修改成功');


    /**
     * 添加用户
     */
    public function add_cate(){
        // $this->output->enable_profiler(TRUE);
        $this->load->helper('form');
        $this->load->view('admin/add_cate.html');
    }

    /**
     * 添加动作
     */
    public function add(){
        $this->load->library('form_validation');
        $status = $this->form_validation->run('admin');

        if($status){
            // echo "数据库操作";
            // echo $_POST['abc'];die;
            // var_dump($this->input->post('abc'));die;

            $data = array(
                'id'	=> $this->input->post('id')
            );

            $this->cate->add($data);
            success('admin/category/index', '添加成功');
        } else {
            $this->load->helper('form');
            $this->load->view('admin/add_admin.html');
        }
    }













}