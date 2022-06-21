import Vue from 'vue'

const mixinGlobal = {
    methods: {
        async guardarProducto() {
            let { nombre, sku, precio, stock, estado } = this;
            let data = { nombre, sku, precio, stock, estado };
            try {
                if (data) {
                    this.axios.post(this.$store.state.url, data).then(res => {
                        if (res.data) {
                            this.$router.push('/');
                        }
                    })
                }
            } catch (error) {
                console.error('Error guardando el producto:', error.message)
            }
        },
        async editarProducto() {
            let data = {
                id: this.id,
                nombre: this.nombre,
                sku: this.sku,
                precio: this.precio,
                stock: this.stock,
                estado: this.estado
            }
            try {
                if (data) {
                    this.axios.put(`${this.$store.state.url}/${this.id.id}`, data).then(res => {
                        if (res.data) {
                            this.$router.push('/');
                        }
                    })
                }
            } catch (error) {
                console.error('Error editando el producto:', error.message)
            }
        }
    },
    computed: {

    }
}

Vue.mixin(mixinGlobal)