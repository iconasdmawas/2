//index.js
//获取应用实例
var app = getApp()
console.log()
Page({
  data: {
    markers:[],
    controls: [{
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: (app.globalData.windowWidth-20)/2,
        top: (app.globalData.windowHeight-30)/2-30,
        width: 20,
        height: 30
      },
      clickable: true
    },
      {
        id: 1,
        iconPath: '/resources/center.png',
        position: {
          left:20,
          top:app.globalData.windowHeight-80,
          width: 30,
          height: 30
        },
        clickable: true
      }]
  },
  controltap(e) {
    console.log(e)
    this.mapCtx.moveToLocation()
  },
  onReady(){
   this.mapCtx=wx.createMapContext("map")
   
  },
  ms(){
    wx.navigateTo({
      url: '/pages/publish/publish'
    })
  },
  search() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  onShow(){
    wx.getLocation({
      type:'gcj02',
      altitude:true,
      success: (res)=>{
        console.log(res.latitude)
        this.setData({
          latitude: res.latitude,
          longitude:res.longitude
        })
      }
    })
  },
  onLoad(){
    wx.request({
      url: 'http://localhost:3000/list',
      data: '',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        this.data.markers=res.data.map((res)=>{
        return {
            iconPath: '/resources/'+res.type+'.png',
            id:res.id,
            latitude:res.latitude,
            longitude:res.longitude,
            width:30,
            height:30
          }
        })
        this.setData({
          markers: this.data.markers
        })
      } 
    })
  },
  markertap(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.markerId,
    })
  }
})