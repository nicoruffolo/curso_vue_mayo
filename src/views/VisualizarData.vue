<template>
  <div>
      
        <h6> Listado De Productos </h6>
       
       <div  v-for="producto in productos"
                                :key="producto.id"  
                                 class="collection"> Producto Detalle:
                                    {{ producto.description }}
                                    <br>
                                    Producto Nombre:   
                                    {{ producto.name }}                
       
      </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
     productos:[],
     }),
  created() {
    const url ="https://5faeb24463e40a0016d8a044.mockapi.io/api/products"; // aca me quedo con la url nomas

    axios.get(url).then((response) => {
      this.productos = response.data;
    }); //promesa que se queda esperando cuando el servidor me manda algo alget
  }, // manippulo la respuesta del response

  methods: {
    agregar() {
      this.$store.dispatch("setFirstName", this.firstName);
    },
  },
};
</script>
