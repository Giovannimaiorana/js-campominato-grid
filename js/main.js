//COLLEGHIAMO ALLA GRIGLIA JS UN ELEMENTO DINAMICO
   const gridDom = document.getElementById('griglia');
   const btnNewGame = document.getElementById('btn');
  
   btnNewGame.addEventListener('click',
         function(){
          for(i = 0; i < 100 ; i++){
             celle = creazioneElemento();  
             console.log(celle);  
             gridDom.append(celle);  
          }
          
         }
        
      );

 

   
  
   
//CREIAMO FUNZIONE CHE CREI ELEMENTO DINAMICO

function creazioneElemento() {
   const element = document.createElement('div');
   element.classList.add('cella');
   return element;
}
// CREAIAMO FUNZIONE PER NUMERO RANDOM

function creazioneNumero (min, max){
   let numero = Math.floor(Math.random()* (max - min +1)) + min;
   return numero; 
   
}


