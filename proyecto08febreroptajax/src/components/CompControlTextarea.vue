<template>
  <div class="container">
    <h1 class="titulo">Componente TextArea </h1>
    <p><textarea id="comentarios" v-model="comentarios" name="comentarios" cols="30" rows="10"></textarea></p>
    <p>Cantidad de caracteres ingresados: {{ comentarios.length }}</p>
  </div>

</template>

<script>
import { useRouter } from "vue-router";
export default {
  name:'ControlArea',
  props:['nom'],
  setup(){
    const router = useRouter();
    router.push("/area");
  },
  data(){
    return {
      comentarios:''
    }
  }
}
</script>


<style>
.container{
  width: 75%;
  margin: 0 auto;
  margin-bottom: 3%;
}
.titulo{
  font-style: italic;
}


</style>
