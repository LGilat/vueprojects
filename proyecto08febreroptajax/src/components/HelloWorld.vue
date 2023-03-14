<template>
  <div class="container">
    <p>Ingrese nombre: <input type="text" v-model="nombre" ></p>
    <p>Ingrese apellido: <input type="text" v-model="apellido" ></p>
    <p>Nombre completo {{nombreCompleto}}</p>
    <p>valor de new data: {{this.$route.query.midata}}</p>
  </div>



  <div class="container">
    <table>
      <tr>
        <td>Codigo</td>
        <td>Descripcion</td>
        <td>Precio</td>
      </tr>
      <tr v-for="art of datos" v-bind:key="art.id">
        <td>{{ art.codigo }}</td>
        <td>{{ art.descripcion }}</td>
        <td>{{ art.precio }}</td>
      </tr>
    </table>
  </div>

  <div class="container">
    <p v-if="idioma=='castellano'">hola mundo</p>
    <p v-if="idioma=='ingles'">Hello world</p>
  </div>


  <div class="container">
    <p>
      tamaño de la fuente
      <input type="range" v-model="tamanoFuente" min=10 max=100/>
      {{tamanoFuente}}
    </p>
    <p>
      Color: <input type="color" v-model="colorParrafo"></p>
    <p v-bind:style="{'font-size': tamanoFuente + 'px', 'color': colorParrafo}">
        Párrafo de prueba
    </p>
  </div>
  

  <div class="container">
    <table>
      <tr>
        <td>Codigo</td>
        <td>Descripcion</td>
        <td>Precio</td>
        <td>Stock</td>
      </tr>
      <tr v-for="articulo of articulos" v-bind:key="articulo.codigo" >
        <td v-bind:class="{'falta-stock': articulo.stock==0}">{{articulo.codigo}}</td>
        <td v-bind:class="{'falta-stock': articulo.stock==0}">{{articulo.descripcion}}</td>
        <td v-bind:class="{'falta-stock': articulo.stock==0}">{{articulo.precio}}</td>
        <td v-bind:class="{'falta-stock': articulo.stock==0}">{{articulo.stock}}</td>
      </tr>
    </table>
  </div>

  <div class="App">
    <button v-on:click="recuperarPost()">Recuperar Post</button>
    <div v-for="nota in notas" v-bind:key="nota.id">
      <h1>{{nota.title}}</h1>
      <hr>
      {{nota.body}}
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: 'HelloWorld',
  props:['msg','idioma'],
  setup(){
    const router = useRouter();
    router.push("/");
  },
  data(){
    return {
      notas:[],
      error: Boolean,
      tamanoFuente: 20,
      colorParrafo: '#000',
      nombre:'',
      apellido:'',
      datos:[
        {
        codigo: 1, 
          descripcion: 'papas',
          precio: 12.52
        },{
        codigo: 2, 
          descripcion: 'naranjas',
          precio: 21
        },{
        codigo: 3, 
          descripcion: 'peras',
          precio: 18.20
        }

      ],
      articulos: [{
        codigo: 1, 
        descripcion: 'papas',
        precio: 12.52,
        stock: 10
      },{
        codigo: 2, 
        descripcion: 'naranjas',
        precio: 21,
        stock: 0
      },{
        codigo: 3, 
        descripcion: 'peras',
        precio: 18.20,
        stock: 0
      },{
        codigo: 4, 
        descripcion: 'duraznos',
        precio: 35,
        stock: 20                     
      }]

    }
  },
  methods:{
    recuperarPost: function(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((respuesta)=> { 
          if ( respuesta.ok ){
              return respuesta.json(); 
          }
          else{
            throw new Error(respuesta.status);
          }

      }).then ( (respuesta) => { 
          this.notas=respuesta;
      })
        .catch( (err) => {
          this.error=true;
          console.log("ERROR: ", err.message);
        })
    }
  },
  computed: {
    nombreCompleto: function(){
      return this.nombre + ' ' + this.apellido;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.falta-stock{
  background-color: yellow;
  color: blue;
  font-style: italic;
}

.container{
  width: 80%;
  margin: 0 auto;
  margin-bottom: 3%;
  border: 1px solid white;
  text-align: center;
}
.container table {
  text-align: center;
  margin: 0 auto;
}
</style>
