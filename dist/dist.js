!function(t){function n(e){if(o[e])return o[e].exports;var i=o[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var o={};return n.m=t,n.c=o,n.p="../dist/",n(0)}([function(t,n,o){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function i(t){return document.querySelector(t)}function a(t){if(location.search){var n=location.search.split("#")[0],o=n.slice(1).split("&"),e={};return o.forEach(function(t){var n=t.split("=");e[n[0]]=n[1]}),t?e[t]:e}}function m(t){return a(t)&&decodeURIComponent(a(t))?JSON.parse(decodeURIComponent(a(t))):void 0}function c(t,n){for(var o,e,i=t.length;0!==i;)e=Math.floor(Math.random()*i),i-=1,o=t[i],t[i]=t[e],t[e]=o;return t.slice(0,n)}function r(){}function s(t,n,o,e){return"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+t+"&redirect_uri="+n+"&response_type=code&scope="+o+"&state="+e+"#wechat_redirect"}var g=o(3),p=e(g),l=m("userInfo"),_=l&&l.nickname;l&&"undefined"!=l&&_||(l={openid:"ofFh1t72qWRyN8V86w8qagrnBt68",nickname:"MH",sex:1,language:"en",city:"海淀",province:"北京",country:"中国",headimgurl:"http://wx.qlogo.cn/mmopen/XRES4dfLkwm9vicNBB0RaVqiaEImQibGDGvIerBPSk3HXMIZiaA6WRsrZS7DBvMj7myykBtcbJ9NyxYJm98q0gJ6ba2Sib6icBzt0f/0",privilege:[]}),i("#user-name").innerText=l.nickname,i("#avt").src=l.headimgurl;var f={man:[{avatar:"../img/avatar/柳岩-头像.jpg",user_name:"奶岩",content:"{{nickname}}你要上春晚啦！带上我好不咯？ 么么哒！",imgs:["../img/img_big/柳岩-配图.jpg"],post_time:"2小时前",liked_list:["邓超","大鹏","郭德纲","小沈阳","小岳岳","于莎莎","大宝剑乔杉"],reply_list:[{content:"岩岩，不说好要拍煎饼侠2吗!",from:"",to:"大鹏"},{content:"他带上你，你带上我好不咯？",to:"大宝剑乔杉"},{content:"她带上你，你带上我好不咯？",from:"于莎莎",to:"大宝剑乔杉"},{content:"上春晚找我啊，我也能带你上！",from:"",to:"小岳岳"},{content:"乖，我今天晚点回去，你早点睡。",from:"",to:"{{nickname}}"}]},{avatar:"../img/avatar/邓超-头像.jpg",user_name:"邓超",content:"我一点都不想看{{nickname}}上春晚，今年春节我根本就不看春晚！我要和娘娘、等等和小花来一场说走就走的旅行!",imgs:["../img/img_big/邓超-配图.jpg"],post_time:"2小时前",liked_list:["李晨","陈赤赤","郑恺","杨颖","晓明","王祖蓝","包贝尔","王宝强","谢娜"],reply_list:[{content:"家庭地位一目了然！",to:"陈赤赤"},{content:"家庭地位一目了然！",to:"郑恺"},{content:"家庭地位一目了然！",to:"李晨"},{content:"好像你多高似的",to:"李晨",from:"邓超"},{content:"邓叔叔棒棒哒~~晓明叔叔@黄晓明，我们什么时候去度假？",to:"杨颖"},{content:"baby，不是说好了2016年要安心造人么",from:"晓明",to:"杨颖"},{content:"害羞",from:"杨颖",to:"晓明"},{content:"(⊙o⊙)哦！",from:"邓超",to:"晓明"},{content:"(⊙o⊙)哦！",from:"李晨",to:"晓明"},{content:"(⊙o⊙)哦！",from:"陈赤赤",to:"晓明"},{content:"(#‵′)靠！",from:"郑恺",to:"晓明"}]},{avatar:"../img/avatar/孙俪-头像.jpg",user_name:"俪姐",content:"《芈月传2》和2016年春晚，你们更期待哪个？一个有我，一个有{{nickname}}，想好了再回答。",imgs:["../img/img_big/孙俪-配图.jpg"],post_time:"2小时前",liked_list:["邓超","何炅","马苏","刘涛","春申君黄轩","贾跃亭","马化腾","张朝阳","马云","{{nickname}}","方中信"],reply_list:[{content:"娘娘，《芈月传2》给乐视独家版权吧！",to:"贾跃亭"},{content:"版权金要多少，尽管开口，小马哥必定拿下。",to:"马化腾"},{content:"娘娘版权给优酷吧！送你一个淘宝钻石级VIP会员，全场无限额消费",to:"马云"},{content:"当然是想看娘娘啦！娘娘千秋万代一统江湖！",to:"何炅"},{content:"最期待《芈月传2》，看我怎么玩转后宫！",to:"马苏"}]},{avatar:"../img/avatar/周杰伦-头像.jpg",user_name:"周杰伦(工作)",content:"{{nickname}}听说你游戏打的不错哦，改天我们一起开黑双排吧~",imgs:["../img/img_big/周杰伦-配图.jpg"],post_time:"2小时前",liked_list:["王思聪","杨颖","陈赤赤","张靓颖","林更新"],reply_list:[{content:"九保一战术？",from:"",to:"陈赤赤"},{content:"一定要来熊猫TV直播啊，周董！",to:"王思聪"},{content:"最近没时间啦，春晚排练挺忙的，你哪天来公司找我吧，望京SOHO塔2B座",from:"于莎莎",to:"{{nickname}}"},{content:"2B座？",from:"周杰伦(工作)",to:"{{nickname}}"},{content:"o(╯□╰)o望京SOHO塔2，B座",from:"{{nickname}}",to:"周杰伦(工作)"}]},{avatar:"../img/avatar/杨颖-头像.jpg",user_name:"杨颖",content:"{{nickname}}，春晚排练累瘦了吧，直播完了来家里，我让晓明叔叔做大餐！",imgs:["../img/img_big/杨颖-配图.jpg"],post_time:"2小时前",liked_list:["郑恺","晓明","黄渤","陈坤","井柏然","陈赤赤","李晨","鹿晗","何炅"],reply_list:[{content:"晓明会做饭吗！也就海边捞点嘎啦",from:"",to:"黄渤"},{content:"就会做个西红柿鸡蛋面，哈哈哈哈",to:"黄渤",from:"井柏然"},{content:"Baby 我又来赞你啦~~",from:"",to:"郑恺"},{content:"渤哥也一起来喝点啊",from:"晓明",to:"黄渤"},{content:"谢谢嫂子！直播结束就去你家，我带上丽颖一块儿（害羞表情）饭还是让丽颖做",from:"",to:"{{nickname}}"}]},{avatar:"../img/avatar/易烊千玺-头像.jpg",user_name:"易烊千玺",content:"本boy特别开心，因为{{nickname}}哥哥要和我们一起上！春！晚！啦！",imgs:["../img/img_big/易烊千玺-配图.jpg"],post_time:"2小时前",liked_list:["王俊凯","王源","贾乃亮","{{nickname}}","杜淳","杨颖","大鹏"],reply_list:[{content:"艾玛，俊凯是表示不服吗？@{{nickname}}",from:"",to:"贾乃亮"},{content:"看本宝宝高冷的美貌！",to:"王源"},{content:"你敢不敢换一张！连拍那么多张，你非得用这张……",from:"",to:"王俊凯"},{content:"嘿嘿嘿",from:"易烊千玺",to:"王俊凯"},{content:"高冷boy你悠着点笑啊，小舌头都看见了",from:"{{nickname}}",to:"易烊千玺"},{content:"嘿嘿嘿",from:"易烊千玺",to:"{{nickname}}"}]},{avatar:"../img/avatar/毕福剑-头像.jpg",user_name:"毕福剑",content:"你咋不上天呢？",imgs:[l.headimgurl],post_time:"2小时前",liked_list:[],reply_list:[{content:"人家凭自己本事登上春晚，你也是凭自己本事作下春晚，成年人要为自己做的事负责，有时间在这鼻子不鼻子脸不是脸的，还不如好好琢磨琢磨怎么回到屏幕上！",from:"",to:"金星"},{content:"+1",to:"金星",from:"陈赤赤"},{content:"+1",to:"金星",from:"范爷"},{content:"+1",to:"金星",from:"周涛"},{content:"+10086",to:"金星",from:"林更新"}]}],woman:[{avatar:"../img/avatar/黄子韬-头像.jpg",user_name:"HZT黄子韬",content:"非常期待{{nickname}}姐在春晚的演出，我也要向{{nickname}}姐学习，坚持！努力！早晚有一天，我也会登上春晚的舞台！",imgs:["../img/img_big/黄子韬-头像.jpg"],post_time:"2小时前",liked_list:["{{nickname}}","宋茜","周觅","Kai","金俊勉","高云翔","陈一冰","潘玮柏"],reply_list:[{content:"wuli韬韬fighting！",from:"",to:"{{nickname}}"},{content:"동생 화이팅!",to:"金俊勉",from:""},{content:"红绿灯韬，fighting！",to:"周觅"},{content:"우리 토토一起努力，一起加油！",to:"宋茜"}]},{avatar:"../img/avatar/吴磊-头像.jpg",user_name:"吴磊LEO",content:"{{nickname}}姐姐，等我十年可好？",imgs:["../img/img_big/吴磊-头像.jpg"],post_time:"2小时前",liked_list:["胡歌","靳东","霍建华","刘涛","柳岩","贾玲"],reply_list:[{content:"三石啊，你会遇到更好的女孩~姐姐名花有主啦",from:"",to:"{{nickname}}"},{content:"不是让我等你吗！!",to:"贾玲",from:""},{content:"不要惦记我的女人",to:"胡歌"},{content:"宗主，我错了！！",to:"胡歌",from:"吴磊LEO"},{content:"她是你的女人？那我呢？",to:"胡歌",from:"霍建华"},{content:"你们四个怎么这么乱？",to:"胡歌",from:"靳东"}]},{avatar:"../img/avatar/王俊凯-头像.jpg",user_name:"王俊凯",content:"今天和{{nickname}}姐姐一起参加春晚彩排，有点小兴奋。",imgs:["../img/img_big/王俊凯-头像.jpg"],post_time:"2小时前",liked_list:["易烊千玺","王源","黄晓明","谢娜","何炅","杨颖"],reply_list:[{content:"她本人美不美？帮我要个签名呗！",from:"",to:"谢娜"},{content:"姐姐真美真仙真可爱，已经路转粉！!",to:"易烊千玺",from:""},{content:"三小只也很可爱很努力哦，有时间来姐姐家玩啊",to:"王俊凯",from:"{{nickname}}"},{content:"我已经要到她的签名啦，哈哈哈",to:"谢娜",from:"王源"}]},{avatar:"../img/avatar/陈学冬-头像.jpg",user_name:"陈学冬",content:"谢谢{{nickname}}送我的雪地靴，春晚fighting！",imgs:["../img/img_big/陈学冬-头像.jpg"],post_time:"2小时前",liked_list:["郭敬明","安东尼","落落","华晨宇","笛安","杨幂","谢依霖","郭碧婷"],reply_list:[{content:"是我不懂时尚",from:"",to:"韩火火"},{content:"穿双火箭筒？你咋不上天呢？!",to:"何炅",from:""},{content:"这个视角……是小四拍的吗？",to:"韩寒"},{content:"哥哥，这双鞋哪里有卖？",to:"张艺兴"}]},{avatar:"../img/avatar/亦凡宝贝-头像.jpg",user_name:"亦凡宝贝",content:"我喜欢女儿，希望以后能有一个像{{nickname}}的女儿~",imgs:["../img/img_big/亦凡宝贝-头像.jpg"],post_time:"2小时前",liked_list:["姚晨","韩寒","冯小刚","杨幂","张涵予","许晴"],reply_list:[{content:"哎呦喂，这恩爱秀我一脸！",from:"",to:"杨幂"},{content:"将来给我家土豆当媳妇啊!",to:"姚晨",from:""},{content:"来做我火华社的儿媳妇！",to:"刘烨"},{content:"亲爱的，记得穿秋裤",to:"{{nickname}}"},{content:"穿了你给我买的那套，爱心秋裤!",to:"{{nickname}}",from:"亦凡宝贝"}]},{avatar:"../img/avatar/杨洋-头像.jpg",user_name:"杨洋",content:"做个新发型，去见{{nickname}}",imgs:["../img/img_big/杨洋-头像.jpg"],post_time:"2小时前",liked_list:["郑爽","赵丽颖","唐嫣","杨幂","何炅","谢娜","李维嘉","吴昕","杜海涛"],reply_list:[{content:"你竟然认识{{nickname}}，求介绍！",from:"",to:"李易峰"},{content:"和我见面，连头都不洗!",to:"郑爽",from:""},{content:"小羊都不约我呢，姐姐不开心哼",to:"许晴"},{content:"快点，每次都迟到",to:"{{nickname}}"},{content:"为了见你，我得打扮帅点!",to:"{{nickname}}",from:"杨洋"}]},{avatar:"../img/avatar/王思聪-头像.jpg",user_name:"王思聪",content:"{{nickname}}，和我在一起，明年还让你上春晚！",imgs:["../img/img_big/王思聪-头像.jpg"],post_time:"2小时前",liked_list:["林更新","张予曦","袁成杰","杨颖","叫兽易小星","大鹏"],reply_list:[{content:"老公，求潜！",from:"",to:"林更新"},{content:"老公，求潜！!",to:"叫兽易小星",from:""},{content:"老公，我只想和你在一起，不上春晚也无所谓啊",to:"张予曦"},{content:"(挖鼻)",to:"{{nickname}}"}]},{avatar:"../img/avatar/张天爱-头像.jpg",user_name:"张天爱",content:"27亿播放量，太子妃重新上架，感谢全国的老婆们~（飞吻表情）",imgs:["../img/img_big/张天爱-头像.jpg"],post_time:"2小时前",liked_list:["贾跃亭","甘薇","{{nickname}}","侣皓吉吉","盛一伦","于朦胧","郭俊辰","江奇霖","海铃"],reply_list:[{content:"都删没了，唉，感觉你“老婆们”又要给我寄刀片了",from:"",to:"侣皓吉吉"},{content:"女神姐姐撩妹的镜头都木有啦，我和九哥跳舞的片段也木有啦（哭的表情）!",to:"郭俊辰",from:""},{content:"这画面太美，我没脸看……",to:"盛一伦"},{content:"芃芃哥男友力MAX！",to:"{{nickname}}"},{content:"娘娘~我们共舞的镜头都删了（大哭表情）",to:"海铃"}]},{avatar:"../img/avatar/邓超-头像.jpg",user_name:"邓超",content:"我一点都不想看{{nickname}}上春晚，今年春节我根本就不看春晚！我要和娘娘、等等和小花来一场说走就走的旅行!",imgs:["../img/img_big/邓超-配图.jpg"],post_time:"2小时前",liked_list:["李晨","陈赤赤","郑恺","杨颖","晓明","王祖蓝","包贝尔","王宝强","谢娜"],reply_list:[{content:"家庭地位一目了然！",to:"陈赤赤"},{content:"家庭地位一目了然！",to:"郑恺"},{content:"家庭地位一目了然！",to:"李晨"},{content:"好像你多高似的",to:"李晨",from:"邓超"},{content:"邓叔叔棒棒哒~~晓明叔叔@黄晓明，我们什么时候去度假？",to:"杨颖"},{content:"baby，不是说好了2016年要安心造人么",from:"晓明",to:"杨颖"},{content:"害羞",from:"杨颖",to:"晓明"},{content:"(⊙o⊙)哦！",from:"邓超",to:"晓明"},{content:"(⊙o⊙)哦！",from:"李晨",to:"晓明"},{content:"(⊙o⊙)哦！",from:"陈赤赤",to:"晓明"},{content:"(#‵′)靠！",from:"郑恺",to:"晓明"}]},{avatar:"../img/avatar/孙俪-头像.jpg",user_name:"俪姐",content:"《芈月传2》和2016年春晚，你们更期待哪个？一个有我，一个有{{nickname}}，想好了再回答。",imgs:["../img/img_big/孙俪-配图.jpg"],post_time:"2小时前",liked_list:["邓超","何炅","马苏","刘涛","春申君黄轩","贾跃亭","马化腾","张朝阳","马云","{{nickname}}","方中信"],reply_list:[{content:"娘娘，《芈月传2》给乐视独家版权吧！",to:"贾跃亭"},{content:"版权金要多少，尽管开口，小马哥必定拿下。",to:"马化腾"},{content:"娘娘版权给优酷吧！送你一个淘宝钻石级VIP会员，全场无限额消费",to:"马云"},{content:"当然是想看娘娘啦！娘娘千秋万代一统江湖！",to:"何炅"},{content:"最期待《芈月传2》，看我怎么玩转后宫！",to:"马苏"}]},{avatar:"../img/avatar/贾乃亮-头像.jpg",user_name:"贾乃亮",content:"甜馨叫王源哥哥，叫{{nickname}}姐姐，王源和XX叫我亮哥，我是甜馨的爹……这辈儿咋这么乱？",imgs:["../img/img_big/贾乃亮-配图.jpg"],post_time:"2小时前",liked_list:["王源","李小璐","周星驰","易烊千玺","王俊凯","杜淳","甘薇","霍思燕","秦岚"],reply_list:[{content:"好喜欢小甜馨呢，亮哥，那以后叫你亮叔了",to:"王源"},{content:"那以后就叫你亮叔了",to:"{{nickname}}"},{content:"关系有点乱，可爱的小美人鱼也有害羞的时候",to:"周星驰"},{content:"贾老师，明年有档期上爸爸去哪儿第四季吗？",to:"谢涤葵"},{content:"爸爸回来了第三季也在找我，你还是和我经纪人谈吧",to:"谢涤葵",from:"贾乃亮"}]},{avatar:"../img/avatar/李小璐-头像.jpg",user_name:"李小璐",content:"前一阵子因为甜馨儿生病，都没顾上保养，今天趁着休息，边敷脸边看煮妇神探。这款动物面膜好玩又好敷，超级滋润水嫩，敷完皮肤水当当滑溜溜，想要的找我哦~",imgs:["../img/img_big/李小璐-配图.jpg"],post_time:"2小时前",liked_list:["甘薇","霍思燕","贾乃亮","熊乃瑾","王婧","李静","李艾","韩国面膜总代理","日韩面膜大中华代理"],reply_list:[{content:"我也敷上啦！",to:"贾乃亮"},{content:"用没用上次给你的静佳小样啊？我们现在有促销活动哦",to:"李静"},{content:"姐，面膜咋卖？",to:"{{nickname}}"},{content:"私聊",to:"{{nickname}}",from:"李小璐"}]},{avatar:"../img/avatar/金星-头像.jpg",user_name:"金星",content:"美猴王不让上，什么乱七八糟的反而都上了。他都57了，下一个猴年他可能就耍不动猴戏了，这会儿你们怎么看不见他的努力啊？语言类节目这么少，开心麻花被砍掉，美猴王也不请，吉祥物还那么丑，导演你咋不上天？你咋不上西天呢？！~",imgs:["../img/img_big/金星-配图.jpg"],post_time:"2小时前",liked_list:["韩红","冯小刚","李小璐","孟非","贾乃亮","王自健"],reply_list:[{content:"还有三年就到猪年了，答应我，你们的热情不要过去好吗",to:"马德华"},{content:"几代人的情怀……猴年不让猴王上春晚，也是醉了",to:"孟非"},{content:"甜馨挚爱的孙悟空啊！金星姐，能给安排甜馨见见她偶像不？",to:"李小璐"},{content:"我将参加中央电视台春节戏曲晚会，暂定大年初三播出，欢迎大家收看。",to:"六小龄童"},{content:"(哭脸)",to:"{{nickname}}"}]},{avatar:"../img/avatar/李易峰-头像.jpg",user_name:"李易峰",content:"把乐带回家.",imgs:["../img/img_big/李易峰-配图.jpg"],post_time:"2小时前",liked_list:["蔡依林","罗志祥","六小龄童","杨幂","南派三叔"],reply_list:[{content:"穿秋裤了吗？",to:"杨幂"},{content:"你不参加春晚彩排了？",to:"杨洋"},{content:"马上到北京，晚上吃饭你把{{nickname}}介绍给我认识呗",to:"杨洋",from:"李易峰"},{content:"好吧……",from:"杨洋",to:"李易峰"}]},{avatar:"../img/avatar/彭姨-头像.jpg",user_name:"彭姨",content:"翻旧照片，找到和{{nickname}}小时候的合影，那年他才2岁。今年小XX第一次登上春晚舞台，希望大家多多捧场。.",imgs:["../img/img_big/彭姨-配图.jpg"],post_time:"2小时前",liked_list:["毕福剑","朱军","董卿","周涛","撒贝宁","赵本山","宋丹丹","倪萍","毛阿敏","宋祖英","赵忠祥","姨夫"],reply_list:[{content:"多谢彭姨为我加油，我一定不辜负您的期望，好好努力表现！",to:"{{nickname}}"},{content:"遇到困难和我说，别太辛苦了。",to:"{{nickname}}",from:"姨夫"},{content:"(开心表情）恩~姨夫么么哒",to:"姨夫",from:"{{nickname}}"}]},{avatar:"../img/avatar/贾玲-头像.jpg",user_name:"贾玲",content:"在我之后，又将有一位女神级演员登上春晚舞台——{{nickname}}，我们的共同点就是：都有一个尖下巴！",imgs:["../img/img_big/贾玲-配图.jpg"],post_time:"2小时前",liked_list:["白凯南","包贝尔","大张伟","吴秀波","王凯KKW"],reply_list:[{content:"这大脸巴子吓我一哆嗦……",to:"白凯南"},{content:"还是你比较美",to:"吴秀波"},{content:"你们还有一个共同点：脸大",to:"大张伟"}]},{avatar:"../img/avatar/盛一伦-头像.jpg",user_name:"盛一伦",content:"在我之后，又将有一位女神级演员登上春晚舞台——{{nickname}}，我们的共同点就是：都有一个尖下巴！",imgs:["../img/img_big/盛一伦-配图.jpg"],post_time:"2小时前",liked_list:["张天爱","于朦胧","XX","侣皓吉吉","林更新","何炅","李维嘉"],reply_list:[{content:"黄桑，你什么时候都帅！",to:"{{nickname}}"},{content:"哪个小婊砸！",to:"张天爱"},{content:"哪个小婊砸！",to:"于朦胧"},{content:"哪个小婊砸！",to:"咪蒙"},{content:"哪个小婊砸！",to:"燕公子"},{content:"哪个小婊砸！",to:"薛好大"}]},{avatar:"../img/avatar/杨颖-头像.jpg",user_name:"杨颖",content:"{{nickname}}，春晚排练累瘦了吧，直播完了来家里，我让晓明叔叔做大餐！",imgs:["../img/img_big/杨颖-配图.jpg"],post_time:"2小时前",liked_list:["郑恺","晓明","黄渤","陈坤","井柏然","陈赤赤","李晨","鹿晗","何炅"],reply_list:[{content:"晓明会做饭吗！也就海边捞点嘎啦",from:"",to:"黄渤"},{content:"就会做个西红柿鸡蛋面，哈哈哈哈",to:"黄渤",from:"井柏然"},{content:"Baby 我又来赞你啦~~",from:"",to:"郑恺"},{content:"渤哥也一起来喝点啊",from:"晓明",to:"黄渤"},{content:"谢谢嫂子！直播结束就去你家，我带上丽颖一块儿（害羞表情）饭还是让丽颖做",from:"",to:"{{nickname}}"}]},{avatar:"../img/avatar/毕福剑-头像.jpg",user_name:"毕福剑",content:"你咋不上天呢？",imgs:[l.headimgurl],post_time:"2小时前",liked_list:[],reply_list:[{content:"人家凭自己本事登上春晚，你也是凭自己本事作下春晚，成年人要为自己做的事负责，有时间在这鼻子不鼻子脸不是脸的，还不如好好琢磨琢磨怎么回到屏幕上！",from:"",to:"金星"},{content:"+1",to:"金星",from:"陈赤赤"},{content:"+1",to:"金星",from:"范爷"},{content:"+1",to:"金星",from:"周涛"},{content:"+10086",to:"金星",from:"林更新"}]}],background:["www.baidu.com"]},d=c(1==l.sex?f.man:f.women,4);d.forEach(function(t){t.content=t.content&&t.content.replace(/{{nickname}}/,l.nickname),t.liked_list=t.liked_list.map(function(t){return"{{nickname}}"==t&&(t=t.replace(/{{nickname}}/,l.nickname)),t}),t.reply_list.forEach(function(t){t.content=t.content&&t.content.replace(/{{nickname}}/,l.nickname),t.from=t.from&&t.from.replace(/{{nickname}}/,l.nickname),t.to=t.to&&t.to.replace(/{{nickname}}/,l.nickname)})});var u={avatar:"../img/avatar/夺宝联萌-头像.jpg",user_name:"夺宝联萌",content:"全新SRPG沙盒对战手游<br>今日强势登陆AppStore",imgs:["../img/img_big/夺宝联萌-配图.gif"],post_time:"2小时前",liked_list:["王思聪","叫兽易小星","杨颖","林更新","陈赫","郑恺"],reply_list:[{content:"来找我谈谈熊猫TV直播的事",from:"",to:"王思聪"},{content:"这什么游戏？",to:"郑恺",from:""},{content:"好玩吗？",to:"王思聪",from:"林更新"},{content:"《煮妇神探》大结局，你们看了吗？",to:"贾乃亮",from:""},{content:"天霸动霸Tuà系列T恤卫衣已经上架，还有最新【添财】系列，新年新款你值得拥有！",to:"陈赫",from:""}]};d.splice(2,0,u);~location.href.indexOf("#")?location.href.slice(0,location.href.indexOf("#")):location.href,new Vue({el:"#list ul",data:{dataList:d},components:{friendList:p["default"]},ready:function(){r(),i("title").innerText="听说"+l.nickname+"要上春晚，朋友圈竟然变这样!",i("#share a").addEventListener("click",function(t){t.preventDefault();var n=Math.random().toString(36).substr(2),o=encodeURIComponent("http://weixin.ezone.cn/view/shake.html");localStorage.setItem("state",n),setTimeout(function(){location.href=s("wx693582460d15cb5e",o,"snsapi_userinfo",n)},50)})}})},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={props:{dataList:Array},methods:{auto_play:function(){var t=document.getElementById("video");t.paused?t.play():t.pause()}},ready:function(){this.dataList.forEach(function(t){t.liked_list=t.liked_list.join(",")})}}},function(t,n){t.exports='<li v-for="data in dataList"><div class=po-avt-wrap><img :src=data.avatar onerror="" class=po-avt></div><div class=po-cmt><div class=po-hd><p v-if=data.isAd class=ads>推广<img src=http://s.juancdn.com/jpwebapp/images/pengyouquan/ads.png></p><p class=po-name>{{data.user_name}}</p><div class=post><p>{{{data.content}}}</p><img v-for="img in data.imgs" :src=img class=list-img></div><p class=time>{{data.post_time}}</p><img src=http://s.juancdn.com/jpwebapp/images/pengyouquan/c.png class=c-icon></div><div class=r></div><div class=cmt-wrap><div class=like><img src=http://s.juancdn.com/jpwebapp/images/pengyouquan/l.png><span class=data-name></span>{{data.liked_list}}</div><div class=cmt-list><p v-for="reply_item in data.reply_list"><span v-if=reply_item.from>{{reply_item.from}}<i>回复</i></span> <span>{{reply_item.to}}:</span>{{reply_item.content}}</p></div></div></div></li>'},function(t,n,o){var e,i;e=o(1),i=o(2),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)}]);