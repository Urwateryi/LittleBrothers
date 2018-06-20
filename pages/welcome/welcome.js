// pages/welcome/welcome.js
Page({
  /**
   * 跳转到新闻列表页
   */
  onClick:function(){
    //如果要跳转到一个带tab选项卡的页面，必须使用wx.switchTab这个新增方法，如果要跳转到一个不带tab选项卡的页面，还是需要使用redirectTo或者navigateTo
    // navigateTo, redirectTo 只能打开非 tabBar 页面。
    // switchTab 只能打开 tabBar 页面。
    // reLaunch 可以打开任意页面。
    // 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
    // 调用页面路由带的参数可以在目标页面的onLoad中获取。
    wx.switchTab({
      url: '../posts/post',
    })
  }
})