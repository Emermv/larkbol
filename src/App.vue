<template>
  <div id="app">
    <div class="header md-layout md-vertical-align-center">
<lark-nav></lark-nav>
    </div>
    <div id="main" :style="style">
       <router-view></router-view>
    </div>
     <div class="footer md-layout md-vertical-align-center">
      <div class="md-layout md-flex-50 md-flex-small-100 md-flex-xsmall-100 md-align-small-center md-align-xsmall-center">
         <img src="./assets/logo-lark.png" alt="LARK" >
      </div>
      <div class="md-layout md-flex-50 md-align-end md-hide-small md-hide-xsmall">
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
         height:(window.innerHeight-174)+'px'
       },
      
     }
  },
  created(){
 window.$resize.resizeApp=()=>{
       this.style.height=(window.innerHeight-174)+'px';
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
@font-face {
  font-family: 'Helvetica-Neue';
  font-style: normal;
  src: local('Helvetica-Neue'),url(./assets/fonts/HelveticaNeueCyr-Roman.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
 @import url('./css/style.css');
 html{-webkit-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit}
body{
 
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
a:link{
  text-decoration: none;
}
.truncate{
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.large-block{
width: 30%;
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: 'Futura';
   display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 5px 0;
    padding: 5px 0;
}
.large-block h3{
  margin: 0;
}
.large-block p{
  margin: 0.5px;
}
.large-block.active{
  height: 200px;
}
.large-block.last,.large-block.future{
  height: 120px;
    font-size: 0.8rem;
    width: 25%;
}
.large-block.last h3,.large-block.futre h3{
    font-size: 1rem !important;
 
}
.lark-block{
  height: 26px;
  margin: 0 0.5px;
  width: 76px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: 'Futura';
  font-size:10px;
   display: flex;
    
    align-items: center;
    justify-content: center;
    color: white;
}

#app{
   background-image: url(./assets/fondo.png);
   height:100%;
   background-size: cover;
   background-repeat: no-repeat;
}
.regular-font{
  font-family: 'Helvetica-Neue',Arial;
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
  padding: 5px 100px;
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
  z-index: 101;
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
  z-index: 99;
  bottom: 0;
  background:#351505e0;
}
.dialog .close{
  color:#d15563;
  font-size: 2rem;
  position: absolute;
  font-family: Futura;
  right: 10px;
}
.primary-text{
  color:#d15563;
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

  .large-block, .large-block.future, .large-block.last{
    width: 90%;
    font-size: .75rem;
  }
  .lark-block{
    height: 18px;
    max-width: 50px;
    font-size: 7px;
  }
  .large-block.active{
    height: 140px;
  }
  .header{
    padding: 5px 10px;
  }
}
@media only screen and (max-width: 1500px){
    .lark-block{
    height: 24px;
    max-width: 70px;
    font-size: 10px;
  }

}
</style>
