// pages/mine/mine.js
//获取应用实例
const app = getApp();

Page({
  data: {
    userInfo: {},
    history: [
      {
        id: 1,
        url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg',
        name: '复仇者联盟3：无限战争',
        time: '2018-05-12',
        link: ''
      }, {
        id: 2,
        url: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg',
        name: '头号玩家',
        time: '2018-03-31',
        link: ''
      }, {
        id: 3,
        url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521118750.jpg',
        name: '巴霍巴利王2：终结',
        time: '2018-05-12',
        link: ''
      }, {
        id: 4,
        url: '',
        name: '小萝莉的神猴大叔',
        time: '2018-03-07',
        link: 'https://zhuanlan.zhihu.com/p/34327169'
      }
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  jumpReview(e) {
    console.log(e);
    const link = e && e.target.dataset.link;
    console.log(link);
    wx.redirectTo({
      url: link,
    })
  }
})
