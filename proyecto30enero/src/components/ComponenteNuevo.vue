<template>
  <p>Mi primer componente</p>
  <p>Ahora aquí pasamos una variable que vendrá desde el padre {{ valor }}</p>
  <div>
    <h1> Bienvenido al componente nuevo </h1>
    <p> {{ nombre }} - {{ apellidos }}</p>
  </div>
</template>
<script>
export default{
  name: "ComponenteNuevo",
  props: ["nombre","apellidos","valor"],
}
  

</script>
<style scoped>
  p{
    border: 1px solid red;
    padding: 3%;
  }
</style>
