var app = new Vue({
    el:'#app',
    data:{
    
        arrayDatos: [],
        
        tipo:0,
        cont1:null,
        cont2:null,
        cont3:null,
        cont4:null,
        msj:"",

        nom1:null,
        nom2:null,
        nom3:null,

        cant1:null,
        cant2:null,
        cant3:null,
        cant4:null,
        cant5:null,

        valor1:0
        
        
    },
    methods: {
        password:function(){
            if(this.cont1== "5487"){

            }
            else if(this.cont2== "1234"){

            }
            if(this.cont3== "1233"){
            
            }
            else if(this.cont4== "5334"){

            }
        },

        procesar:function() {
            if(this.tipo == "2"){
                this.salarioB = 857000;
                this.vHora = 52000;
                this.msj == "Secretario";
                

                this.vHora = parseInt(this.vHora) * (180/100);
                this.totalE = parseInt(this.horaE) * parseInt(this.cant1);
            }
        },
            
        
    }       
})