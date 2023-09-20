
//PRIMER EJERCICIO
class Empleado{
    constructor(nombre,edad,salario){
        this._nombre = nombre;
        this._edad = edad;
        this._salario = salario;
    }
    get infoP(){
        return [this._nombre, this._edad, this._salario]
    }
}

let empleado1 = new Empleado('Jose','25','800$')
console.log(empleado1.infoP )



class Gerente extends Empleado{
    constructor(nombre,edad,salario,departamento,empleadosACargo){
        super(nombre,edad,salario)
        this._departamento = departamento;
        this._empleadosACargo = empleadosACargo
    }get reporte(){
        return [this._nombre, this._edad, this._salario, this._empleadosACargo, this._departamento]
    }
}

let gerente1 = new Gerente('David',32, '1400$','Administracion', 20)
console.log(gerente1.reporte)

class Desarrolador extends Empleado{
    constructor(nombre, edad, salario,lenguajeFavorito,proyectosAsignados){
        super(nombre,edad,salario)
        this._lenguajeFavorito = lenguajeFavorito;
        this._proyectosAsignados = proyectosAsignados;
    }get informe(){
        return [this._nombre, this._edad, this._salario, this._proyectosAsignados, this._lenguajeFavorito]
    }
};

let desarrolador1 = new Desarrolador('Daniel',22,'1200$','Crear un software','JavaScript')

console.log(desarrolador1.informe)


function tablaM(multiplo){
    if(multiplo===1){
    for(let i=(multiplo);i <=10; i+=(multiplo)){
        console.log(i)
        }
    }else if(multiplo===2){
        for(let i=(multiplo);i <=20; i+=(multiplo)){
            console.log(i)
        }
    }else if(multiplo===3){
        for(let i=(multiplo);i <=30; i+=(multiplo)){
            console.log(i)
        }

    }else if(multiplo===4){
        for(let i=(multiplo);i <=40; i+=(multiplo)){
            console.log(i)
        }
    }else if(multiplo===5){
        for(let i=(multiplo);i <=50; i+=(multiplo)){
            console.log(i)
        }

    }else if(multiplo===6){
        for(let i=(multiplo);i <=60; i+=(multiplo)){
            console.log(i)
        }
    }else if(multiplo===7){
        for(let i=(multiplo);i <=70; i+=(multiplo)){
            console.log(i)
        }
    }else if(multiplo===8){
        for(let i=(multiplo);i <=80; i+=(multiplo)){
            console.log(i)
        }
    }else if(multiplo===9){
        for(let i=(multiplo);i <=90; i+=(multiplo)){
            console.log(i)
        }
    }else if(multiplo===10){
        for(let i=(multiplo);i <=100; i+=(multiplo)){
            console.log(i)
        }
    }
}
tablaM(2);

/*var ramdom = max => {
    console.log(Math.floor(Math.random() * (max + 1)));
    }
;
ramdom(100)*/
//VARIABLES DEL JUEGO DEL 1 AL 100

var game = Math.floor(Math.random() * 11);
//alert(game)

var intentos = 0;

var acierto = false;

var dificultad = 0;

var select_dificultad = prompt('Facil = 1 - Intermedio = 2 - Dificil = 3')

//CONDICIONES DE DIFICULTAD QUE USAREMOS MAS TARDE
if(select_dificultad == 1){
    dificultad = 1
}

if(select_dificultad == 2){
    dificultad = 2
}

if(select_dificultad == 3){
    dificultad = 3
}

//MODO FACIL
if(dificultad == 1){
    alert('Has seleccioando el modo facil, no hay limite de intentos')

    while(acierto == false){
        var entrada = prompt('Introduce un numero del 0 al 10')
        intentos++
        if(entrada == game){
            alert('Bien hecho, has superado el modo facil.' + ' ' + intentos + ' ' + 'intentos.')
            acierto = true;
            document.write('El numero era:' + game)
        }else{
            alert('Lo siento, no has acertado. Llevas' + ' ' + intentos +' ' +'intentos')
        }
    }
}

//MODO INTERMEDIO
if(dificultad == 2){
    alert('Has seleccioando el modo intermedio, tienes 6 intentos')

    while(acierto == false && intentos < 6){
        var entrada = prompt('Introduce un numero del 0 al 10')
        intentos++
        if(entrada == game){
            alert('Bien hecho, has superado el modo intermedio.' + ' ' + intentos + ' ' + 'intentos.')
            acierto = true;
            document.write('El numero era:' + game)
        }else{
            alert('Lo siento, no has acertado. Llevas' + ' ' + intentos +' ' +'intentos')
        }
    } if(intentos == 6){
        alert('Se te han terminado los intentos, perdiste')
        document.write('El numero correcto era' + game)
    }
}

//MODO DIFICIL
if(dificultad == 3){
    alert('Has seleccioando el modo dificil ,tienes 3 intentos')

    while(acierto == false && intentos < 3){
        var entrada = prompt('Introduce un numero del 0 al 10')
        intentos++
        if(entrada == game){
            alert('Bien hecho, has superado el modo dificil.' + ' ' + intentos + ' ' + 'intentos.')
            acierto = true;
            document.write('El numero era:' + ' ' + game)
        }else{
            alert('Lo siento, no has acertado. Llevas' + ' ' + intentos +' ' +'intentos')
        }
    } if(intentos == 3){
        alert('Se te han terminado los intentos, perdiste')
        document.write('El numero correcto era' + ' ' + game)
    }
}
















