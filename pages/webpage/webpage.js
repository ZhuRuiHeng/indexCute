var common = require('../../common.js');
var app = getApp();
Page({
  data: {
  
  },
  onLoad: function (options) {
    console.log(options);
      this.setData({
        url: options.url
      })
  },
  onShow: function () {
  
  },
  //设置分享
  onShareAppMessage: function () {
    var that = this;
    return {
      title: "宠宠邦",
      path: '/pages/webpage/webpage',
      success: function (res) {
        console.log(res);
        // 转发成功
      },
      fail: function (res) {
        console.log(res);
        // 转发失败
      }
    }
  }
})