//search.js
import douban from '../../utils/douban';

//获取应用实例
const app = getApp()

Page({
  data: {
    search: ''
  },
  onLoad() {

  },
  confirm(e) {
    this.setData({
      search: e.detail.value
    });
  },
  search() {
    wx.navigateTo({
      url: `../list/list?type=search&q=${this.data.search}&name=搜索结果`
    });
  }
})
