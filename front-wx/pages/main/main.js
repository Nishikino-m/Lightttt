// pages/main/main.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://img1.baidu.com/it/u=2850167403,3042284543&fm=26&fmt=auto',
      '	http://ids.njust.edu.cn/authserver/customNjust/customStatic/web/images/bg4.jpg',
      'https://gd2.alicdn.com/imgextra/i2/3321948821/O1CN01ClNDbj2F24Pqr3Bm0_!!3321948821.jpg',
      'http://ids.njust.edu.cn/authserver/customNjust/customStatic/web/images/bg2.jpg'
      
    ],
    leftList:[
      {
        username:'南理小卷王',
        title:'大号四层收纳盒甩卖',
        id:'1',
        price:'2599.00',
        pic:'/images/de1.jpg',
        imageList:[
          '/images/de1.jpg',
      ],
        details:'塑料收纳架ins桌面化妆品收纳盒抽屉式首饰盒文具收纳抽屉式化妆品盒学生宿舍书桌上置物架\n 这款收纳盒大容量，很能装哦！10.9元还包邮！化妆品多的小仙女可以带走它！\n特点pp材质、四层（三层抽屉＋不限高顶层）、大容量，尺寸约：24cm*17cm*27cm（收藏商品送贴纸）',
        lxfs:'QQ:109875345'
      },
      {
        username:'weixinyonghu',
        title:'【出物】可伸缩书架',
        id:'3',
        imageList:[
          '/images/de2_1.jpg',
          '/images/de2_2.jpg'], 
        price:'116.80',
        lxfs:'QQ:098765123',
        details:'带笔筒书立架书夹书立可伸缩书架简易桌上阅读架桌面收纳学习用品\n金属材质，没有异味，实用很强，笔筒是可拆卸的，整体光滑没有毛边，书架容量也大，结实好用\n加大号伸缩书立【加笔筒】19.7元\n颜色：森林绿\n新旧程度：全新正品\n产品特征\n①可伸缩书架，带笔筒收纳架\n②加大加厚，结实书籍不易摔倒\n感兴趣的请联系我哦',
        pic:'/images/de2_1.jpg'
      },
    ],
    rightList:[
      {
        username:'芋泥啵啵奶绿',
        title:'【收】收一本软件工程',
        id:'4',
        imageList:['/images/book2.jpg',
        ], 
        price:'15',
        lxfs:'QQ:098765123',
        details:'收一本软件工程视角，有学长学姐的笔记就更好啦！ 校内面交or放在哪里我自提都可以！',
        pic:'/images/book2.jpg'
      },
      {
        username:'清浅',
        title:'【出物】出图上的教材，软工专业的 ',
        id:'5',
        imageList:['/images/book1.jpg',
        ], 
        price:'看图',
        lxfs:'QQ:135683574',
        details:'出物，打包可刀',
        pic:'/images/book1.jpg'
      },
    ],
  
    swiperIdx: 0,
    swiperHeight:200,
      x: 0,
      y: 0,
      scale: 2
  },
   // 轮播特效
  bindchange(e) {
    
    this.setData({
      swiperIdx: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    console.log('main---onload')
      wx.getStorage({
        key:'good',
        success (res) {
          console.log(res.data)
          let st = res.data
          var tmpl = that.data.leftList
          var tmpr = that.data.rightList
          var ok=true
          for(let i =0;i<st.length;i++){
            for(let j =0;j<tmpl.length;j++){
              if(tmpl[j].id ===st[i].id){
                ok = false
                break
              }
            }
            for(let j =0;j<tmpr.length;j++){
              if(tmpr[j].id ===st[i].id){
                ok = false
                break
              }
            }
            if(!ok) break
          
            if( tmpl.length >  tmpr.length){
              tmpr.push(st[i])
            }
            else{
              tmpl.push(st[i])
            }
            
        }
        that.setData({
          rightList:tmpr,
          leftList:tmpl
        })
          
        }
      })
        console.log('########')
        console.log(that.data.leftList)
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
    this.onLoad()
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

  

handleClicks:function(){
    console.log("click")
  },




  toFabu:function(){
    let a=getCurrentPages()
    console.log("kkk123")
    wx.navigateTo({
      url: '/pages/fabu/fabu'
    })
  },
  toContent1:function(){
    let a=getCurrentPages()
    console.log("bbb111")
    wx.navigateTo({
      url: '/pages/content/content1'
    })
  },
  toContent2:function(){
    let a=getCurrentPages()
    console.log("bbb222")
    wx.navigateTo({
      url: '/pages/content/content2'
    })
  },
  toContent3:function(){
    let a=getCurrentPages()
    console.log("bbb333")
    wx.navigateTo({
      url: '/pages/content/content3'
    })
  },
  toContent4:function(){
    let a=getCurrentPages()
    console.log("bbb444")
    wx.navigateTo({
      url: '/pages/content/content4'
    })
  },
  toContent5:function(){
    let a=getCurrentPages()
    console.log("bbb555")
    wx.navigateTo({
      url: '/pages/content/content5'
    })
  },


  //toDetail
  toDetail:function(e){
    var tmp = e.currentTarget.dataset.detail
    console.log(tmp)
    console.log('toooo')
    let str=JSON.stringify(tmp.imageList);
    console.log(str)
    wx.navigateTo({
      url:'/pages/detail/detail?id='+tmp.id+'&price='+tmp.price+'&title='+tmp.title+'&username='+tmp.username+'&lxfs='+tmp.lxfs+'&details='+tmp.details+'&jsonStr='+str,
    success: function (res) {
    // success
      console.log('success')
    },
    fail: function () {
    // fail
    },
    complete: function () {
    // complete
    }
    })
  }
})

