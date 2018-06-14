// pages/welcome/welcome.js
Page({
  /**
   * 跳转到新闻列表页
   */
  onClick:function(){
    //redirectTo为平行跳转，navigateTo为父子页面跳转
    wx.redirectTo({
      url: '../posts/post',
    })
  }
})