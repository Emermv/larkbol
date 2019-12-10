import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home';
import Dinamica from './components/Dinamica';
import Bases from './components/Bases';
import Premio from './components/Premio';
import Nav from './components/Nav';
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.component('lark-nav',Nav);
const routes = [
  { path: '/', component: Home },
  {path:'/dinamica',component:Dinamica},
  {path:'/bases',component:Bases},
  {path:'/premio',component:Premio},

];
const router = new VueRouter({
  routes // short for `routes: routes`
})
window.$resize={};
new Vue({
  router,
  data:{
    isDesktop:(window.innerWidth>960),
  },
  created(){
    window.onresize=()=>{
      if (window.innerWidth <= 960) {
         if (!this.isDesktop) return;
         this.isDesktop = false;
             this.callOnResize();
       } else {
         if (this.isDesktop) return;
         this.isDesktop = true;
         this.callOnResize();
       }
   };
  },
  methods:{
    callOnResize(){
      for(var f in window.$resize){
        if(typeof window.$resize[f] =='function'){
          window.$resize[f].call(this.isDesktop);
        }
      }
    }
  },
  render: h => h(App),
  
}).$mount('#app')

