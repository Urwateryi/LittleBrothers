//引入数据源，require暂时不支持绝对路径
var postsData = require('../../datas/posts-data.js')

Page({
  onLoad: function() {
    this.setData({
      post_list: postsData.post_list
    });
  },

  onPostItemClick: function(event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },
  onSwiperTap: function(event) {
    //利用事件冒泡机制，target和currentTarget的区别，target指的是当前点击的组件，currentTarget指的是事件捕获的组件，target指的是image，而currentTarget指的是swiper
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }
})