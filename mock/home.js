'use strict';

module.exports = {

    'GET /api/home/fetchList': function (req, res) {
        setTimeout(function () {
            res.json({
                "username": null,
                "valid": false,
                "msg": "暂未登陆",
                "flag": true,
                "data": [{
                    asdad: 123123123,
                    vvvv: 1231312
                }]
            });
        }, 500);
    },
    'GET /api/home/brandCampaignList': function (req, res) {
        setTimeout(function () {
            res.json({
                "username": null,
                "valid": false,
                "msg": "已登录",
                "flag": true,
                "data": [
                    {
                    name: '小王',
                    address: 1231312
                    },
                    {
                      name:'小明',
                      address:'上海市中山路',
                    }
                ]
            });
        }, 500);
    },

};
