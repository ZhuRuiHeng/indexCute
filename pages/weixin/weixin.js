// pages/weixin/weixin.js
var app = getApp();
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
  onShow: function () {
  
  },
  onShareAppMessage: function () {
    return {
      title: "宠宠邦",
      path: '/pages/weixin/weixin',
      success: function (res) {
        console.log(res);
        // 转发成功
      },
      fail: function (res) {
        console.log(res);
        // 转发失败
      }
    }
  },
  // 分享
  fenxiang() {
    this.setData({
      shareList: true
    })
  },
  // 海报
  poster() {
    console.log('poster');
    let that = this;
    let sign = wx.getStorageSync('sign');
    wx.showLoading({
      title: '海报生成中',
    });
    wx.request({
      url: app.data.apiUrl3 + "/api/share-h5?sign=" + sign,
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        console.log("shar:", res);
        console.log("海报", res.data.data);
        that.setData({
          imgUrl: res.data.data,
          shareList: false
        })
        console.log("prewImg:", that.data.imgUrl);
        wx.previewImage({
          current: that.data.imgUrl, // 当前显示图片的http链接
          urls: [that.data.imgUrl] // 需要预览的图片http链接列表
        })
        wx.hideLoading();
        that.setData({
          share: false
        })
        wx.hideLoading()
      }
    })
  },
  // 取消
  cancel() {
    this.setData({
      shareList: false
    })
  },
  //轮播图预览
  imgPreview: function (e) { //图片预览
  console.log(e);
  let img = 'https://pet.zealcdn.cn/chong/img/16.jpg'
  let img1 = img.split()
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: img1 // 需要预览的图片http链接列表
    })
  },
  jump(e) {
    wx.showLoading({
      title: '加载中',
    });
    wx.navigateToMiniProgram({
      appId: 'wx2f9558144968e3a8',
      path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
        console.log(res);
      }
    })
    wx.hideLoading()
  },
  clickChart(){
    wx.request({
      url: app.data.apiUrl3 + "/api/push-link-message-to-user?sign=" + wx.getStorageSync('sign'),
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        console.log("success:", res);
        wx.hideLoading()
      }
    })
  },
})