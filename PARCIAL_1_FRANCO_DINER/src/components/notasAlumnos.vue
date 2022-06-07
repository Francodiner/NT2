<template>
  <div>
    <h2 class="mt-3">Formulario de notasAlumnos</h2>
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
        El campo nombre debe tener al menos 3 caracteres
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.nombre.maxLength"
      >
        El campo nombre debe tener como maximo 15 caracteres
      </div>
      <p>
        Apellido:
        <input
          type="text"
          name="apellido"
          placeholder="Ingrese el apellido"
          class="form-control"
          v-model="apellido"
        />
      </p>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.apellido.required"
      >
        El campo apellido es obligatorio
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.apellido.minLength"
      >
        El campo nombre debe tener al menos 3 caracteres
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.apellido.maxLength"
      >
        El campo nombre debe tener como maximo 15 caracteres
      </div>
      <p>
        Nota:
        <input
          type="number"
          name="nota"
          placeholder="Ingrese la nota"
          class="form-control"
          v-model="nota"
        />
      </p>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.nota.required"
      >
        El campo nota es obligatorio
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.nota.minValue"
      >
        La nota minima es 0
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="submited && !$v.nota.maxValue"
      >
        La nota maxima es 10
      </div>
      <hr />
      <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
    <div v-if="alumnos.length == 0" class="mt-3">
      <h1>Aun no hay alumnos ingresados</h1>
    </div>
    <div
      v-if="alumnos.length > 0"
      class="row mt-4"
      style="background-color: black"
    >
      <div class="col m12">
        <table class="table bordered striped" style="color: white">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alumno in alumnos" :key="alumno.index">
              <td>{{ alumno.nombre }}</td>
              <td>{{ alumno.apellido }}</td>
              <div v-if="alumno.nota >= 0 && alumno.nota <= 3">
                <td style="color: red">{{ alumno.nota }}</td>
              </div>
              <div v-if="alumno.nota >= 4 && alumno.nota <= 6">
                <td style="color: yellow">{{ alumno.nota }}</td>
              </div>
              <div v-if="alumno.nota >= 7 && alumno.nota <= 10">
                <td style="color: green">{{ alumno.nota }}</td>
              </div>
            </tr>
            <div>
              <div v-if="promedio > 0 && promedio <= 3">
                <td style="color: red">Promedio total: {{ promedio }}</td>
              </div>
              <div v-if="promedio > 3 && promedio < 7">
                <td style="color: yellow">Promedio total: {{ promedio }}</td>
              </div>
              <div v-if="promedio >= 7 && promedio <= 10">
                <td style="color :green ">Promedio total: {{ promedio }}</td>
              </div>
            </div>
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
  minValue,
} from "vuelidate/lib/validators";

export default {
  name: "notasAlumnos",
  data() {
    return {
      submited: false,
      nombre: "",
      apellido: "",
      nota: "",
      alumnos: [],
      acumulador: 0,
      promedio: 0,
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
        apellido: this.apellido,
        nota: this.nota,
      };
      this.alumnos.push(data);
      this.acumulador = parseInt(this.acumulador) + parseInt(this.nota);
      this.promedio = parseInt(this.acumulador) / parseInt(this.alumnos.length);
      (this.nombre = ""),
        (this.apellido = ""),
        (this.nota = ""),
        (this.submited = false);
    },
  },
  validations: {
    nombre: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15),
    },
    apellido: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15),
    },
    nota: {
      required,
      minValue: minValue(0),
      maxValue: maxValue(10),
    },
  },
};
</script>