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
        
        tHijo:0,
    
        nom1:null,
        // nom2:null,
        // nom3:null,

        cant1:null,
        cant2:null,
        cant3:0,
        cant4:0,
        cant5:0,
        valor1:null,

        msm:null

       
       
    },
    methods: {
        password:function(){

            if(this.tipo== "1"){
                if (this.cont1=="1231") {
                    this.ver=1;
                    this.administrador();
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
                this.salarioB = 857000;
                this.vHora = 52000;
                this.msm = "Secretario";
                
                this.vHoraT = parseInt(this.vHora) * (180/100);
                this.totalEx =  parseInt(this.cant1) * parseInt(this.vHoraT);
                this.total = parseInt(this.salarioB) + parseInt(this.totalEx);
                }
                this.arrayDatos.push({nombre:this.nom1, cargo:this.msm, totalR:this.total})
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
                    this.salarioB2 = 900000;
                    this.msm = "Vendedor";

                    if(this.valor1 < 5000000){
                        this.total = this.salarioB2 + 102854;
                    }
                    else if(this.valor1 >= 5000000 && this.valor1 < 10000000){
                        this.totalP = this.salarioB2 * (10 / 100);
                        this.total = this.salarioB2 + this.totalP + 102854;
                    }
                    if(this.valor1 >= 10000000){
                        this.totalP = this.salarioB2 * (20 / 100);
                        this.total = this.salarioB2 + this.totalP + 102854;
                    }
                }
            }
            this.arrayDatos.push({nombre:this.nom1, cargo:this.msm, totalR:this.total})
            this.nom1=null;
        },
        ensambla:function(){
            if(this.tipo == "4"){
                if (this.cant2 < 0 || this.cant3 < 0 || this.cant4 < 0 || this.cant5 < 0) {
                    this.mensaje("El valor ingresado no es valido", "error");
                    return;
                }
                else{
                    this.msm = "Ensamblador";
                    this.salarioB3 = 900000;
                    this.vHora3 = 30000;
                    this.zTo = 2500;
                    this.zTa = 3000;
                    this.hijo1 = 60000;
                    this.hijo2 = 80000;

                    this.totalEx3 = this.vHora3 * (220/100);
                    this.tHoras = this.cant2 * this.totalEx3;
                    // ZAPATOS
                    if (this.cant3 > 0 && this.cant3 < 1000) {
                        this.tZato = 0;
                    }
                    else if (this.cant3 >= 1000 && this.cant3 < 2000) {
                        this.totalP = this.zTo * (10/100);
                        this.tZato = this.cant3 * this.totalP;    
                    }
                    if (this.cant3 >= 2000) {
                        this.totalP = this.zTo * (20/100);
                        this.tZato = this.cant3 * this.totalP;    
                    }
                    // ZAPATILLAS
                    if (this.cant4 >= 0 && this.cant4 < 1700) {
                        this.tZata = 0;
                    }
                    else if (this.cant4 >= 1700 && this.cant4 < 3000) {
                        this.totalP1 = this.zTa * (15/100);
                        this.tZata = this.cant4 * this.totalP1; 
                    }
                    if (this.cant4 >= 3000) {
                        this.totalP1 = this.zTa * (30/100);
                        this.tZata = this.cant4 * this.totalP1; 
                    }
                    // HIJOS
                    
                    if (this.cant5 == 0 ) {
                        this.tHijo = 0;
                        }
                    else if (this.cant5 > 0 && this.cant5 <= 1) {
                        this.tHijo = this.hijo2;
                        }
                    if (this.cant5 >= 2 ) {
                        this.tHijo = this.cant5 * this.hijo1;
                    } 
                    
            
                    this.total = this.salarioB3  + 102854 + this.tZato + this.tZata + this.tHijo + this.tHoras;

                    this.arrayDatos.push({nombre:this.nom1, cargo:this.msm, totalR:this.total})

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

    },
    computed: {
        result: function(){
            var result=0;
            for (var i = 0; i < this.arrayDatos.length; i++) {
                result = result+ parseInt(this.arrayDatos[i].total);              
            }
            return result;
        }
    },
})
