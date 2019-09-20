<template>
 <div class="ratings" >
      <div class="ratings-content">
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">{{ratings.score}}3.9</h1>
            <div class="title">综合评分</div>
             <div class="rank">高于周边商家69.2%</div>
          </div>
        </div>
      </div>
       <div class="overview-right">
            <div class="score-wrapper">
            <span class="star">服务态度&nbsp;<star :size="12" :score="serviceScore"></star><span class="sellerscore">3.9</span></span>
              </div>
              <div class="score-wrapper">
               <span class="star">服务态度&nbsp;<star :size="12" :score="foodScore"></star><span class="sellerscore">4</span></span>
               </div>
                 <div class="delivery-wrapper">
                   <span class="delivery_time">送达时间</span>&nbsp;
                   <span class="delivery">44分钟</span>
                </div>
              </div>
         <!--分割线-->
         <div class="split"></div>
        <div class="rating-wrapper" ref="ratingScroll">
         <ul >
          <li v-for="rating in ratings"  class="rating-item">
           <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
           <div class="content">
             <div class="content-left">
             <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <span> <star  :score="rating.score"></star></span>
                 <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
             </div>
              <br />
              <p class="text">{{rating.text}}</p>
              <div class="recommend"
                   v-show="rating.recommend && rating.recommend.length">
                <span class="icon-arrow_lift"></span>
                <span v-for="item in rating.recommend" class="item">{{item}}</span>
              </div>
             <!-- <div class="time">
                {{rating.rateTime | formatDate}}
              </div> -->
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import star from '../star/star.vue';
const ERR_OK = 0
export default {
 name: "ratings",
    props: {
    seller: {}
    },
   data() {
      return {
        ratings: [],
        serviceScore:3.9,
        foodScore:4
      }
    },
    methods:{

    },
 components: {
       star
    },
    mounted(){
    	//完成挂载，从服务器端加载商品数据
    	this.$http.get("http://localhost:1900/ratings").then((response)=>{
    		if(response.data.errno==ERR_OK){
    			this.ratings = response.data.data;

    		}
    		console.log(this.ratings);
    	});
      this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.ratingScroll,{
                        click: true,
                        probeType: 5
                        });
                    });
    }
  }
</script>

<style>
.ratings{
  background-color: rgba(231, 234, 236, 0.6);
}
    .overview{;
      display:flex;
      padding :18px 0;
      background-color: #FFFFFF;
      border-bottom: 1px soild rgba(231, 234, 236, 0.6);
}
      .overview-left{
        flex: 0 0 120px;
        padding: 6px 3px;
        width:120px;
        border-right:1px solid rgba(7,17,27,0.1);
        text-align: center;
        font-size:12px ;

      }
   .score{
          line-height: 28px;
          font-size: 24px;
          color: rgb(255,153,0);}
    .score0{
          font-size: 12px;
          color: rgb(255,153,0);


          }
    .title{
          margin-bottom: 8px;
          line-height: 12px;
          font-size: 12px;
          color: rgb(7,17,27);
          }
  .rank{
          line-height :10px;
          font-size: 10px;
          color: rgb(147,153,159);
          }

    .overview-right{
       margin:-107px 8px 18px 145px;
       width:220px ;
       height: 100px;

       padding: 12px 0 0 0;
          }
    .atitude{

         font-size: 14px;
        color: rgb(7,17,27);

      }
     .score-wrapper .star{
         margin: -4px 8px -1px 5px;

        width: 130px;
        display: inline;
      }
.score-wrapper{
  margin: 5px 1px;

}
.delivery-wrapper{
  margin: 10px 6px;
font-size: 15px;
}
.sellerscore{
  font-size:15px ;
  color: rgb(255,153,0);
}
.delivery{
  font-size: 15px;
  color: rgb(147,153,159);
  margin-left: 8px;
}
.split{

  background-color: #F3F5F7;
  width: 100%;
  height: 16px;
}
.rating-wrapper{
 border-bottom:1px solid rgba(7, 17, 27, .1) ;
  position:absolute;
  width:100%;
  top:310px;
  bottom:60px;
  padding-left: 5px;
 overflow: hidden;

  background-color:#FFFFFF;
flex:1;
}

.recommend .item{
      border: 1px solid rgba(7,17,27,0.1);
      border-radius: 2px;
      background-color: rgb(255,255,255);
      display: inline-block;
      width: auto;
      height: 12px;
      margin: 8px 4px 0px 1px;
      padding: 6px 6px;
      font-size: 12px;
      color: rgb(147,153,159);
      line-height: 16px;
}
.rating-wrapper li{
  border-bottom: 1px solid #F3F5F7;
  padding: 10px 0 15px 0;
}

.star-wrapper{
display: inline;
margin-left: 20px;
}
.star-wrapper span{
  float: left;
}

.content-left{
  display: block;
  margin-left: 40px;
  margin-top: -32px;
}
.content .text{
  margin-left: 2px;
  display: inline-block;
  line-height: 18px;
}
</style>
