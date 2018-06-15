// pages/posts/post-detail/post-detail.js
var postsData = require('../../../datas/posts-data.js')

Page({
  onLoad: function(option) {
    var postId = option.id;
    var postData = postsData.post_list[postId];
    this.setData({
      postData: postData
    })
  }
})