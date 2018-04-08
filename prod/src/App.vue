<template>
<div>
 <div class="header" >
    <i class='ion-navicon' @click="show = !show" ></i>
    <aside v-show="show" transition="slide" class="headre__menu" >
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
  }
.headre__menu{
  position: absolute;
  left:0;
  top: 0;
  width: 200px;
  min-height: 100%;
  background-color:  rgba(50, 50, 50, 0.8);
  z-index: -10;
  }
  .slide-transition{
    transition: all .3s cubic-bezier(.65, 0.5, 0.56, 1);
  }
  .slide-enter,  .slide-leave{
left: -100%;
  }
</style>
