// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  handleClick: function () {
    wx.request({
      url: 'http://172.20.10.2:5000/api/button',
      method: 'POST',
      data: {
        buttonId: 'button1'
      },
      success: function (res) {
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
      },
      fail: function () {
        wx.showToast({
          title: 'Request failed',
          icon: 'none'
        })
      }
    })
  }


})
