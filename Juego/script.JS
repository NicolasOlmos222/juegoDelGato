var miNum1= 0;
var miNum2= 0;
var contT = 0;
var resu = 0;

var matriz = [  [11, 12, 14, 15, 16, 18, 20], 
                [21, 22, 24, 25, 27, 28, 30], 
                [32, 33, 35, 36, 40, 42, 44], 
                [45, 48, 49, 50, 54, 55, 56], 
                [60, 63, 64, 66, 70, 72, 77], 
                [80, 81, 84, 88, 90, 96, 99], 
                [100,108,110,120,121,132,144]];

 
var boton = document.getElementById("boton1");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=1;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton1").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton1").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=1;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton1").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton1").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==1){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton1").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton1").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==1){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton1").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});



var boton = document.getElementById("boton2");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=2;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton2").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton2").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=2;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton2").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton2").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==2){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton2").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton2").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==2){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton2").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});





var boton = document.getElementById("boton3");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=3;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton3").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton3").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=3;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton3").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton3").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==3){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton3").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton3").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==3){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton3").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton4");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=4;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton4").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton4").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=4;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton4").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton4").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==4){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton4").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton4").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==4){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton4").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton5");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=5;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton5").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton5").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=5;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton5").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton5").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==5){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton5").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton5").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==5){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton5").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton6");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=6;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton6").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton6").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=6;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton6").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton6").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==6){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton6").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton6").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==6){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton6").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton7");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=7;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton7").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton7").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=7;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton7").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton7").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==7){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton7").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton7").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==7){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton7").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton8");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=8;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton8").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton8").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=8;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton8").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton8").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==8){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton8").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton8").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==8){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton8").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton9");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=9;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton9").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton9").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=9;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton9").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton9").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==9){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton9").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton9").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==9){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton9").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton10");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=10;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton10").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton10").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=10;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton10").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton10").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==10){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton10").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton10").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==10){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton10").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton11");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=11;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton11").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton11").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=11;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton11").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton11").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==11){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton11").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton11").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==11){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton11").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
        contador=refrescar(resu,contador);
});

var boton = document.getElementById("boton12");
boton.addEventListener("click", function(){

    
    if (miNum1 == 0){
        miNum1=12;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton12").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton12").style.backgroundImage= "linear-gradient(to right, #ec5853, #ec5853)";
            contT++
        }
    } else if (miNum2 ==0){
        
        miNum2=12;
        if(miNum1 == miNum2){

            resu = miNum2 * miNum1;
            document.getElementById("boton12").style.backgroundImage= "linear-gradient(to right, #42ab49, #ec5853)";
            contT++
            
    
        }else {
            resu = miNum2 * miNum1;
            document.getElementById("boton12").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)";
            contT++
        }

            
    } else if (miNum1 ==12){
        if(miNum1 == miNum2){
        miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton12").style.backgroundImage= "linear-gradient(to right, #42ab49, #42ab49)"
        } else{

            miNum1=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton12").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)"

        }

    }else if (miNum2 ==12){
        miNum2=0;
            resu = miNum2 * miNum1;
            document.getElementById("boton12").style.backgroundImage= "linear-gradient(to right, #ffd992, #ffd992)";
        }
       contador=refrescar(resu,contador);
});





var contador = 0;
function refrescar(resu,contador){
    
    function matrizar(num, jug){
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                if (matriz[i][j] === num){
                    matriz[i][j] = jug;
                }
            }
        }
    }

for(i =11; i<=144 ; i++){
    if(contT % 2 == 0){

    if (i == resu){
        document.getElementById(i.toString()).style.backgroundImage = "linear-gradient(to right, #ec5853, #ec5853)"; 
        document.getElementById(i.toString()).setAttribute("value", "1")
        document.getElementById("caja").innerHTML = "JUEGA VERDE";
        document.getElementById("caja").style.fontSize = "2vw";
        contador++;
        matrizar(resu, 1);

 }
    }else if (i == resu){

        document.getElementById(i.toString()).style.backgroundImage ="linear-gradient(to right, #42ab49, #42ab49)";
        document.getElementById(i.toString()).setAttribute("value", "2")
        document.getElementById("caja").innerHTML = " JUEGA ROJO";
        document.getElementById("caja").style.fontSize = "2vw";
        contador++;
        matrizar(resu, 2);
}

}
    //Compara todas las filas y 3 columnas menos
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7 - 3; j++) {
            if (matriz[i][j] === 1 && matriz[i][j+1] === 1 && matriz[i][j+2] === 1 && matriz[i][j+3] === 1) {
                setTimeout( function() { window.location.href = "win.html" }, 600);
            }
            else if (matriz[i][j] === 2 && matriz[i][j+1] === 2 && matriz[i][j+2] === 2 && matriz[i][j+3] === 2) {
                setTimeout( function() { window.location.href = "win.html" }, 600);
            }
        }
    }
    //Compara todas las columnas y 3 filas menos
    for (let i = 0; i < 7 - 3; i++) {
        for (let j = 0; j < 7; j++) {
            if (matriz[i][j] === 1 && matriz[i+1][j] === 1 && matriz[i+2][j] === 1 && matriz[i+3][j] === 1) {
                setTimeout( function() { window.location.href = "win.html" }, 600);
            }
            else if (matriz[i][j] === 2 && matriz[i+1][j] === 2 && matriz[i+2][j] === 2 && matriz[i+3][j] === 2) {
                setTimeout( function() { window.location.href = "win.html" }, 600);
            }
        }
    }
    //Compara oblicuo derecho
    for (let i = 0; i < 7 - 3; i++) {
        for (let j = 0; j < 7 - 3; j++) {
            if (matriz[i][j] === 1 && matriz[i+1][j+1] === 1 && matriz[i+2][j+2] === 1 && matriz[i+3][j+3] === 1) {
                setTimeout( function() { window.location.href = "win.html" }, 600);
            }
            else if (matriz[i][j] === 2 && matriz[i+1][j+1] === 2 && matriz[i+2][j+2] === 2 && matriz[i+3][j+3] === 2) {
                setTimeout( function() { window.location.href = "win.html" }, 600);
            }
        }
    }
    //Compara oblicuo izquierdo
    for (let i = 3; i < 7; i++) {
        for (let j = 3; j < 7; j++) {
            if (matriz[i][j] === 1 && matriz[i-1][j-1] === 1 && matriz[i-2][j-2] === 1 && matriz[i-3][j-3] === 1) {
                setTimeout( function() { window.location.href = "win.html" }, 600);
            }
            else if (matriz[i][j] === 2 && matriz[i-1][j-1] === 2 && matriz[i-2][j-2] === 2 && matriz[i-3][j-3] === 2) {
                setTimeout( function() { window.location.href = "win.html" }, 600);
            }
        }
    }

    return contador;
}


















