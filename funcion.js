let selecciona= document.getElementById("selecciona");
let resultado = document.getElementById("resultado");


lista();

function lista (){  
    let ciudades =
     [ 
     {
        "nombre": "Caracas"
    },
    {
        "nombre" :"Bogota"
    },
    {
        "nombre":"Sao Paulo"
    },
    {
        "nombre":"Santiago"
    },
    {
        "nombre": "Buenos Aires"
    }] 
        
     for (let i = 0; i < ciudades.length; i ++){
    
     let opcion = document.createElement("option");
     opcion.text= ciudades[i].nombre;
     opcion.value= ciudades[i].nombre;
     selecciona.appendChild(opcion);
     console.log(ciudades[i].nombre)
      }
}

seleccionar();

function seleccionar (){ 
         function clima(){
                  
            mostrar()
            
              
        };
      
         selecciona.addEventListener("change" , clima );
              
            function mostrar(){

                let indice = selecciona.selectedIndex;
                let ciudadSeleccionada= selecciona.options[indice];
                resultado.innerHTML= (ciudadSeleccionada.text  + " "  + ciudadSeleccionada.value);

            

                fetch("http://api.openweathermap.org/data/2.5/find?q="+ciudadSeleccionada.text+"&units=metric&lang=es&appid=d8892c2224fd2f0a0f31e220ec00776b",{
                    
                 })

                 .then( function(response){
                 if   (response.ok){
                  return response.json()
                 }else {
                  throw "error en la llamada ajax"
                }
                })

                 .then (function(ciudad) {
                   console.log(ciudad);
                   console.log(ciudad.list[0].main.temp);

                   resultado.innerHTML= ("Temperatura Minima:"+ciudad.list[0].main.temp_min+ " " +"Temperatura Maxima:"+" "+ ciudad.list[0].main.temp_max+ " "+ ciudad.list[0].weather[0].description+" "+ ciudad.list[0].weather[0].icon);
            
                })

            }
                  
                 
      
                 

                  
}    
