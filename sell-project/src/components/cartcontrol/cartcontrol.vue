<template>
    <div class="cartcontrol">
        <transition name="roll">
            <div class="decrease0" @click="decrease()" v-show="listItem.count">-</div>
        </transition>
        <div class="count" v-show="listItem.count">{{listItem.count}}</div>
        <div class="add" @click.stop.prevent="add()">+</div>
    </div>
</template>


<script>
 import Vue from 'vue'
    export default {
        props: {
            listItem: {
                type: Object
            }
        },
        methods: {
            decrease() {
                this.listItem.count--
            },
            add() {
                if(!this.listItem.count){
                    Vue.set(this.listItem, "count", 1)
                }else{
                    this.listItem.count++
                }
            }
        }

    }

</script>

<style>
  .cartcontrol {

}
.count {
    display: inline-block;
    font-size: 14px
}
 .add {
    display: inline-block;
    border:1px solid #000;
    border-radius: 50%;
    font-size: 24px;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 12px;
    background-color:rgb(0,160,220);
    border: 1px solid rgb(0,160,220) ;
    color: white;
}
.decrease0{
  display: inline-block;
  border:1px solid #000;
  border-radius: 50%;
  font-size: 24px;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 12px;

  border: 1px solid rgb(0,160,220) ;
  color:  rgb(0,160,220);
}
.roll-enter-active, .roll-leave-active {
    transition: 0.2s all linear
}
.roll-enter, .roll-leave-to {
    transform: translateX(20px) rotate(180deg) ;
}

</style>
