// pages/detail/detail.js
import douban from '../../utils/douban';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading();

    this.setData({
      id: options.id,
      data: {}
    });
    
    douban
      .findOne(this.data.id)
      .then(data => {
        console.log(data);
        this.setData({
          data
        });
        wx.hideLoading();
      })
      .catch(e => {
        console.log(e);
        wx.hideLoading();
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
})