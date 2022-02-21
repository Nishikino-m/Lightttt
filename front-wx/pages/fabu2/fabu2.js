var util = require('../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
      height: 20,
      focus: false,
      count:0,
      countIndex:0,
      imageList:[],
      QQ:'',
      lxfs:'',
      showClearBtn: false,
      isWaring: false,
      details:'',
      currentValue: '',
      isCurrentWaring: false,
      title:'',
      userInfo:'',
    username:'',
      pic:''
    },
    chooseImage: function () { 
      var that = this; 
      var tmpImglist = []
      const fs = wx.getFileSystemManager()
      wx.chooseImage({ 
      count: this.data.count[this.data.countIndex], 
      success: function (res) {  
          wx.showToast({
              title: '正在上传...', 
              icon: 'loading', 
              mask: true, 
              duration: 2000, 
              success: function (ress) { 
              console.log('成功加载动画'); 
              } 
          }) 
          var flag=true
          var temp = res.tempFilePaths
          let i =0 
          for(;i<temp.length;i++){
              fs.saveFile({
                  tempFilePath:res.tempFilePaths[i], // 传入一个临时文件路径
                  success(res) {
                      console.log('图片缓存成功', res.savedFilePath) // res.savedFilePath 为一个本地缓存文件路径  
                      wx.setStorageSync('image_cache', res.savedFilePath)
                      tmpImglist.push(res.savedFilePath)
                      that.setData({ 
                          imageList: tmpImglist
                          
                      }) 
                      if(flag){
                          that.setData({ 
                              pic:res.savedFilePath
                          }) 
                          flag=!flag
                      }
                  },
                  fail(){
                      console.log('图片缓存失败')
                  }
                })
          }
      } 
      }) 
    }, 
    previewImage: function (e) { 
      var current = e.target.dataset.src 
      
      wx.previewImage({ 
      
      current: current, 
      urls: this.data.imageList 
      }) 
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
      console.log('fabu onload')
      wx.getUserInfo({
          success: res => {
            console.log(res)    //获取的用户信息还有很多，都在res中，看打印结果
            this.setData({
              userInfo: res.userInfo,
            })
          }
        })
    },
    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo
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
  
    },
  
      onCurrentInput(evt) {
          const { currentValue } = evt.detail;
          this.setData({
              isCurrentWaring: true,
          });
      },
      onClear() {
          this.setData({
              value: '',
              showClearBtn: false,
              isWaring: false,
          });
      },
      onConfirm() {
          var that = this
          console.log(' title: '+this.data.title)
          console.log(this.data.QQ +'  联系方式：'+ this.data.lxfs)
          console.log(this.data.details)
  
          console.log("submit！");
          var tmp = that.data.imageList
          var usen = that.data.username==''? that.data.userInfo.nickName:that.data.username
          var bb = []
          var uuid = util.wxuuid()
          var b={
            id:uuid,
              username:usen,
              title:that.data.title,
              details:that.data.details,
              QQ:that.data.QQ,
              lxfs:that.data.lxfs,
              imageList:tmp,
              pic:that.data.pic
          }
          bb.push(b)
          try {
            var value = wx.getStorageSync('loss')
            if (value) {
              // Do something with return value
              let st = value
                  
                  for(let i =0;i<st.length;i++){
                      bb.push(st[i])
                  }
            }
          } catch (e) {
            // Do something when catch error
          }

          console.log('bbbbb')
          console.log(bb)
          wx.setStorageSync('loss', bb)
    

        wx.switchTab({
            url: '/pages/index/index'
          })
          
      },
      InputQQ:function(e){
          this.setData({
              QQ:e.detail.value
          })
      },
      InputLxfs:function(e){
          this.setData({
              lxfs:e.detail.value
          })
      },
      InputDetails:function(e){
          this.setData({
              details:e.detail.value
          })
      },
      InputTitle:function(e){
          this.setData({
              title:e.detail.value
          })
      },
      InputName:function(e){
        this.setData({
            username:e.detail.value
        })
    },
  
  });
  