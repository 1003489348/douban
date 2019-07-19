Page({

  /**
   * 页面的初始数据
   */
  data: {
    ellipsis: false,
     name: ''
  },
  ellipsis() {
    const _this = this;
    let value = !this.data.ellipsis;
    _this.setData({
      ellipsis: value
    })
  },
  bindAaa(e) {
    var t = e.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: '../jianjie/jianjie?newsid=' + t,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var name = options.name
    this.data.name = name
    console.log("name", options)
    var t = this;
    const _this = this
    this.setData({
      name: options.name
    }),
    wx.setNavigationBarTitle({
      title: this.data.name,
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.newsid,
      // url: 'https://douban.uieee.com/v2/movie/subject/1291561',
      data: {},
      header: {
        "content-type": "json"
      },
      success(n) {
        console.log(n.data)
        // console.log(n.data.original_title)
        t.setData({
          xq: n.data,
          names:n.data.title,
          yingren: n.data.writers,
          yanyuan: n.data.casts,
          video: n.data.trailers[0],
          baozhao: n.data.photos,
          dp: n.data.popular_comments,
          yp: n.data.popular_reviews
        })
      }
    }),
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: {},
      header: {
        // 'Content-Type':'application/json'
        "content-type": "json"
      },
      success: function (res) {
        // console.log(res.data)
        // console.log(res.data.subjects)
        _this.setData({
          subjects: res.data.subjects
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})