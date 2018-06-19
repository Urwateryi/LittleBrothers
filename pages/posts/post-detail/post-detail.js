// pages/posts/post-detail/post-detail.js
var postsData = require('../../../datas/posts-data.js')

Page({

  data: {

  },
  onLoad: function(option) {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function() {
      wx.hideLoading()
    }, 2000)

    var postId = option.id;
    var postData = postsData.post_list[postId];
    this.setData({
      currentPostId: postId,
      postData: postData
    })

    var collections = wx.getStorageSync('posts_collected');
    if (collections) {
      var postCollected = collections[postId];
      this.setData({
        collected: postCollected
      })
    } else {
      var collections = {};
      collections[postId] = false;
      wx.setStorageSync('posts_collected', collections);
    }
  },
  onCollecionTap: function(event) {
    var collections = wx.getStorageSync('posts_collected');
    if (collections) {
      var postCollected = collections[this.data.currentPostId];
      postCollected = !postCollected;
      collections[this.data.currentPostId] = postCollected;
      this.showToast(collections, postCollected);
    }
  },

  //使用showModal方法展示弹窗
  showModal: function(collections, postCollected) {
    var that = this;
    wx.showModal({
      content: postCollected ? '收藏该文章？' : '取消收藏该文章',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      success: function(res) {
        //用户点击确定
        if (res.confirm) {
          wx.setStorageSync('posts_collected', collections);
          that.setData({
            collected: postCollected
          })
        }
        //用户点击取消
        else if (res.cancel) {

        }
      }
    })
  },
  //使用showToast方法展示弹窗
  showToast: function(collections, postCollected) {
    wx.setStorageSync('posts_collected', collections);
    this.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
    })
  },

  onShareTap: function(event) {
    var itemList = [
      '分享给微信好友',
      '分享到朋友圈',
      '分享到QQ',
      '分享到微博'
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#fec35a',
      success: function(res) {
        wx.showToast({
          title: itemList[res.tapIndex],
        })
      }
    })
  }
})