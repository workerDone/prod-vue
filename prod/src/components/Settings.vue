<template>
  <div>
    <div v-if="go" >{{ go.body}}</div>
    <div v-for="(item,key) of message" 
    class="content" v-bind:key>
      <div>{{ item.name }}</div>
      <button type="submit" @click="moveId(key+1)">Go</button>
    </div>
    <button type="submit" @click="moveBack" >Go Back</button>
    <button type="submit" @click="movePost" >Go Post</button>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data() {
    return {
      message: '',
      go: ''
    };
  },
  created() {
   this.$http.get('https://jsonplaceholder.typicode.com/users').then(
     respons => respons.json(),
     respons => console.log('join')
   ).then(respons => 
      {
        this.message = respons;
        console.log( this.message,2)
      })
  },

  methods: {
    moveId(userId) {
      console.log(this.go)
      this.$http.get('https://jsonplaceholder.typicode.com/posts/{userId}', {
        params: {
          userId: userId
        }
      }).then(
     respons => respons.json(),
     respons => console.log('join')
   ).then(respons => 
      {
        this.go = respons;
      })
    },
    moveBack() {
      this.$router.history.go(-1)
    },
    movePost() {
       this.$http.get('https://jsonplaceholder.typicode.com/posts/',{
        params: {
          userId: 2
        }
      }
      ).then(
     respons => respons.json(),
     respons => console.log('join')
     
   ).then(respons => 
      {
        console.log(respons);
      })
    }

  }

};
</script>


<style scoped>
</style>
