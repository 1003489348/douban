Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 5,
    subject3: [],
    // name: "",
    active: 0
  },
  bindAaa(e) {
    let t = e.currentTarget.dataset.newsid;
    let name = e.currentTarget.dataset.name;
    console.log("name",e.currentTarget.dataset.name)
    console.log(e)
    wx.navigateTo({
      url: `/pages/top250_er/top250_er?newsid=${t}&name=${name}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // bangdan:function(){
  //   wx.navigateTo({
  //     url:'../logs/logs'
  //   })
  // },
  onChange(event) {
    console.log(event.detail);
  },
  onLoad: function (options) {
    const _this = this;
      wx.request({
        url: "https://douban.uieee.com/v2/movie/top250",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res.data)
          _this.setData({
            subject: res.data.subjects
          })
        }
      }),
      wx.request({
        url: "https://douban.uieee.com/v2/movie/coming_soon",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res.data)
          _this.setData({
            subject2: res.data.subjects
          })
        }
      }),
        wx.request({
          url: 'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10',
          data: {},
          header: {
            "content-type": "json"
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