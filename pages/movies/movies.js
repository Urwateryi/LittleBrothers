// pages/movies/movies.js
var util=require('../../utils/util.js')
var app = getApp();

Page({
  //RESTFul API 比较轻量级 现在常用的方式 可以返回JSON RESTFul的url的一个好处就是，它可以自描述，从它的url里就能看出它是干什么的
  //SOAP 企业级的可能还在用 返回的是XML
  data: {
    inTheaters: {},
    comingSoonUrl: {},
    top250: {}
  },

  onLoad: function(event) {
    var inThreatersUrl = app.globalData.doubanBase + 'v2/movie/in_theaters?start=0&count=3';
    var comingSoonUrl = app.globalData.doubanBase + 'v2/movie/coming_soon?start=0&count=3';
    var top250Url = app.globalData.doubanBase + 'v2/movie/top250?start=0&count=3';

    this.getMovieListData(inThreatersUrl, 'inTheaters');
    this.getMovieListData(comingSoonUrl, 'comingSoon');
    this.getMovieListData(top250Url, 'top250');
  },

  /**
   * 网络请求
   */
  getMovieListData: function(netUrl, settedKey) {
    var that = this;
    wx.request({
      url: netUrl,
      success: function(res) {
        console.log("response: ", res)
        that.processDoubanData(res.data, settedKey);
      },
      fail: function(res) {
        console.log("error: ", res)
      }
    })
  },
  // inTheaters: {},
  // comingSoonUrl: {},
  // top250: {}
  processDoubanData: function(moviesDouban, settedKey) {
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
      movies: movies
    }
    this.setData(readyData);
  }
})