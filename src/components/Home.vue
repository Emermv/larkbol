<template>
  <div >
<div class="md-layout md-align-center">
    <div class="md-layout md-flex-100 md-align-center">
  <img src="../assets/star.png" alt="" style="height:60px;margin-bottom:10px">
    </div>
        <div v-for="(piso,index) in lark_bloks" class="md-layout md-flex-100 md-align-center" :key="index" style="margin:0.5px 0" >
         <img  v-for="(p,index2) in piso" :key="p.id" :src="ladrillos[p.type]" alt=""  style="height:26px;margin: 0 0.5px" @click="show(p,index,index2)" class="cp">
        </div>
</div>
<!--img src="../assets/arbol.png" id="arbol" :style="{height:height}"-->
 <img src="../assets/left.svg" alt="Left" class="arrow left" @click="left">
 <img src="../assets/right.svg" alt="Right" class="arrow right" @click="right">
 <div  class="dialog" v-show="show_dialog">
     <span class="close cp" @click="show_dialog=false">x</span>
   <div class="md-layout md-flex-100 md-align-center">
           <div class="md-layout md-flex-60  md-flex-small-100 md-flex-xsmall-100  md-vertical-align-center" :style="{height:height}" >
      <div class="md-layout md-flex-100 md-align-end" style="height:100px">
           <img :src="ladrillos[future.type]" alt="" style="height:50px;margin: 0 0.5px" >
      </div>
      <div class="md-layout md-flex-100 md-align-center" style="height:100px">
           <img :src="ladrillos[active.type]" alt="" style="height:100px;margin: 0 0.5px" >
      </div>
      <div class="md-layout md-flex-100 md-align-start" style="height:100px">
          <img :src="ladrillos[last.type]" alt="" style="height:50px;margin: 0 0.5px" >
      </div>
     </div>
   </div>
 </div>
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
          default_blocks:[1,2,1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,5],
          show_dialog:false,
          active:{},
          last:{},
          future:{},
        
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
                 piso.push({name:'Emer isau',type:Math.floor(Math.random()*3) + 1,id:this.uniqueId()});
             }
              blocks.push(piso);
         }
         this.$set(this,'lark_bloks',blocks);
        
      },
      left(){

      },
      right(){

      },
      show(p,piso,active){
          window.console.log(p) 
          this.show_dialog=true;
          this.$set(this,'active',p);
           this.$set(this,'last',this.lark_bloks[piso][active-1]);
            this.$set(this,'future',this.lark_bloks[piso][active+1]);
      }
  }
}
</script>
