// pages/movies/more-movie/more-movie.js

var util = require('../../../utils/util.js')
var app = getApp();

Page({
  data: {
    movies: {},
    navigateTitle: '',
    requestUrl: '',
    totalCount: 0,
    isEmpty: true
  },

  //onLoad是页面初始化，ui还没生成，不能在里面绘制ui
  onLoad: function(options) {
    var category = options.category;
    this.setData({
      navigateTitle: category
    });

    var dataUrl = '';
    switch (category) {
      case "正在热映":
        dataUrl = app.globalData.doubanBase + 'v2/movie/in_theaters';
        break;
      case "即将上映":
        dataUrl = app.globalData.doubanBase + 'v2/movie/coming_soon';
        break;
      case "豆瓣Top250":
        dataUrl = app.globalData.doubanBase + 'v2/movie/top250';
        break;
    }

    this.setData({
      requestUrl: dataUrl
    })
    util.http(dataUrl, this.processDoubanData);
  },

  onReady: function(event) {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle,
    })
  },

  processDoubanData: function(moviesDouban) {
    var movies = [];
    if (moviesDouban.count === 0) {
      wx.showToast({
        title: '没有更多了',
        icon: 'none',
        duration: 500
      })
    } else {
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

      var totalMovies = {};
      if (!this.data.isEmpty) {
        totalMovies = this.data.movies.concat(movies);
      } else {
        totalMovies = movies;
        this.setData({
          isEmpty: false
        })
      }

      this.setData({
        movies: totalMovies
      })

      this.setData({
        totalCount: this.data.totalCount + 20
      })
    }
    wx.hideNavigationBarLoading();
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function() {
    var refreshUrl = this.data.requestUrl + "?start=0&count=20";
    console.log("refreshUrl", refreshUrl);

    this.setData({
      movies: {},
      isEmpty: true
    })
    //在标题栏显示的loadings
    wx.showNavigationBarLoading();
    util.http(refreshUrl, this.processDoubanData);
  },

  /**
   * 上拉加载更多
   */
  onReachBottom: function(event) {
    var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
    console.log("nextUrl", nextUrl);

    //在标题栏显示的loadings
    wx.showNavigationBarLoading();
    util.http(nextUrl, this.processDoubanData);
  }
})