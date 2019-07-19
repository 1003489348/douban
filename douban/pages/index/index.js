Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject3: [],
    value: 5
  },
  bindAaa(e) {
    var t = e.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: '../top250_er/top250_er?newsid=' + t,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onChange(event) {
    this.setData({
      value: event.detail
    });
  },
  onLoad: function (options) {
    const _this = this;
      wx.request({
        url: "https://douban.uieee.com/v2/movie/in_theaters",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res.data)
          _this.setData({
            subject3: res.data.subjects
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
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})