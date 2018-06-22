const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 将星星评级转换成[1,1,1,2,0]数组类似的格式，1颗星为1，半颗星为2
 */
function convertToStarsArray(stars) {
  var array = [];
  if (stars < 10) {
    return [0, 0, 0, 0, 0];
  } else {
    var ten = stars.toString().substring(0, 1);
    var unit = stars.toString().substring(1, 2);
    for (var i = 1; i <= 5; i++) {
      if (i <= ten) {
        array.push(1);
      }
    }
    if (unit >= 5) {
      array.push(2);
    }

    if (array.length < 5) {
      array.push(0);
    }
  }
  return array;
}

/**
 * 将演员的名字，使用/拼接起来，最后去除/
 */
function convertToCastString(casts) {
  var castsjoin = '';
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + '/';
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

/**
 * 将演员的名字和图片拼接成数组
 */
function convertToCastInfos(casts) {
  var castsArray = [];
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : '',
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}

/**
 * 网络请求
 */
function http(netUrl, callBack) {
  wx.request({
    url: netUrl,
    success: function(res) {
      console.log("http response: ", res)
      callBack(res.data);
    },
    fail: function(res) {
      console.log("http error: ", res)
    }
  })
}

module.exports = {
  formatTime: formatTime,
  convertToStarsArray: convertToStarsArray,
  http: http,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos,
}