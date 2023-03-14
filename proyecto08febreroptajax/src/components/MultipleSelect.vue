<template>
  <div class="container">
    <h1 class="titulo">Componente Control Select - Option </h1>
    <p>
      <select multiple id="diassemana" name="diassemana" v-model="dia">
          <option disabled value="">Seleccione un día</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miercoles">Miercóles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sabado">Sabado</option>
          <option value="Domingo">Domingo</option>
      </select>
    </p>
    <p>Dia seleccionado: {{dia}}</p>

  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default{
  name:'MultipleSelect',
  props:['nom'],
  setup(){
    const router = useRouter();
    router.push("/mselect");
  },
  data(){
    return {
      dia:[]
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
