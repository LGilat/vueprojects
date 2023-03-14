<template>
	<div class="container-center">
		<table>
			<thead>
			<tr>
				<th>Código</th>
				<th>Descripcion</th>
				<th>Precio</th>
			</tr>
			</thead>
			<tbody>
				<tr v-for="art of datos" v-bind:key="art.codigo">
					<td>{{art.codigo}}</td>
					<td>{{art.descripcion}}</td>
					<td>{{art.precio}}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="container-center">
		<h1>Funcion control v-model</h1>
		<div class="aplicacion">
			<p>Ingrese nombre<input type="text" v-model="nombre"></p>
			<p>Ingrese apellido<input type="text" v-model="apellidos"></p>
			<p>Nombre completo: {{ nombreCompleto}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"MIArticulos",
		props:['datos'],
	
		data(){
			return {
				nombre:'',
				apellidos:''
			}
			
		},
		computed:{
			nombreCompleto:function(){
				return this.nombre + ' ' + this.apellidos;
			}
		}
	}

</script>

<style scoped>
	.container-center{
		width:75%;
		margin: 0 auto;
		margin-bottom:1%;
		border:1px solid black;
		box-shadow: 2px 1px 1px darkgrey;
	}
	.container-center table{
		margin:0 auto;
	}
</style>