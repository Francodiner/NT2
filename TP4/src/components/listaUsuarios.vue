<template>
    <table class="table bordered striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value,index) in data" :key="index">
              <td>{{ value.nombre }}</td>
              <td>{{ value.telefono }}</td>
              <td>{{ value.email }}</td>
            </tr>
          </tbody>
        </table>
</template>

<script>
import {api} from '../api'
export default {
  name: 'parciallistaUsuarios',
  data() {
    return {
      data: null
    }
  },
   mounted(){
      this.axios.get(api).then(res => {
        if(res.data){
          this.data = res.data
        }
      })
    }
}
</script>