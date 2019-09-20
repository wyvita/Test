<template>
   <div class="seller" ref="sellerScroll">
      <div class="seller-content">
        <div class="seller-overview">
          <h1 class="seller-title">{{seller.name}}</h1>
          <div class="seller-desc">
           <star class="seller-star" :size="36" :score="seller.score"></star>
            <span class="seller-text">({{seller.ratingCount}})</span>
            <span class="seller-text">月售{{seller.sellCount}}单</span>
          </div>
             <ul class="seller-remark">
                      <li class="seller-block">
                        <h2>起送价</h2>
                        <div class="seller-content">
                          <span class="seller-stress">{{seller.minPrice}}</span>元
                        </div>
                      </li>
                      <li class="seller-block">
                        <h2>商家配送</h2>
                        <div class="seller-content">
                          <span class="seller-stress">{{seller.deliveryPrice}}</span>元
                        </div>
                      </li>
                      <li class="seller-block">
                        <h2>平均配送时间</h2>
                        <div class="seller-content">
                          <span class="seller-stress">{{seller.deliveryTime}}</span>分钟
                        </div>
                      </li>
                    </ul>
                  <!--分割线-->
               <div class="seller-split"></div>
                  <div class="seller-bulletin">
                          <div class="seller-content-wrapper ">
                            <h1 class="seller-title2">公告与活动</h1>
                            <p class="seller-content2">{{seller.bulletin}}</p>
                          </div>
                        <!-- 图标 -->
                              <ul v-if="seller.supports" class="seller-supports2">
                                <li class="seller-support-item2" v-for="(item,index) in seller.supports">
                                  <span class="seller-icon2" :class="classMap[seller.supports[index].type]"></span>
                                  <span class="seller-text2">{{seller.supports[index].description}}</span>
                                </li>
                             </ul>
                        </div>
                <!--分割线-->
               <div class="seller-split"></div>
               <div class="seller-pics">
                  <h1 class="seller-shop">商家实景</h1>
                   <div class="seller-pic-wrapper" ref="picWrapper">
                    <ul class="seller-pic-list" ref="picList">
                     <li class="seller-pic-item" v-for="pic in seller.pics">
                      <img :src="pic" width="120" height="90">
                    </li>
                  </ul>
               </div>
              </div>

              <!--分割线-->
              <div class="seller-split"></div>
              <div class="seller-info">
                      <h1 class="seller-shop2">商家信息</h1>
                      <ul>
                        <li class="seller-info-item" v-for="info in seller.infos">{{info}}</li>
                      </ul>
                    </div>
          </div>
        </div>
     </div>
</template>

<script>
import BScroll from 'better-scroll';
import star from '../star/star.vue';
const ERR_OK = 0
export default {
 name: "ratings",

   data() {
      return {
        seller:{type: Object},
        classMap:[],
      }
    },
    components: {
          star
       },
    methods:{

    },
    mounted(){
    	//完成挂载，从服务器端加载商品数据
    	this.$http.get("http://localhost:1900/seller").then((response)=>{
    		if(response.data.errno==ERR_OK){
    		const seller = response.data.data[0];
    		  this.seller = seller.seller;
    		}
    		console.log(this.seller);
    	});

     this.$nextTick(() => {
               this.scroll = new BScroll(this.$refs.sellerScroll,{
                       probeType: 5});
                   });
     this.classMap = ['decrease','discount','special','invoice','guarantee'];

    }
  }
