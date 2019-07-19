// pages/jianjie/jianjie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  onLoad: function (n) {
    var t = this;
    const _this = this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + n.newsid,
      data: {},
      header: {
        "content-type": "json"
      },
      success: function (n) {
        // console.log(n.data)
        // console.log(n.data.original_title)
        t.setData({
          top: n.data,
          neirong: n.data.popular_comments,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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