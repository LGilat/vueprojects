<template>
  <h1>Bienvenido al segundo componente Usuarios</h1>
  <p>Mi segundo componente</p>
  <div>
    <p> {{ usuario.nombre }} - {{ usuario.apellidos }} </p>
  </div>
  <button v-on:click="eliminar()">Eliminar</button>
</template>
<script>
export default{
  name: "ComponenteUsuarios",
  props: ["usuario"],
  methods: {
    eliminar(){
      this.$emit("borrarUsuario");
    }
  }
}

</script>
<style scoped>


</style>
