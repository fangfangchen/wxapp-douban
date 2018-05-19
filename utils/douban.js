function fetchData(type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://douban.uieee.com/v2/movie/${type}`,
      data: Object.assign({}, params),
      header: {
        "Content-type": "json"
      },
      success: resolve,
      fail: reject
    });
  });
}

module.exports = {
  find(type, page = 1, count = 20, search ='') {
    const params = { start: (page - 1) * count, count };
    return fetchData(type, search ? Object.assign(params, { q: search }) : params)
      .then(res => res.data);
  },

  findOne(id) {
    return fetchData('subject/' + id)
      .then(res => res.data);
  }
};