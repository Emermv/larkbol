<template>
  <div >
<div class="md-layout md-align-center">
    <div class="md-layout md-flex-100 md-align-center">
  <img src="../assets/star.png" alt="" style="height:60px;margin-bottom:10px">
    </div>
        <div v-for="(piso,index) in lark_bloks" class="md-layout md-flex-100 md-align-center" :key="index" style="margin:0.5px 0" >
          <span v-for="(p,index2) in piso" :key="p.id" class="lark-block cp" :style="{'background-image':'url('+ladrillos[p.type]+')'}" @click="show(p,index,index2)" >
        
         {{p.short_name}}
          </span>
        </div>
</div>

 <img src="../assets/left.svg" alt="Left" class="arrow left" @click="left">
 <img src="../assets/right.svg" alt="Right" class="arrow right" @click="right">
 <div  class="dialog" v-show="show_dialog">
     <span class="close cp" @click="show_dialog=false">x</span>
   <div class="md-layout md-flex-100 md-align-center">
           <div class="md-layout md-flex-80  md-flex-small-95 md-flex-xsmall-95  md-vertical-align-center" :style="{height:original_height}" >
      <div class="md-layout md-flex-100 md-align-end"  v-if="future!=null && future.name!=''">
                      <div class="large-block future" :style="{'background-image':'url('+large_ladrillos[future.type]+')'}">
           <div class="md-layout md-flex-90">
               <h3 class="md-layout md-flex-100">{{future.name}}</h3>
             <p class="md-layout md-flex-100 ">{{future.comment}}</p>
           </div>
          </div>
      </div>
      <div class="md-layout md-flex-100 md-align-center" v-if="active!=null && active.name!=''">
          <div class="large-block active" :style="{'background-image':'url('+large_ladrillos[active.type]+')'}">
           <div class="md-layout md-flex-90">
               <h3 class="md-layout md-flex-100">{{active.name}}</h3>
             <p class="md-layout md-flex-100 ">{{active.comment}}</p>
           </div>
          </div>
      </div>
      <div class="md-layout md-flex-100 md-align-start"  v-if="last!=null && last.name!=''">
             <div class="large-block last" :style="{'background-image':'url('+large_ladrillos[last.type]+')'}">
           <div class="md-layout md-flex-90 ">
               <h3 class="md-layout md-flex-100">{{last.name}}</h3>
             <p class="md-layout md-flex-100 ">{{last.comment}}</p>
           </div>
          </div>
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
          original_height:window.innerHeight+'px',
          ladrillos:{
              '1':'blocks/1.png',
              '2':'blocks/2.png',
              '3':'blocks/3.png',
              '4':'blocks/4.png'
          },
          large_ladrillos:{
              '1':'large-blocks/1.png',
              '2':'large-blocks/2.png',
              '3':'large-blocks/3.png',
              '4':'large-blocks/4.png'
          },
          lark_bloks:[],
          default_blocks:[1,2,1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,5],
          show_dialog:false,
          active:{},
          last:{},
          future:{},
          active_index:0,
          active_line:0
        
     }
  },
  created(){
    this.get();
     window.$resize.resizeTree=()=>{
       this.height=(window.innerHeight-250)+'px';
       this.original_height=window.innerHeight+'px';
 };
 //this.create_blank();
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
         if(this.show_dialog){
            this.active_index--;
          var found=this.find_active(this.active_line,this.active_index,false);
          if(found.p){
            this.handle_show(this.lark_bloks[found.p][found.i],found.p,found.i);
          }
        }
      },
      right(){
        if(this.show_dialog){
          this.active_index++;
    
          var found=this.find_active(this.active_line,this.active_index,true);
          if(found.p){
            this.handle_show(this.lark_bloks[found.p][found.i],found.p,found.i);
          }

        }
      },
          find_active(piso,active,next=true){
          
        try{
           var found={};
         if(this.lark_bloks[piso]){
              if(this.lark_bloks[piso][active]){
            found.p=piso;
            found.i=active;
          }else{
             if(next){
         
              return  this.find_active(piso+1,0,next);
             }else{
              return  this.find_active(piso-1,this.lark_bloks[piso-1].length-1,next);
             }
          }
         }
        return found;
        }catch(err){
          return {};
        }
      },
      find(piso,active,next=true){
        try{
           var found=null;
         if(this.lark_bloks[piso]){
              if(this.lark_bloks[piso][next?active+1:active-1]){
            found=this.lark_bloks[piso][next?active+1:active-1];
          }else{
            if(next){
              return this.find(piso+1,-1,next);
            }else{
              return this.find(piso-1,this.lark_bloks[piso-1].length,next);
            }
          }
         }
        return found;
        }catch(err){
          return null;
        }
      },
      handle_show(p,piso,active){
            this.active_index=active;
          this.active_line=piso;
             this.$set(this,'active',p);
           this.$set(this,'last',this.find(piso,active,false));
            this.$set(this,'future',this.find(piso,active,true));
         //  window.console.log("back",this.last);
           // window.console.log("FRONT",this.future); 
      },
      show(p,piso,active){
   
           if(p.name!=""){
          this.show_dialog=true;
            this.handle_show(p,piso,active);
           }
      },
      http(url,args){
       return new Promise((resolve,reject)=>{
                 var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if(request.readyState === 4) {
    
    if(request.status === 200) { 
        try{
         resolve(JSON.parse(request.responseText));
        }catch(err){
          reject(err);
        }
    } else {
      reject('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    } 
  }
}
 
request.open('POST', url);
var data=new FormData();
     for(var a in args){
       data.append(a,args[a]);
     }
request.send(data);
       });
      },
      get(){
        this.http("http://159.203.112.192/dashboard/service/larkbol/get",{}).then(response=>{
            if(response.state){
              this.lark_bloks=response.tree;
            }
        });
      }
  }
}
</script>