</script>
<style>
  .seller{
      position: absolute;
      top: 174px;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
  }
      .seller-overview{
        position: relative;
        padding: 18px;
  }
        .seller-title{
          margin-bottom: 8px;
          line-height: 14px;
          color: rgb(7, 17, 27);
          font-size: 16px;
  }

        .seller-desc{
          padding-bottom: -15px;
         border-bottom:1px solid rgba(7, 17, 27, .1);
          font-size: 0;
  }
          .seller-star{
            display: inline-block;
            margin-right: 8px;
            vertical-align: top;
            margin-top: 12px;
  }
          .seller-text{
            display: inline-block;
            margin-right: 12px;
            line-height: 18px;
            vertical-align: top;
            font-size: 12px;
            color: rgb(77, 85, 93);
            margin-top: 12px;
  }
        .seller-remark{
          display: flex;
          padding-top: 18px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(7, 17, 27, .1) ;
          margin-top: 12px;
 }
         .seller-split{
           background-color: #F3F5F7;
           width: 100%;
           height: 16px;
         }
          .seller-block{
            flex: 1;
            text-align: center;
            border-right: 1px solid rgba(7, 17, 27, .1);

 }
            h2{

             margin-bottom: 4px;
              line-height: 10px;
             font-size: 12px;
              color: rgb(147, 153, 159);
  }
            .seller-content{
             line-height: 24px;
              font-size: 12px;
              color: rgb(7, 17, 27);
  }
      .seller-stress{
          font-size: 24px;
          }
        .support-item{
                 padding: 16px 24px;
                 border-top:1px solid (rgba(7, 17, 27, .1));
         }
         .seller-content-wrapper{
                 padding: 16px 12px 6px 12px;
                 border-top:1px solid rgba(7, 17, 27, .1);

         }
                 .seller-content2{
                   line-height: 24px ;
                   font-size: 14px  ;
                   color: rgb(240, 20, 20);
         }
         .seller-title2{
                 display: inline-block;
                 margin-top: 2px;

                 line-height: 16px;

                 color: rgb(7, 17, 27);

                 font-size: 16px;
         }
        .seller-support-item2{
                  border-top: 1px solid rgba(7, 17, 27, .1);
                  padding: 16px 12px 12px 12px;
                 font-size: 14px;
                  vertical-align: top
        }
        .seller-supports2{
          margin-top: 16px;
        }
         .decrease{
          	display:inline-block;
          	width:16px;
          	height:16px;
          	background:url('decrease_3@2x.png');
          	background-repeat:no-repeat;
          	background-size:100% 100%;

          }
        .discount{
          	display:inline-block;
          	width:16px;
          	height:16px;
          	background:url('discount_3@2x.png');
          	background-repeat:no-repeat;
          	background-size:100% 100%;
          }

         .guarantee{
          	display:inline-block;
          	width:16px;
          	height:16px;
          	background:url('guarantee_1@2x.png');
          	background-repeat:no-repeat;
          	background-size:100% 100%;
          }
        .special{
          	display:inline-block;
          	width:16px;
          	height:16px;
          	background:url('guarantee_1@2x.png');
          	background-repeat:no-repeat;
          	background-size:100% 100%;
          }
       .invoice{
          	display:inline-block;
          	width:16px;
          	height:16px;
          	background:url('invoice_1@2x.png');
          	background-repeat:no-repeat;
          	background-size:100% 100%;
          }
                .seller-text2{
                  line-height: 16px;
                  font-size: 12px;
                  color: rgb(7, 17, 27);
        }
         .seller-pics{
              padding: 18px;
}
              .seller-shop{
                margin-bottom: 12px;
                line-height: 14px;
                color: rgb(7, 17, 27);
                font-size: 15px;
}
              .seller-pic-wrapper{
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
}
                  .seller-pic-item{
                   display: inline-block;
                   margin-right: 6px;
                    width: 120px;
                    height: 90px;
}
      .seller-info{
         padding: 18px 18px 0 18px;
         color: rgb(7, 17, 27);
}
     .seller-shop2{
        padding-bottom: 12px;
        line-height: 12px;
        font-size: 16px;

}
      .seller-info-item{
        padding: 16px 12px;
        line-height: 18px;
        font-size: 14px;
        border-top: 1px solid rgba(7, 17, 27, .1);
        }
</style>
