'use strict'
function students(name, correo, promedio) {
    this.name = name;
    this.correo= correo;
    this.promedio= promedio;
    this.validarPromedio = function (){
        if (this.promedio >= 70 ) { 
            return "Aprobado";
        } else{ 
            return "Reprobado";
        }
    }

 this.obtenerUsuario = function () {
     let email = this.correo;
     let post = email.indexOf("@");
     let usuario = email.substring(0,post);
     return usuario;
    };
}
let nathaly = new students("Nathaly", "caballero.nathaly@gmail.com", "80");
alert(nathaly.validarPromedio());
alert(nathaly.obtenerUsuario());