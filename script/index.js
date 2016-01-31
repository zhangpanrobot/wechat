var userInfo = paramParseObj(userInfo);
var nickname = userInfo && userInfo !== 'undefined' && JSON.parse(userInfo).nickname
console.log(nickname)
if (!userInfo || userInfo == 'undefined' || !nickname) {
  userInfo = {
    "openid": "ofFh1t72qWRyN8V86w8qagrnBt68",
    "nickname": "MH",
    "sex": 1,
    "language": "en",
    "city": "海淀",
    "province": "北京",
    "country": "中国",
    "headimgurl": "http://wx.qlogo.cn/mmopen/XRES4dfLkwm9vicNBB0RaVqiaEImQibGDGvIerBPSk3HXMIZiaA6WRsrZS7DBvMj7myykBtcbJ9NyxYJm98q0gJ6ba2Sib6icBzt0f/0",
    "privilege": []
  }
}

function $(selector) {
  return document.querySelector(selector)
}

function sendRequest(url, method, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      callback({
        "fail": true,
        "data": xhr.responseText
      });
    }
  }
  xhr.onerror = function() {
    callback({
      "fail": true,
      "data": xhr.responseText
    });
  };
  if (method == 'GET') {
    xhr.open('GET', url, true);
    xhr.send();
  } else {
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }
}

function paramParse(key) {
  if (!location.search) return;
  var url = location.search.split('#')[0];
  var paramArr = url.slice(1).split('&');
  var paramPair = {};
  paramArr.forEach(function(item) {
    var param = item.split('=');
    paramPair[param[0]] = param[1];
  });
  if (key) return paramPair[key];
  return paramPair;
}

function paramParseObj(key) {
  if (paramParse(key) && decodeURIComponent(paramParse(key))) {
    return JSON.parse(decodeURIComponent(paramParse(key)))
  }
}

$('#user-name').innerText = userInfo.nickname;
$('#avt').src = userInfo.headimgurl;

