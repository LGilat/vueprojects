<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <br/>
  <ComponenteNuevo valor="Luis" v-if="mostrar"> </ComponenteNuevo>
  <ComponenteNuevo v-bind:nombre="datosNombre" apellidos="García"> </ComponenteNuevo>
  <button v-on:click="mostrar=!mostrar">Pulsar</button>
  <ComponenteNuevo 
    v-for="(nombre,index) of nombres" 
    v-bind:key="nombre" 
    v-bind:nombre="nombre"
    v-bind:apellidos="apellidos[index]">
  </ComponenteNuevo>
  <div v-if="mostrar">
    <ComponenteUsuarios 
      v-for="usuario of usuarios"
      v-bind:key="usuario.id"
      v-bind:usuario="usuario"
      @borrarUsuario="borrarUsuario(usuario)"> </ComponenteUsuarios>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponenteNuevo from './components/ComponenteNuevo.vue'
import ComponenteUsuarios from './components/ComponenteUsuarios.vue'

export default {
  name: 'App',
  components: {
    HelloWerld,
    ComponenteNuevo,
    ComponenteUsuarios
  },
  data(){
    return {
      mostrar:false,
      datosNombre: "Pedro",
      nombres: ["Pedro","Claudia","Juan"],
      apellidos: ["Garcia","Martínez", "Rodriguez"],
      usuarios: [
        {
          id:0,
          nombre:"Luis",
          apellidos:"Gilabert"
        },
        {
          id:1,
          nombre:"Claudia",
          apellidos:"Martínez"
        },
        {
          id:2,
          nombre:"Tomás",
          apellidos:"Sarabia"
        }

      ]
    }
  },
  methods:{
    borrarUsuario(usuario){
      this.mostrar=!this.mostrar;
      console.log("borrando usuario" + usuario.id);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
