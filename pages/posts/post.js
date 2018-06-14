//引入数据源
var postsData=require('../../datas/posts-data.js')

Page({
  onLoad: function () {
    this.setData({
      post_list: postsData.post_list
    });
  }
})