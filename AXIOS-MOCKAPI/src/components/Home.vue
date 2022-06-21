<template>
  <main role="main" class="mt-5">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Gestion de Stock</h1>
          <p class="lead text-muted">Aplicación para la gestión de stock de un supermercado. Permite Alta, Baja y Modificación de productos.</p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                  <h2 class="card-text text-center">Listado de productos</h2>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col text-center">
                      <router-link class="btn btn-sm btn-success mt-3" :to="'/list'" >Ver mas...</router-link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                  <h2 class="card-text text-center">Edicion de producto</h2>
                  <input type="text" name="id_product" id="id_product" class="form-control" v-model="data" placeholder="Ingrese el ID del producto">
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div class="col text-center">
                      <router-link class="btn btn-sm btn-warning" :to="'/edit/' + data" >Editar</router-link> 
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                  <h2 class="card-text text-center">Eliminacion de producto</h2>
                  <input type="text" name="" id="" class="form-control" placeholder="Ingrese el ID del producto">
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <div class="col text-center">
                      <button class="btn btn-sm btn-danger">Eliminar...</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
export default {
  name: "HomeA",
  data() {
    return {
      data: null
    };
  }
};
</script>