<template>
  <div >
<div class="md-layout md-align-center">
    <div class="md-layout md-flex-100 md-align-center">
  <img src="../assets/star.png" alt="" style="height:60px">
    </div>
        <div v-for="(piso,index) in lark_bloks" class="md-layout md-flex-100 md-align-center" :key="index" style="margin:0.5px 0" >
         <img  v-for="p in piso" :key="p.id" :src="ladrillos[p.type]" alt=""  style="height:26px;margin: 0 0.5px">
        </div>
</div>
<!--img src="../assets/arbol.png" id="arbol" :style="{height:height}"-->
 <img src="../assets/left.svg" alt="Left" class="arrow left" @click="left">
 <img src="../assets/right.svg" alt="Right" class="arrow right" @click="right">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
     return{
          height:(window.innerHeight-250)+'px',
          ladrillos:{
              '1':'blocks/1.png',
              '2':'blocks/2.png',
              '3':'blocks/3.png',
              '4':'blocks/4.png'
          },
          lark_bloks:[],
          default_blocks:[1,2,1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,5]
        
     }
  },
  created(){
     window.$resize.resizeTree=()=>{
       this.height=(window.innerHeight-250)+'px';
 };
 this.create_blank();
  },
  methods:{
      uniqueId(length=8) {
    var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
},
      create_blank(){
          //size=105
          var blocks=[];
         for(var b of this.default_blocks){
             var piso=[];
             for(var l=0;l<b;l++){
                 piso.push({name:'Emer isau',type:'1',id:this.uniqueId()});
             }
              blocks.push(piso);
         }
         this.$set(this,'lark_bloks',blocks);
         window.console.log(this.lark_bloks)
      },
      left(){

      },
      right(){

      }
  }
}
</script>
