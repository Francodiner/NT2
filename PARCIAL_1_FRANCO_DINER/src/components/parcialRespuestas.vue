<template>
    <table class="table bordered striped">
          <thead>
            <tr>
              <th>Numero de pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="respuesta in respuestas" :key="respuesta.index">
              <td>{{ respuesta.pregunta }}</td>
              <td>{{ respuesta.respuesta }}</td>
            </tr>
          </tbody>
        </table>
</template>

<script>
export default {
  name: 'parcialparcialRespuestas',
  data() {
    return {
      respuestas: [
        { pregunta: 1 , respuesta: 'd' },
        { pregunta: 2, respuesta: 'c' },
        { pregunta: 3, respuesta: 'b' }
      ]
    };
  }
}
</script>