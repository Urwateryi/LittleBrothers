// pages/movies/movies.js
var util = require('../../utils/util.js')
var app = getApp();

Page({
  //RESTFul API 比较轻量级 现在常用的方式 可以返回JSON RESTFul的url的一个好处就是，它可以自描述，从它的url里就能看出它是干什么的
  //SOAP 企业级的可能还在用 返回的是XML
  data: {
    inTheaters: {},
    comingSoonUrl: {},
    top250: {},
    containerShow:true,
    searchPanelShow:false
  },

  onLoad: function(event) {
    var inThreatersUrl = app.globalData.doubanBase + 'v2/movie/in_theaters?start=0&count=3';
    var comingSoonUrl = app.globalData.doubanBase + 'v2/movie/coming_soon?start=0&count=3';
    var top250Url = app.globalData.doubanBase + 'v2/movie/top250?start=0&count=3';

    this.getMovieListData(inThreatersUrl, 'inTheaters', "正在热映");
    this.getMovieListData(comingSoonUrl, 'comingSoon', "即将上映");
    this.getMovieListData(top250Url, 'top250', "豆瓣Top250");
  },

  /**
   * 网络请求
   */
  getMovieListData: function(netUrl, settedKey, categoryTitle) {
    var that = this;
    wx.request({
      url: netUrl,
      success: function(res) {
        console.log("response: ", res)
        that.processDoubanData(res.data, settedKey, categoryTitle);
      },
      fail: function(res) {
        console.log("error: ", res)
      }
    })
  },

  /**
   * 处理返回回来的数据，进行重新包装
   */
  processDoubanData: function(moviesDouban, settedKey, categoryTitle) {
    var movies = [];

    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
        stars: util.convertToStarsArray(subject.rating.stars)
      }
      movies.push(temp);
    }

    //将数据重新包装一层，每个里面加一层movies
    var readyData = {};
    readyData[settedKey] = {
      categoryTitle: categoryTitle,
      movies: movies
    }
    this.setData(readyData);
  },

  /**
   * 点击更多跳转到更多电影页面
   */
  onMoreTap: function(event) {
    var category = event.currentTarget.dataset.category;
    wx.navigateTo({
      url: 'more-movie/more-movie?category=' + category,
    })
  },

  /**
   * 当输入框获取到焦点的时候，弹出电影的搜索页面
   */
  onBindFocus: function() {
    this.setData({
      containerShow: false,
      searchPanelShow: true
    })
  },

  /**
   * 当输入框失去焦点的时候
   */
  onBindBlur: function() {
    this.setData({
      containerShow: true,
      searchPanelShow: false
    })
  }
})