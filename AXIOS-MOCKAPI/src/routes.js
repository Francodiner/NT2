import Home from './components/Home.vue'
import EditUser from './components/EditUser.vue'
import AddUser from './components/AddUser.vue'

export default [
  {path: "/", component: Home},
  {path: "/edit/:id", component: EditUser},
  {path: "/add", component: AddUser}
]