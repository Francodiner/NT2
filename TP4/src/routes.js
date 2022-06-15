import listaUsuarios from './components/listaUsuarios.vue'
import formularioValidado from './components/formularioValidado.vue'

export default [
  {path: "/", component: formularioValidado, name: 'formularioValidado'},
  {path: "/listaUsuarios", component: listaUsuarios, name: 'listaUsuarios'}
]