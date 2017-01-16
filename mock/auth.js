'use strict';

module.exports = {

  'POST  /api/home/login': function (req, res) {
    setTimeout(function () {
      res.json({
        "flag": true,
        "data": [
          {
            userName: "极月网络科技",
            loginId: ""
          },
        ]
      });
    }, 500);
  },

};
