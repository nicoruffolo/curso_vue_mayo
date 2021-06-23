<template>
	<div>
		<h1>producto actual: {{ name }}</h1>
        <h1>producto actual: {{ descripcion }}</h1>

		
	</div>
</template>

<script>
	export default {
		data: () => ({
			name: null,
            descripcion:null,
		}),
		components: {},

		mounted() {
			this.name = this.$store.getters.name;
            this.descripcion = this.$store.getters.descripcion;
		},

		methods: {
			
		},
	};
</script>
