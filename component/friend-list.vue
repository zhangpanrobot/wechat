<template>
  <li v-for="data in dataList">
      <div class="po-avt-wrap">
          <img :src="data.avatar" onerror="" class="po-avt">
      </div>
      <div class="po-cmt">
          <div class="po-hd">
              <!-- 广告 -->
              <p v-if="data.isAd" class="ads">推广<img src="http://s.juancdn.com/jpwebapp/images/pengyouquan/ads.png" ></p>
              <p class="po-name">{{data.user_name}}</p>
              <div class="post"><p>
                {{data.content}}
              </p>
                  <!-- <a href="http://mp.weixin.qq.com/s?__biz=MjM5MDk1NjY0MA==&mid=402311636&idx=2&sn=35581e3c9fca720903919a0e23bf4846#rd" class="ad-link">查看详情 <img src="http://s.juancdn.com/jpwebapp/images/pengyouquan/link.png"></a> -->
                  <img v-for="img in data.imgs" :src="img" class="list-img">
              </div>
              <p class="time">{{data.post_time}}</p><img src="http://s.juancdn.com/jpwebapp/images/pengyouquan/c.png" class="c-icon">
          </div>
          <div class="r"></div>
          <!-- 点赞及回复列表 -->
          <div class="cmt-wrap">
              <div class="like"><img src="http://s.juancdn.com/jpwebapp/images/pengyouquan/l.png"><span class="data-name"></span>{{data.liked_list}}</div>
              <div class="cmt-list">
                  <p v-for="reply_item in data.reply_list">
                    <span v-if="reply_item.from">{{reply_item.from}}<i> 回复</i></span>
                    <span>{{reply_item.to}}</span>：{{reply_item.content}}
                  </p>
              </div>
          </div>
      </div>
  </li>
</template>

<script>
  export default {
    props: {
      dataList: Array
    },
    methods: {
      auto_play(){
        var video = document.getElementById('video')
        video.paused?video.play():video.pause()
      }
    },
    ready(){
      this.dataList.forEach((item)=>{
        item.liked_list = item.liked_list.join(',')
      })
    }
  }
</script>
