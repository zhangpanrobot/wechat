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

// var userInfo = localStorage.getItem('userInfo') && localStorage.getItem('userInfo') == 'undefined' && JSON.parse(localStorage.getItem('userInfo')) || {};
var userInfo;

if (!code) {
  // alert('授权失败, 请从朋友圈重新进入本页面')
  userInfo = paramParseObj('userInfo');
  //location.href = friendLink();
}

function friendLink() {
  return './index.html?userInfo=' + encodeURIComponent(JSON.stringify(userInfo));
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
        if (data.errcode) return;
        userInfo = data.data;
        // localStorage.setItem('userInfo', JSON.stringify(userInfo));
        location.href += '&userInfo=' + encodeURIComponent(JSON.stringify(userInfo));
        $('#user_name').innerText = userInfo.nickname;
        //立即查看
        $('#share_link').href = friendLink()
      } else {
        // location.href = friendLink();
      }
    })
  }
}


document.addEventListener('DOMContentLoaded', function() {
  if (!code) {
    // alert('授权失败, 请从朋友圈重新进入本页面')
    userInfo = paramParseObj('userInfo');
    location.href = friendLink();
  } else {
    getUserInfo()
  }
  document.body.style.height = screenHeight + 'px';
})
