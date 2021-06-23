<template>
  <div class="hello">
    <h3> Bievenidos al sistema de productos! </h3>
     
  </div>
</template>

<script>
// import Home from '../views/Home.vue';
// import visualizar from '../views/VisualizarData.vue';
//import Formulario from '../views/Formulario.vue';


export default {
  components: {
    // Home,
    // visualizar,
    //Formulario,
		},
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
