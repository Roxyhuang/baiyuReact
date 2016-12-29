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
    

};
