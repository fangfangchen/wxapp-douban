// pages/list/list.js.js
import douban from '../../utils/douban';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    name: 'Ops，出错啦～',
    type: 'in_theaters',
    query: '',
    page: 1,
    size: 20,
    hasMore: true,
    subtitle: '加载中......'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //Invalid request 400 -- 相应的参数配置也\发生了变化，官网给出的这个配置已经不能用了，需要改为'Content-Type': 'json'

  loadMore() {
    if (!this.data.hasMore) return;

    this.setData({
      subtitle: '加载中......',
    });
    const param = this.data.type === 'search' ? `/search?q=${this.data.query}` : this.data.type;
    douban
      .find(param, this.data.page++, this.data.size)
      .then(data => {
        console.log(data);
        const subjects = data && data.subjects;
        if (subjects && subjects.length) {
          this.setData({
            subtitle: subjects.length < this.data.size ? '加载完毕' : this.data.subtitle,
            hasMore: subjects.length < this.data.size ? false : this.data.hasMore,
            lists: this.data.lists.concat(subjects.map(subject => {
              // 北美票房榜
              if (this.data.type === 'us_box') {
                return subject.subject;
              }
              return subject;
            }))
          });
        } else {
          this.setData({
            subtitle: '加载完毕',
            hasMore: false
          });
        }
        wx.hideLoading();
      })
      .catch(e => {
        console.log(e);
        this.setData({
          subtitle: '数据获取异常'
        });
        wx.hideLoading();
      });
  },

  onLoad(options) {
    // 加载
    wx.showLoading();
    const { type, name, ...other } = options && { ...options };
    this.setData({
      type,
      name,
      query: type === 'search' ? other.q : ''
    });
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('pull');
    this.setData({
      page: 1
    });
    this.loadMore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  
  }
})