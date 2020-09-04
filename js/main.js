var app = new Vue({
    el:'#app',
    data:{
    
        arrayDatos: [],
        
        tipo: 0,
        nom: null,
        cant: null,
        cont:1234,
        cuota: 0,

        interes: null,
        interesC: null,
        total: null,
        control:0,

        saldo: 5000

    },
    methods: {
        procesar() {
        
           //VALIDACION CANTIDAD NO NEGATIVA
          if (this.cant <= 0 || this.cuota <= 0) {
            this.mensaje("Las cantidades requeridas deben ser mayores a 0", "error");
          }
          else if (this.tipo == "1") {
            this.msj = "Libre inversión";
            this.operacion(this.cant, this.cuota, 1)
            this.descuento(this.cuota, 1)
          }
          else
          {
            this.msj = "Libranza";
            this.operacion(this.cant, this.cuota, 2) 
            this.descuento(this.cuota, 2)
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
        operacion (cTi, cTa, tip) {
            if (tip == 1) {
                vC = parseInt(cTi) / parseInt(cTa);
                iC = vC * (2.5/100);
                cIn = vC + iC;
                inT = iC * cTa;
                this.interes = inT;
                this.interesC = iC;
                this.total = cIn;
                this.control = vC;    
            } else {
                vC = parseFloat(cTi) / parseFloat (cTa);
                iC = vC * (2.9/100);
                cIn = vC + iC;
                inT = iC * cTa;
                this.interes = inT;
                this.interesC = iC;
                this.total = cIn;  
                this.control = vC;
            }        
        },
        descuento (cuo, tip){
            if (tip == 1) {
                if (cuo >0 && cuo <= 11 ) {
                    this.vaD = this.control * (2.3/100);
                    this.nose = Math.round(this.vaD + this.control);
                    this.paty = Math.round(this.vaD );                                                                               
                }
                else if (cuo >= 12 && cuo <= 24) {
                    this.vaD = this.control * (2.1/100);
                    this.nose = Math.round(this.vaD + this.control);
                    this.paty = Math.round(this.vaD ); 
                }
                if (cuo > 24) {
                    this.vaD = this.control * (1.8/100);
                    this.nose = Math.round(this.vaD + this.control);
                    this.paty = Math.round(this.vaD ); 
                } 
                for (let i = 1; i <= this.cuota; i++) {
                  
                    this.cant = Math.round(this.cant - this.control);
                    this.arrayDatos.push({ nom:this.nom, cant:this.cant, nuC:i, tInt:this.paty, total:this.nose});
                }                                                                              
            }
            else if (tip == 2) {
                if (cuo > 0 && cuo <= 11 ) {
                    this.vaD = this.control * (2.7/100);
                    this.nose = Math.round(this.vaD + this.control);
                    this.paty = Math.round(this.vaD );                                                                               
                }
                else if (cuo >= 12 && cuo <= 24) {
                    this.vaD = this.control * (2.5/100);
                    this.nose = Math.round(this.vaD + this.control);
                    this.paty = Math.round(this.vaD ); 
                }
                if (cuo > 24) {
                    this.vaD = this.control * (2.2/100);
                    this.nose = Math.round(this.vaD + this.control);
                    this.paty = Math.round(this.vaD ); 
                }                                                                               
                for (let i = 1; i <= this.cuota; i++) {

                    this.cant = Math.round(this.cant - this.control);
                    this.arrayDatos.push({ nom:this.nom, cant:this.cant, nuC:i, tInt:this.paty, total:this.nose});
                }
            } 
        }            
    },
    computed: {
        total1: function(){
            var total1=0;
            for (var i = 0; i < this.arrayDatos.length; i++) {
                total1 = total1 + parseInt( this.arrayDatos[i].total );              
            }
            return total1;
        },
        total2: function(){
            var total2 = this.cuota;   
            return total2;
        },
        total3: function(){
            var total3=0;
            for (var i = 0; i < this.arrayDatos.length; i++) {
                total3 = total3 + parseInt(this.arrayDatos[i].tInt);              
            }
            return total3;
        },
        total4: function(){
            var total4=0;
            for (var i = 0; i < this.arrayDatos.length; i++) {
                total4 = total4 + parseInt(this.arrayDatos[i].total);              
            }
            return total4;
        }
    }
})