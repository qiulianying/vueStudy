var requireUrl = {
    //米莱
    "ml": {
      "portUrl": "http://h5reader.mobonews.cn/H5BookStore/act.ashx",
      "payUrl": "https://mpay.mobonews.cn/mpay/PayRequest.ashx"
    },
    //畅读
    "cd": {
      "portUrl": "http://img.51changdu.com/sharp/H5BookStore/act.ashx",
      "payUrl": "https://mpay.51changdu.com/mpay/PayRequest.ashx"

    },
    //安卓
    "ad": {
      "portUrl": "http://img.andreader.com/sharp/H5BookStore/act.ashx",
      "payUrl": "https://mpay.51changdu.com/mpay/PayRequest.ashx"
    },
    //繁体
    "cp": {
      "portUrl": "http://h5.changdu.co/H5BookStore/act.ashx",
      "payUrl": "http://mpay.changdu.co/mpay/PayRequest.ashx"
    }
  }, //产品
  chooseProject = 'ad';

var pageCommon = {

  //接口地址
  "portUrl": requireUrl[chooseProject].portUrl,
  //支付接口地址
  "payUrl": requireUrl[chooseProject].payUrl,
  //ua信息
  versions: function() {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
      qq: u.match(/\sQQ/i) == " qq" //是否QQ
    };
  }(),
  //语言
  language: (navigator.browserLanguage || navigator.language).toLowerCase(),
  /**
   * 初始调用
   */
  init: function() {
    if (!this.isLogined()) {
      this.newGuid();
      this.login();
    }
  },
  /**
   * 生成guid
   */
  "newGuid": function() {
    var guid = new Date().getTime() + '-';
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
        guid += "-";
    }
    if (!window.localStorage.getItem('guid')) {
      window.localStorage.setItem('guid', guid);
    }
  },
  /**
   * commonArg 公共请求参数
   * @return {Object} 
   */
  commonArg: function() {

    var guid = window.localStorage.getItem('guid'),
      sid = window.localStorage.getItem('sid'),
      chl = '',
      platform = 0,
      urlArg = location.search.replace("?", ''),
      urlArgObj = this.searchObj(urlArg);

    //渠道
    if (urlArgObj.urlArg) {
      chl = urlArgObj.chl;
    } else {
      chl = 'h5bookstore'
    }



    //判断终端
    if (this.versions.mobile) {
      if (this.versions.weixin) {
        platform = 1;
      } else {
        platform = 2;
      }
    } else {
      platform = 0;
    }
    return {
      "sid": sid || '',
      "chl": chl,
      "guid": guid || '',
      'platform': platform,
      "mt": 9,
      //发布版本号--修改
      "ver": 17
    }
  },
  /**
   * isLogined 登录
   * @return {Object} 
   */
  login: function() {
    const postData = this.commonArg();
    //协议id
    postData.actionid = 610;

    //数组升序排列
    var newKeys = Object.keys(postData).sort(),
      xyz = '',
      _this = this;

    //拼接字段
    newKeys.forEach(function(v, i) {

      //当value类型为object该key不参与加密    
      if (i === newKeys.length - 1) {
        xyz += v + "=" + postData[v];
      } else {
        xyz += v + "=" + postData[v] + "&";
      }

    });

    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.portUrl + "?" + xyz, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.responseType = 'json';

    xhr.onload = function() {
      if (xhr.status === 200 && xhr.statusText === "OK") {
        var data = xhr.response;
        window.localStorage.setItem('sid', data.St);
        window.localStorage.setItem('userInfo', JSON.stringify(data.ResponseObject[0]));
      }
    };

    xhr.onerror = function() {
      _this.requestError()
    };

    xhr.send();

  },

  /**
   * isLogined 是否登录
   * @return {Object} 
   */
  isLogined: function() {
    var userInfo = window.localStorage.getItem('userInfo');
    if (!userInfo) {
      return false;
    } else {
      return true;
    }
  },
  /**
   * isLogined 获取本地信息
   * @return {Object} 
   */
  geteLocas: function(locasName) {
    return JSON.parse(window.localStorage.getItem(locasName) || '{}');
  },
  /**
   ** checkResultData 判断返回数据是否正确
   * @return {bool}  
   */
  checkResultData: function(data) {
    if (data.status === 200 && data.ok) {
      return true;
    } else {
      return false;
    }
  },
  /**
   ** requestError 接口请求报错 
   */
  requestError: function() {
    this.$message.error('接口请求错误');
  },
  /**
   * searchObj 格式化页面参数
   * @return {Object} 参数对象
   */
  searchObj: function(string) {
    var searchArr = string.split('&'),
      urlArg = {};

    //转换为对象
    for (var i = 0; i < searchArr.length; i++) {
      urlArg[searchArr[i].split('=')[0].toLowerCase()] = searchArr[i].split('=')[1];
    }
    return urlArg;
  },
  /**
   * toLowerObj 对象key小写
   * @return {Object} 对象key小写
   */
  toLowerObj: function(obj) {

    //获取对象key
    var newKeys = Object.keys(obj),
      newObj = {};

    //key转出小写
    newKeys.forEach(function(v, i) {
      newObj[v.toLowerCase()] = obj[v];
    });

    return newObj;
  },
  /**
   * getWindowHeight 浏览器视口的高度
   * @return {Object} 对象key小写
   */
  getWindowHeight: function() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  },
  /**
   * getDomScrollHeight 浏览器视口的高度
   * @return {Object} 对象key小写
   */
  getDomScrollHeight: function(idName) {
    var scrollTop = 0;
    return document.querySelector('#' + idName).scrollTop;

    console.log(document.querySelector('#' + idName));
  },


}

export default pageCommon;
