// pages/practice/form/form.js
var Logger = require('../../../utils/Logger.js')

Page({
  getUserInfoBind: function(event) {
    var contnt = event.detail;
    // console.log(contnt)
    Logger.v("contnt", contnt);
  }
})