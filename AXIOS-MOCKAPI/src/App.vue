<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="border-radius: 5px">
      <router-link to="/" class="navbar-brand" style="margin-left: 10px;">TP Final - Grupo 5</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
             <router-link to="/list" class="nav-link">Listado</router-link>
          </li>
          <li class="nav-item">
             <router-link to="/add" class="nav-link">Agregar</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
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
</style>
