<template>
  <div class="container">
    <h1 class="titulo">Componente Control Select - Option </h1>
    <p>
      <select id="diassemana" name="diassemana" v-model="dia">
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

  <div class="container">
    <h1 class="titulo">Componente Control Select - Option </h1>
    <p>
      <select id="diassemana" name="diassemana" v-model="idioma">
          <option disabled value="">Seleccione un idioma</option>
          <option value="ingles">Inglés</option>
          <option value="frances">Frances</option>
          <option value="italiano">Italiano</option>
          <option value="portugues">Portugues</option>
      </select>
    </p>
    <p>Dia seleccionado: {{idioma}}</p>
    <p v-if="idioma === 'ingles'">Wellcome </p>
    <p v-if="idioma === 'frances'"> Benvigut en franchu </p>
    <p v-if="idioma === 'italiano'"> Benvenutti</p>
    <p v-if="idioma === 'portugues'"> Obrigado carallu</p>

  </div>

</template>

<script>
import { useRouter } from "vue-router";
export default{
  name:'ControlSelect',
  props:['nom'],
  setup(){
    const router = useRouter();
    router.push("/cselect");
  },
  data(){
    return {
      dia:'',
      idioma:''
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


