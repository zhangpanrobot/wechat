var userInfo = paramParseObj('userInfo');
var nickname = userInfo && userInfo.nickname
if (!userInfo || userInfo == 'undefined' || !nickname) {
  userInfo = {
    "openid": "ofFh1t72qWRyN8V86w8qagrnBt68",
    "nickname": "夺宝联萌",
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
  if (paramParse(key) && paramParse(key) !== 'undefined' && decodeURIComponent(paramParse(key))) {
    return JSON.parse(decodeURIComponent(paramParse(key)))
  }
}

$('#user-name').innerText = userInfo.nickname;
$('#avt').src = userInfo.headimgurl;

var friendData = {
  man: [{
    avatar: '../img/avatar/柳岩-头像.jpg', //头像url
    user_name: '奶岩', //用户名
    content: '{{nickname}}你要上春晚啦！带上我好不咯？ 么么哒！', //文字内容
    imgs: ['../img/img_big/柳岩-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['邓超', '大鹏', '郭德纲', '小沈阳', '小岳岳', '于莎莎', '大宝剑乔杉'], //点赞列表
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
    avatar: '../img/avatar/邓超-头像.jpg', //头像url
    user_name: '邓超', //用户名
    content: '我一点都不想看{{nickname}}上春晚，今年春节我根本就不看春晚！我要和娘娘、等等和小花来一场说走就走的旅行!', //文字内容
    imgs: ['../img/img_big/邓超-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['李晨', '陈赤赤', '郑恺', '杨颖', '晓明', '王祖蓝', '包贝尔', '王宝强', '谢娜'], //点赞列表
    reply_list: [{
        content: '家庭地位一目了然！', //回复内容
        to: '陈赤赤', //回复人姓名
      }, {
        content: '家庭地位一目了然！', //回复内容
        to: '郑恺' //被回复人姓名
      }, {
        content: '家庭地位一目了然！', //回复内容
        to: '李晨' //被回复人姓名
      }, {
        content: '好像你多高似的', //回复内容
        to: '李晨', //被回复人姓名
        from: '邓超'
      }, {
        content: '邓叔叔棒棒哒~~晓明叔叔@黄晓明，我们什么时候去度假？', //回复内容
        to: '杨颖' //被回复人姓名
      }, {
        content: 'baby，不是说好了2016年要安心造人么', //回复内容
        from: '晓明', //被回复人姓名
        to: '杨颖'
      }, {
        content: ',', //回复内容
        from: '杨颖', //被回复人姓名
        to: '晓明'
      }, {
        content: '(⊙o⊙)哦！', //回复内容
        from: '邓超', //被回复人姓名
        to: '晓明'
      }, {
        content: '(⊙o⊙)哦！', //回复内容
        from: '李晨', //被回复人姓名
        to: '晓明'
      }, {
        content: '(⊙o⊙)哦！', //回复内容
        from: '陈赤赤', //被回复人姓名
        to: '晓明'
      }, {
        content: '(#‵′)靠！', //回复内容
        from: '郑恺', //被回复人姓名
        to: '晓明'
      }] //回复列表
  }, {
    avatar: '../img/avatar/周杰伦-头像.jpg', //头像url
    user_name: '周杰伦(工作)', //用户名
    content: '{{nickname}}听说你游戏打的不错哦，改天我们一起开黑双排吧~', //文字内容
    imgs: ['../img/img_big/周杰伦-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['王思聪', '杨颖', '陈赤赤', '张靓颖', '林更新'], //点赞列表
    reply_list: [{
        content: '九保一战术？', //回复内容
        from: '', //回复人姓名
        to: '陈赤赤' //被回复人姓名
      }, {
        content: '一定要来熊猫TV直播啊，周董！', //回复内容
        to: '王思聪' //被回复人姓名
      }, {
        content: '最近没时间啦，春晚排练挺忙的，你哪天来公司找我吧，望京SOHO塔2B座', //回复内容
        from: '于莎莎',
        to: '{{nickname}}' //被回复人姓名
      }, {
        content: '2B座？',
        from: '周杰伦(工作)',
        to: '{{nickname}}'
      }, {
        content: 'o(╯□╰)o望京SOHO塔2，B座',
        from: '{{nickname}}',
        to: '周杰伦(工作)'
      }] //回复列表
  }, {
    avatar: '../img/avatar/杨颖-头像.jpg', //头像url
    user_name: '杨颖', //用户名
    content: '{{nickname}}，春晚排练累瘦了吧，直播完了来家里，我让晓明叔叔做大餐！', //文字内容
    imgs: ['../img/img_big/杨颖-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['郑恺', '晓明', '黄渤', '陈坤', '井柏然', '陈赤赤', '李晨', '鹿晗', '何炅'], //点赞列表
    reply_list: [{
        content: '晓明会做饭吗！也就海边捞点嘎啦', //回复内容
        from: '', //回复人姓名
        to: '黄渤' //被回复人姓名
      }, {
        content: '就会做个西红柿鸡蛋面，哈哈哈哈', //回复内容
        to: '黄渤', //被回复人姓名
        from: '井柏然'
      }, {
        content: 'Baby 我又来赞你啦~~', //回复内容
        from: '',
        to: '郑恺' //被回复人姓名
      }, {
        content: '渤哥也一起来喝点啊',
        from: '晓明',
        to: '黄渤'
      }, {
        content: '谢谢嫂子！直播结束就去你家，我带上丽颖一块儿，饭还是让丽颖做',
        from: '',
        to: '{{nickname}}'
      }] //回复列表
  }, {
    avatar: '../img/avatar/易烊千玺-头像.jpg', //头像url
    user_name: '易烊千玺', //用户名
    content: '本boy特别开心，因为{{nickname}}哥哥要和我们一起上！春！晚！啦！', //文字内容
    imgs: ['../img/img_big/易烊千玺-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['王俊凯', '王源', '贾乃亮', '{{nickname}}', '杜淳', '杨颖', '大鹏'], //点赞列表
    reply_list: [{
        content: '艾玛，俊凯是表示不服吗？@{{nickname}}', //回复内容
        from: '', //回复人姓名
        to: '贾乃亮' //被回复人姓名
      }, {
        content: '看本宝宝高冷的美貌！', //回复内容
        to: '王源' //被回复人姓名
      }, {
        content: '你敢不敢换一张！连拍那么多张，你非得用这张……', //回复内容
        from: '',
        to: '王俊凯' //被回复人姓名
      }, {
        content: '嘿嘿嘿',
        from: '易烊千玺',
        to: '王俊凯'
      }, {
        content: '高冷boy你悠着点笑啊，小舌头都看见了',
        from: '{{nickname}}',
        to: '易烊千玺'
      }, {
        content: '嘿嘿嘿',
        from: '易烊千玺',
        to: '{{nickname}}'
      }] //回复列表
  }, {
    avatar: '../img/avatar/毕福剑-头像.jpg', //头像url
    user_name: '毕福剑', //用户名
    content: '你咋不上天呢？', //文字内容
    imgs: [userInfo.headimgurl], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: [], //点赞列表
    reply_list: [{
        content: '人家凭自己本事登上春晚，你也是凭自己本事作下春晚，成年人要为自己做的事负责，有时间在这鼻子不鼻子脸不是脸的，还不如好好琢磨琢磨怎么回到屏幕上！', //回复内容
        from: '', //回复人姓名
        to: '金星' //被回复人姓名
      }, {
        content: '+1', //回复内容
        to: '金星', //被回复人姓名
        from: '陈赤赤'
      }, {
        content: '+1', //回复内容
        to: '金星', //被回复人姓名
        from: '范爷'
      }, {
        content: '+1', //回复内容
        to: '金星', //被回复人姓名
        from: '周涛'
      }, {
        content: '+10086', //回复内容
        to: '金星', //被回复人姓名
        from: '林更新'
      }] //回复列表
  }, {
    avatar: '../img/avatar/张燕-头像.jpg', //头像url
    user_name: '张馨予', //用户名
    content: '二手货有什么好的', //文字内容
    imgs: ['../img/img_big/张燕-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['张予曦', '张艺馨', '张歆艺', '姚笛', '王大治', '叶梓萱'], //点赞列表
    reply_list: [{
      content: '爱过，恨过，只怪我们错过。', //回复内容
      to: '姚笛', //回复人姓名
    }, {
      content: '妹，哥懂你心里的苦，哪天找你好好唠唠心里话。', //回复内容
      to: '王大治' //被回复人姓名
    }, {
      content: '小燕，别闹心了，改天约上姐妹们一起唱K', //回复内容
      to: '叶梓萱'
    }, {
      content: '谢谢哥',
      to: '王大治',
      from: '张馨予'
    }]
  }, {
    avatar: '../img/avatar/王思聪-头像.jpg', //头像url
    user_name: '王思聪', //用户名
    content: '欠快播会员的各位亲赶紧来补！', //文字内容
    imgs: ['../img/img_big/王思聪-配图-b.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['杨颖', '陈赫', '贾乃亮', '邓超', '大鹏', '林更新', '张馨予', '张予曦', '叫兽易小星'], //点赞列表
    reply_list: [{
      content: '快播是什么？', //回复内容
      to: '易烊千玺', //回复人姓名
    }, {
      content: '爱过。', //回复内容
      to: '大鹏' //被回复人姓名
    }, {
      content: '管你卵事', //回复内容
      to: '陈赫'
    }, {
      content: '快播你有股份啊？',
      to: '林更新'
    }, {
      content: '你个傻X',
      to: '林更新',
      from: '王思聪'
    }]
  }, {
    avatar: '../img/avatar/苍井空-头像.jpg', //头像url
    user_name: '苍井空', //用户名
    content: '微信的新功能，蛮有趣的呢', //文字内容
    imgs: ['../img/img_big/苍井空-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['100000+人看了照片'], //点赞列表
    reply_list: [{
      content: '打码的毛片儿我都不看，我看打码的自拍？', //回复内容
      to: '王思聪', //回复人姓名
    }, {
      content: '已经刷不起朋友圈了……', //回复内容
      to: '林更新' //被回复人姓名
    }]
  }, {
    avatar: '../img/avatar/张天爱-头像.jpg', //头像url
    user_name: '太子妃张天爱', //用户名
    content: '宝贝儿，你就是那春茶，我就是那刚烧开的水，我想泡你啊！', //文字内容
    imgs: ['../img/img_big/张天爱-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['贾跃亭', '甘薇', '盛一伦', '侣皓吉吉', '海铃', '江奇霖'], //点赞列表
    reply_list: [{
      content: '太子妃重播上线啦', //回复内容
      to: '贾跃亭', //回复人姓名
    }, {
      content: '一个大写、加粗的污！', //回复内容
      to: '{{nickname}}' //被回复人姓名
    }, {
      content: '太污了！但是，朕心悦！', //回复内容
      to: '盛一伦' //被回复人姓名
    }, {
      content: '秀恩爱，死得快！', //回复内容
      to: '盛一伦', //被回复人姓名
      from: '于朦胧'
    }, {
      content: '秀恩爱，死得快！', //回复内容
      to: '盛一伦', //被回复人姓名
      from: '郭俊辰'
    }, {
      content: '秀恩爱，死得快！', //回复内容
      to: '盛一伦', //被回复人姓名
      from: '绿王'
    }, {
      content: '上春晚了不起哈？等着哥去壁咚你！', //回复内容
      to: '{{nickname}}', //被回复人姓名
      from: '太子妃张天爱'
    }, {
      content: '你追我啊, 如果追到我, 我就和你嘿嘿嘿...', //回复内容
      from: '{{nickname}}', //被回复人姓名
      to: '太子妃张天爱'
    }]
  }, {
    avatar: '../img/avatar/陈赫-头像.jpg', //头像url
    user_name: '陈赤赤', //用户名
    content: '【给本天才一条广告的时间】天霸动霸Tuà终于变成实物能让天才们抱回家啦，不论你是天才还是学霸都该拥有属于自己态度的潮物，Tuà就是屌炸天！无论是Tuà字基本款T恤还是撞色特别款，都是回馈给天才们最好品质的新年礼物！还有最新【添财】系列全新上线！我已经穿上啦，你们的呢？', //文字内容
    imgs: ['../img/img_big/陈赫-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['张梓萱', '郑恺', '李晨', '杨颖', '邓超', '鹿晗'], //点赞列表
    reply_list: [{
      content: '天天刷屏卖衣服，你烦不烦？', //回复内容
      to: '杨颖', //回复人姓名
    }, {
      content: '天天刷屏卖衣服，你烦不烦？', //回复内容
      to: '孙艺洲' //被回复人姓名
    }, {
      content: '天天刷屏卖衣服，你烦不烦？', //回复内容
      to: '李晨' //被回复人姓名
    }, {
      content: '天天刷屏卖衣服，你烦不烦？', //回复内容
      to: '邓超', //被回复人姓名
      from: ''
    }, {
      content: '天天刷屏卖衣服，你烦不烦？', //回复内容
      to: '李佳航', //被回复人姓名
      from: ''
    }, {
      content: '已屏蔽', //回复内容
      to: '娄艺潇', //被回复人姓名
      from: ''
    }]
  }, {
    avatar: '../img/avatar/金星-头像.jpg', //头像url
    user_name: '金星', //用户名
    content: '美猴王不让上，什么乱七八糟的反而都上了。他都57了，下一个猴年他可能就耍不了猴戏了，这会儿你们怎么看不见他的努力啊？语言类节目这么少，开心麻花被砍掉，美猴王也不请，吉祥物还那么丑，导演你咋不上天？你咋不上西天呢？！', //文字内容
    imgs: ['../img/img_big/金星-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['韩红', '冯小刚', '李小璐', '孟非', '贾乃亮', '王自健', '郭德纲'], //点赞列表
    reply_list: [{
      content: '还有三年就到猪年了，答应我，你们的热情不要过去好吗', //回复内容
      to: '马德华', //被回复人姓名
    }, {
      content: '几代人的情怀……猴年不让猴王上春晚，也是醉了', //回复内容
      to: '孟非', //被回复人姓名
      from: ''
    }, {
      content: '甜馨挚爱的孙悟空啊！金星姐，能给安排甜馨见见她偶像不？', //回复内容
      to: '李小璐', //被回复人姓名
      from: ''
    }, {
      content: '多想一到零点时，金门大开，六小龄童穿着战甲，戴着雉毛翎 ，耍着金箍棒大喊', //回复内容
      to: '王自健', //被回复人姓名
      from: ''
    }, {
      content: '俺老孙来也，想想就能泪奔。', //回复内容
      to: '一声' //被回复人姓名
    }, {
      content: '我将参加中央电视台春节戏曲晚会，暂定大年初三播出，欢迎大家收看。', //回复内容
      to: '六小龄童', //被回复人姓名
      from: ''
    }, {
      content: '我就喜欢你看不惯我，却不得不和我一同建设中国特色社会主义的样子。', //回复内容
      to: '{{nickname}}', //被回复人姓名
      from: ''
    }, {
      content: '给你脸了！', //回复内容
      to: '{{nickname}}', //被回复人姓名
      from: '金星'
    }]
  }, {
    avatar: '../img/avatar/郭德纲-头像.jpg', //头像url
    user_name: '郭德纲', //用户名
    content: '欢乐喜剧人第二季，希望大家支持。即使不上春晚，也可以让您笑口常开。', //文字内容
    imgs: ['../img/img_big/郭德纲-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['{{nickname}}', '岳云鹏', '孙越', '小沈阳', '杨树林', '艾伦', '王宁', '沈腾', '马丽', '贾玲', '唐从圣', '赵正平', '吴秀波', '宋丹丹', '冯小刚'], //点赞列表
    reply_list: [{
      content: '师父多年位春晚输送相声人才，多少人的勋章都有您的一半！', //回复内容
      to: '岳云鹏', //回复人姓名
    }, {
      content: '虽然节目不可能让所有观众都满意，但是我们对节目的诚意是十足的，我的搞笑是认真的！', //回复内容
      to: '小沈阳', //被回复人姓名
      from: ''
    }, {
      content: '郭老板这张照片，显得脸挺瘦啊', //回复内容
      to: '冯小刚' //被回复人姓名
    }, {
      content: '作为东北F4，小沈阳你可别给我们丢人啊', //回复内容
      to: '小沈阳', //被回复人姓名
      from: '尼古拉斯赵四'
    }, {
      content: '这一季主持人颜值略低啊', //回复内容
      to: '吴秀波', //被回复人姓名
      from: ''
    }]
  }, {
    avatar: '../img/avatar/胡歌-头像.jpg', //头像url
    user_name: '胡歌', //用户名
    content: '猴年春晚，我在泉州等你！', //文字内容
    imgs: ['../img/img_big/胡歌-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['许茹芸', '靳东', '刘涛', '王凯KKW', '霍建华', '袁弘', '安以轩', '唐嫣', '刘诗诗', '林依晨', '刘亦菲', '杨幂'], //点赞列表
    reply_list: [{
      content: '我带瓶好酒过去', //回复内容
      to: '霍建华', //回复人姓名
    }, {
      content: '么么哒', //回复内容
      to: '霍建华', //被回复人姓名
      from: '胡歌'
    }, {
      content: '后面那人是谁？', //回复内容
      to: '王凯KKW' //被回复人姓名
    }, {
      content: '是{{nickname}}，昨晚一起喝的酒', //回复内容
      to: '王凯KKW', //被回复人姓名
      from: '胡歌'
    }, {
      content: '为什么不找我一起？', //回复内容
      to: '胡歌', //被回复人姓名
      from: '王凯KKW'
    }, {
      content: '我俩今年都参加春晚，正好彩排完了喝一杯……', //回复内容
      to: '王凯KKW', //被回复人姓名
      from: '胡歌'
    }, {
      content: '嘤嘤嘤嘤（宝宝心里苦，但是宝宝不说）', //回复内容
      to: '胡歌', //被回复人姓名
      from: '王凯KKW'
    }]
  }, {
    avatar: '../img/avatar/彭阿姨-头像.jpg', //头像url
    user_name: '彭阿姨', //用户名
    content: '翻旧照片，找到和{{nickname}}小时候的合影，那年他才2岁。今年小{{nickname}}第一次登上春晚舞台，希望大家多多捧场。', //文字内容
    imgs: ['../img/img_big/彭阿姨-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['毕福剑', '朱军', '董卿', '周涛', '撒贝宁', '赵本山', '宋丹丹', '倪萍', '宋祖英', '赵忠祥', '王岐山', '李克强', '姨夫'], //点赞列表
    reply_list: [{
      content: '多谢彭阿姨为我加油，我一定不辜负您的期望，好好努力表现！', //回复内容
      to: '{{nickname}}', //回复人姓名
    }, {
      content: '遇到困难和我说，别太辛苦了。', //回复内容
      to: '{{nickname}}', //被回复人姓名
      from: '姨夫'
    }, {
      content: '不辛苦！为人民服务！！！', //回复内容
      to: '姨夫', //被回复人姓名
      from: '{{nickname}}'
    }]
  }, {
    avatar: '../img/avatar/大鹏-头像.jpg', //头像url
    user_name: '大鹏', //用户名
    content: '我如果整成这样得多钱？', //文字内容
    imgs: ['../img/img_big/大鹏-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['小沈阳', '岳云鹏', '尼古拉斯赵四', '大宝剑乔杉', '白百合', '邓超', '吴秀波', '吉泽明步', '波多野结衣', '蓝燕'], //点赞列表
    reply_list: [{
      content: '同问', //回复内容
      to: '岳云鹏', //回复人姓名
    }, {
      content: '同问', //回复内容
      to: '大宝剑乔杉', //被回复人姓名
      from: ''
    }, {
      content: '脸好整，主要是气质不行。', //回复内容
      to: '大宝剑乔杉', //被回复人姓名
      from: '奶岩'
    }, {
      content: '看，看，看我头像，整成我这样比较便宜。', //回复内容
      to: '尼古拉斯赵四', //被回复人姓名
      from: ''
    }, {
      content: '整容，何で？他又没你帅', //回复内容
      to: '波多野结衣', //被回复人姓名
      from: ''
    }, {
      content: '得倾家荡产吧，宝宝', //回复内容
      to: '叫兽易小星', //被回复人姓名
      from: ''
    }]
  }],
  woman: [{
    avatar: '../img/avatar/黄子韬-头像.jpg', //头像url
    user_name: 'HZT黄子韬', //用户名
    content: '非常期待{{nickname}}姐在春晚的演出，我也要向{{nickname}}姐学习，坚持！努力！早晚有一天，我也会登上春晚的舞台！', //文字内容
    imgs: ['../img/img_big/黄子韬-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['{{nickname}}', '宋茜', '周觅', 'Kai', '金俊勉', '高云翔', '陈一冰', '潘玮柏'], //点赞列表
    reply_list: [{
        content: 'wuli韬韬fighting！', //回复内容
        from: '', //回复人姓名
        to: '{{nickname}}' //被回复人姓名
      }, {
        content: '동생 화이팅!', //回复内容
        to: '金俊勉', //被回复人姓名
        from: ''
      }, {
        content: '红绿灯韬，fighting！', //回复内容
        to: '周觅' //被回复人姓名
      }, {
        content: '우리 토토一起努力，一起加油！', //回复内容
        to: '宋茜' //被回复人姓名
      }] //回复列表
  }, {
    avatar: '../img/avatar/吴磊-头像.jpg', //头像url
    user_name: '吴磊LEO', //用户名
    content: '{{nickname}}姐姐，等我十年可好？', //文字内容
    imgs: ['../img/img_big/吴磊-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['胡歌', '靳东', '霍建华', '刘涛', '柳岩', '贾玲'], //点赞列表
    reply_list: [{
        content: '三石啊，你会遇到更好的女孩~姐姐名花有主啦', //回复内容
        from: '', //回复人姓名
        to: '{{nickname}}' //被回复人姓名
      }, {
        content: '不是让我等你吗！!', //回复内容
        to: '贾玲', //被回复人姓名
        from: ''
      }, {
        content: '不要惦记我的女人', //回复内容
        to: '胡歌' //被回复人姓名
      }, {
        content: '宗主，我错了！！', //回复内容
        to: '胡歌', //被回复人姓名
        from: '吴磊LEO'
      }, {
        content: '她是你的女人？那我呢？', //回复内容
        to: '胡歌', //被回复人姓名
        from: '霍建华'
      }, {
        content: '你们四个怎么这么乱？', //回复内容
        to: '胡歌', //被回复人姓名
        from: '靳东'
      }] //回复列表
  }, {
    avatar: '../img/avatar/王俊凯-头像.jpg', //头像url
    user_name: '王俊凯', //用户名
    content: '今天和{{nickname}}姐姐一起参加春晚彩排，有点小兴奋。', //文字内容
    imgs: ['../img/img_big/王俊凯-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['易烊千玺', '王源', '黄晓明', '谢娜', '何炅', '杨颖'], //点赞列表
    reply_list: [{
        content: '她本人美不美？帮我要个签名呗！', //回复内容
        from: '', //回复人姓名
        to: '谢娜' //被回复人姓名
      }, {
        content: '姐姐真美真仙真可爱，已经路转粉！!', //回复内容
        to: '易烊千玺', //被回复人姓名
        from: ''
      }, {
        content: '三小只也很可爱很努力哦，有时间来姐姐家玩啊', //回复内容
        to: '王俊凯', //被回复人姓名
        from: '{{nickname}}'
      }, {
        content: '我已经要到她的签名啦，哈哈哈', //回复内容
        to: '谢娜', //被回复人姓名
        from: '王源'
      }] //回复列表
  }, {
    avatar: '../img/avatar/陈学冬-头像.jpg', //头像url
    user_name: '陈学冬', //用户名
    content: '谢谢{{nickname}}送我的雪地靴，春晚fighting！', //文字内容
    imgs: ['../img/img_big/陈学冬-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['郭敬明', '安东尼', '落落', '华晨宇', '笛安', '杨幂', '谢依霖', '郭碧婷'], //点赞列表
    reply_list: [{
        content: '是我不懂时尚', //回复内容
        from: '', //回复人姓名
        to: '韩火火' //被回复人姓名
      }, {
        content: '穿双火箭筒？你咋不上天呢？!', //回复内容
        to: '何炅', //被回复人姓名
        from: ''
      }, {
        content: '这个视角……是小四拍的吗？', //回复内容
        to: '韩寒' //被回复人姓名
      }, {
        content: '哥哥，这双鞋哪里有卖？', //回复内容
        to: '张艺兴' //被回复人姓名
      }] //回复列表
  }, {
    avatar: '../img/avatar/吴亦凡-头像.jpg', //头像url
    user_name: '亦凡宝贝', //用户名
    content: '我喜欢女儿，希望以后能有一个像{{nickname}}的女儿~', //文字内容
    imgs: ['../img/img_big/吴亦凡-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['姚晨', '韩寒', '冯小刚', '杨幂', '张涵予', '许晴'], //点赞列表
    reply_list: [{
        content: '哎呦喂，这恩爱秀我一脸！', //回复内容
        from: '', //回复人姓名
        to: '杨幂' //被回复人姓名
      }, {
        content: '将来给我家土豆当媳妇啊!', //回复内容
        to: '姚晨', //被回复人姓名
        from: ''
      }, {
        content: '来做我火华社的儿媳妇！', //回复内容
        to: '刘烨' //被回复人姓名
      }, {
        content: '亲爱的，记得穿秋裤', //回复内容
        to: '{{nickname}}' //被回复人姓名
      }, {
        content: '穿了你给我买的那套，爱心秋裤!', //回复内容
        to: '{{nickname}}', //被回复人姓名
        from: '亦凡宝贝'
      }] //回复列表
  }, {
    avatar: '../img/avatar/杨洋-头像.jpg', //头像url
    user_name: '杨洋', //用户名
    content: '做个新发型，去见{{nickname}}', //文字内容
    imgs: ['../img/img_big/杨洋-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['郑爽', '赵丽颖', '唐嫣', '杨幂', '何炅', '谢娜', '李维嘉', '吴昕', '杜海涛'], //点赞列表
    reply_list: [{
        content: '你竟然认识{{nickname}}，求介绍！', //回复内容
        from: '', //回复人姓名
        to: '李易峰' //被回复人姓名
      }, {
        content: '和我见面，连头都不洗!', //回复内容
        to: '郑爽', //被回复人姓名
        from: ''
      }, {
        content: '小羊都不约我呢，姐姐不开心哼', //回复内容
        to: '许晴' //被回复人姓名
      }, {
        content: '快点，每次都迟到', //回复内容
        to: '{{nickname}}' //被回复人姓名
      }, {
        content: '为了见你，我得打扮帅点!', //回复内容
        to: '{{nickname}}', //被回复人姓名
        from: '杨洋'
      }] //回复列表
  }, {
    avatar: '../img/avatar/王思聪-头像.jpg', //头像url
    user_name: '王思聪', //用户名
    content: '{{nickname}}，和我在一起，明年还让你上春晚！', //文字内容
    imgs: ['../img/img_big/王思聪-配图-g.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['林更新', '张予曦', '袁成杰', '杨颖', '叫兽易小星', '大鹏'], //点赞列表
    reply_list: [{
        content: '老公，求潜！', //回复内容
        from: '', //回复人姓名
        to: '林更新' //被回复人姓名
      }, {
        content: '老公，求潜！!', //回复内容
        to: '叫兽易小星', //被回复人姓名
        from: ''
      }, {
        content: '老公，我只想和你在一起，不上春晚也无所谓啊', //回复内容
        to: '张予曦' //被回复人姓名
      }, {
        content: '切', //回复内容
        to: '{{nickname}}' //被回复人姓名
      }] //回复列表
  }, {
    avatar: '../img/avatar/张天爱-头像.jpg', //头像url
    user_name: '张天爱', //用户名
    content: '27亿播放量，太子妃重新上架，感谢全国的老婆们~么么哒', //文字内容
    imgs: ['../img/img_big/张天爱-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['贾跃亭', '甘薇', '{{nickname}}', '侣皓吉吉', '盛一伦', '于朦胧', '郭俊辰', '江奇霖', '海铃'], //点赞列表
    reply_list: [{
        content: '都删没了，唉，感觉你“老婆们”又要给我寄刀片了', //回复内容
        from: '', //回复人姓名
        to: '侣皓吉吉' //被回复人姓名
      }, {
        content: '女神姐姐撩妹的镜头都木有啦，我和九哥跳舞的片段也木有啦! 呜呜呜', //回复内容
        to: '郭俊辰', //被回复人姓名
        from: ''
      }, {
        content: '这画面太美，我没脸看……', //回复内容
        to: '盛一伦' //被回复人姓名
      }, {
        content: '太子妃张天爱男友力MAX！', //回复内容
        to: '{{nickname}}' //被回复人姓名
      }, {
        content: '娘娘~我们共舞的镜头都删了，嘤嘤嘤', //回复内容
        to: '海铃' //被回复人姓名
      }] //回复列表
  }, {
    avatar: '../img/avatar/邓超-头像.jpg', //头像url
    user_name: '邓超', //用户名
    content: '我一点都不想看{{nickname}}上春晚，今年春节我根本就不看春晚！我要和娘娘、等等和小花来一场说走就走的旅行!', //文字内容
    imgs: ['../img/img_big/邓超-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['李晨', '陈赤赤', '郑恺', '杨颖', '晓明', '王祖蓝', '包贝尔', '王宝强', '谢娜'], //点赞列表
    reply_list: [{
        content: '家庭地位一目了然！', //回复内容
        to: '陈赤赤', //回复人姓名
      }, {
        content: '家庭地位一目了然！', //回复内容
        to: '郑恺' //被回复人姓名
      }, {
        content: '家庭地位一目了然！', //回复内容
        to: '李晨' //被回复人姓名
      }, {
        content: '好像你多高似的', //回复内容
        to: '李晨', //被回复人姓名
        from: '邓超'
      }, {
        content: '邓叔叔棒棒哒~~晓明叔叔@黄晓明，我们什么时候去度假？', //回复内容
        to: '杨颖' //被回复人姓名
      }, {
        content: 'baby，不是说好了2016年要安心造人么', //回复内容
        from: '晓明', //被回复人姓名
        to: '杨颖'
      }, {
        content: ',', //回复内容
        from: '杨颖', //被回复人姓名
        to: '晓明'
      }, {
        content: '(⊙o⊙)哦！', //回复内容
        from: '邓超', //被回复人姓名
        to: '晓明'
      }, {
        content: '(⊙o⊙)哦！', //回复内容
        from: '李晨', //被回复人姓名
        to: '晓明'
      }, {
        content: '(⊙o⊙)哦！', //回复内容
        from: '陈赤赤', //被回复人姓名
        to: '晓明'
      }, {
        content: '(#‵′)靠！', //回复内容
        from: '郑恺', //被回复人姓名
        to: '晓明'
      }] //回复列表
  }, {
    avatar: '../img/avatar/贾乃亮-头像.jpg', //头像url
    user_name: '贾乃亮', //用户名
    content: '甜馨叫王源哥哥，叫{{nickname}}姐姐，王源和{{nickname}}叫我亮哥，我是甜馨的爹……这辈儿咋这么乱？', //文字内容
    imgs: ['../img/img_big/贾乃亮-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['王源', '李小璐', '周星驰', '易烊千玺', '王俊凯', '杜淳', '甘薇', '霍思燕', '秦岚'], //点赞列表
    reply_list: [{
        content: '好喜欢小甜馨呢，亮哥，那以后叫你亮叔了', //回复内容
        to: '王源', //回复人姓名
      }, {
        content: '那以后就叫你亮叔了', //回复内容
        to: '{{nickname}}' //被回复人姓名
      }, {
        content: '关系有点乱，可爱的小美人鱼也有害羞的时候', //回复内容
        to: '周星驰'
      }, {
        content: '贾老师，明年有档期上爸爸去哪儿第四季吗？',
        to: '谢涤葵'
      }, {
        content: '爸爸回来了第三季也在找我，你还是和我经纪人谈吧',
        to: '谢涤葵',
        from: '贾乃亮'
      }] //回复列表
  }, {
    avatar: '../img/avatar/李小璐-头像.jpg', //头像url
    user_name: '李小璐', //用户名
    content: '前一阵子因为甜馨儿生病，都没顾上保养，今天趁着休息，边敷脸边看煮妇神探。这款动物面膜好玩又好敷，超级滋润水嫩，敷完皮肤水当当滑溜溜，想要的找我哦~', //文字内容
    imgs: ['../img/img_big/李小璐-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['甘薇', '霍思燕', '贾乃亮', '熊乃瑾', '王婧', '李静', '李艾', '韩国面膜总代理', '日韩面膜大中华代理'], //点赞列表
    reply_list: [{
        content: '我也敷上啦！', //回复内容
        to: '贾乃亮', //回复人姓名
      }, {
        content: '用没用上次给你的静佳小样啊？我们现在有促销活动哦', //回复内容
        to: '李静' //被回复人姓名
      }, {
        content: '姐，面膜咋卖？', //回复内容
        to: '{{nickname}}'
      }, {
        content: '私聊',
        to: '{{nickname}}',
        from: '李小璐'
      }] //回复列表
  }, {
    avatar: '../img/avatar/金星-头像.jpg', //头像url
    user_name: '金星', //用户名
    content: '美猴王不让上，什么乱七八糟的反而都上了。他都57了，下一个猴年他可能就耍不动猴戏了，这会儿你们怎么看不见他的努力啊？语言类节目这么少，开心麻花被砍掉，美猴王也不请，吉祥物还那么丑，导演你咋不上天？你咋不上西天呢？！~', //文字内容
    imgs: ['../img/img_big/金星-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['韩红', '冯小刚', '李小璐', '孟非', '贾乃亮', '王自健'], //点赞列表
    reply_list: [{
        content: '还有三年就到猪年了，答应我，你们的热情不要过去好吗', //回复内容
        to: '马德华', //回复人姓名
      }, {
        content: '几代人的情怀……猴年不让猴王上春晚，也是醉了', //回复内容
        to: '孟非' //被回复人姓名
      }, {
        content: '甜馨挚爱的孙悟空啊！金星姐，能给安排甜馨见见她偶像不？', //回复内容
        to: '李小璐'
      }, {
        content: '我将参加中央电视台春节戏曲晚会，暂定大年初三播出，欢迎大家收看。',
        to: '六小龄童',
      }, {
        content: '嘤嘤嘤',
        to: '{{nickname}}',
      }] //回复列表
  }, {
    avatar: '../img/avatar/李易峰-头像.jpg', //头像url
    user_name: '李易峰', //用户名
    content: '把乐带回家。', //文字内容
    imgs: ['../img/img_big/李易峰-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['蔡依林', '罗志祥', '六小龄童', '杨幂', '南派三叔'], //点赞列表
    reply_list: [{
        content: '穿秋裤了吗？', //回复内容
        to: '杨幂', //回复人姓名
      }, {
        content: '你不参加春晚彩排了？', //回复内容
        to: '杨洋' //被回复人姓名
      }, {
        content: '马上到北京，晚上吃饭你把{{nickname}}介绍给我认识呗', //回复内容
        to: '杨洋',
        from: '李易峰'
      }, {
        content: '好吧……', //回复内容
        from: '杨洋',
        to: '李易峰'
      }, ] //回复列表
  }, {
    avatar: '../img/avatar/彭阿姨-头像.jpg', //头像url
    user_name: '彭阿姨', //用户名
    content: '翻旧照片，找到和{{nickname}}小时候的合影，那年他才2岁。今年小{{nickname}}第一次登上春晚舞台，希望大家多多捧场。', //文字内容
    imgs: ['../img/img_big/彭阿姨-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['毕福剑', '朱军', '董卿', '周涛', '撒贝宁', '赵本山', '宋丹丹', '倪萍', '毛阿敏', '宋祖英', '赵忠祥', '姨夫'], //点赞列表
    reply_list: [{
        content: '多谢彭姨为我加油，我一定不辜负您的期望，好好努力表现！', //回复内容
        to: '{{nickname}}', //回复人姓名
      }, {
        content: '遇到困难和我说，别太辛苦了。', //回复内容
        to: '{{nickname}}', //被回复人姓名
        from: '姨夫'
      }, {
        content: '恩~姨夫么么哒', //回复内容
        to: '姨夫',
        from: '{{nickname}}'
      }] //回复列表
  }, {
    avatar: '../img/avatar/贾玲-头像.jpg', //头像url
    user_name: '贾玲', //用户名
    content: '在我之后，又将有一位女神级演员登上春晚舞台——{{nickname}}，我们的共同点就是：都有一个尖下巴！', //文字内容
    imgs: ['../img/img_big/贾玲-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['白凯南', '包贝尔', '大张伟', '吴秀波', '王凯KKW'], //点赞列表
    reply_list: [{
        content: '这大脸巴子吓我一哆嗦……', //回复内容
        to: '白凯南', //回复人姓名
      }, {
        content: '还是你比较美', //回复内容
        to: '吴秀波' //被回复人姓名
      }, {
        content: '你们还有一个共同点：脸大', //回复内容
        to: '大张伟'
      }] //回复列表
  }, {
    avatar: '../img/avatar/盛一伦-头像.jpg', //头像url
    user_name: '盛一伦', //用户名
    content: '这样拍照，要帅一点。', //文字内容
    imgs: ['../img/img_big/盛一伦-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['张天爱', '于朦胧', '{{nickname}}', '侣皓吉吉', '林更新', '何炅', '李维嘉'], //点赞列表
    reply_list: [{
        content: '黄桑，你什么时候都帅！', //回复内容
        to: '{{nickname}}', //回复人姓名
      }, {
        content: '哪个小婊砸！', //回复内容
        to: '张天爱' //被回复人姓名
      }, {
        content: '哪个小婊砸！', //回复内容
        to: '于朦胧' //被回复人姓名
      }, {
        content: '哪个小婊砸！', //回复内容
        to: '咪蒙' //被回复人姓名
      }, {
        content: '哪个小婊砸！', //回复内容
        to: '燕公子' //被回复人姓名
      }, {
        content: '哪个小婊砸！', //回复内容
        to: '薛好大' //被回复人姓名
      }] //回复列表
  }, {
    avatar: '../img/avatar/杨颖-头像.jpg', //头像url
    user_name: '杨颖', //用户名
    content: '{{nickname}}，春晚排练累瘦了吧，直播完了来家里，我让晓明叔叔做大餐！', //文字内容
    imgs: ['../img/img_big/杨颖-配图.jpg'], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: ['郑恺', '晓明', '黄渤', '陈坤', '井柏然', '陈赤赤', '李晨', '鹿晗', '何炅'], //点赞列表
    reply_list: [{
        content: '晓明会做饭吗！也就会做个西红柿鸡蛋面，哈哈哈哈', //回复内容
        from: '', //回复人姓名
        to: '井柏然' //被回复人姓名
      }, {
        content: 'Baby 我又来赞你啦~~', //回复内容
        from: '',
        to: '郑恺' //被回复人姓名
      }, {
        content: '谢谢Baby！直播结束就去你家，我带上那谁一块儿',
        from: '',
        to: '{{nickname}}'
      }, {
        content: '好！欢迎Mr凡~~',
        from: '杨颖',
        to: '{{nickname}}'
      }] //回复列表
  }, {
    avatar: '../img/avatar/毕福剑-头像.jpg', //头像url
    user_name: '毕福剑', //用户名
    content: '你咋不上天呢？', //文字内容
    imgs: [userInfo.headimgurl], //状态图片url
    post_time: '2小时前', //信息发送时间
    liked_list: [], //点赞列表
    reply_list: [{
        content: '人家凭自己本事登上春晚，你也是凭自己本事作下春晚，成年人要为自己做的事负责，有时间在这鼻子不鼻子脸不是脸的，还不如好好琢磨琢磨怎么回到屏幕上！', //回复内容
        from: '', //回复人姓名
        to: '金星' //被回复人姓名
      }, {
        content: '+1', //回复内容
        to: '金星', //被回复人姓名
        from: '陈赤赤'
      }, {
        content: '+1', //回复内容
        to: '金星', //被回复人姓名
        from: '范爷'
      }, {
        content: '+1', //回复内容
        to: '金星', //被回复人姓名
        from: '周涛'
      }, {
        content: '+10086', //回复内容
        to: '金星', //被回复人姓名
        from: '林更新'
      }] //回复列表
  }],
  //随机背景图url
  background: [
    'www.baidu.com'
  ]
};

//连在一起的

var speData = [{
  avatar: '../img/avatar/孙俪-头像.jpg', //头像url
  user_name: '俪姐', //用户名
  content: '《芈月传2》和2016年春晚，你们更期待哪个？一个有我，一个有{{nickname}}，想好了再回答。', //文字内容
  imgs: ['../img/img_big/孙俪-配图.jpg'], //状态图片url
  post_time: '2小时前', //信息发送时间
  liked_list: ['邓超', '何炅', '马苏', '刘涛', '春申君黄轩', '贾跃亭', '马化腾', '张朝阳', '马云', '{{nickname}}', '方中信'], //点赞列表
  reply_list: [{
    content: '娘娘，《芈月传2》给乐视独家版权吧！', //回复内容
    to: '贾跃亭', //回复人姓名
  }, {
    content: '版权金要多少，尽管开口，小马哥必定拿下。', //回复内容
    to: '马化腾' //被回复人姓名
  }, {
    content: '娘娘版权给优酷吧！送你一个淘宝钻石级VIP会员，全场无限额消费', //回复内容
    to: '马云'
  }, {
    content: '当然是想看娘娘啦！娘娘千秋万代一统江湖！',
    to: '何炅'
  }, {
    content: '最期待《芈月传2》，看我怎么玩转后宫！',
    to: '马苏'
  }, {
    content: '期待和妹妹一起出演芈月2~',
    to: '刘涛'
  }, {
    content: '其实我还挺想在春晚上看到{{nickname}}的……',
    to: '邓超'
  }, {
    content: '回家等着你',
    to: '俪姐'
  }, {
    content: '娘娘，我错了！！！',
    to: '俪姐',
    from: '邓超'
  }]
}, {
  avatar: '../img/avatar/范冰冰-头像.jpg', //头像url
  user_name: '范爷', //用户名
  content: '感谢康熙的邀请，有幸录制最后一期，虽然康熙结束了，但是【我们】会一直走下去的', //文字内容
  imgs: ['../img/img_big/范冰冰-配图.jpg'], //状态图片url
  post_time: '2小时前', //信息发送时间
  liked_list: ['李晨', '康永哥', '小S', '邓超', '林心如', '周杰', '苏有朋', '{{nickname}}'], //点赞列表
  reply_list: [{
      content: '天涯海角，有我相伴！', //回复内容
      to: '李晨', //回复人姓名
    }, {
      content: '呵呵', //回复内容
      to: '赵薇' //被回复人姓名
    }, {
      content: '天啊！我的腿好白哦', //回复内容
      to: '小S'
    }, {
      content: '但是好像有点短哦',
      to: '小S',
      from: '范爷'
    }, {
      content: '拜托！你腿那么粗，有什么资格说我',
      to: '范爷',
      from: '小S'
    }, {
      content: '你的腿又白又细又长，就是少女的腿啊~~',
      to: '小S',
      from: '康永哥'
    }, {
      content: '哈哈哈，您大人大量，不要和熙娣计较啦……',
      to: '范爷',
      from: '康永哥'
    }]
}];
var randomList = [];
var trendsList = decodeURIComponent(paramParse('trends'));
if(trendsList && trendsList !== 'undefined') {
  trendsList = trendsList.split(',');
  if(userInfo.sex == 1) {
    friendData.man.forEach(function(item) {
      if(~trendsList.indexOf(item.user_name)) {
        randomList[randomList.length] = item;
      }
    })
  } else {
    friendData.woman.forEach(function(item) {
      if(~trendsList.indexOf(item.user_name)) {
        randomList[randomList.length] = item;
      }
    })
  }
} else {
  randomList = shuffle(userInfo.sex == 1 ? friendData.man : friendData.woman, 5);
}

// var randomList = userInfo.sex == 1 ? friendData.man : friendData.woman;
var postTimeList = ['1分钟前', '5分钟前', '20分钟前', '半小时前', '1小时前', '3小时前']

var listResult = randomList.slice(0);

// TODO, 两个同时出现
//邓超连在一起
randomList.forEach(function(item, index) {
  if (item.user_name == '邓超') {
    if (index == 4) {
      listResult.splice(3, 1);
      listResult[4] = speData[0];
    } else {
      listResult.splice(index + 1, 1, speData[0]);
    }
  }
});

//张馨予连在一起
randomList.forEach(function(item, index) {
  if (item.user_name == '张馨予') {
    if (index == 4) {
      listResult.splice(3, 1);
      listResult[4] = speData[1];
    } else {
      listResult.splice(index + 1, 1, speData[1]);
    }
  }
});

listResult.forEach((item) => {
  item.content = item.content && item.content.replace(/{{nickname}}/g, userInfo.nickname)
  item.liked_list = item.liked_list.map((liked) => {
    if (liked == '{{nickname}}') {
      liked = liked.replace(/{{nickname}}/, userInfo.nickname);
    }
    return liked;
  })
  item.reply_list = item.reply_list.map((reply) => {
    reply.content = reply.content && reply.content.replace(/{{nickname}}/g, userInfo.nickname)
    reply.from = reply.from && reply.from.replace(/{{nickname}}/, userInfo.nickname)
    console.log(userInfo.nickname)
    reply.to = reply.to && reply.to.replace(/{{nickname}}/, userInfo.nickname)
    return reply;
  })
})



var adData = {
  avatar: '../img/avatar/夺宝联萌-头像.jpg', //头像url
  user_name: '夺宝联萌', //用户名
  content: '全新SRPG沙盒对战手游<br>今日强势登陆AppStore', //文字内容
  imgs: ['../img/img_big/夺宝联萌-配图.gif'], //状态图片url
  post_time: '2小时前', //信息发送时间
  liked_list: ['王思聪', '叫兽易小星', '杨颖', '林更新', '陈赫', '郑恺'], //点赞列表
  isAd: true,
  link: 'http://dblm.ezone.cn/',
  reply_list: [{
      content: '来找我谈谈熊猫TV直播的事', //回复内容
      from: '', //回复人姓名
      to: '王思聪' //被回复人姓名
    }, {
      content: '这什么游戏？', //回复内容
      to: '郑恺', //被回复人姓名
      from: ''
    }, {
      content: '好玩吗？', //回复内容
      to: '王思聪', //被回复人姓名
      from: '林更新'
    }, {
      content: '《煮妇神探》大结局，你们看了吗？', //回复内容
      to: '贾乃亮', //被回复人姓名
      from: ''
    }, {
      content: '天霸动霸Tuà系列T恤卫衣已经上架，还有最新【添财】系列，新年新款你值得拥有！', //回复内容
      to: '陈赫', //被回复人姓名
      from: ''
    }] //回复列表
}

//插入广告
listResult.splice(2, 0, adData)

//时间顺序
listResult.forEach(function(item, index) {
  item.post_time = postTimeList[index] || postTimeList[Math.abs(index - postTimeList.length)]
});
// 随机背景图
function randomBg() {
  var randomBg = Math.ceil(Math.random() * 14);
  console.log(randomBg)
  $('._show').style.backgroundImage = 'url(../img/img_big/' + (randomBg || 1) + '.jpeg)';
}

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

// wx.onMenuShareTimeline({
//     title: '我要上春晚', // 分享标题
//     link: 'http://weixin.ezone.cn/view/index.html', // 分享链接
//     imgUrl: '', // 分享图标
//     success: function () {
//         // 用户确认分享后执行的回调函数
//
//     },
//     cancel: function () {
//         // 用户取消分享后执行的回调函数
//     }
// });
//
// wx.onMenuShareAppMessage({
//     title: '', // 分享标题
//     desc: '', // 分享描述
//     link: '', // 分享链接
//     imgUrl: '', // 分享图标
//     type: '', // 分享类型,music,'video或link，不填默认为link'
//     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//     success: function () {
//         // 用户确认分享后执行的回调函数
//     },
//     cancel: function () {
//         // 用户取消分享后执行的回调函数
//     }
// });


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
    $('title').innerText = '听说' + userInfo.nickname + '要上春晚，朋友圈竟然变这样!';
    //图片放大
    $('#list').addEventListener('click', function(e) {
      var target = e.target;
      if (target.className == 'list-img ad-img') {
        $('.modal').className = 'modal';

        $('.modal-container').innerHTML = '<img src=' + target.src + '>';
        document.body.style.overflow = 'hidden';
      }
    });
    //取消
    $('.modal').addEventListener('click', function(e) {
      this.className = 'modal hide';
      $('.modal').innerHTML = '<div class="modal-container"></div>'
      document.body.style.overflow = 'scroll';
    });
    //随机背景
    randomBg();
    //点击分享
    $('#share_to_friend').addEventListener('click', function(e) {
      $('.modal').className = 'modal';
      $('.modal').innerHTML = '<img class="arrow" src="../img/jiantou.png" alt=""><div class="modal-container"><img class="share_bz" src="../img/baozou.png" alt=""></div>'
    });
    var localUserInfo = localStorage.getItem('userInfo') && localStorage.getItem('userInfo') !== 'undefined' && JSON.parse(localStorage.getItem('userInfo')) || {};
    //跳转至用户授权页
    $('#share a').addEventListener('click', function(e) {
      e.preventDefault();
      //拿到appid, 生成随机state, scope为'snsapi_userinfo'
      var state = Math.random().toString(36).substr(2);
      var redirect_uri = encodeURIComponent('http://weixin.ezone.cn/view/shake.html');
      if(localUserInfo && localUserInfo.nickname) {
        location.href = '../shake.html';
      } else {
        location.href = generateRedirectUrl('wx693582460d15cb5e', redirect_uri, 'snsapi_userinfo', state);
      }
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
