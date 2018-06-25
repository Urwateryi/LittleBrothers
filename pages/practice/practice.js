//引入数据源，require暂时不支持绝对路径
var practiceData = require('../../datas/practice-data.js')

Page({
  onLoad: function () {
    this.setData({
      practice_list: practiceData.practice_list
    });
  },
  onItemClick:function(){
   
  }
})