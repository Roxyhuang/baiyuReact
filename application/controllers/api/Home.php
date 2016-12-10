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
    const TABLE_SALES = 'b1_sales_summary';
    const TABLE_STORE = 'basic_daily_sales';

    private $date;
    public function fetchList_get() {
        $this->date = $this->get('date');

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

    private function _createWhere() {
        $sql = '';

        if ($this->date) {
            $sql .= ' and stock_dt = ' . date('Ymd', strtotime($this->date));
        }

        return $sql;

    }
}
