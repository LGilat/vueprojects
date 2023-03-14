<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld v-bind:datos="datos" msg="Welcome to Your Vue.js App"/> 
  <HelloWorld  idioma="ingles" />
  <HelloWorld  v-bind:articulos="articulos" />
  <div class="container">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/area" class="nav-link">Area</router-link>
    <router-link to="/cselect" class="nav-link">Control-Select</router-link>
    <router-link to="/mselect" class="nav-link">Multiple-Select</router-link>
    <router-link to="/checkbox" class="nav-link">Control Checkbox</router-link>
  </div>

  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' 
export default {
  name: 'App',
  datos:[],
  components: {
    //HelloWorld,
  },
  data(){
    return{
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
.router-link-active{
  text-decoration: none;
}
.router-link-exact-active{
  color: #42b983;
}
.container a {
  padding: 3%;
  font-size: 1.8em;
  text-decoration: none;
}
body,
html {
  width: 100%;
  height: 100%;
  background: #1c1d22;
  font-family: "Varela Round", sans-serif;
}
</style>
