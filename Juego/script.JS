var miNum1= 0;
var miNum2= 0;
var contT = 0;
var resu = 0;



 
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
    
    if(contT==6){
    
        //setTimeout( function() { window.location.href = "win.html" }, 600);
     
    }

for(i =11; i<=144 ; i++){
    if(contT % 2 == 0){

    if (i == resu){

            
        document.getElementById(i.toString()).style.backgroundImage = "linear-gradient(to right, #ec5853, #ec5853)"; 
        document.getElementById(i.toString()).setAttribute("value", "1")
        document.getElementById("caja").innerHTML = "JUEGA VERDE";
        document.getElementById("caja").style.fontSize = "2vw";
        contador++;

 }
    }else if (i == resu){

        document.getElementById(i.toString()).style.backgroundImage ="linear-gradient(to right, #42ab49, #42ab49)";
        document.getElementById(i.toString()).setAttribute("value", "2")
        document.getElementById("caja").innerHTML = " JUEGA ROJO";
        document.getElementById("caja").style.fontSize = "2vw";
        contador++;
    
}

}
return contador;
}


















