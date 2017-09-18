//logs.js
Page({
  data: {
    
  },
  tapImage:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  tabAudio:function() {
    wx.navigateTo({
      url: '../audio/audio',
    })
  },
  tabVideo:function() {
    wx.navigateTo({
      url: '../video/video',
    })
  }
 
})
