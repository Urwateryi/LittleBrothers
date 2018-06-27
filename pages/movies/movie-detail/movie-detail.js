// pages/movies/movie-detail/movie-detail.js
var app = getApp();
var util = require('../../../utils/util.js')
var Logger = require('../../../utils/Logger.js')

Page({
  data: {},
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中...',
    })

    var movieId = options.id;
    var detailUrl = app.globalData.doubanBase + 'v2/movie/subject/' + movieId;
    util.http(detailUrl, this.processDoubanData);
  },

  /**
   * 处理返回结果
   */
  processDoubanData: function(data) {
    // console.log("detail:", data)
    Logger.v("detail", data);

    //导演
    var director = {
      avatar: '',
      name: '',
      id: ''
    }
    var firstDirector = data.directors[0];
    if (firstDirector != null) {
      if (firstDirector.avatars != null) {
        director.avatar = firstDirector.avatars.large + '';
      }
      director.name = firstDirector.name + '';
      director.id = firstDirector.id + '';
    }

    //其他信息
    var movie = {
      director: director,
      movieImg: data.images ? data.images.large + '' : '',
      country: data.countries[0],
      title: data.title,
      originalTitle: data.original_title,
      wishCount: data.wish_count,
      commentCount: data.comments_count,
      year: data.year,
      generes: data.genres.join('、'),
      stars: util.convertToStarsArray(data.rating.stars),
      score: data.rating.average,
      casts: util.convertToCastString(data.casts),
      castsInfo: util.convertToCastInfos(data.casts),
      summary: data.summary
    }

    this.setData({
      movie: movie
    })

    wx.hideLoading();
  },

  /**
   * 查看图片
   */
  viewMoviePostImg: function(event) {
    var src = event.currentTarget.dataset.src;
    wx.previewImage({
      current: src, //当前显示图片的http链接
      urls: [src], //需要预览的图片http链接列表
    })
  }
})