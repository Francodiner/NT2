<template>
  <div class="mt-5">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Edicion de producto</h1>
      </div>
    </section>
    <form class="mt-5">
      <label for="nombre">Nombre</label>
      <input type="text" v-model="nombre" name="nombre" class="form-control" />
      <label for="sku">Sku</label>
      <input type="text" v-model="sku" name="sku" class="form-control" />
      <label for="precio">Precio</label>
      <input
        type="number"
        v-model="precio"
        name="precio"
        class="form-control"
      />
      <label for="stock">Stock</label>
      <input type="number" v-model="stock" name="stock" class="form-control" />
      <label for="estado">Estado</label>
      <select name="estado" id="estado" v-model="estado" class="form-control">
        <option value="1">Activo</option>
        <option value="0">Inactivo</option>
      </select>
      <button class="btn btn-primary my-2 mt-2" v-on:click="addData">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      nombre: null,
      sku: null,
      precio: null,
      stock: null,
      estado: null,
    };
  },
  methods: {
    addData(e) {
      e.preventDefault();
      this.guardarProducto();
    },
  },
};
</script>