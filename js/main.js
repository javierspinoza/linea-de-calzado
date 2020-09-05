var app = new Vue({
<<<<<<< HEAD
    el: '#app',
    data: {

        arrayDatos: [],

        tipo: 0,
        cont1: null,
        cont2: null,
        cont3: null,
        cont4: null,


        nom1: null,
        nom2: null,
        nom3: null,

        cant1: null,
        cant2: null,
        cant3: null,
        cant4: null,
        cant5: null,
        total: 0,
        totalEx: 0,
        valor1: 0


    },
    methods: {
        password: function () {
            if (this.cont1 == "5487") {

            }
            else if (this.cont2 == "1234") {

            }
            if (this.cont3 == "1233") {

            }
            else if (this.cont4 == "5334") {
=======
  el: "#app",
  data: {
    arrayDatos: [],

    tipo: 0,
    cont1: null,
    cont2: null,
    cont3: null,
    cont4: null,

    nom1: null,
    nom2: null,
    nom3: null,

    cant1: null,
    cant2: null,
    cant3: null,
    cant4: null,
    cant5: null,
    total: 0,
    totalEx: 0,
    valor1: 0,
  },
  methods: {
    password: function () {
      if (this.cont1 == "5487") {
      } else if (this.cont2 == "1234") {
      }
      if (this.cont3 == "1233") {
      } else if (this.cont4 == "5334") {
      }
    },
>>>>>>> 71b1021aef9d0792caff940f9792f627bd5fb4eb

    procesar: function () {
      if (this.cant1 < 0) {
        this.mensaje("datos incorretos", "error");
      }
      if (this.tipo == "2") {
        this.salarioB = 857000;
        this.vHora = 52000;
        this.msj = "Secretario";

<<<<<<< HEAD
        procesar: function () {
            if (this.cant1 < 0) {
                this.msj("datos incorretos", "error")                
            }
            else if (this.tipo == "2") {
                this.salarioB = 857000;
                this.vHora = 52000;
                this.msj = "Secretario";

                this.vHoraT = parseInt(this.vHora) * (180 / 100);
                this.totalEx = parseInt(this.cant1) * parseInt(this.vHoraT)
                this.total = parseInt(this.salarioB) + parseInt(this.totalEx);
            }
        },
        javier: function (){
            alert("holajavier")
        },

        vendedor: function () {

        },        

        ensamblador: function () {

        },
        mensaje: function (msj, icono) {
            Swal.fire({
                position: 'top-end',
                icon: icono,
                title: msj,
                showConfirmButton: false,
                timer: 1500
            })
        },
    }
})
=======
        this.vHoraT = parseInt(this.vHora) * (180 / 100);
        this.totalEx = parseInt(this.cant1) * parseInt(this.vHoraT);
        this.total = parseInt(this.salarioB) + parseInt(this.totalEx);
      }
    },
    ozkr(){
        alert("Hola mundo");
    },
    otroDemo(){

    },
    vendedor: function () {},

    ensamblador: function () {},
    mensaje: function (msj, icono) {
      Swal.fire({
        position: "top-end",
        icon: icono,
        title: msj,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
});
>>>>>>> 71b1021aef9d0792caff940f9792f627bd5fb4eb
