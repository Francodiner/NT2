<template>
    <table class="table bordered striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in data" :key="index">
          <td>{{ value.nombre }}</td>
          <td>{{ value.telefono }}</td>
          <td>{{ value.email }}</td>
          <td>
            <router-link class="btn btn-primary" :to="'/edit/'+value.id">Edit</router-link>
            <button class="btn btn-danger" v-on:click="deleteData(value.id)">
              Delete
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
        this.axios.delete(`${api}/${id}`).then((res) => {
          if (res.data) {
            let newArr = this.data.filter((el) => el.id !== id);
            this.data = newArr;
          }
        });
      }
    },
  },
};
</script>