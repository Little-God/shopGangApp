<template>
  <div>
  <div class="spiletitle">特色功能</div>
  <div class="spile">
    <div class="spilt_content">
      <div class="spilt_img"><img src="../../assets/images/sp-1.png" alt=""></div>
      <p class="sp_title">晒单有礼</p>
      <p class="sp_text">晒评价，晒追评，晒收藏，晒加购，三天优化商品质量，七天优化店铺DSR评分，快速提升店铺权重。</p>
    </div>
    <div class="spilt_content">
      <div class="spilt_img"><img src="../../assets/images/sp-2.png" alt=""></div>
      <p class="sp_title">买家转粉</p>
      <p class="sp_text">把消费者转化为社群粉丝，统一管理，360度刻画用户画像，自动分群，实现精准营销。</p>
    </div>
    <div class="spilt_content">
      <div class="spilt_img"><img src="../../assets/images/sp-3.png" alt=""></div>
      <p class="sp_title">购物返利</p>
      <p class="sp_text">优惠，返现，多种营销工具助您实现上新促销，爆款打造，快速清仓等多促销场景</p>
    </div>
    <div class="spilt_content">
      <div class="spilt_img"><img src="../../assets/images/sp-4.png" alt=""></div>
      <p class="sp_title">场景引流</p>
      <p class="sp_text">利用节日，活动，海报等等形式，快速引爆微信，获取社交流量。</p>
    </div>
  </div>
  <div class="spile">
    <div class="spilt_content">
      <div class="spilt_img"><img src="../../assets/images/sp-5.png" alt=""></div>
      <p class="sp_title">游戏互动</p>
      <p class="sp_text">晒评价，晒追评，晒收藏，晒加购，三天优化商品质量，七天优化店铺DSR评分，快速提升店铺权重。</p>
    </div>
    <div class="spilt_content">
      <div class="spilt_img"><img src="../../assets/images/sp-6.png" alt=""></div>
      <p class="sp_title">消息智能推送</p>
      <p class="sp_text">短信+微信结合，订单状态，物流状态实时提醒，全方位信息触达的同时，更高触达，更低成本。</p>
    </div>
    <div class="spilt_content">
      <div class="spilt_img"><img src="../../assets/images/sp-7.png" alt=""></div>
      <p class="sp_title">好评返现</p>
      <p class="sp_text">轻松提升店铺权重和销量，玩法多样不设限。</p>
    </div>
    <div class="spilt_content">
      <div class="spilt_img"><img src="../../assets/images/sp-8.png" alt=""></div>
      <p class="sp_title">会员积分体系</p>
      <p class="sp_text">购物互动获积分，兑奖品，抽奖，换购消耗积分，低成本实现用户互动，提升用户粘性，增强营销效果。</p>
    </div>
  </div>
  <!--一年前端开发经验，负责过中大型电商项目pc和移动端的前端-->
  </div>
</template>
<script>
  export default {
    name: 'Features',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style scoped>
  .spiletitle{
    text-align: center;
    font-size: 30px;
    color: #333;
    font-weight: 700;
    margin:30px;
  }
  .spile{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin:0 100px;
    margin-bottom: 40px;
  }
  .spilt_content{
    width:210px;
    height:220px;
    border:1px solid #bbb;
  }
  .spilt_img{
    width:90px;
    height:90px;
    margin:15px auto 5px auto;
  }
  .sp_title{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
    text-align: center;
    color: #333;
  }
  .sp_text{
    padding:0 25px;
    color: #333;
    font-size: 13px;
    word-break: break-all;
    word-wrap: break-word;
  }
</style>
