<template>
  <li v-for="data in dataList">
      <div class="po-avt-wrap">
          <img :src="data.avatar" onerror="" class="po-avt">
      </div>
      <div class="po-cmt">
          <div class="po-hd">
              <!-- 广告 -->
              <p v-if="data.isAd" class="ads"><a :href="data.link">推广<img src="../img/ads.png"></a></p>
              <p class="po-name">{{data.user_name}}</p>
              <div class="post">
                {{{data.content}}}
              </div>
              <img v-for="img in data.imgs" :src="img" class="list-img" :class="{'ad-img':data.isAd}">
              <p>
                <a v-if="data.isAd" :href="data.link" class="ad-link">查看详情 <img src="../img/link.png"></a>
              </p>
              <p class="time">{{data.post_time}}</p><img src="../img/c.png" class="c-icon">
          </div>
          <div class="r"></div>
          <!-- 点赞及回复列表 -->
          <div class="cmt-wrap">
              <div v-if="data.liked_list.length" class="like"><img src="../img/l.png"><span class="data-name"></span>{{data.liked_list}}</div>
              <div class="cmt-list">
                  <p v-for="reply_item in data.reply_list">
                    <span v-if="reply_item.from">{{reply_item.from}}<i> 回复 </i></span>
                    <span>{{reply_item.to}}:</span>{{reply_item.content}}
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
