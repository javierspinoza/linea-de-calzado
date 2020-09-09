var app = new Vue({
    el:'#app',
    data:{
    
        arrayDatos: [],
        
        tipo:0,
        ver:0,
        cont1:null,
        cont2:null,
        cont3:null,
        cont4:null,
        nom1:null,

        cant1:null,
        cant2:null,
        cant3:0,
        cant4:0,
        cant5:0,
        valor1:null,

        eZto:0,
        eZta:0,
        zTo:2500,
        zTa:3000,

        eSalarioB : 0,
        eSalarioB2 : 0,
        eSalarioB3 : 0,
        salarioB : 857000,
        salarioB2 : 900000,
        salarioB3 : 900000,

        comi1: 10,
        comi2: 20,
        eComi1: 0,
        eComi2: 0,
        
        cantZ: 30000,
        eCantZ: 0,

        msm:null
// PARA EDITAR 

        
        

     
       
    },
    methods: {
        password:function(){

            if(this.tipo== "1"){
                if (this.cont1=="1231") {
                    this.ver=1;
                    // this.administrador();
                }else{
                    this.mensaje("error en la clave","error");
                }

            }
            if(this.tipo== "2"){
                if (this.cont2=="1234") {
                    this.ver=2;
                    // this.secretario();
                    // this.msm = "Secretario";                    
                }else{
                    this.mensaje("error en la clave","error");
                }

            }
            if(this.tipo== "3"){
                if (this.cont3=="1233") {
                    this.ver=3;
                    // this.vendedor();
                    // this.msj = "Secretario";
                }else{
                    this.mensaje("error en la clave","error");
                }

            }
            if(this.tipo== "4"){
                if (this.cont4=="1232") {
                    this.ver=4;
                    // this.ensambla();
                }else{
                    this.mensaje("error en la clave","error");
                }

            }
        },     
        secretario(){
            if(this.tipo == "2"){
                if (this.cant1<0) {
                    this.mensaje("Horas NO válidas ", "error");
                    return;
                }else{                    
                this.msm = "Secretario";
                var vHora=52000;
                
                let vHoraT = parseInt(vHora) * (180/100);
                let totalEx =  parseInt(this.cant1) * parseInt(vHoraT);
                var total = parseInt(this.salarioB) + parseInt(totalEx);
                }
                this.tSecre = total;
                this.arrayDatos.push({nombre:this.nom1, cargo:this.msm, totalR:total})
                this.nom1=null;
            }
        },
        vendedor(){
            if(this.tipo == "3"){
                if (this.valor1 < 0) {
                    this.mensaje("El valor ingresado no es válido", "error");
                    return;
                }
                else{
                    // var salarioB2 = 900000;
                    this.msm = "Vendedor";

                    if(this.valor1 < 5000000){
                        var total = this.salarioB2 + 102854;
                    }
                    else if(this.valor1 >= 5000000 && this.valor1 < 10000000){
                        var totalP = this.salarioB2 * (this.comi1 / 100);
                        var total = this.salarioB2 + totalP + 102854;
                    }
                    if(this.valor1 >= 10000000){
                        var totalP = this.salarioB2 * (this.comi2 / 100);
                        var total = this.salarioB2 + totalP + 102854;
                    }
                }
            }
            this.tVende = total;
            this.arrayDatos.push({nombre:this.nom1, cargo:this.msm, totalR: total})
            this.nom1=null;
        },
        ensambla:function(){
            if(this.tipo == "4"){
                if (this.cant3 > this.cantZ || this.cant4 > this.cantZ ) {
                    this.mensaje("El valor ingresado no es valido, max: "+ this.cantZ, "error");
                    return;
                }
                if (this.cant2 < 0 || this.cant3 < 0 || this.cant4 < 0 || this.cant5 < 0) {
                    this.mensaje("El valor ingresado no es valido", "error");
                    return;
                }
                else{
                    this.msm = "Ensamblador";
                    var hijo1 = 60000;
                    var hijo2 = 80000;
                    var vHora3 = 30000;
      
                    let totalEx3 = vHora3 * (220/100);
                    var tHoras = this.cant2 * totalEx3;
                    // ZAPATOS
                    if (this.cant3 > 0 && this.cant3 < 1000) {
                        var tZato = 0;
                    }
                    else if (this.cant3 >= 1000 && this.cant3 < 2000) {
                        var totalP = (this.zTo * (10/100)) + this.zTo;
                        
                        var tZato = this.cant3 * totalP;    
                    }
                    if (this.cant3 >= 2000) {
                        var totalP = (this.zTo * (20/100))+ this.zTo;
                        var tZato = this.cant3 * totalP;    
                    }
                    // ZAPATILLAS
                    if (this.cant4 >= 0 && this.cant4 < 1700) {
                        var tZata = 0;
                    }
                    else if (this.cant4 >= 1700 && this.cant4 < 3000) {
                        var totalP1 = (this.zTa * (15/100)) + this.zTa;
                        var tZata = this.cant4 * totalP1; 
                    }
                    if (this.cant4 >= 3000) {
                        var totalP1 = (this.zTa * (30/100)) + this.zTa;
                        var tZata = this.cant4 * totalP1; 
                    }
                    // HIJOS
                    
                    if (this.cant5 == 0 ) {
                        var tHijo = 0;
                        }
                    else if (this.cant5 > 0 && this.cant5 <= 1) {
                        var tHijo = hijo2;
                        }
                    if (this.cant5 >= 2 ) {
                        var tHijo = this.cant5 * hijo1;
                    } 
                    var total = this.salarioB3  + 102854 + tZato + tZata + tHijo + tHoras;
                    this.tnsam = total;

                    this.arrayDatos.push({nombre:this.nom1, cargo:this.msm, totalR:total})

                    this.nom1=null;
                }
            }
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
        editar(){
             this.zTo = this.eZto;
             this.zTa = this.eZta;

             this.salarioB = this.eSalarioB;
             this.salarioB2 = this.eSalarioB2;
             this.salarioB3 = this.eSalarioB3;

             this.comi1 = this.eComi1;
             this.comi2 = this.eComi2;

             this.cantZ = this.eCantZ;
            
        },

    },
    computed: {
        result: function(){
            var result=0;
            for (var i = 0; i < this.arrayDatos.length; i++) {
                result = result+ parseInt(this.arrayDatos[i].totalR);              
            }
            return(result);
            
        }
    },
})
