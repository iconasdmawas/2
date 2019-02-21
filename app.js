App({
  onLaunch:function(){
    var info=wx.getSystemInfoSync();
    console.log(info)
    this.globalData.windowWidth = info.windowWidth
    this.globalData.windowHeight = info.windowHeight
  },
  globalData:{

  }
})