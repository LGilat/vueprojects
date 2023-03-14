<template>
  <div class="container">
    <h1 class="titulo">COMPONENTE CHECKBOX</h1>
     <p>
       <input type="checkbox" v-model="terminos">
       Acepto los términos y condiciones
     </p>
     <button v-if="terminos">Confirmar</button>
  </div>

  <div class="container">
    <p><input type="checkbox" v-model="lenguajes" value="C++">C++</p>
    <p><input type="checkbox" v-model="lenguajes" value="C">Lenguaje C</p>
    <p><input type="checkbox" v-model="lenguajes" value="C#">C#</p>
    <p><input type="checkbox" v-model="lenguajes" value="Java">Java</p>
    <p><input type="checkbox" v-model="lenguajes" value="Kotlin">Kotlin</p>
    <p><input type="checkbox" v-model="lenguajes" value="Python">Python</p>
    <p><input type="checkbox" v-model="lenguajes" value="Ruby">Ruby</p>
    <h3>Lenguajes seleccionados</h3>
    <ul>
      <li v-for="(lenguaje,index) of lenguajes" v-bind:key="index"> {{lenguaje}}</li>
    </ul>
    <p>Cantidad de lenguajes que conoce: {{lenguajes.length}}</p>
  </div>
  

</template>

<script>
import { useRouter } from "vue-router";
export default {
  name:'ControlCheckBox',
  props:["nom"],
  setup(){
    const router = useRouter();
    router.push("/checkbox");
  },
  data(){
    return {
      terminos:false,
      lenguajes:[]
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
