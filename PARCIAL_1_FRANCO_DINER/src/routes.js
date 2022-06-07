import parcialRespuestas from './components/parcialRespuestas.vue'
import notasAlumnos from './components/notasAlumnos.vue'

export default [
  {path: "/", component: notasAlumnos, name: 'notasAlumnos'},
  {path: "/parcialRespuestas", component: parcialRespuestas, name: 'parcialRespuestas'}
]