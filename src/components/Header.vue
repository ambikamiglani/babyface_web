<template>
  <div class="hello">
    <p class="title">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  .title {
    font-family: Helvetica Neue regular, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    letter-spacing: 0.1em;
    color: blue;
    transform: scale(1, 1.15);
    padding-top: 1em;
  }
</style>