var friendData = {
  man: [{
    avatar: 'http://wx.qlogo.cn/mmopen/XRES4dfLkwm9vicNBB0RaVqiaEImQibGDGvIerBPSk3HXMIZiaA6WRsrZS7DBvMj7myykBtcbJ9NyxYJm98q0gJ6ba2Sib6icBzt0f/0', //头像url
    user_name: '邓超', //用户名
    content: '上完春晚, 整个人', //文字内容
    imgs: ['http://s.juancdn.com/jpwebapp/images/pengyouquan/christmas/01.jpg', 'http://www.sina.com'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['刘德华'], //点赞列表
    reply_list: [{
        content: '最近工作如何啊', //回复内容
        from: '金星', //回复人姓名
        to: '张全蛋' //被回复人姓名
      }, {
        content: '这个很牛B啊', //回复内容
        to: '唐马儒' //被回复人姓名
      }] //回复列表
  }, {
    avatar: 'http://s.juancdn.com/jpwebapp/images/pengyouquan/wanghon/nv04.jpg', //头像url
    user_name: '奶岩', //用户名
    content: '{{nickname}}你要上春晚啦！带上我好不咯？ 么么哒！', //文字内容
    imgs: ['http://s.juancdn.com/jpwebapp/images/pengyouquan/christmas/01.jpg', 'http://www.sina.com'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['邓超','大鹏', '郭德纲', '小沈阳', '小岳岳', '于莎莎', '大宝剑乔杉'], //点赞列表
    reply_list: [{
        content: '岩岩，不说好要拍煎饼侠2吗!', //回复内容
        from: '', //回复人姓名
        to: '大鹏' //被回复人姓名
      }, {
        content: '他带上你，你带上我好不咯？', //回复内容
        to: '大宝剑乔杉' //被回复人姓名
      }, {
        content: '她带上你，你带上我好不咯？', //回复内容
        from: '于莎莎',
        to: '大宝剑乔杉' //被回复人姓名
      }, {
        content: '上春晚找我啊，我也能带你上！',
        from: '',
        to: '小岳岳'
      }, {
        content: '乖，我今天晚点回去，你早点睡。',
        from: '',
        to: '{{nickname}}'
      }] //回复列表
  }, {
    avatar: 'http://s.juancdn.com/jpwebapp/images/pengyouquan/wanghon/nv04.jpg', //头像url
    user_name: '邓超', //用户名
    content: '上完春晚, 整个人', //文字内容
    imgs: ['http://s.juancdn.com/jpwebapp/images/pengyouquan/christmas/01.jpg', 'http://www.sina.com'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['刘德华'], //点赞列表
    reply_list: [{
        content: '最近工作如何啊', //回复内容
        from: '金星', //回复人姓名
        to: '张全蛋' //被回复人姓名
      }, {
        content: '这个很牛B啊', //回复内容
        to: '唐马儒' //被回复人姓名
      }] //回复列表
  }],
  woman: [],
  //随机背景图url
  background: [
    'www.baidu.com'
  ]
};
console.log(userInfo)

var listResult = shuffle(userInfo.sex?friendData.man:friendData.women, 5);

listResult.forEach((item)=>{
  item.content = item.content && item.content.replace(/{{nickname}}/, userInfo.nickname)
  item.reply_list.forEach((reply)=>{
    reply.content = reply.content && reply.content.replace(/{{nickname}}/, userInfo.nickname)
    reply.from = reply.from && reply.from.replace(/{{nickname}}/, userInfo.nickname)
    reply.to = reply.to && reply.to.replace(/{{nickname}}/, userInfo.nickname)
  })
})

// 数组里随机选取5个
function shuffle(array, num) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array.slice(0, num);
}
//随机dataList

// import Vue from 'vue'
import friendList from '../component/friend-list.vue'

var signatureUrl = !~location.href.indexOf('#') ? location.href : location.href.slice(0, location.href.indexOf('#'))

//获得微信jssdk接口权限
function getConfig() {
  // sendRequest('/signature.do?url=' + signatureUrl, 'GET', '', function(data) {
  //   if (!data.fail) {
  //     if (data.errcode) return;
  //     if(typeof data == 'string') {
  //       data = JSON.parse(data)
  //     }
  //     wx.config(data);
  //   } else {
  //     // getConfig()
  //   }
  // })
}

wx.onMenuShareTimeline({
    title: '我要上春晚', // 分享标题
    link: 'http://weixin.ezone.cn/view/index.html', // 分享链接
    imgUrl: '', // 分享图标
    success: function () {
        // 用户确认分享后执行的回调函数

    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});

wx.onMenuShareAppMessage({
    title: '', // 分享标题
    desc: '', // 分享描述
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
        // 用户确认分享后执行的回调函数
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});


var friendCircle = new Vue({
  'el': '#list ul',
  data: {
    dataList: listResult
  },
  components: {
    friendList: friendList
  },
  ready() {
    getConfig();
    //跳转至用户授权页
    $('#share a').addEventListener('click', function(e) {
      e.preventDefault();
      //拿到appid, 生成随机state, scope为'snsapi_userinfo'
      var state = Math.random().toString(36).substr(2);
      var redirect_uri = encodeURIComponent('http://weixin.ezone.cn/view/shake.html');
      localStorage.setItem('state', state);
      setTimeout(function() {
        location.href = generateRedirectUrl('wx693582460d15cb5e', redirect_uri, 'snsapi_userinfo', state);
      }, 50);
    })
  }
})

//生成授权链接
function generateRedirectUrl(appid, url, scope, state) {
  return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + url + '&response_type=code&scope=' + scope + '&state=' + state + '#wechat_redirect';
}

function toast(message) {
  if ($('.toast')) return $('.toast').innerText = message
  var divEle = document.createElement('div')
  divEle.className = 'toast'
  divEle.innerHTML = '<span>' + message + '</span>'
  document.body.appendChild(divEle)
  setTimeout(function() {
    divEle.parentNode.removeChild(divEle)
  }, 3000)
}
