Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects_top250:[],
    // value: 5,
  },
  bindAaa(e){
    var t = e.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: '../qyqx/qyqx?newsid=' + t,
    })
  },
  // onChange(event) {
  //   this.setData({
  //     value: event.detail
  //     // console.log(this.value)
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this=this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: {},
      header: {
        "content-type": "json"
      },
      success: function (res) {
        // console.log(res.data)
        // console.log(res.data.subjects)
        _this.setData({
          subjects_top250: res.data.subjects
          // subjects_top250: res.data
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