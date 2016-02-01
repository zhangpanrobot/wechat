//
//ajax
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

function $(selector) {
  return document.querySelector(selector)
}

var screenHeight = Math.max(document.documentElement.clientHeight || window.innerHeight)

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

var code = paramParse('code') //用户信息凭证
  // if (!code || state !== paramParse('state')) {
  //   alert('授权失败, 请从朋友圈重新进入本页面')
  // }

var userInfo = localStorage.getItem('userInfo') && localStorage.getItem('userInfo') !== 'undefined' && JSON.parse(localStorage.getItem('userInfo')) || {};
var boy_arr = ['奶岩','邓超','周杰伦','杨颖','易烊千玺','毕福剑','张馨予','王思聪','苍井空','太子妃张天爱','陈赤赤','金星','郭德纲','胡歌','彭阿姨','大鹏'];
var girl_arr = ['HZT黄子韬','吴磊LEO','王俊凯','陈学冬','亦凡宝贝','杨洋','王思聪','张天爱','邓超','贾乃亮','李小璐','金星','李易峰','彭阿姨','贾玲','盛一伦','杨颖','毕福剑'];

// 数组里随机选取n个
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


function friendLink() {
  var trendsList = []
  if(userInfo.sex == 2) {
    trendsList = shuffle(girl_arr, 5)
  } else {
    trendsList = shuffle(boy_arr, 5)
  }
  return './index.html?userInfo=' + encodeURIComponent(JSON.stringify(userInfo)) + '&trends=' + encodeURIComponent(trendsList.join());
}

//生成授权链接
function generateRedirectUrl(appid, url, scope, state) {
  return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + url + '&response_type=code&scope=' + scope + '&state=' + state + '#wechat_redirect';
}

function toAuth() {
  var state = Math.random().toString(36).substr(2);
  var redirect_uri = encodeURIComponent('http://weixin.ezone.cn/view/shake.html');
  location.href = generateRedirectUrl('wx693582460d15cb5e', redirect_uri, 'snsapi_userinfo', state);
}


//用code请求用户信息
function getUserInfo() {
  if (userInfo && userInfo.nickname) {
    $('#user_name').innerText = userInfo.nickname;
    //立即查看
    $('#share_link').href = friendLink()
  } else {
    sendRequest('/getUserInfo.do?code=' + code, 'GET', '', function(data) {
      if (!data.fail) {
        data = JSON.parse(data)
        if (data.data && data.data.errcode) {
            return toAuth();
        }
        userInfo = data.data;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        $('#user_name').innerText = userInfo.nickname;
        //立即查看
        $('#share_link').href = friendLink()
      } else {
        toAuth();
        // location.href = friendLink();
      }
    })
  }
}




document.addEventListener('DOMContentLoaded', function() {
  getUserInfo();
  document.body.style.height = screenHeight + 'px';

})
