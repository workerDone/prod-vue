<template>
<div>
 <div class="header" >
    <i class='ion-navicon' @click="show = !show" ></i>
    <aside v-show="show" transition="slide" class="headre__menu" >
      <router-link class-active="active" :to="'dashboard'">Dashboarb</router-link>
      <router-link class-active="active" :to="'contribution'">Contribution</router-link>
      <router-link class-active="active" :to="'verification'">Verification</router-link>
      <router-link class-active="active" :to="'history'">Histiry</router-link>
      <router-link class-active="active" :to="'faq'">FAQ</router-link>
      <router-link class-active="active" :to="'settings'">Settings</router-link>
    </aside>
  </div>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show:  false,
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .header{
  height: 60px;
  background-color: rgba(50, 50, 50, 1);
  box-shadow:0 0 10px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 10;
  }
  .ion-navicon{
    font-size: 30px;
    color: white;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
  }
.headre__menu{
  position: absolute;
  left:0;
  top: 0;
  width: 200px;
  min-height: 100%;
  background-color:  rgba(50, 50, 50, 0.8);
  padding-top: 70px;
  align-content: stretch;
  }
  .slide-transition{
    transition: all .3s cubic-bezier(.65, 0.5, 0.56, 1);
  }
  .slide-enter,  .slide-leave{
    left: -100%;
  }
  .items{
   
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    color: white;
  }
  .items:hover{
    color: grey;
    background-color: rgba(0, 0, 50, 0.6); 
  }
a{
height: 60px;
display: flex;
align-items: center;
padding-left: 20px;
cursor: pointer;
text-decoration: none;
color: white;
}
a:hover, .router-link-exact-active{
  color: grey;
   background-color: rgba(0, 0, 50, 0.6); 
}

</style>
