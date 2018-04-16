<template>
    <div>
        <div :class="data" > {{message}} </div>
        <input type="text"  @input="moveDate" >
        <input type="text" v-model.number="join" >
        <input
            type="checkbox"
            v-model="toggle"
            true-value="hello"
            false-value="man"
            >
        <button @click="move(join, toggle)" >click</button>
    </div>
</template>

<script>
export default {
  name: "ContributionMessage",
  props: ["message"],
  data() {
    return {
        data: 'join',
      hello: "",
      join: "",
      toggle: ''
    };
  },
  methods: {
    moveDate(event) {
      this.$emit("moveLock", event.target.value);
    },
    move(join, toggle) {
      console.log(join,toggle);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.join{
    color:red;
}
</style>
