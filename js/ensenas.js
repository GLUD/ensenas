
var inicioX;
var finX;
function paneles(id,id2, id3){
	var numeropaneles = id.length;
	var enunciado = document.getElementById(id3);
	enunciado.style.display = "none";
	var contenedor = document.getElementById (id2);
	contenedor.style.width = numeropaneles*100+'%';
	for (i = 0; i <= numeropaneles -1; i++){
		this.innerHTML += '<div class="slide"><div><img class="imgslide" src="../imagenes/'+id[i]+'.svg"></div><div><video autoplay class="videoslide" src="../videos/'+id[i]+'.webm"></video></div><div><h1 class="palabraslide">'+id[i]+'</h1></div></div>';
	}
	var slide = document.getElementsByClassName('slide');
	slide.style.width = 100/numeropaneles+"%";
}
/*function nuevo(id){
   function start(evento){
      inicioX = evento.touches[0].pageX;
  }
  function final(evento){
      finX = evento.changedTouches[0].pageX;
  }
      var divt2 = document.getElementById(id);
      divt2.addEventListener('touchstart',start,false);
      divt2.addEventListener('touchend',final,false);
}
function saber(grupopalabras){
	var contador = 0; 
	var cantidadpalabras = grupopalabras.length;
	var cantidadpalabras = contador.length;
	
  console.log('inicio del toque ' +inicioX +' final del toque '+ finX);
  if(inicioX < finX){
    console.log('***De izquierda a derecha***');
	 contador++;
  }else{
    console.log('***De derecha a izquierda***');
	contador= contador-1;
  }
  if()
}
*/
window.addEventListener('load', function(){nuevo('touch');
document.getElementById('enunciadosaludos').addEventListener("click",paneles(saludos,"contenedor1","enunciadosaludos"),false);
document.getElementById('enunciadopresentacion').addEventListener("click",paneles(presentacion,"contenedor2","enunciadopresentacion"),false);
document.getElementById('enunciadofamilia').addEventListener("click",paneles(familia,"contenedor3","enunciadofamilia"),false);
document.getElementById('touch').addEventListener('touchend',saber(saludos),
												  
false ) ;
}, false);
