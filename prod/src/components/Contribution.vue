<template>
  <div class="hello">
    <button @click="moveLine" >hello</button>
    <input v-model="message"  >
    <div v-for="(item, index) in array" > {{ item }}</div>
    <button @click="show = !show" >show</button>
    <div v-if="show" >man</div>
    <div v-else >woman</div>
    <div v-show="show" >man</div>
    <app-contribution-message :message="message" @moveLock="lock"  data-3d-date-picker="true" ></app-contribution-message>
  </div>

</template>

<script>
import ContributionMessage from '../children/ContributionMessage.vue';

export default {
  name: 'Contribution',
  data() {
    return {
      message: '',
      picked : '',
      msg: 'Welcome to Your Vue.js App',
      date: '',
      array: [],
      show: false,
    };
  },
  methods: {
    lock(event) {
      console.log(event + 1)
    },
    move: function (message) {
      console.log(message);
    },

    moveLine: function () {
      this.array.push(this.message);

      this.move(this.message);
    },

    moveShow: function () {

    },
    MoveDate(){
      
    }
  },
  components: {
    'app-contribution-message' : ContributionMessage
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
