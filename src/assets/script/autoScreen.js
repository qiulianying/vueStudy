'use strict';


var autoScreen = {
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
    //初始化页面
    initPage: function() {
        var  _this=this,
           //定义屏幕高清度
            dpr = 1,

            //定义缩放比例
            scale = '1.0',

            //获取html节点
            docEl = document.documentElement,

            //创建style
            fontEl = document.createElement('style'),

            //查找meta[name="viewport"]节点
            metaEl = document.querySelector('meta[name="viewport"]'),

            clientW = 0;

        //横竖屏刷新
        metaEl.setAttribute('content', 'width=device-width');

        //获取屏幕高清度（四舍五入）
        dpr = Math.round(window.devicePixelRatio || 1);

        //是否为移动设备
        if (!_this.versions.mobile) {
            //否=自定义宽度480px
            clientW = 480;
            docEl.style.width = '480px';
            docEl.style.margin = '0 auto';
        } else {
            //是=获取屏幕宽度
            clientW = (document.documentElement.clientWidth > 0) ? document.documentElement.clientWidth : window.screen.width;
        }

        // 设置viewport，进行缩放，达到高清效果
        metaEl.setAttribute('content', 'width=' + scale * clientW + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

        // 设置data-dpr属性，留作的css hack之用
        docEl.setAttribute('data-dpr', dpr);
        // 动态写入样式
        docEl.firstElementChild.appendChild(fontEl);
        fontEl.id = "styleHtml";
        fontEl.innerHTML = 'html{font-size:' + clientW / 10 + 'px!important;}';
    },
    //窗口大小改变刷新页面
    resizePage: function() {
        var _this=this;
        window.addEventListener("resize", function() {
            var time;
            window.clearTimeout(time);
            time = setTimeout(function() {
                var tynode = document.getElementById("styleHtml");
                tynode.parentNode.removeChild(tynode);
                _this.initPage();
            }, 100);
        }, false);
    }
};

//初始化页面
autoScreen.initPage();

//窗口大小改变
autoScreen.resizePage();