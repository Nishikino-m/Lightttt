// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:{},
    title:{},
    id:'',
    imageList:[],
    QQ:'',
    lxfs:'',
    details:'',
    firstN:'', 
    isShow: false,
    bt:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let item=JSON.parse(options.jsonStr);
    console.log(options)
    let fc = options.username[0]
    console.log(fc)
    that.setData({     
      id:options.id,                        //this.setData的方法用于把传递过来的id转化成小程序模板语言
      username: options.username,     //id是a页面传递过来的名称，a_id是保存在本页面的全局变量   {{b_id}}方法使用
      title: options.title,
      imageList:item,
      QQ:options.QQ,
      lxfs:options.lxfs,
      details:options.details,
      isShow: false,
      firstN:fc,
    })
    var b = []
    wx.getStorage({
      key:'id',
      success (res) {
        console.log(res.data)
        let st = res.data
        
        for(let i =0;i<st.length;i++){
          if(st[i]==options.id){
            that.setData({  
              isShow: true
            })
          }
          else{
            b.push(st[i])
          }
        }
        
      },
      
    })
    that.setData({
      bt:b
    })

    console.log("imagelist:"+that.data.imageList)
    console.log(that.data.bt)
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

  },

  
//收藏按钮
handleCollect(e){
  console.log("handlecoll")
  //取反
  if(this.data.isShow==true){
    console.log("removes")
    var st = this.data.bt
    var b=[]
    for(let i = 0;i<st.length;i++){
      if(st[i]==this.data.id){
         console.log(this.data.id)
      }
      else{
        b.push(st[i])
      }
    }
    console.log("bbbbbbbbbbbb")
    console.log(b)

    wx.setStorage({
      key:"id",
      data:b
    })

  }
  else{
    var a = []
    var st = this.data.bt
    for(let i = 0;i<st.length;i++){
        a.push(st[i])
    }
   a.push(this.data.id)
    wx.setStorage({
      key:"id",
      data:a
    })
    
  }
  
  let isShow = !this.data.isShow
  this.setData({
    isShow
  })

  

  //提示用户
  wx.showToast({
      title: this.data.isShow ? '收藏成功' : '取消收藏',
      icon:'success'
  })
}

})








