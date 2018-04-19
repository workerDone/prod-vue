<template>
  <div>
    <div v-for="item of message" class="content">
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data() {
    return {
      message: '',
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
  }

};
</script>


<style scoped>
</style>
