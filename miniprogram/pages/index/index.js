const { envList } = require("../../envList");
import request  from "../../utif/request";
const { QuickStartPoints, QuickStartSteps } = require("./constants");
Page({
  data: {
    knowledgePoints: QuickStartPoints,
    steps: QuickStartSteps,
    testData:{
        name:'',
        email:''
    },
    testData2:{
        name2:''
    },
    req:{
        command:'',
        commandArgs:''
    },
    // testRes:'',
    item:{
        name:'你好',
        email:"397608301@qq.com"
    }
  },
  handleClick(e){
      console.log(e)
      let data = {
          name:'你好',
          email:"397608301@qq.com"
      }
        request('/test','post',data).then((res)=>{
            this.setData({
                testRes: res.message
            })
            let da = this.data
            console.log(da.testRes)
        })
  },
  nameInp(e){
    this.setData({
        'testData.name': e.detail.value

    })
  },
  nameInp1(e){
    this.setData({
        'testData.name': e.detail.value
    })
  },
  nameInp2(e){
    this.setData({
        'testData.email': e.detail.value
    })
  },
  formSubmit(e){
    console.log(e.detail)
    console.log(this.data.testData)
    console.log(11)
  },
  formSubmit2(e){
    console.log(this.data.req)
    console.log(11)
  },
  handleClick1(){
      console.log(this.data.testData.name)
  },
  copyCode(e) {
    const code = e.target?.dataset?.code || '';
    wx.setClipboardData({
      data: code,
      success: () => {
        wx.showToast({
          title: '已复制',
        })
      },
      fail: (err) => {
        console.error('复制失败-----', err);
      }
    })
  },

  discoverCloud() {
    wx.switchTab({
      url: '/pages/examples/index',
    })
  },

  gotoGoodsListPage() {
    wx.navigateTo({
      url: '/pages/goods-list/index',
    })
  },
});
