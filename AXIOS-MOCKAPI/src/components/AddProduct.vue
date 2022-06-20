<template>
  <div>
    Agregar Producto
    <form>
        <label for="nombre">Nombre</label>
        <input type="text" v-model="nombre" name="nombre" class="form-control">
        <label for="sku">Sku</label>
        <input type="text" v-model="sku" name="sku" class="form-control">
        <label for="precio">Precio</label>
        <input type="number" v-model="precio" name="precio" class="form-control">
        <label for="stock">Stock</label>
        <input type="number" v-model="stock" name="stock" class="form-control">
        <label for="estado">Estado</label>
        <select name="estado" id="estado" v-model="estado" class="form-control">
            <option value="1">Activo</option>
            <option value="0">Inactivo</option>
        </select>
        <button class="btn btn-primary my-2" v-on:click="addData">Enviar</button>
    </form>
  </div>
</template>

<script>
import { api } from "../api";
export default {
  name: "AddProduct",
  data() {
    return{
        nombre: null,
        sku: null,
        precio: null,
        stock: null,
        estado: null,
    }
  },
  methods:{
    addData(e){
        e.preventDefault()
        let {nombre, sku, precio, stock, estado} = this;
        let data = {nombre, sku, precio, stock, estado};
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