Page({
  data: {
    imgUrls:[
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg",
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518852413.jpg"
    ],
    boardLists: [
      {
        text: '正在热映',
        param: 'in_theaters'
      },
      {
        text: '即将上映',
        param: 'coming_soon'
      },
      {
        text: 'Top250',
        param: 'top250'
      },
      {
        text: '北美票房榜',
        param: 'us_box'
      }
    ]
  },
  onLoad() {
    // 加载
    wx.showLoading();
  },
  onReady() {
    wx.hideLoading();
  }
});
