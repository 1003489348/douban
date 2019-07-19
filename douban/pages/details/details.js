// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ellipsis: false
  },


  ellipsis() {
    const _this = this;
    let value = !this.data.ellipsis;
    _this.setData({
      ellipsis: value
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const _this = this;
    wx.request({
      url: "https://douban.uieee.com/v2/movie/in_theaters",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          subjects: res.data.subjects,
        })
      }
    })
    
    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/1292052",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          shuzu: res.data
        })
      }
    })

    wx.request({
      url: "https://douban.uieee.com/v2/movie/coming_soon",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          subjects1: res.data.subjects,
        })
      }
    })

    wx.request({
      url: "https://douban.uieee.com/v2/movie/top250",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          subjects2: res.data.subjects,
        })
      }
    })

    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/26942674/comments",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.comments)
        _this.setData({
          subjects3: res.data.comments
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