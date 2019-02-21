// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      address:"点击选择，要勾选哦"
  },
  staticObj:{
      type:"sell"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },
  choose(){
    wx.chooseLocation({
      success:(res)=>{
        this.setData({
          message:res.address
        }),
        Object.assign(this.staticObj, {
            longitude: res.longitude,
            latitude: res.latitude,
            address: res.address
          })
      },
    })
  },
  radioChange(e){
    this.staticObj.type=e.detail.value
  },
  inputmessage(e){console.log(e)
  this.staticObj.message=e.detail.value
  },
  inputcontact(e){
    this.staticObj.contact = e.detail.value
  },
  submit(){
    wx.request({
      url: 'http://localhost:3000/list',
      data: this.staticObj,
      header: { "Content-type": "application/json" },
      method: 'post',
      success: (res) => {
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 1000
        })
        wx.navigateBack({
          delta: 1
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