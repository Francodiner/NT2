new Vue({
    el: '#app',
    data: {
        saludJugador: 100,
        saludMonstruo: 100,
        hayUnaPartidaEnJuego: false,
        turnos: [], //es para registrar los eventos de la partida
        esJugador: false,
        rangoAtaque: [3, 10],
        rangoAtaqueEspecial: [10, 20],
        rangoAtaqueDelMonstruo: [5, 12],
    },

    methods: {
        getSalud(salud) {
            return `${salud}%`
        },
        empezarPartida: function () {
            this.hayUnaPartidaEnJuego = true;
            this.saludJugador = 100,
            this.saludMonstruo = 100
        },
        atacar: function () {
          
            this.esJugador = true
            
            if(this.esJugador){
                let ataqueAlMostruo =  Math.floor(Math.random()*(this.rangoAtaque[1] - this.rangoAtaque[0]))+this.rangoAtaque[0];
                this.saludMonstruo = this.saludMonstruo - ataqueAlMostruo;
                this.esJugador = false
                alert("Ataque del jugador: " + ataqueAlMostruo)
            }  if(!this.esJugador){
                this.ataqueDelMonstruo()
                alert("Ataque del monstruo: " + this.ataqueDelMonstruo())
            }
            
            
        },

        ataqueEspecial: function () {
            let ataqueEspecial = Math.floor(Math.random()*(this.rangoAtaqueEspecial[1] - this.rangoAtaqueEspecial[0]))+this.rangoAtaqueEspecial[0];
            this.saludMonstruo = this.saludMonstruo - ataqueEspecial; 
            return ataqueEspecial
        },

        curar: function () {
           if(this.saludJugador <= 90){
            this.saludJugador = this.saludJugador + 10
           }else{
            this.saludJugador = 100
           }
        },

        registrarEvento(evento) {
            //No termino de entender la consigna
        },
        terminarPartida: function () {
            this.hayUnaPartidaEnJuego = false;
        },

        ataqueDelMonstruo: function () {
                 let ataqueAlJugador = Math.floor(Math.random()*(this.rangoAtaqueDelMonstruo[1] - this.rangoAtaqueDelMonstruo[0]))+this.rangoAtaqueDelMonstruo[0];
                 this.saludJugador = this.saludJugador - ataqueAlJugador; 
                 return ataqueAlJugador
        },

        calcularHeridas: function (rango) {
            //No termino de entender la consigna
            return 0
        },
        verificarGanador: function () {
            if(this.saludMonstruo <=0 ){
                alert("Perdiste!, el monstruo te ha vencido")
            }else if(this.saludJugador <= 0){
                alert("Ganaste!, el monstruo ha sido vencido")
            }
        },
        cssEvento(turno) {
            //Este return de un objeto es prque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible en el codigo HTML.
            return {
                'player-turno': turno.esJugador,
                'monster-turno': !turno.esJugador
            }
        }
    }
});