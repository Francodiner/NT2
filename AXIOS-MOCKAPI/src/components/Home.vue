<template>
  <table class="table bordered striped">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Sku</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, index) in data" :key="index">
        <td>{{ value.nombre }}</td>
        <td>{{ value.sku }}</td>
        <td>{{ value.precio }}</td>
        <td>{{ value.stock }}</td>
        <td v-if="value.estado == 1">Activo</td>
        <td v-else>Inactivo</td>
        <td>
          <router-link class="btn btn-primary" :to="'/edit/' + value.id"
            >Editar</router-link
          >
          <button class="btn btn-danger" v-on:click="deleteData(value.id)">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { api } from "../api";
export default {
  name: "HomeA",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.axios.get(api).then((res) => {
      if (res.data) {
        this.data = res.data;
      }
    });
  },
  methods: {
    deleteData(id) {
      if (id) {
        if (confirm(`¿Esta seguro que desea eliminar el producto ?`) == true) {
          this.axios.delete(`${api}/${id}`).then((res) => {
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