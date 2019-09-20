<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-bottom">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import header from 'cs/header/header.vue';

const ERR_OK=0;

export default {
  name: 'app',
  data(){
  	return {
  		seller:{}
  	};
  },
  mounted(){
  	this.$http.get("http://localhost:1900/seller").then((response)=>{
  		if(response.data.errno==ERR_OK){
  		const seller = response.data.data[0];
        this.seller = seller.seller;
  		}

  	});
  },
  components:{
  	'v-header':header
  }
}
</script>

<style>
	.tab{
		display:flex;
		width:100%;
		height:40px;
		line-height:40px;
		text-align:center;
		border-bottom:1px solid rgba(7,17,27,0.1);
	}
	.tab-item{
		flex:1;
	}
	.tab-item a{
		display:block;
		font-size:14px;
		color:rgb(77,85,93);
	}
	.tab-item a.active{
		color:rgb(240,20,20);
	}
</style>
