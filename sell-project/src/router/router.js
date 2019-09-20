//编写映射关系(path->component)
//导出router对象
import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from 'cs/goods/goods.vue';
import ratings from 'cs/ratings/ratings.vue';
import seller from 'cs/seller/seller.vue';
import
Vue.use(VueRouter);

const routes =[
   {path:'/goods',component:goods},
   {path:'/ratings',component:ratings},
   {path:'/seller',component:seller},
   {path:'/',redirect:'/goods'}
];

export default new VueRouter({
  // mode:'history',
	routes,
	linkActiveClass:'active'
});
