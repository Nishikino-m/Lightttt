// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabbarIndex: 0,//切换tab
    leftList:[
      {
        title:'捡到信用卡',
        id:11,
        details:'谁在团委楼门口遗失了一张招商银行的信用卡，卡放在旁边的ATM机里的电话上了',
        pic:'/images/los2_1.jpg',
        imageList:['/images/los2_1.jpg'],
        username:'南理小卷王',
        lxfs:'135109875345',
        QQ:'109875345'
      },
      
      {
        title:'捡到一只耳机',
        id:12,
        details:'中午在名苑捡到一只左耳耳机，失主请联系：QQ1483190965',
        pic:'/images/xwp1.png',
        imageList:['/images/xwp1.png'],
        username:'耳机怪物',
        lxfs:'1324345345',
        QQ:'1483190965'
      },
      {
        title:'寻找雨伞',
        id:13,
        details:'今天在共享单车上遗忘了一把雨伞，大概在体育馆附近，捡到的请联系我，请喝奶茶',
        pic:'',
        imageList:[],
        username:'惨兮兮',
        lxfs:'13222345345',
        QQ:'312329065'
        
      },
      {
        title:'呜呜找手机',
        id:110,
        details:'请问有同学在美食广场到新体那条路上捡到一个小米	手机吗？手机壳是黑色的，有一个狗的图案和	salute的英文，丢了手机真的真的很着急',
        pic:'/images/114_1.jpg',
        imageList:[],
        username:'汪汪',
        lxfs:'13222345345',
        QQ:'312329065'
      }
    ],
    rightList:[
      {
        title:'保温杯',
        id:14,
        details:'在4e机房看到一个保温杯，还在原位，失主速来领取',
        pic:'/images/xwp2.png',
        imageList:['/images/xwp2.png'],
        username:'呜呜',
        lxfs:'13184632145',
        QQ:'3125465465'
      },
      {
        title:'鼠标丢了',
        id:15,
        details:'在机房丢了个鼠标，长这样，求看到的好心人联系我....',
        pic:'/images/xwp3.png',
        imageList:['/images/xwp3.png'],
        username:'w2呜dwr呜',
        lxfs:'15236742145',
        QQ:'154854465'
      },
    ],
    //swiper
    
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,//指示点
    autoplay: true,//自动播放
    circular: true,//循环
    interval: 3000,//自动播放间隔
    duration: 800,//切换时长

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    console.log('index---onload')
    var that =this
    wx.getStorage({
      key:'loss',
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
      wx.getStorage({
        key:'LOSS',
        success (res) {
          console.log(res.data)
          let st = res.data
          var tmp = that.data.leftList
          for(let i =0;i<st.length;i++){
            tmp.push(st[i])
        }
          that.setData({
            leftList:tmp
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
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  tabChange(e){
    let index=e.detail.index;
    this.setData({
      tabbarIndex: index
    })
    console.log('tab change', e.detail.index)
  },
  toFabu2:function(){
    let a=getCurrentPages()
    console.log("跳转到发布界面"+a.length)
    wx.navigateTo({
      url: '/pages/fabu2/fabu2'
    })
  },


  onPullDownRefresh: function () {
   this.onLoad()
  },
  
  //toDetail
  toDetail:function(e){
    var tmp = e.currentTarget.dataset.detail
    console.log(tmp)
    console.log('toooo')
    let str=JSON.stringify(tmp.imageList);
    console.log(str)
    wx.navigateTo({
      url:'/pages/lossDetail/lossDetail?id='+tmp.id+'&QQ='+tmp.QQ+'&title='+tmp.title+'&username='+tmp.username+'&lxfs='+tmp.lxfs+'&details='+tmp.details+'&jsonStr='+str,
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
