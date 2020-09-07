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
        // nom2:null,
        // nom3:null,

        cant1:null,
        cant2:null,
        cant3:null,
        cant4:null,
        cant5:null,
        valor1:0,

        total:0,
        totalEx:0,
        total1:0,
        msm:null,
        
        
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
                    this.ensamblador();
                }else{
                    this.mensaje("error en la clave","error");
                }

            }
           
        },

        procesar:function() {
            
            // if(this.tipo == "1"){
            //     alert("administrador");
            // }else if(this.tipo == "2"){
            //     this.password("2",this.cont2);
            //     this.secretario();
            // }if(this.tipo == "3"){
            //     this.password("3",this.cont3);
            //     this.vendedor();

            // }
        },
         
        secretario(){
            if(this.tipo == "2"){
                if (this.cant1<0) {
                    this.mensaje("Horas NO validas ", "error");
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
            }
        },

        vendedor(){
            if(this.tipo == "3"){
                if (this.valor1 < 0) {
                    this.mensaje("El valor ingresado no es valido", "error");
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

        // mpush(){
        //     this.arrayDatos.push({nombre:this.nom1, cargo:this.msm, total:this.total})
        // }
    }       
})

