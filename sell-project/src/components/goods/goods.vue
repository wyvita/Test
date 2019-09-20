<template>
	<div class="goods">
		<div class="menu_wrapper"  v-if="goods.length>0" ref="menuScroll">
      <div class="content">
		   <ul>
		     <li class="menuItem border-bottom" v-for="item in goods">
		     	<span class="text">{{item.name}}</span>
		     </li>
		   </ul>
       </div>
		</div>
		<div v-if="goods.length>0" class="food_wrapper" ref="foodScroll">
      <div class="content">
		 <p class="selected-name">{{goods[selectedIndex].name}}</p>
			 <ul>
				<li v-for="food in goods[selectedIndex].foods">
					<div class="img-wrapper">
						<img :src="food.icon" >
					</div>
            <div class="text0">
              <h3>{{food.name}}</h3>
                <p>月售{{food.sellCount}}份&nbsp;&nbsp;好评率{{food.rating}}</p>
                <p class="price"><strong><span>￥{{food.price}}</span>
              <span v-show="food.oldPrice">￥{{food.oldPrice}}</span></strong></p>
           </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :listItem="food"></cartcontrol>
             </div>
			    	</li>
          </ul>
       </div>
		</div>

	</div>
</template>

<script>
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import BScroll from 'better-scroll';
const ERR_OK=0;

export default {
	props:{
		seller:{}

	},
	data(){
		return {
			goods:[],
			selectedIndex:0
      }
	},
	mounted(){
		//完成挂载，从服务器端加载商品数据
		this.$http.get("http://localhost:1900/goods").then((response)=>{
			if(response.data.errno==ERR_OK){
				this.goods = response.data.data;

         this.$nextTick(() => {
                   this.scroll = new BScroll(this.$refs.foodScroll,{
                           probeType: 13,
                           click: true,
                           // scrollY: true,
                           // pullUpLoad: {
                           // threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
                           //      }
                           });
                       });
         this.$nextTick(() => {
                   this.scroll = new BScroll(this.$refs.menuScroll,{
                           probeType: 13});
                       });
			}
			console.log(this.goods);
		});
	},
  components:{
            cartcontrol

        }


}
</script>

<style>
    .goods{
    	position:absolute;
    	display:flex;
    	width:100%;
    	top:174px;
    	bottom:70px;
    	overflow: hidden;
      background-color:#f3f5f7;
    }
    .goods .menu_wrapper{
    	flex: 0 0 80px;
    	width:80px;
    	top:174px;
    	bottom:70px;
    	background:#f3f5f7;
     /* overflow:scroll; */
    }
    .menu_wrapper .menuItem{
    	display:table;

    }
.food_wrapper .selected-name{
  padding:12px 0px 0px 18px;
  float: left;
  height: 24px;
  width: 100%;
  background-color: rgba(231, 234, 236, 0.6);
}
    .menuItem .text{
    	display:table-cell;
    	vertical-align: middle;
    	padding:0px 12px;
    	height:54px;
    }
    .goods .food_wrapper{
    	flex:1;
    	top:174px;
    	bottom:70px;

    }
    .price span{
      color: red;
      font-weight: 700;
      font-size: 14px;
    }
    .text0 p{
      font-size:10px ;
      color: rgb(147,153,159);
      line-height: 10px;
      margin: 12px 0px 12px 0px;
    }
 .text0{
      float: left;
      margin-top: -92px;
      margin-left: 87px;

 }

    .img-wrapper img{
      width:60px ;
      height: 60px;
      margin:18px 10px 30px 18px ;
    }
    .food_wrapper ul li{
      display: inline-block;
      background-color: white;
      margin-top: 0px;
      width: 100%;
      height: 110px;
      border-bottom: 1px solid rgb(7,17,27,0.1);
    }

.cartcontrol-wrapper{
  float: right;
  margin:-50px 18px  ;
}


</style>
