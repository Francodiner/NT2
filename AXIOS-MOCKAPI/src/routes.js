import Home from './components/Home.vue'
import EditProduct from './components/EditProduct.vue'
import AddProduct from './components/AddProduct.vue'

export default [
  {path: "/", component: Home},
  {path: "/edit/:id", component: EditProduct},
  {path: "/add", component: AddProduct}
]