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

var code = paramParse('code') //用户信息凭证
var state = localStorage.getItem('state') //朋友圈效果页面存入的随机字符串
// if (!code || state !== paramParse('state')) {
//   alert('授权失败, 请从朋友圈重新进入本页面')
// }
if(!code) {
  alert('授权失败, 请从朋友圈重新进入本页面')
}



var userInfo = {};

//用code请求用户信息
function getUserInfo() {
  sendRequest('/getUserInfo.do?code=' + code, 'GET', '', function(data) {
    if (!data.fail) {
      data = JSON.parse(data)
      if (data.errcode) return;
      userInfo = data.data;
      $('#user_name').innerText = userInfo.nickname;
      //立即查看
      $('#share_link').href = './index.html?userInfo=' + encodeURIComponent(JSON.stringify(userInfo))
    } else {
      alert('用户信息获取失败, 请从朋友圈重新进入本页面')
    }
  })
}

document.addEventListener('DOMContentLoaded', function() {
  getUserInfo()
  document.body.style.height = screenHeight + 'px';
})
