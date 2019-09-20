<template>
	<div class="header">
	   <div class="content-wrapper">
	   	 <div class="avatar">
	   	 	<img width="64" height="64" :src="seller.avatar">
	   	 </div>
	   	 <div class="content">
	   	 	<div class="title">
	   	 		<span class="brand"></span>
	   	 		<span>{{seller.name}}</span>
	   	 	</div>
	   	 	<div class="description">
	   	 		{{seller.description}}/{{seller.deliveryTime}}分钟送达
	   	 	</div>
	   	 	<div v-if="seller.supports" class="supports">
	   	 		<span :class="classMap[seller.supports[0].type]"></span>
	   	 		<span>{{seller.supports[0].description}}</span>
	   	 	</div>
	   	 </div>
	   	 <div v-if="seller.supports" class="count-wrapper" @click="showDetail">
	   	 	<span class="count" @click="showDetail">{{seller.supports.length}}个</span>
	   	 	<span class="gt">></span>
	   	 </div>
	   </div>
	   <div class="bulletin-wrapper">
	   	 <span class="gg"></span>
	   	 <div class="bulletion">{{seller.bulletin}}</div>
	   	 <span class="gt"></span>
	   </div>
	   <div class="bk">
	   	  <img width="100%" height="100%" :src="seller.avatar" />
	   </div>
    <transition name="fade">
     <div v-show="detailShow" class="detail">
       <div class="detail-wrapper clearfix">
         <div class="detail-main">
           <div class="title2">{{seller.name}} </div><br />
           <!--星星评级-->
            <div class="star"> <star :size="26" :score="score"></star> </div>
            <!-- 优惠信息 -->
            <div class="order">
             <span class="line"></span>
               <span class="text1">优惠信息</span>
                 <span class="line"> </span>
            </div>
            <!-- 图标 -->
                  <ul v-if="seller.supports" class="supports">
                    <li class="support-item" v-for="(item,index) in seller.supports">
                      <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                      <span class="text2">{{seller.supports[index].description}}</span>
                    </li>
                 </ul>
               <!-- 商家公告 -->
             <div class="title2">
               <span class="line"></span>
                  <span class="text1">商家公告</span>
               <span class="line"></span>
             </div>
                <div class="bulletin">
                  <div class="text2">{{seller.bulletin}}</div>
             </div>
          </div>
       </div>
    <!--关闭-->
       <div class="detail-close" @click="hideDetail">
            <p class="icon-close"> <img src="./close.png"  width="30px" height="30px"/> </p>
      </div>
     </div>



   </transition>
	</div>
</template>

<script>
  import star from '../star/star.vue';
	export default {
		props:{
			seller:{ type: Object}
		},
    data () {
    return {
      detailShow: false,
      classMap:[],
      score:3.9
    }
  },
  components:{
    star
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false

   }
  },
    mounted(){
			this.classMap = ['decrease','discount','discount','invoice','guarantee'];
		}
	};


</script>

<style>
	.header{
		color:#fff;
		position:relative;
		background:rgba(7,17,27,0.5);
		overflow: hidden;
	}
	.header .content-wrapper{
		padding:24px 12px 18px 24px;
		font-size:0;
		position:relative;
	}
	.header .avatar{
		display:inline-block;
	}
	.header .content{
		margin-left:16px;
		display:inline-block;
	}
	.header .brand{
		display:inline-block;
		width:30px;
		height:18px;
		background:url('brand@2x.png');
		background-repeat:no-repeat;
		background-size:100% 100%;
	}
	.header .title{
		font-size:16px;
		font-weight:bold;
		line-height:18px;
		margin-bottom:8px;
	}
	.header .description{
		font-size:12px;
		font-weight:200;
		line-height:12px;
		margin-bottom:10px;
	}
	.header .supports{
		font-size:10px;
		font-weight:200;
		line-height:12px;
	}
	.header .decrease{
		display:inline-block;
		width:16px;
		height:16px;
		background:url('decrease_1@2x.png');
		background-repeat:no-repeat;
		background-size:100% 100%;
	}
	.header .discount{
		display:inline-block;
		width:16px;
		height:16px;
		background:url('discount_1@2x.png');
		background-repeat:no-repeat;
		background-size:100% 100%;
	}

 	 .header .guarantee{
  	display:inline-block;
  	width:16px;
  	height:16px;
  	background:url('guarantee_1@2x.png');
  	background-repeat:no-repeat;
  	background-size:100% 100%;
  }
  .header .invoice{
		display:inline-block;
		width:16px;
		height:16px;
		background:url('invoice_1@2x.png');
		background-repeat:no-repeat;
		background-size:100% 100%;
	}
	.header .count-wrapper{
		position:absolute;
		right:12px;
		bottom:18px;
		height:24px;
		padding:0px 8px;
		line-height:24px;
		font-size: 10px;
		font-weight:200 ;
		background:rgba(0,0,0,0.2);
		border-radius: 14px;
	}
	.header .gt{
		margin-left:2px;
	}

	.header .bulletin-wrapper{
		height:28px;
		background:rgba(7,17,27,0.2);
	}
	.header .bulletion{
		display:inline-block;
		overflow:hidden;
		text-overflow: ellipsis;
		font-size:12px;
		font-weight:200;
		line-height:28px;
	}
	.header .bk{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index: -1;
		filter:blur(10px);
	}

.header .detail{
		position:fixed;
		z-index:100;
		top:0px;
		left:0px;
		width:100%;
		height:100%;
		overflow: auto;
		background:rgba(7,17,27,0.9);
	}
	.header .detail-wrapper{
		min-height:100%;
		width:100%;
	}
	.header .detail-main{
	   margin-top:64px;
       padding-bottom:64px;
	}
	.header .detail-close{
		margin:-64px auto 0 auto;
	}
	.clearfix::after {
      display: block;
      content: ".";
      height: 0;
      clear: both;
      visibility: hidden;
    }
.detail-close {
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 170px;
}
.line {

   display: inline-block;
   color: rgb(255,255,255,0.4);
   width: 112px;
   margin-bottom: 4px;
   border-top: 1px solid;

}

 .order {
   text-align: center;
   height: 60px;

   line-height: 60px;

}
.text1{
  font-size: 16px;
   color: white;
   margin:25px 12px;
   vertical-align: middle;
   margin-top: 24px;
   line-height:14px;
}
.text2{
  font-size: 13px;
   color: rgb(255,255,255);
   margin:25px 24px;
  font-weight: 100;
   line-height:24px;
}
.title2{
  font-size:16px;
  font-weight:700;
  line-height:18px;
  color: rgb(255,255,255);
  text-align: center;
  margin: 48px 0px 12px 0px;
}
.supports2{
    font-size: 12px;
    line-height: 12px;
    font-weight: 100;
    color: rgb(255,255,255);
}
.icon{
   display:inline-block;

   vertical-align :top;
   margin-top: 6px;
   background-size: 16px 16px;
   background-repeat: no-repeat;
   margin-left: 48px;


 }
 .supports li{
    padding: 8px 20px;
    border-top: 1px solid rgba(7, 17, 27, .1);
 }
 .star{
   text-align: center;
   margin-bottom: 20px;
 }
</style>
