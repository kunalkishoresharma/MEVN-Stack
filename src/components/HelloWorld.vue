<template>
  <div class="jumbotron">
  <h1 class="display-4">MEVN Stack Task Manager</h1>
  <p class="lead">This is a simple Task Manager Application which is built in Vuejs, MongoDB, NodeJs, ExpressJs Technologies.</p>
  <hr class="my-4">
  <p>Click Below to begin task manager application</p>
  <router-link class="btn btn-primary btn-lg" to="/tasks" role="button">View Task</router-link>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
</style>
