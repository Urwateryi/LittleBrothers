//引入数据源，require暂时不支持绝对路径
var postsData=require('../../datas/posts-data.js')

Page({
  onLoad: function () {
    this.setData({
      post_list: postsData.post_list
    });
  },

  onPostItemClick:function(event){
    var postId=event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail',
    })
  }
})