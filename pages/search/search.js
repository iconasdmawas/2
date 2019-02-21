// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  content(e){
    this.setData({
      str:e.detail.value
    })
  },
  search(){
    wx.request({
      url: 'http://localhost:3000/list',
      data: {
        q:this.data.str
      },
      header: {"content-type":"application/json"},
      method: 'GET',
      dataType: 'json',
      success:(res)=> {
        console.log(res)
        this.setData({
          arr:res.data
        })
      },
    })
  },
  go(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.currentTarget.id,
    })
  }

  
})