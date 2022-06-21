<template>
  <div class="mt-5">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Listado de productos</h1>
      </div>
    </section>

    <table class="table table-striped table-bordered mt-5">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Sku</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Estado</th>
          <th class="text-center">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in data" :key="index">
          <td>{{ value.id }}</td>
          <td>{{ value.nombre }}</td>
          <td>{{ value.sku }}</td>
          <td>{{ value.precio }}</td>
          <td>{{ value.stock }}</td>
          <td v-if="value.estado == 1">Activo</td>
          <td v-else>Inactivo</td>
          <td class="text-center">
            <router-link
              class="btn btn-warning"
              style="margin-right: 10px"
              :to="'/edit/' + value.id"
              >Editar</router-link
            >
            <button class="btn btn-danger" v-on:click="deleteData(value.id)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListProducts",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.axios.get(this.$store.state.url).then((res) => {
      if (res.data) {
        this.data = res.data;
      }
    });
  },
  methods: {
    deleteData(id) {
      if (id) {
        if (confirm(`¿Esta seguro que desea eliminar el producto?`) == true) {
          this.axios.delete(`${this.$store.state.url}/${id}`).then((res) => {
            if (res.data) {
              let newArr = this.data.filter((el) => el.id !== id);
              this.data = newArr;
            }
          });
        }
      }
    },
  },
};
</script>