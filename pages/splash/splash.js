// pages/splash/splash.js
import douban from '../../utils/douban';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moives: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading();
    douban
      .find('coming_soon', 1, 3)
      .then(data => {
        console.log(data.subjects);
        this.setData({
          moives: data.subjects
        });
        wx.hideLoading();
      })
      .catch(error => {
        console.log(error);
        this.setData({
          moives: []
        });
      });
  },
  start() {
    wx.switchTab({
      url: '../board/board',
      success: (e) => {
        console.log(e)
      },
      fail: (e) => {
        console.log(e)
      }
    });
  }
})