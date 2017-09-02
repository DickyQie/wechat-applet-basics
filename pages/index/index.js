//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array:['中国','美国','英国','法国','德国'],
    index: 0,
    time: '11:16',
    data: '1994-10-26',
    region: ['广东省', '汕头市', '潮阳区']
  },
  //事件处理函数
  bindPickerChang: function(e) {
    console.log("picker发生概念，携带的值是：",e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },
  bindPickerTime: function(e) {
    console.log("选择的时间：",e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  bindPickerDate: function(e) {
    console.log("选择的日期：", e.detail.value)
    this.setData({
      data: e.detail.value
    })
  },

  bindPickerCity: function(e) {
    console.log("选择的城市:", e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },




  onLoad: function () {
    
  }
  
})
