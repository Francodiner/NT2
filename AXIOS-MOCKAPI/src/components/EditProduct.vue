<template>
  <div class="mt-5">
    <div v-if="nombre != null">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Edicion de producto</h1>
        </div>
      </section>
      <form class="mt-5">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          v-model="nombre"
          name="nombre"
          class="form-control"
        />
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
        <input
          type="number"
          v-model="stock"
          name="stock"
          class="form-control"
        />
        <label for="estado">Estado</label>
        <select name="estado" id="estado" v-model="estado" class="form-control">
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
        <button class="btn btn-primary my-2 mt-2" v-on:click="saveData">
          Enviar
        </button>
      </form>
    </div>
    <section class="jumbotron text-center mt-5" v-else>
        <div class="container">
          <h1 class="jumbotron-heading">El producto no existe.</h1>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EditProduct",
  data() {
    return {
      nombre: null,
      sku: null,
      precio: null,
      stock: null,
      estado: null,
    };
  },
  mounted() {
    let { id } = this.$route.params;
    if (id) {
      this.axios.get(`${this.$store.state.url}/${id}`).then((res) => {
        if (res.data) {
          this.id = this.$route.params;
          (this.nombre = res.data.nombre),
          (this.sku = res.data.sku),
          (this.precio = res.data.precio);
          (this.stock = res.data.stock), (this.estado = res.data.estado);
        }
      });
    }
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      this.editarProducto();
    },
  },
};
</script>