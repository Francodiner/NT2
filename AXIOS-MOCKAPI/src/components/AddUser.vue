<template>
  <div>
    Add
    <form>
        <label for="nombre">Nombre</label>
        <input type="text" v-model="nombre" name="nombre" class="form-control">
        <label for="telefono">Telefono</label>
        <input type="number" v-model="telefono" name="telefono" class="form-control">
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" class="form-control">
        <button class="btn btn-primary my-2" v-on:click="addData">Enviar</button>
    </form>
  </div>
</template>

<script>
import { api } from "../api";
export default {
  name: "AddUser",
  data() {
    return{
        nombre: null,
        telefono: null,
        email: null
    }
  },
  methods:{
    addData(e){
        e.preventDefault()
        let {nombre, telefono, email} = this;
        let data = {nombre, telefono, email};
        debugger
        if(data){
            this.axios.post(api, data).then(res => {
                if(res.data){
                    this.$router.push('/');
                }
            })
        }
    }
  }
};
</script>