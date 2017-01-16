'use strict';

module.exports = {

  'GET /api/home/brandCampaignList': function (req, res) {
    setTimeout(function () {
      res.json({
        "username": null,
        "valid": false,
        "msg": "已登录",
        "flag": true,
        "data": [
          {
            BrandId: 1,
            BrandName: '东风日产线下活动--上海',
            BrandLogo: 'http://img2.shucar.com/upfiles/thumb/2012-04-11/5/573193813810.jpg',
            ActivityAddress: '北京',
            ActivityTime: "1999-11-23",
          },
          {
            BrandId: 2,
            BrandName: 'http://img2.shucar.com/upfiles/thumb/2012-04-11/5/573193813810.jpg',
            BrandLogo: '东风日产线下活动--北京',
            ActivityAddress: '上海',
            ActivityTime: "1999-11-24",
          }
        ]
      });
    }, 500);
  },

  'GET /api/home/fetchTypeList': function (req, res) {
    setTimeout(function () {
      res.json({
        "username": null,
        "valid": false,
        "msg": "已登录",
        "flag": true,
        "data": [
          { typeId: "0", city: "亲自" },
          { typeId: "1", city: "运动" },
        ]
      });
    }, 500);
  },

  'GET /api/home/cityList': function (req, res) {
    setTimeout(function () {
      res.json({
        "username": null,
        "valid": false,
        "msg": "已登录",
        "flag": true,
        "data": [
          { code: "0", city: "北京" },
          { code: "021", city: "广州" },
        ]
      });
    }, 500);
  },
};
