<template>
    <div>Edit
          <form>
        <label for="nombre">Nombre</label>
        <input type="text" v-model="nombre" name="nombre" class="form-control">
        <label for="telefono">Telefono</label>
        <input type="text" v-model="telefono" name="telefono" class="form-control">
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" class="form-control">
        <button class="btn btn-primary my-2" v-on:click="saveData">Enviar</button>
    </form>

    </div>
</template>

<script>
import { api } from "../api";
export default {
    name: 'EditUser',
     data() {
    return{
        nombre: null,
        telefono: null,
        email: null
    }
  },
  mounted(){
let {id} = this.$route.params;
if(id){
    this.axios.get(`${api}/${id}`).then(res => {
        if(res.data){
            this.id = this.$route.params;
            this.nombre = res.data.nombre,
            this.telefono = res.data.telefono,
            this.email = res.data.email
         }
    })
}
  },
  methods:{
    saveData(e){
        e.preventDefault();
        let data = {
            nombre:this.nombre,
            telefono:this.telefono,
            email:this.email
        }
        if(data){
            this.axios.put(`${api}/${this.id.id}`, data).then(res => {
                if(res.data){
                    this.$router.push('/');
                }
            })
        }
    }
  }
}
</script>