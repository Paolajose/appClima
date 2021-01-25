let selecciona= document.getElementById("selecciona");
let resultado = document.getElementById("resultado");

seleecionar();

function seleccionar (){ 

    fetch("http://api.openweathermap.org/data/2.5/weather?id=2960&appid=d8892c2224fd2f0a0f31e220ec00776b", {
    })

    .then( function(response){
         if   (response.ok){
          return response.json()
        }else {
        throw "error en la llamada ajax"
        }
        })

    .then (function(texto) {
        console.log(texto)
                        
         for (let i = 0; i <=texto.length - 1; i ++){
             console.log(texto[i].name)
             let opcion = document.createElement("option");
             let valor= texto;
             opcion.text= valor[i].description;
             opcion.value= valor[i].icon;
             selecciona.appendChild(opcion);
             text = valor[i].name;
             value=valor[i].capital;  
              
        };
      
         function clima(){
                  
            mostrar();
                 
        };
      
         selecciona.addEventListener("change" , clima );
              
            function mostrar(){
                let indice = seleccion.selectedIndex;
                let ciudadSeleccionada= seleccion.options[indice];
                resultado.innerHTML= (ciudadSeleccionada.text  + " "  + ciudadSeleccionada.value);
                  
                 
      
            }
     })

    
}

console.log(seleccionar)

