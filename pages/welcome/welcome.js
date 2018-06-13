// pages/welcome/welcome.js
// wx.redirectTo是两个平级页面之间的跳转，而wx.navigateTo是从父页面跳转到子页面，所以后者跳转后，子页面左上角有返回按钮，而前者没有。而小程序为了保证它的足够简洁，限制了子页面的级数，所以navigateTo最多只能跳5次。而前者，跳转到一个平行页面后，上一个页面会被关闭，直接执行onUnload（当页面被关闭和卸载的时候执行）方法，而后者执行的是onHide（当页面只是被隐藏的时候）方法，只是被隐藏了，并没有被销毁

// 小程序中的事件，大多数都是属于冒泡事件，如果想阻止子元素的事件冒泡，则使用catch而不要使用bind
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})