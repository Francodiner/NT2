<template>
  <div>
    <h2 class="mt-3">Formulario</h2>
    <form class="mt-3" name="form" id="form" v-on:submit.prevent="procesar()">
      <p>
        Nombre:
        <input
          type="text"
          name="nombre"
          placeholder="Ingrese el nombre"
          class="form-control"
          v-model="nombre"
        />
      </p>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.nombre.required"
      >
        El campo nombre es obligatorio
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.nombre.minLength"
      >
        El campo nombre debe tener al menos 5 caracteres
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.nombre.maxLength"
      >
        El campo nombre debe tener como maximo 15 caracteres
      </div>
      <p>
        Edad:
        <input
          type="text"
          name="edad"
          placeholder="Ingrese la edad"
          class="form-control"
          v-model="edad"
        />
      </p>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.edad.required"
      >
        El campo edad es obligatorio
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.edad.minValue"
      >
        El campo edad debe ser como minimo 18 años
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.edad.maxValue"
      >
         El campo edad debe ser como maximo 120 años
      </div>  
      <p>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Ingrese su email"
          class="form-control"
          v-model="email"
        />
      </p>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.email.required"
      >
        El campo email es obligatorio
      </div> 
      <hr />
      <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
    <div v-if="usuarios.length == 0" class="mt-3">
      <h1>Aun no hay usuarios ingresados</h1>
    </div>
    <div
      v-if="usuarios.length > 0"
      class="row mt-4"
      style="background-color: black"
    >
      <div class="col m12">
        <table class="table bordered striped" style="color: white">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.index">
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.edad }}</td>
              <td>{{ usuario.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  maxValue,
  minValue
} from "vuelidate/lib/validators";

export default {
  name: "formularioValidado",
  data() {
    return {
      submited: false,
      nombre: "",
      edad: "",
      email: "",
      usuarios: [],
    };
  },
  methods: {
    procesar() {
      this.submited = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      var data = {
        nombre: this.nombre,
        edad: this.edad,
        email: this.email
      };
      this.usuarios.push(data);
    
      (this.nombre = ""),
        (this.edad = ""),
        this.email = "",
        (this.submited = false);
    },
  },
  validations: {
    nombre: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(15),
    },
    edad: {
      required,
      minValue: minValue(18),
      maxValue: maxValue(120),
    },
    email: {
      required
    }
  },
};
</script>