<?php
/**
 * Created by PhpStorm.
 * User: zhukejin
 * Date: 16/12/10
 * Time: 下午7:30
 */

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH . '/libraries/REST_Controller.php';


/**
 * Home Api
 */
class Home extends REST_Controller {
    const TABLE = 'b1_sales_summary';

    public function fetchList_get() {
        $date = $this->get('date');
        $cate = $this->get('cate');
        $city = $this->get('city');
        $keyword = $this->get('keyword');

        $this->dataFormat();
    }

    //
    private function _getData() {

    }

    private function _addKey ($array) {
        foreach ($array as $key => $value) {
            $array[$key]['key'] = $key;
        }

        return $array;
    }

    private function _createWhere($date) {
        $sql = '';

        if ($date) {
            $sql .= ' and stock_dt = ' . date('Ymd', strtotime($date));
        }

        return $sql;

    }
}
