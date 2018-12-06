// pages/fl/fl.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    inputShowed: false,
    inputVal: "",
    my1: [
      {
        logo: '/pics/fl01.png',
        desc: '淮海4kg公斤干粉灭火器',
        money:'￥45元/年',
      },
      {
        logo: '/pics/fl01.png',
        desc: '火焰战士车载灭火器车用', money: '￥55元/年',
      },
      {
        logo: '/pics/fl01.png',
        desc: '淮海4kg公斤干粉灭火器', money: '￥45元/年',
      },
      {
        logo: '/pics/fl01.png',
        desc: '火焰战士车载灭火器车用', money: '￥55元/年',
      },
      {
        logo: '/pics/fl01.png',
        desc: '淮海4kg公斤干粉灭火器', money: '￥45元/年',
      },
      {
        logo: '/pics/fl01.png',
        desc: '火焰战士车载灭火器车用', money: '￥55元/年',
      }
    ],
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
})