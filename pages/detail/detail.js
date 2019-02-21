// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.request({
      url: 'http://localhost:3000/list',
      data: {
        id:options.id
      },
      header: {"content-type":"application/json"},
      method: 'get',
      dataType: 'json',
      success: (res)=> {
        this.setData({
          arr:res.data
        })
      },
    })
  },

})