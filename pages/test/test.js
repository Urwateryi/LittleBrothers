// pages/test/test.js

var Logger = require('../../utils/Logger.js')

Page({
  onViewClick:function(event){
    Logger.v("onViewClick",event);

    var fatherDataSet=event.currentTarget.dataset;
    var sonDataSet=event.target.dataset;

    var fatherId=event.currentTarget.id;
    var sonId=event.target.id;

    var fatherUserId=fatherDataSet.userId;
    var sonUserId = sonDataSet.userId;

    var fatherName=fatherDataSet.name;
    var sonName=sonDataSet.name;

    Logger.v("fatherId", fatherId);
    Logger.v("sonId", sonId);

    Logger.v("fatherUserId", sonUserId);
    Logger.v("sonUserId", sonUserId);
    
    Logger.v("fatherName", fatherName);
    Logger.v("sonName", sonName);
  }
})