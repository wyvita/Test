<template>
	<div class="star">
		<span v-for="iClass in stars" class="item" :class="iClass">			
		</span>
	</div>
</template>

<script>
	export default {
		props:{
			score:0
		},		
		computed:{
			stars(){
				let onCnt = parseInt(this.score);
				let halfCnt = this.score-onCnt<0.5?0:1;
				let result =['offStar','offStar','offStar','offStar','offStar'];
				for(var i=0;i<onCnt;i++){
					result[i] = 'onStar';
				}
				if(halfCnt>0) result[i]='halfStar';
				return result;
			}
		}
	}
</script>

<style>
	.item{
		display:inline-block;
		width:20px;
		height:20px;		
	}
	.onStar{
		background: url('star24_on@2x.png');
		background-repeat: no-repeat;
	}
	.offStar{
		background: url('star24_off@2x.png');
		background-repeat: no-repeat;
	}
	.halfStar{
		background: url('star24_half@2x.png');
		background-repeat: no-repeat;
	}
</style>