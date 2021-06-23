<template>
  <div>

       <h3> Pagina  de Productos :P </h3>
        <h6> Listado De Productos </h6>
        <tr v-for="producto in productos"
                                :key="producto.id"  >
                                <th class="collection"> Producto Detalle
                                   <td class="collection-item"> {{ producto.description }}   </td>
                                   <td> {{ producto.name }}   </td>
                                </th>
                             
                               
       </tr>

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
