!function(t){function n(e){if(o[e])return o[e].exports;var i=o[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var o={};return n.m=t,n.c=o,n.p="../dist/",n(0)}([function(t,n,o){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function i(t){return document.querySelector(t)}function a(t){if(location.search){var n=location.search.split("#")[0],o=n.slice(1).split("&"),e={};return o.forEach(function(t){var n=t.split("=");e[n[0]]=n[1]}),t?e[t]:e}}function m(t){return a(t)&&"undefined"!==a(t)&&decodeURIComponent(a(t))?JSON.parse(decodeURIComponent(a(t))):void 0}function c(){var t=Math.ceil(14*Math.random());console.log(t),i("._show").style.backgroundImage="url(../img/img_big/"+(t||1)+".jpeg)"}function r(t,n){for(var o,e,i=t.length;0!==i;)e=Math.floor(Math.random()*i),i-=1,o=t[i],t[i]=t[e],t[e]=o;return t.slice(0,n)}function s(){}function g(t,n,o,e){return"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+t+"&redirect_uri="+n+"&response_type=code&scope="+o+"&state="+e+"#wechat_redirect"}var l=o(7),p=e(l),f=m("userInfo"),d=f&&f.nickname;f&&"undefined"!=f&&d||(f={openid:"ofFh1t72qWRyN8V86w8qagrnBt68",nickname:"夺宝联萌",sex:1,language:"en",city:"海淀",province:"北京",country:"中国",headimgurl:"http://wx.qlogo.cn/mmopen/XRES4dfLkwm9vicNBB0RaVqiaEImQibGDGvIerBPSk3HXMIZiaA6WRsrZS7DBvMj7myykBtcbJ9NyxYJm98q0gJ6ba2Sib6icBzt0f/0",privilege:[]}),i("#user-name").innerText=f.nickname,i("#avt").src=f.headimgurl;var A={man:[{avatar:"../img/avatar/柳岩-头像.jpg",user_name:"奶岩",content:"{{nickname}}你要上春晚啦！带上我好不咯？ 么么哒！",imgs:["../img/img_big/柳岩-配图.jpg"],post_time:"2小时前",liked_list:["邓超","大鹏","郭德纲","小沈阳","小岳岳","于莎莎","大宝剑乔杉"],reply_list:[{content:"岩岩，不说好要拍煎饼侠2吗!",from:"",to:"大鹏"},{content:"他带上你，你带上我好不咯？",to:"大宝剑乔杉"},{content:"她带上你，你带上我好不咯？",from:"于莎莎",to:"大宝剑乔杉"},{content:"上春晚找我啊，我也能带你上！",from:"",to:"小岳岳"},{content:"乖，我今天晚点回去，你早点睡。",from:"",to:"{{nickname}}"}]},{avatar:"../img/avatar/邓超-头像.jpg",user_name:"邓超",content:"我一点都不想看{{nickname}}上春晚，今年春节我根本就不看春晚！我要和娘娘、等等和小花来一场说走就走的旅行!",imgs:["../img/img_big/邓超-配图.jpg"],post_time:"2小时前",liked_list:["李晨","陈赤赤","郑恺","杨颖","晓明","王祖蓝","包贝尔","王宝强","谢娜"],reply_list:[{content:"家庭地位一目了然！",to:"陈赤赤"},{content:"家庭地位一目了然！",to:"郑恺"},{content:"家庭地位一目了然！",to:"李晨"},{content:"好像你多高似的",to:"李晨",from:"邓超"},{content:"邓叔叔棒棒哒~~晓明叔叔@黄晓明，我们什么时候去度假？",to:"杨颖"},{content:"baby，不是说好了2016年要安心造人么",from:"晓明",to:"杨颖"},{content:",",from:"杨颖",to:"晓明"},{content:"(⊙o⊙)哦！",from:"邓超",to:"晓明"},{content:"(⊙o⊙)哦！",from:"李晨",to:"晓明"},{content:"(⊙o⊙)哦！",from:"陈赤赤",to:"晓明"},{content:"(#‵′)靠！",from:"郑恺",to:"晓明"}]},{avatar:"../img/avatar/周杰伦-头像.jpg",user_name:"周杰伦(工作)",content:"{{nickname}}听说你游戏打的不错哦，改天我们一起开黑双排吧~",imgs:["../img/img_big/周杰伦-配图.jpg"],post_time:"2小时前",liked_list:["王思聪","杨颖","陈赤赤","张靓颖","林更新"],reply_list:[{content:"九保一战术？",from:"",to:"陈赤赤"},{content:"一定要来熊猫TV直播啊，周董！",to:"王思聪"},{content:"最近没时间啦，春晚排练挺忙的，你哪天来公司找我吧，望京SOHO塔2B座",from:"于莎莎",to:"{{nickname}}"},{content:"2B座？",from:"周杰伦(工作)",to:"{{nickname}}"},{content:"o(╯□╰)o望京SOHO塔2，B座",from:"{{nickname}}",to:"周杰伦(工作)"}]},{avatar:"../img/avatar/杨颖-头像.jpg",user_name:"杨颖",content:"{{nickname}}，春晚排练累瘦了吧，直播完了来家里，我让晓明叔叔做大餐！",imgs:["../img/img_big/杨颖-配图.jpg"],post_time:"2小时前",liked_list:["郑恺","晓明","黄渤","陈坤","井柏然","陈赤赤","李晨","鹿晗","何炅"],reply_list:[{content:"晓明会做饭吗！也就海边捞点嘎啦",from:"",to:"黄渤"},{content:"就会做个西红柿鸡蛋面，哈哈哈哈",to:"黄渤",from:"井柏然"},{content:"Baby 我又来赞你啦~~",from:"",to:"郑恺"},{content:"渤哥也一起来喝点啊",from:"晓明",to:"黄渤"},{content:"谢谢嫂子！直播结束就去你家，我带上丽颖一块儿，饭还是让丽颖做",from:"",to:"{{nickname}}"}]},{avatar:"../img/avatar/易烊千玺-头像.jpg",user_name:"易烊千玺",content:"本boy特别开心，因为{{nickname}}哥哥要和我们一起上！春！晚！啦！",imgs:["../img/img_big/易烊千玺-配图.jpg"],post_time:"2小时前",liked_list:["王俊凯","王源","贾乃亮","{{nickname}}","杜淳","杨颖","大鹏"],reply_list:[{content:"艾玛，俊凯是表示不服吗？@{{nickname}}",from:"",to:"贾乃亮"},{content:"看本宝宝高冷的美貌！",to:"王源"},{content:"你敢不敢换一张！连拍那么多张，你非得用这张……",from:"",to:"王俊凯"},{content:"嘿嘿嘿",from:"易烊千玺",to:"王俊凯"},{content:"高冷boy你悠着点笑啊，小舌头都看见了",from:"{{nickname}}",to:"易烊千玺"},{content:"嘿嘿嘿",from:"易烊千玺",to:"{{nickname}}"}]},{avatar:"../img/avatar/毕福剑-头像.jpg",user_name:"毕福剑",content:"你咋不上天呢？",imgs:[f.headimgurl],post_time:"2小时前",liked_list:[],reply_list:[{content:"人家凭自己本事登上春晚，你也是凭自己本事作下春晚，成年人要为自己做的事负责，有时间在这鼻子不鼻子脸不是脸的，还不如好好琢磨琢磨怎么回到屏幕上！",from:"",to:"金星"},{content:"+1",to:"金星",from:"陈赤赤"},{content:"+1",to:"金星",from:"范爷"},{content:"+1",to:"金星",from:"周涛"},{content:"+10086",to:"金星",from:"林更新"}]},{avatar:"../img/avatar/张燕-头像.jpg",user_name:"张馨予",content:"二手货有什么好的",imgs:["../img/img_big/张燕-配图.jpg"],post_time:"2小时前",liked_list:["张予曦","张艺馨","张歆艺","姚笛","王大治","叶梓萱"],reply_list:[{content:"爱过，恨过，只怪我们错过。",to:"姚笛"},{content:"妹，哥懂你心里的苦，哪天找你好好唠唠心里话。",to:"王大治"},{content:"小燕，别闹心了，改天约上姐妹们一起唱K",to:"叶梓萱"},{content:"谢谢哥",to:"王大治",from:"张馨予"}]},{avatar:"../img/avatar/王思聪-头像.jpg",user_name:"王思聪",content:"欠快播会员的各位亲赶紧来补！",imgs:["../img/img_big/王思聪-配图-b.jpg"],post_time:"2小时前",liked_list:["杨颖","陈赫","贾乃亮","邓超","大鹏","林更新","张馨予","张予曦","叫兽易小星"],reply_list:[{content:"快播是什么？",to:"易烊千玺"},{content:"爱过。",to:"大鹏"},{content:"管你卵事",to:"陈赫"},{content:"快播你有股份啊？",to:"林更新"},{content:"你个傻X",to:"林更新",from:"王思聪"}]},{avatar:"../img/avatar/苍井空-头像.jpg",user_name:"苍井空",content:"微信的新功能，蛮有趣的呢",imgs:["../img/img_big/苍井空-配图.jpg"],post_time:"2小时前",liked_list:["100000+人看了照片"],reply_list:[{content:"打码的毛片儿我都不看，我看打码的自拍？",to:"王思聪"},{content:"已经刷不起朋友圈了……",to:"林更新"}]},{avatar:"../img/avatar/张天爱-头像.jpg",user_name:"太子妃张天爱",content:"宝贝儿，你就是那春茶，我就是那刚烧开的水，我想泡你啊！",imgs:["../img/img_big/张天爱-配图.jpg"],post_time:"2小时前",liked_list:["贾跃亭","甘薇","盛一伦","侣皓吉吉","海铃","江奇霖"],reply_list:[{content:"太子妃重播上线啦",to:"贾跃亭"},{content:"一个大写、加粗的污！",to:"{{nickname}}"},{content:"太污了！但是，朕心悦！",to:"盛一伦"},{content:"秀恩爱，死得快！",to:"盛一伦",from:"于朦胧"},{content:"秀恩爱，死得快！",to:"盛一伦",from:"郭俊辰"},{content:"秀恩爱，死得快！",to:"盛一伦",from:"绿王"},{content:"上春晚了不起哈？等着哥去壁咚你！",to:"{{nickname}}",from:"太子妃张天爱"},{content:"你追我啊, 如果追到我, 我就和你嘿嘿嘿...",from:"{{nickname}}",to:"太子妃张天爱"}]},{avatar:"../img/avatar/陈赫-头像.jpg",user_name:"陈赤赤",content:"【给本天才一条广告的时间】天霸动霸Tuà终于变成实物能让天才们抱回家啦，不论你是天才还是学霸都该拥有属于自己态度的潮物，Tuà就是屌炸天！无论是Tuà字基本款T恤还是撞色特别款，都是回馈给天才们最好品质的新年礼物！还有最新【添财】系列全新上线！我已经穿上啦，你们的呢？",imgs:["../img/img_big/陈赫-配图.jpg"],post_time:"2小时前",liked_list:["张梓萱","郑恺","李晨","杨颖","邓超","鹿晗"],reply_list:[{content:"天天刷屏卖衣服，你烦不烦？",to:"杨颖"},{content:"天天刷屏卖衣服，你烦不烦？",to:"孙艺洲"},{content:"天天刷屏卖衣服，你烦不烦？",to:"李晨"},{content:"天天刷屏卖衣服，你烦不烦？",to:"邓超",from:""},{content:"天天刷屏卖衣服，你烦不烦？",to:"李佳航",from:""},{content:"已屏蔽",to:"娄艺潇",from:""}]},{avatar:"../img/avatar/金星-头像.jpg",user_name:"金星",content:"美猴王不让上，什么乱七八糟的反而都上了。他都57了，下一个猴年他可能就耍不了猴戏了，这会儿你们怎么看不见他的努力啊？语言类节目这么少，开心麻花被砍掉，美猴王也不请，吉祥物还那么丑，导演你咋不上天？你咋不上西天呢？！",imgs:["../img/img_big/金星-配图.jpg"],post_time:"2小时前",liked_list:["韩红","冯小刚","李小璐","孟非","贾乃亮","王自健","郭德纲"],reply_list:[{content:"还有三年就到猪年了，答应我，你们的热情不要过去好吗",to:"马德华"},{content:"几代人的情怀……猴年不让猴王上春晚，也是醉了",to:"孟非",from:""},{content:"甜馨挚爱的孙悟空啊！金星姐，能给安排甜馨见见她偶像不？",to:"李小璐",from:""},{content:"多想一到零点时，金门大开，六小龄童穿着战甲，戴着雉毛翎 ，耍着金箍棒大喊",to:"王自健",from:""},{content:"俺老孙来也，想想就能泪奔。",to:"一声"},{content:"我将参加中央电视台春节戏曲晚会，暂定大年初三播出，欢迎大家收看。",to:"六小龄童",from:""},{content:"我就喜欢你看不惯我，却不得不和我一同建设中国特色社会主义的样子。",to:"{{nickname}}",from:""},{content:"给你脸了！",to:"{{nickname}}",from:"金星"}]},{avatar:"../img/avatar/郭德纲-头像.jpg",user_name:"郭德纲",content:"欢乐喜剧人第二季，希望大家支持。即使不上春晚，也可以让您笑口常开。",imgs:["../img/img_big/郭德纲-配图.jpg"],post_time:"2小时前",liked_list:["{{nickname}}","岳云鹏","孙越","小沈阳","杨树林","艾伦","王宁","沈腾","马丽","贾玲","唐从圣","赵正平","吴秀波","宋丹丹","冯小刚"],reply_list:[{content:"师父多年位春晚输送相声人才，多少人的勋章都有您的一半！",to:"岳云鹏"},{content:"虽然节目不可能让所有观众都满意，但是我们对节目的诚意是十足的，我的搞笑是认真的！",to:"小沈阳",from:""},{content:"郭老板这张照片，显得脸挺瘦啊",to:"冯小刚"},{content:"作为东北F4，小沈阳你可别给我们丢人啊",to:"小沈阳",from:"尼古拉斯赵四"},{content:"这一季主持人颜值略低啊",to:"吴秀波",from:""}]},{avatar:"../img/avatar/胡歌-头像.jpg",user_name:"胡歌",content:"猴年春晚，我在泉州等你！",imgs:["../img/img_big/胡歌-配图.jpg"],post_time:"2小时前",liked_list:["许茹芸","靳东","刘涛","王凯KKW","霍建华","袁弘","安以轩","唐嫣","刘诗诗","林依晨","刘亦菲","杨幂"],reply_list:[{content:"我带瓶好酒过去",to:"霍建华"},{content:"么么哒",to:"霍建华",from:"胡歌"},{content:"后面那人是谁？",to:"王凯KKW"},{content:"是{{nickname}}，昨晚一起喝的酒",to:"王凯KKW",from:"胡歌"},{content:"为什么不找我一起？",to:"胡歌",from:"王凯KKW"},{content:"我俩今年都参加春晚，正好彩排完了喝一杯……",to:"王凯KKW",from:"胡歌"},{content:"嘤嘤嘤嘤（宝宝心里苦，但是宝宝不说）",to:"胡歌",from:"王凯KKW"}]},{avatar:"../img/avatar/彭阿姨-头像.jpg",user_name:"彭阿姨",content:"翻旧照片，找到和{{nickname}}小时候的合影，那年他才2岁。今年小{{nickname}}第一次登上春晚舞台，希望大家多多捧场。",imgs:["../img/img_big/彭阿姨-配图.jpg"],post_time:"2小时前",liked_list:["毕福剑","朱军","董卿","周涛","撒贝宁","赵本山","宋丹丹","倪萍","宋祖英","赵忠祥","王岐山","李克强","姨夫"],reply_list:[{content:"多谢彭阿姨为我加油，我一定不辜负您的期望，好好努力表现！",to:"{{nickname}}"},{content:"遇到困难和我说，别太辛苦了。",to:"{{nickname}}",from:"姨夫"},{content:"不辛苦！为人民服务！！！",to:"姨夫",from:"{{nickname}}"}]},{avatar:"../img/avatar/大鹏-头像.jpg",user_name:"大鹏",content:"我如果整成这样得多钱？",imgs:["../img/img_big/大鹏-配图.jpg"],post_time:"2小时前",liked_list:["小沈阳","岳云鹏","尼古拉斯赵四","大宝剑乔杉","白百合","邓超","吴秀波","吉泽明步","波多野结衣","蓝燕"],reply_list:[{content:"同问",to:"岳云鹏"},{content:"同问",to:"大宝剑乔杉",from:""},{content:"脸好整，主要是气质不行。",to:"大宝剑乔杉",from:"奶岩"},{content:"看，看，看我头像，整成我这样比较便宜。",to:"尼古拉斯赵四",from:""},{content:"整容，何で？他又没你帅",to:"波多野结衣",from:""},{content:"得倾家荡产吧，宝宝",to:"叫兽易小星",from:""}]}],woman:[{avatar:"../img/avatar/黄子韬-头像.jpg",user_name:"HZT黄子韬",content:"非常期待{{nickname}}姐在春晚的演出，我也要向{{nickname}}姐学习，坚持！努力！早晚有一天，我也会登上春晚的舞台！",imgs:["../img/img_big/黄子韬-配图.jpg"],post_time:"2小时前",liked_list:["{{nickname}}","宋茜","周觅","Kai","金俊勉","高云翔","陈一冰","潘玮柏"],reply_list:[{content:"wuli韬韬fighting！",from:"",to:"{{nickname}}"},{content:"동생 화이팅!",to:"金俊勉",from:""},{content:"红绿灯韬，fighting！",to:"周觅"},{content:"우리 토토一起努力，一起加油！",to:"宋茜"}]},{avatar:"../img/avatar/吴磊-头像.jpg",user_name:"吴磊LEO",content:"{{nickname}}姐姐，等我十年可好？",imgs:["../img/img_big/吴磊-配图.jpg"],post_time:"2小时前",liked_list:["胡歌","靳东","霍建华","刘涛","柳岩","贾玲"],reply_list:[{content:"三石啊，你会遇到更好的女孩~姐姐名花有主啦",from:"",to:"{{nickname}}"},{content:"不是让我等你吗！!",to:"贾玲",from:""},{content:"不要惦记我的女人",to:"胡歌"},{content:"宗主，我错了！！",to:"胡歌",from:"吴磊LEO"},{content:"她是你的女人？那我呢？",to:"胡歌",from:"霍建华"},{content:"你们四个怎么这么乱？",to:"胡歌",from:"靳东"}]},{avatar:"../img/avatar/王俊凯-头像.jpg",user_name:"王俊凯",content:"今天和{{nickname}}姐姐一起参加春晚彩排，有点小兴奋。",imgs:["../img/img_big/王俊凯-配图.jpg"],post_time:"2小时前",liked_list:["易烊千玺","王源","黄晓明","谢娜","何炅","杨颖"],reply_list:[{content:"她本人美不美？帮我要个签名呗！",from:"",to:"谢娜"},{content:"姐姐真美真仙真可爱，已经路转粉！!",to:"易烊千玺",from:""},{content:"三小只也很可爱很努力哦，有时间来姐姐家玩啊",to:"王俊凯",from:"{{nickname}}"},{content:"我已经要到她的签名啦，哈哈哈",to:"谢娜",from:"王源"}]},{avatar:"../img/avatar/陈学冬-头像.jpg",user_name:"陈学冬",content:"谢谢{{nickname}}送我的雪地靴，春晚fighting！",imgs:["../img/img_big/陈学冬-配图.jpg"],post_time:"2小时前",liked_list:["郭敬明","安东尼","落落","华晨宇","笛安","杨幂","谢依霖","郭碧婷"],reply_list:[{content:"是我不懂时尚",from:"",to:"韩火火"},{content:"穿双火箭筒？你咋不上天呢？!",to:"何炅",from:""},{content:"这个视角……是小四拍的吗？",to:"韩寒"},{content:"哥哥，这双鞋哪里有卖？",to:"张艺兴"}]},{avatar:"../img/avatar/吴亦凡-头像.jpg",user_name:"亦凡宝贝",content:"我喜欢女儿，希望以后能有一个像{{nickname}}的女儿~",imgs:["../img/img_big/吴亦凡-配图.jpg"],post_time:"2小时前",liked_list:["姚晨","韩寒","冯小刚","杨幂","张涵予","许晴"],reply_list:[{content:"哎呦喂，这恩爱秀我一脸！",from:"",to:"杨幂"},{content:"将来给我家土豆当媳妇啊!",to:"姚晨",from:""},{content:"来做我火华社的儿媳妇！",to:"刘烨"},{content:"亲爱的，记得穿秋裤",to:"{{nickname}}"},{content:"穿了你给我买的那套，爱心秋裤!",to:"{{nickname}}",from:"亦凡宝贝"}]},{avatar:"../img/avatar/杨洋-头像.jpg",user_name:"杨洋",content:"做个新发型，去见{{nickname}}",imgs:["../img/img_big/杨洋-配图.jpg"],post_time:"2小时前",liked_list:["郑爽","赵丽颖","唐嫣","杨幂","何炅","谢娜","李维嘉","吴昕","杜海涛"],reply_list:[{content:"你竟然认识{{nickname}}，求介绍！",from:"",to:"李易峰"},{content:"和我见面，连头都不洗!",to:"郑爽",from:""},{content:"小羊都不约我呢，姐姐不开心哼",to:"许晴"},{content:"快点，每次都迟到",to:"{{nickname}}"},{content:"为了见你，我得打扮帅点!",to:"{{nickname}}",from:"杨洋"}]},{avatar:"../img/avatar/王思聪-头像.jpg",user_name:"王思聪",content:"{{nickname}}，和我在一起，明年还让你上春晚！",imgs:["../img/img_big/王思聪-配图-g.jpg"],post_time:"2小时前",liked_list:["林更新","张予曦","袁成杰","杨颖","叫兽易小星","大鹏"],reply_list:[{content:"老公，求潜！",from:"",to:"林更新"},{content:"老公，求潜！!",to:"叫兽易小星",from:""},{content:"老公，我只想和你在一起，不上春晚也无所谓啊",to:"张予曦"},{content:"切",to:"{{nickname}}"}]},{avatar:"../img/avatar/张天爱-头像.jpg",user_name:"张天爱",content:"27亿播放量，太子妃重新上架，感谢全国的老婆们~么么哒",imgs:["../img/img_big/张天爱-配图.jpg"],post_time:"2小时前",liked_list:["贾跃亭","甘薇","{{nickname}}","侣皓吉吉","盛一伦","于朦胧","郭俊辰","江奇霖","海铃"],reply_list:[{content:"都删没了，唉，感觉你“老婆们”又要给我寄刀片了",from:"",to:"侣皓吉吉"},{content:"女神姐姐撩妹的镜头都木有啦，我和九哥跳舞的片段也木有啦! 呜呜呜",to:"郭俊辰",from:""},{content:"这画面太美，我没脸看……",to:"盛一伦"},{content:"太子妃张天爱男友力MAX！",to:"{{nickname}}"},{content:"娘娘~我们共舞的镜头都删了，嘤嘤嘤",to:"海铃"}]},{avatar:"../img/avatar/邓超-头像.jpg",user_name:"邓超",content:"我一点都不想看{{nickname}}上春晚，今年春节我根本就不看春晚！我要和娘娘、等等和小花来一场说走就走的旅行!",imgs:["../img/img_big/邓超-配图.jpg"],post_time:"2小时前",liked_list:["李晨","陈赤赤","郑恺","杨颖","晓明","王祖蓝","包贝尔","王宝强","谢娜"],reply_list:[{content:"家庭地位一目了然！",to:"陈赤赤"},{content:"家庭地位一目了然！",to:"郑恺"},{content:"家庭地位一目了然！",to:"李晨"},{content:"好像你多高似的",to:"李晨",from:"邓超"},{content:"邓叔叔棒棒哒~~晓明叔叔@黄晓明，我们什么时候去度假？",to:"杨颖"},{content:"baby，不是说好了2016年要安心造人么",from:"晓明",to:"杨颖"},{content:",",from:"杨颖",to:"晓明"},{content:"(⊙o⊙)哦！",from:"邓超",to:"晓明"},{content:"(⊙o⊙)哦！",from:"李晨",to:"晓明"},{content:"(⊙o⊙)哦！",from:"陈赤赤",to:"晓明"},{content:"(#‵′)靠！",from:"郑恺",to:"晓明"}]},{avatar:"../img/avatar/贾乃亮-头像.jpg",user_name:"贾乃亮",content:"甜馨叫王源哥哥，叫{{nickname}}姐姐，王源和{{nickname}}叫我亮哥，我是甜馨的爹……这辈儿咋这么乱？",imgs:["../img/img_big/贾乃亮-配图.jpg"],post_time:"2小时前",liked_list:["王源","李小璐","周星驰","易烊千玺","王俊凯","杜淳","甘薇","霍思燕","秦岚"],reply_list:[{content:"好喜欢小甜馨呢，亮哥，那以后叫你亮叔了",to:"王源"},{content:"那以后就叫你亮叔了",to:"{{nickname}}"},{content:"关系有点乱，可爱的小美人鱼也有害羞的时候",to:"周星驰"},{content:"贾老师，明年有档期上爸爸去哪儿第四季吗？",to:"谢涤葵"},{content:"爸爸回来了第三季也在找我，你还是和我经纪人谈吧",to:"谢涤葵",from:"贾乃亮"}]},{avatar:"../img/avatar/李小璐-头像.jpg",user_name:"李小璐",content:"前一阵子因为甜馨儿生病，都没顾上保养，今天趁着休息，边敷脸边看煮妇神探。这款动物面膜好玩又好敷，超级滋润水嫩，敷完皮肤水当当滑溜溜，想要的找我哦~",imgs:["../img/img_big/李小璐-配图.jpg"],post_time:"2小时前",liked_list:["甘薇","霍思燕","贾乃亮","熊乃瑾","王婧","李静","李艾","韩国面膜总代理","日韩面膜大中华代理"],reply_list:[{content:"我也敷上啦！",to:"贾乃亮"},{content:"用没用上次给你的静佳小样啊？我们现在有促销活动哦",to:"李静"},{content:"姐，面膜咋卖？",to:"{{nickname}}"},{content:"私聊",to:"{{nickname}}",from:"李小璐"}]},{avatar:"../img/avatar/金星-头像.jpg",user_name:"金星",content:"美猴王不让上，什么乱七八糟的反而都上了。他都57了，下一个猴年他可能就耍不动猴戏了，这会儿你们怎么看不见他的努力啊？语言类节目这么少，开心麻花被砍掉，美猴王也不请，吉祥物还那么丑，导演你咋不上天？你咋不上西天呢？！~",imgs:["../img/img_big/金星-配图.jpg"],post_time:"2小时前",liked_list:["韩红","冯小刚","李小璐","孟非","贾乃亮","王自健"],reply_list:[{content:"还有三年就到猪年了，答应我，你们的热情不要过去好吗",to:"马德华"},{content:"几代人的情怀……猴年不让猴王上春晚，也是醉了",to:"孟非"},{content:"甜馨挚爱的孙悟空啊！金星姐，能给安排甜馨见见她偶像不？",to:"李小璐"},{content:"我将参加中央电视台春节戏曲晚会，暂定大年初三播出，欢迎大家收看。",to:"六小龄童"},{content:"嘤嘤嘤",to:"{{nickname}}"}]},{avatar:"../img/avatar/李易峰-头像.jpg",user_name:"李易峰",content:"把乐带回家。",imgs:["../img/img_big/李易峰-配图.jpg"],post_time:"2小时前",liked_list:["蔡依林","罗志祥","六小龄童","杨幂","南派三叔"],reply_list:[{content:"穿秋裤了吗？",to:"杨幂"},{content:"你不参加春晚彩排了？",to:"杨洋"},{content:"马上到北京，晚上吃饭你把{{nickname}}介绍给我认识呗",to:"杨洋",from:"李易峰"},{content:"好吧……",from:"杨洋",to:"李易峰"}]},{avatar:"../img/avatar/彭阿姨-头像.jpg",user_name:"彭阿姨",content:"翻旧照片，找到和{{nickname}}小时候的合影，那年他才2岁。今年小{{nickname}}第一次登上春晚舞台，希望大家多多捧场。",imgs:["../img/img_big/彭阿姨-配图.jpg"],post_time:"2小时前",liked_list:["毕福剑","朱军","董卿","周涛","撒贝宁","赵本山","宋丹丹","倪萍","毛阿敏","宋祖英","赵忠祥","姨夫"],reply_list:[{content:"多谢彭姨为我加油，我一定不辜负您的期望，好好努力表现！",to:"{{nickname}}"},{content:"遇到困难和我说，别太辛苦了。",to:"{{nickname}}",from:"姨夫"},{content:"恩~姨夫么么哒",to:"姨夫",from:"{{nickname}}"}]},{avatar:"../img/avatar/贾玲-头像.jpg",user_name:"贾玲",content:"在我之后，又将有一位女神级演员登上春晚舞台——{{nickname}}，我们的共同点就是：都有一个尖下巴！",imgs:["../img/img_big/贾玲-配图.jpg"],post_time:"2小时前",liked_list:["白凯南","包贝尔","大张伟","吴秀波","王凯KKW"],reply_list:[{content:"这大脸巴子吓我一哆嗦……",to:"白凯南"},{content:"还是你比较美",to:"吴秀波"},{content:"你们还有一个共同点：脸大",to:"大张伟"}]},{avatar:"../img/avatar/盛一伦-头像.jpg",user_name:"盛一伦",content:"这样拍照，要帅一点。",imgs:["../img/img_big/盛一伦-配图.jpg"],post_time:"2小时前",liked_list:["张天爱","于朦胧","{{nickname}}","侣皓吉吉","林更新","何炅","李维嘉"],reply_list:[{content:"黄桑，你什么时候都帅！",to:"{{nickname}}"},{content:"哪个小婊砸！",to:"张天爱"},{content:"哪个小婊砸！",to:"于朦胧"},{content:"哪个小婊砸！",to:"咪蒙"},{content:"哪个小婊砸！",to:"燕公子"},{content:"哪个小婊砸！",to:"薛好大"}]},{avatar:"../img/avatar/杨颖-头像.jpg",user_name:"杨颖",content:"{{nickname}}，春晚排练累瘦了吧，直播完了来家里，我让晓明叔叔做大餐！",imgs:["../img/img_big/杨颖-配图.jpg"],post_time:"2小时前",liked_list:["郑恺","晓明","黄渤","陈坤","井柏然","陈赤赤","李晨","鹿晗","何炅"],reply_list:[{content:"晓明会做饭吗！也就会做个西红柿鸡蛋面，哈哈哈哈",from:"",to:"井柏然"},{content:"Baby 我又来赞你啦~~",from:"",to:"郑恺"},{content:"谢谢Baby！直播结束就去你家，我带上那谁一块儿",from:"",to:"{{nickname}}"},{content:"好！欢迎Mr凡~~",from:"杨颖",to:"{{nickname}}"}]},{avatar:"../img/avatar/毕福剑-头像.jpg",user_name:"毕福剑",content:"你咋不上天呢？",imgs:[f.headimgurl],post_time:"2小时前",liked_list:[],reply_list:[{content:"人家凭自己本事登上春晚，你也是凭自己本事作下春晚，成年人要为自己做的事负责，有时间在这鼻子不鼻子脸不是脸的，还不如好好琢磨琢磨怎么回到屏幕上！",from:"",to:"金星"},{content:"+1",to:"金星",from:"陈赤赤"},{content:"+1",to:"金星",from:"范爷"},{content:"+1",to:"金星",from:"周涛"},{content:"+10086",to:"金星",from:"林更新"}]}],background:["www.baidu.com"]},k=[{avatar:"../img/avatar/孙俪-头像.jpg",user_name:"俪姐",content:"《芈月传2》和2016年春晚，你们更期待哪个？一个有我，一个有{{nickname}}，想好了再回答。",imgs:["../img/img_big/孙俪-配图.jpg"],post_time:"2小时前",liked_list:["邓超","何炅","马苏","刘涛","春申君黄轩","贾跃亭","马化腾","张朝阳","马云","{{nickname}}","方中信"],reply_list:[{content:"娘娘，《芈月传2》给乐视独家版权吧！",to:"贾跃亭"},{content:"版权金要多少，尽管开口，小马哥必定拿下。",to:"马化腾"},{content:"娘娘版权给优酷吧！送你一个淘宝钻石级VIP会员，全场无限额消费",to:"马云"},{content:"当然是想看娘娘啦！娘娘千秋万代一统江湖！",to:"何炅"},{content:"最期待《芈月传2》，看我怎么玩转后宫！",to:"马苏"},{content:"期待和妹妹一起出演芈月2~",to:"刘涛"},{content:"其实我还挺想在春晚上看到{{nickname}}的……",to:"邓超"},{content:"回家等着你",to:"俪姐"},{content:"娘娘，我错了！！！",to:"俪姐",from:"邓超"}]},{avatar:"../img/avatar/范冰冰-头像.jpg",user_name:"范爷",content:"感谢康熙的邀请，有幸录制最后一期，虽然康熙结束了，但是【我们】会一直走下去的",imgs:["../img/img_big/范冰冰-配图.jpg"],post_time:"2小时前",liked_list:["李晨","康永哥","小S","邓超","林心如","周杰","苏有朋","{{nickname}}"],reply_list:[{content:"天涯海角，有我相伴！",to:"李晨"},{content:"呵呵",to:"赵薇"},{content:"天啊！我的腿好白哦",to:"小S"},{content:"但是好像有点短哦",to:"小S",from:"范爷"},{content:"拜托！你腿那么粗，有什么资格说我",to:"范爷",from:"小S"},{content:"你的腿又白又细又长，就是少女的腿啊~~",to:"小S",from:"康永哥"},{content:"哈哈哈，您大人大量，不要和熙娣计较啦……",to:"范爷",from:"康永哥"}]}],u=[],v=decodeURIComponent(a("trends"));v&&"undefined"!==v?(v=v.split(","),1==f.sex?A.man.forEach(function(t){~v.indexOf(t.user_name)&&(u[u.length]=t)}):A.woman.forEach(function(t){~v.indexOf(t.user_name)&&(u[u.length]=t)})):u=r(1==f.sex?A.man:A.woman,5);var _=["1分钟前","5分钟前","20分钟前","半小时前","1小时前","3小时前"],b=u.slice(0);u.forEach(function(t,n){"邓超"==t.user_name&&(4==n?(b.splice(3,1),b[4]=k[0]):b.splice(n+1,1,k[0]))}),u.forEach(function(t,n){"张馨予"==t.user_name&&(4==n?(b.splice(3,1),b[4]=k[1]):b.splice(n+1,1,k[1]))}),b.forEach(function(t){t.content=t.content&&t.content.replace(/{{nickname}}/g,f.nickname),t.liked_list=t.liked_list.map(function(t){return"{{nickname}}"==t&&(t=t.replace(/{{nickname}}/,f.nickname)),t}),t.reply_list=t.reply_list.map(function(t){return t.content=t.content&&t.content.replace(/{{nickname}}/g,f.nickname),t.from=t.from&&t.from.replace(/{{nickname}}/,f.nickname),console.log(f.nickname),t.to=t.to&&t.to.replace(/{{nickname}}/,f.nickname),t})});var j={avatar:"../img/avatar/夺宝联萌-头像.jpg",user_name:"夺宝联萌",content:"全新SRPG沙盒对战手游<br>今日强势登陆AppStore",imgs:["../img/img_big/夺宝联萌-配图.gif"],post_time:"2小时前",liked_list:["王思聪","叫兽易小星","杨颖","林更新","陈赫","郑恺"],isAd:!0,link:"http://dblm.ezone.cn/",reply_list:[{content:"来找我谈谈熊猫TV直播的事",from:"",to:"王思聪"},{content:"这什么游戏？",to:"郑恺",from:""},{content:"好玩吗？",to:"王思聪",from:"林更新"},{content:"《煮妇神探》大结局，你们看了吗？",to:"贾乃亮",from:""},{content:"天霸动霸Tuà系列T恤卫衣已经上架，还有最新【添财】系列，新年新款你值得拥有！",to:"陈赫",from:""}]};b.splice(2,0,j),b.forEach(function(t,n){t.post_time=_[n]||_[Math.abs(n-_.length)]});~location.href.indexOf("#")?location.href.slice(0,location.href.indexOf("#")):location.href,new Vue({el:"#list ul",data:{dataList:b},components:{friendList:p["default"]},ready:function(){s(),i("title").innerText="听说"+f.nickname+"要上春晚，朋友圈竟然变这样!",i("#list").addEventListener("click",function(t){var n=t.target;"list-img ad-img"==n.className&&(i(".modal").className="modal",i(".modal-container").innerHTML="<img src="+n.src+">",document.body.style.overflow="hidden")}),i(".modal").addEventListener("click",function(t){this.className="modal hide",i(".modal").innerHTML='<div class="modal-container"></div>',document.body.style.overflow="scroll"}),c(),i("#share_to_friend").addEventListener("click",function(t){i(".modal").className="modal",i(".modal").innerHTML='<img class="arrow" src="../img/jiantou.png" alt=""><div class="modal-container"><img class="share_bz" src="../img/baozou.png" alt=""></div>'});var t=localStorage.getItem("userInfo")&&"undefined"!==localStorage.getItem("userInfo")&&JSON.parse(localStorage.getItem("userInfo"))||{};i("#share a").addEventListener("click",function(n){n.preventDefault();var o=Math.random().toString(36).substr(2),e=encodeURIComponent("http://weixin.ezone.cn/view/shake.html");t&&t.nickname?location.href="./shake.html":location.href=g("wx693582460d15cb5e",e,"snsapi_userinfo",o)})}})},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={props:{dataList:Array},methods:{auto_play:function(){var t=document.getElementById("video");t.paused?t.play():t.pause()}},ready:function(){this.dataList.forEach(function(t){t.liked_list=t.liked_list.join(",")})}}},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZVJREFUeNrsl99tgzAQxgsLpBs0G7QbNA+8NxsUNkgnaLpBNihskDzDQ0agGzACmYB+lo7Kof6HMaGVzpIFkn32j+O+8znquu7ur7eIIRmSIRmSIRmSIf8nZFVV93gc0eskSXZLARFHjt6CI/2BpIEz+iPNPaGnmNQuAChzFAI0KstyONC3L/QtJjU3AnwijtVgqIjpRQUioGsynhsw1QD+ikkRB6+KORf0HTyazwS4x+NdM5yJfa/UTV/0qTH4gME+MKDJMUITR2UKguGW1KVyfUFebQMLZAi4wR61MU8agrgX1MYXlNYWHnpwXTtWLURfsSYjlaAaH0HRXzprAE+6jzeeOFJifbHFjaOCdfFe9Inb+1g0BLhob9jgMME+s2UO57PbxxPSUfs85U+MKjAsyr8KeorZ3FXBQasgB+X3Hg2WHbxKNYc8t9KYehUu3vWkRfmjFTxr0WtRrrOCTS2eev6SdzLN8GUqYNDrA6WogxSPoxR8szuOpPwmZMEc/CIG0DXdT4JdPfhKy5AMyZALtm8BBgBcZSmfEAdtWgAAAABJRU5ErkJggg=="},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAA2CAIAAAANjoPlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTExNDkwRDM1REI4MTFFNTlGQzg4MTYyMjlGQjBFQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTExNDkwRDQ1REI4MTFFNTlGQzg4MTYyMjlGQjBFQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTE0OTBEMTVEQjgxMUU1OUZDODgxNjIyOUZCMEVBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTE0OTBEMjVEQjgxMUU1OUZDODgxNjIyOUZCMEVBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqX+hS0AAAN2SURBVHja7JlZTxNRGIbb2btBN1pEVkWM0QuuuPSX8Wu892eYmGAERALBQvd12ukyLbN3fAdQNGzTJUXq+SChwOnLec63nsGrqqrHhWm6+eHjp05X8TxNozz/hxFOwkk4CSfhJJyEk3ASTsJJOAnnk+a0bY9l9W2P/XQ5mQdXmKYl97RcqWEY1nRywo2abtSb3bOceHCc13RzCjlt29YMs1Bu7h3lsoX6QKI0TdEU5XXMOSxIWX0Yvg4f+SNq3snZ6ii7h9nTXK3bU93vBrtgGfrlSmJtKZ6IzXAcoxtmXepmCmIqW9M0cwjUsWh6bz4HM0wrlakenhRrDRmxikNze+QUFY8GtzZfJOMzAs8xjHP+2AMyHDrVRmdn76wmyfh2ADeOSfMvf5pWv9U+Pz4r54oNqdUdKCERTtFIcPPt8vJCDPtxwuvXz+EBlqU5LmIYy4iRithx6dUxal5zIj7LtfZptpYp1hVVR+gPFF1+H7/0LLq+khR49tbY4zl2bWlOap/3FL0jKxPWdDjRG9tdJV+SAAlPWq4D9U+bDfkW5yO3bui34bcLibDY6LjkHKMmpWqGKMlw/efd03ReHA7yYk/+RHzmwWXxSDAaDk5ek8kU6l+/Z2uNDrw6SoMSeCYU4B9cFvDzfoGdvCZ12Son1q/7dt9+DE0Kpez91us36ws4lVH+mKqZKAYPLlNUQ1WNyWsyfh/HcWFkczQcSOfrpUpzuBSVu4rYkEMB4f5lUqvXbPcmr+nUW4am5mIhoAZ9CHQuV6qjOA0ay21ZKVSkhWT4nvII2WK1KTblyWvS29vbl6/QiCOzAXgVgPCo7kxCA7BiisJQEvDxoaBA07T3xgIMa2hdR6kyRrbJa15zOslKeZGli/NRlqG65xrm+IFQ8Qb0YZR4lsXs4nE+nE/0Z2dGQ4vb2T+riO1H0fTe9X9ezH1fvmVS2ariumxczdws/Wo1ubGWTMRneZaBT7CbH5nqSbqiDj3Hj6x5JyfaqaqbuWL94LiQL0sDDbosA7u6RuHmhJsA1HTDGrqBja7J3HPfQyleXZzzCVwsEjw+LSNO3IhiCdJGNzxjtNE173uegDzwCezz+QiSFpVgZz+N4ja1z8Fwx41HQ+82FjmWnvLnfd6LML4sdNPMOQVGOAkn4SSchJNwEk7CSTgJJ+EknP+q/RRgAHy/ls4oR33fAAAAAElFTkSuQmCC"},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAApCAIAAADBK1zlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEZGQkE2QUY1REI4MTFFNThBNkRDQkMxNjM5QjMyM0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZGQkE2QjA1REI4MTFFNThBNkRDQkMxNjM5QjMyM0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RkZCQTZBRDVEQjgxMUU1OEE2RENCQzE2MzlCMzIzRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RkZCQTZBRTVEQjgxMUU1OEE2RENCQzE2MzlCMzIzRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiyqYWMAAAfYSURBVHjaxFhZcxrZ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"},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAo1JREFUeNrsWNFtg0AMbar+Jxs0G5ROECrlP2wQskE2KJkgdIKSCUq+kw86QekGZAOYILWrR2WdDriDpKUSlixUUnyP8/Ozj9H5fL7pu93e/AMbQA4g+2Z31wp8PB5d3f35fJ7YxhpdQoII0JQuHtwhHzc8ciJPyRlwTMCzq4EkcD5d1uQPHd/znTyo2uXWIAHw9cIsYbBrApteCmRMl4W4VSB9CVKZ0mK5hhbsLnxWEX5Fz0aXAMn887FoCG7lljEmiMGUua8COupD7wZYBvqs/PTEPB31acDQ8PyTQDrGIKF7DtLrVPwbc5HlJFHJbwGUd3Qrbj3WghS8W7RYjwuJiyuyFXBaNxdau7mr2fZAQ2Yb40WW7BSPxdttEm0lIzNtWwSB4xppKEp5IVcreQIa6DrOPSQnMgQ51fZuAuhA48aaFhZBYlLDdDmgiSey4VhwX2Yw/eYkdjBTAJ7QqqKOFcuLZiap1mxUQc9Nyp2MFIA7tKe8q6yYFg1eJlZwBN9ifjgcGP2H+GFPgT3DyccFF2OLotDFCVBk0nYU0y856SmF4RvGj8X0s6XF9riXNAFGWl2spZugfgCWICWhE4sUx8oCi1JPCUQ50ehs1qCtXAehWt0T8bcNB0NIxbIFGJ3tADDTHR8SEdC1KAh+IZ92LRBTuS2wPdaP6jLIhcPB38S9DT0QdJScqSrIwjJIknGrLHUyUwR01VUfr3GkVSXnlSdvyMOf288UVHNmYUKHtqMXJigPhXVCjLATSBE4qjiSFvL80jBguJoYLwRy3RmkmITCGmlpa49tB+HKoVe0K8/gsF/3ESBGqrPOnDSQFVf06qqPAZ+QmNRmtPuVzyzDV7UB5AByANnOvgQYAElFNlYkU05eAAAAAElFTkSuQmCC"},function(t,n,o){t.exports='<li v-for="data in dataList"><div class=po-avt-wrap><img :src=data.avatar onerror="" class=po-avt></div><div class=po-cmt><div class=po-hd><p v-if=data.isAd class=ads><a :href=data.link>推广<img src='+o(2)+'></a></p><p class=po-name>{{data.user_name}}</p><div class=post>{{{data.content}}}</div><img v-for="img in data.imgs" :src=img class=list-img :class="{\'ad-img\':data.isAd}"><p><a v-if=data.isAd :href=data.link class=ad-link>查看详情 <img src='+o(5)+"></a></p><p class=time>{{data.post_time}}</p><img src="+o(3)+" class=c-icon></div><div class=r></div><div class=cmt-wrap><div v-if=data.liked_list.length class=like><img src="+o(4)+'><span class=data-name></span>{{data.liked_list}}</div><div class=cmt-list><p v-for="reply_item in data.reply_list"><span v-if=reply_item.from>{{reply_item.from}}<i>回复</i></span> <span>{{reply_item.to}}:</span>{{reply_item.content}}</p></div></div></div></li>'},function(t,n,o){var e,i;e=o(1),i=o(6),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)}]);