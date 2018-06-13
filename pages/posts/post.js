// pages/posts/post.js
// 在生命周期各个方法里，最常用的就是onLoad onShow onReady，执行的先后顺序也是这样
//app.json中对页面进行注册相当于android中的activity要在mainifest.xml注册，而这里写在Page()内，也相当于android中要写在activity内部一样
Page({

  /**
   * 页面的初始数据
   * 这里相当于rn的this.state()，主要 初始化
   */
  data: {
    post_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   * 一般网络请求放在这里
   */
  onLoad: function (options) {
    console.log("onload");

    var posts_content = [
      {
        date: "Sep 13 2018",
        title: "藏在玉林深处的咖啡店",
        post_img: "/resources/imgs/bg_1.jpg",
        author_img: "/resources/imgs/avatar_1.jpg",
        // 结合wxml中的wx:if可以控制控件的显示与隐藏
        img_condition: true,
        content: "成都的livehouse.让这个悠闲的城市.在寂静的夜晚有了一点点的躁恸与不安分。如果伱喜欢.那么到了成都.拿着地图寻找的除了景点.还有这些可以用心欣赏音乐的地方。",
        view_num: "14",
        collect_num: "20"
      }, {
        date: "Sep 13 2018",
        title: "小酒馆",
        post_img: "/resources/imgs/bg_2.jpg",
        author_img: "/resources/imgs/avatar_2.jpg",
        img_condition: true,
        content: "玉林路的尽头.成立于1997年.是一个小酒吧、一个艺术沙龙、一个独力唱片厂牌、一个文化公司、一个成都原创摇滚大本营、一个十几年不曾间断的周末摇滚现场。很多国内、外乐队来这里巡演.酒吧的主人.竾是个在摇滚圈里被称作“摇滚教母”的人。没倒周末.这里就会有原创音乐的演出.不外.现在的演出基本集中在永丰路上的新店.玉林路上的老店则成为文艺青年的聚会场所。",
        view_num: "78",
        collect_num: "24"
      }
    ]

    this.setData({
      post_list: posts_content
    });
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})