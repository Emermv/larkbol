<template>
  <div id="app">
    <div class="header md-layout md-vertical-align-center">
 <div class="md-layout md-flex-70 md-flex-xsmall-100 md-flex-small-100 md-align-xsmall-center md-align-small-center ">
    <router-link to="/"><img src="./assets/larkbol-logo.png" alt="El larkbolito" class="logo"></router-link>
 </div>
  <div class="nav md-layout md-flex-30 md-vertical-align-center md-hide-small md-hide-xsmall">
         <a class="cp" @click="navigate('/dinamica')">DINÁMICA</a>
         <a class="cp" @click="navigate('/bases')">BASES</a>
         <a class="cp" @click="navigate('/premio')">PREMIOS</a>
      </div>
    </div>
    <div id="main" :style="style">
       <router-view></router-view>
    </div>
     <div class="footer md-layout md-vertical-align-center">
      <div class="md-layout md-flex-50">
         <img src="./assets/logo-lark.png" alt="LARK" >
      </div>
      <div class="md-layout md-flex-50 md-align-end">
         <span>2019 © adperu comunication group</span>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
     return {
       style:{
         height:(window.innerHeight-200)+'px'
       },
      
     }
  },
  created(){
 window.$resize.resizeApp=()=>{
       this.style.height=(window.innerHeight-200)+'px';
 };
  },
methods:{
    navigate(to){
      
      this.$router.push(to);
    }
  }
}
</script>

<style>
@font-face {font-family: "Futura";
    src: url("http://db.onlinewebfonts.com/t/9ab8abd11c40ee5c8d1905f9c9cb9ac8.eot"); /* IE9*/
    src: url("http://db.onlinewebfonts.com/t/9ab8abd11c40ee5c8d1905f9c9cb9ac8.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("http://db.onlinewebfonts.com/t/9ab8abd11c40ee5c8d1905f9c9cb9ac8.woff2") format("woff2"), /* chrome firefox */
    url("http://db.onlinewebfonts.com/t/9ab8abd11c40ee5c8d1905f9c9cb9ac8.woff") format("woff"), /* chrome firefox */
    url("http://db.onlinewebfonts.com/t/9ab8abd11c40ee5c8d1905f9c9cb9ac8.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("http://db.onlinewebfonts.com/t/9ab8abd11c40ee5c8d1905f9c9cb9ac8.svg#Futura") format("svg"); /* iOS 4.1- */
}
 @import url('./css/style.css');
body{
 
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
#app{
   background-image: url(./assets/fondo.png);
   height:100%;
   background-size: cover;
   background-repeat: no-repeat;
}
.footer{
  background:#d15563;
  height: 50px;
  padding: 0 100px;
}
.footer img{
  height: 25px;
}
.footer span{
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .8rem;
}
.header{
  height: 150px;
  padding: 0 100px;
}
.header .logo{
height: 110px;
}
.header .nav{
    justify-content: space-between;
}
.header .nav>a{
  color: #d15563;
  font-weight: bold;
  font-family: 'Futura';

}
#main{
  display: flex;
  align-items: center;
  align-content:center;
  justify-content: center;
 
}

.cp{
  cursor: pointer;
}
.arrow{
  position: absolute;
  bottom: 150px;
  height: 50px;
  cursor: pointer;
}
.arrow.left{
  left: 100px;
}
.arrow.right{
  right: 100px;
}
.dialog{
  position: absolute;
  right: 0;
  top: 0;
  left:0;
  bottom: 0;
  background:#351505c4;
}
.dialog .close{
  color:#d15563;
  font-size: 2rem;
  position: absolute;
  font-family: Futura;
  right: 10px;
}
@media only screen and (max-width: 996px){
  #arbol{
    width: 100%;
  }
  .arrow{
    bottom: 100px;
  }
  .arrow.right{
    right:5px;
  }
  .arrow.left{
    left:5px;
  }
}
</style>
