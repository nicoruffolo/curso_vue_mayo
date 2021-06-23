<template>
 <div>
    <h3> Alta De un Nuevo Producto </h3>
    <form action class="form">
      <label class="form-label" for="#name">Nombre Producto</label>
      <input
        v-model="form.name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      >
      <br>
      <br>
      <label class="form-label" for="#email">Descripcion del Producto</label>
      <input
        v-model="form.descripcion"
        class="form-input"
        type="text"
        id="descripcion"
		required
        placeholder="Descripcion"
      > 
       <br>
       <br>
      <div class="col s12">
            <button class="btn cyan darken-1 right"
              @click.prevent="agregar()"
              >GUARDAR
              </button>
          </div>
    </form>
 </div>	
</template>
<script>
	export default {
		data: () => ({
     form:{ 
			name: null,
			descripcion: null,
     }
		}),
		mounted() {},
		methods: {
			agregar() {
        console.log(this.form);
				this.$store.dispatch("Name", this.form.name);  //dispatch ejecuta acciones (las actions de vuex)
        this.$store.dispatch("Descripcion", this.form.descripcion);

			},
		},
	};
</script>
