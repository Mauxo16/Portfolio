//Autor: Mauro Santiago Garcia Rodriguez, 307824

const nav_agEmp = document.querySelector('#nav_agEmp');
const nav_estadisticas = document.querySelector('#nav_estadisticas');
const nav_verRec = document.querySelector('#nav_verRec');
const nav_principal = document.querySelector('#nav_principal');
const bttn_agregar_reclamo = document.querySelector('#Bttn_agregar_rec');
const reclamo_box = document.querySelector('#Reclamo_box')

const Bttn_volver = document.querySelector('#Bttn_volver');
const Bttn_agregar_emp = document.querySelector('#Bttn_agregar_emp');
const Bttn_agregar = document.querySelector('#Bttn_agregar');

var lista_emp = [];
var lista_rec = [];
var letrasFiltro = [];



//Logica navegador?
nav_agEmp.addEventListener('click', function(){
	document.querySelector('.Gestion_rec').style.display = 'none';
	document.querySelector('.Gestion_rec').style.overflow = 'hidden';
	document.querySelector('#agregar_emp').style.display = 'block';
	document.querySelector('#agregar_emp').style.overflow = 'visible';
	document.querySelector('#Estadísticas').style.display = 'none';
	document.querySelector('#Estadísticas').style.overflow = 'hidden';
	document.querySelector('#rec_ingres').style.display = 'none';
	document.querySelector('#rec_ingres').style.overflow = 'hidden';
	document.querySelector('#Agregar_rec').style.display = 'none';
	document.querySelector('#Agregar_rec').style.overflow = 'hidden';
});

nav_estadisticas.addEventListener('click', function() {
	document.querySelector('.Gestion_rec').style.display = 'none';
	document.querySelector('.Gestion_rec').style.overflow = 'hidden';
	document.querySelector('#agregar_emp').style.display = 'none';
	document.querySelector('#agregar_emp').style.overflow = 'hidden';
	document.querySelector('#Estadísticas').style.display = 'block';
	document.querySelector('#Estadísticas').style.overflow = 'visible';
	document.querySelector('#rec_ingres').style.display = 'none';
	document.querySelector('#rec_ingres').style.overflow = 'hidden';
	document.querySelector('#Agregar_rec').style.display = 'none';
	document.querySelector('#Agregar_rec').style.overflow = 'hidden';
	
//Orden nombre Creciente
document.querySelector('#Creciente').addEventListener('click', function() {
		document.querySelector('#Decreciente').checked = false;
		
let NombreOrdenado = lista_emp.sort((p1,p2) => (p1.Nombre < p2.Nombre) ? -1 : (p1.Nombre > p2.Nombre) ? 1 : 0);

	document.querySelector('#Estadistic').innerHTML = " <tr> <th id='Nombre'>Nombre</th> <th id='Direccion'>Direccion</th> <th id='Rubro'>Rubro</th> <th id='Cantidad'>Cantidad</th> </tr> ";
	for (i=0; i < lista_emp.length; i++) {
		document.querySelector('#Estadistic').innerHTML += "<tr> <td>" + NombreOrdenado[i].Nombre + "</td> <td>" + NombreOrdenado[i].Direccion + "</td> <td> " + NombreOrdenado[i].Rubro + "</td> <td>" + NombreOrdenado[i].Contador + "</td> </tr>";
			
	}

	

});

//Orden nombre Decreciente
document.querySelector('#Decreciente').addEventListener('click', function() {
		document.querySelector('#Creciente').checked = false;

let NombreOrdenado = lista_emp.sort((p1,p2) => (p1.Nombre < p2.Nombre) ? 1 : (p1.Nombre > p2.Nombre) ? -1 : 0);
	console.log(NombreOrdenado);
	
	document.querySelector('#Estadistic').innerHTML = " <tr> <th id='Nombre'>Nombre</th> <th id='Direccion'>Direccion</th> <th id='Rubro'>Rubro</th> <th id='Cantidad'>Cantidad</th> </tr> ";
	for (i=0; i < lista_emp.length; i++) {
		document.querySelector('#Estadistic').innerHTML += "<tr> <td>" + NombreOrdenado[i].Nombre + "</td> <td>" + NombreOrdenado[i].Direccion + "</td> <td> " + NombreOrdenado[i].Rubro + "</td> <td>" + NombreOrdenado[i].Contador + "</td> </tr>";
			
	}

});
	
	
})

nav_verRec.addEventListener('click', function() {
	document.querySelector('.Gestion_rec').style.display = 'none';
	document.querySelector('.Gestion_rec').style.overflow = 'hidden';
	document.querySelector('#agregar_emp').style.display = 'none';
	document.querySelector('#agregar_emp').style.overflow = 'hidden';
	document.querySelector('#Estadísticas').style.display = 'none';
	document.querySelector('#Estadísticas').style.overflow = 'hidden';
	document.querySelector('#rec_ingres').style.display = 'block';
	document.querySelector('#rec_ingres').style.overflow = 'visible';
	document.querySelector('#Agregar_rec').style.display = 'none';
	document.querySelector('#Agregar_rec').style.overflow = 'hidden';
})

nav_principal.addEventListener('click', function() {
	document.querySelector('.Gestion_rec').style.display = 'block';
	document.querySelector('.Gestion_rec').style.overflow = 'visible';
	document.querySelector('#agregar_emp').style.display = 'none';
	document.querySelector('#agregar_emp').style.overflow = 'hidden';
	document.querySelector('#Estadísticas').style.display = 'none';
	document.querySelector('#Estadísticas').style.overflow = 'hidden';
	document.querySelector('#rec_ingres').style.display = 'none';
	document.querySelector('#rec_ingres').style.overflow = 'hidden';
	document.querySelector('#Agregar_rec').style.display = 'none';
	document.querySelector('#Agregar_rec').style.overflow = 'hidden';
	
})



Bttn_volver.addEventListener('click', function() {
		document.querySelector('.Gestion_rec').style.display = 'block';
	document.querySelector('.Gestion_rec').style.overflow = 'visible';
	document.querySelector('#agregar_emp').style.display = 'none';
	document.querySelector('#agregar_emp').style.overflow = 'hidden';
	document.querySelector('#Estadísticas').style.display = 'none';
	document.querySelector('#Estadísticas').style.overflow = 'hidden';
	document.querySelector('#rec_ingres').style.display = 'none';
	document.querySelector('#rec_ingres').style.overflow = 'hidden';
	document.querySelector('#Agregar_rec').style.display = 'none';
	document.querySelector('#Agregar_rec').style.overflow = 'hidden';

});

//Agregar empresas
Bttn_agregar_emp.addEventListener('click', function() {
	var emp = {
	Nombre: '' ,
	Direccion: '',
	Rubro: '',
	Contador: 0,
	Cantidad: 0,
}
	var nuevaLetra = true;
	var pasa = true;
	for (i=0; i < lista_emp.length; i++) {
		if (document.querySelector('#emp_nombre').value.toUpperCase() == lista_emp[i].Nombre.toUpperCase()) {
		pasa = false;
		alert('Ya existe una empresa con ese nombre, elige otro');
		}
	}

if (pasa) {	
	emp.Nombre = document.querySelector('#emp_nombre').value.charAt(0).toUpperCase() + document.querySelector('#emp_nombre').value.slice(1);
	emp.Direccion = document.querySelector('#emp_direccion').value;
	emp.Rubro = document.querySelector('#emp_rubro').value;
	lista_emp.unshift(emp);
	document.querySelector('#rec_empresa').innerHTML += '<option value="' + emp.Nombre + '">' + emp.Nombre + '</option>';
	var NombreOrdenado = lista_emp.sort((p1,p2) => (p1.Nombre < p2.Nombre) ? -1 : (p1.Nombre > p2.Nombre) ? 1 : 0);
	
	
	//letra inicial unica
	if (!letrasFiltro.includes(emp.Nombre.charAt(0))) {
	letrasFiltro.unshift(emp.Nombre.charAt(0));
	console.log(letrasFiltro.length);
	}
	
	document.querySelector('#Botones_AT').innerHTML = "<tr> <td>";
	for (var i=0; i < letrasFiltro.length; i++) {
		document.querySelector('#Botones_AT').innerHTML += " <button class='filtroBttn' id='" + letrasFiltro[i] + "'>" + letrasFiltro[i] + "</button>";
	}
	document.querySelector('#Botones_AT').innerHTML += " <button class='filtroBttn' id='asterisk'> * </button>" ;
	document.querySelector('#asterisk').style.backgroundColor = 'green';
	//Color botones
	document.querySelectorAll('.filtroBttn').forEach(function(boton) {
		boton.addEventListener('click', function() { 
		document.querySelectorAll('.filtroBttn').forEach(function(boton) {
		boton.style.backgroundColor = '';
		});
		
		boton.style.backgroundColor = 'green';
		});	
	});
	

	
	
	
	document.querySelector('#Estadistic').innerHTML = " <tr> <th id='Nombre'>Nombre</th> <th id='Direccion'>Direccion</th> <th id='Rubro'>Rubro</th> <th id='Cantidad'>Cantidad</th> </tr> ";
	for ( var i=0; i < lista_emp.length; i++) {
		document.querySelector('#Estadistic').innerHTML += "<tr> <td>" + NombreOrdenado[i].Nombre + "</td> <td>" + NombreOrdenado[i].Direccion + "</td> <td> " + NombreOrdenado[i].Rubro + "</td> <td>" + NombreOrdenado[i].Contador + "</td> </tr>";
		
	}
}
});




	
//Agrega tu reclamo aquis
Bttn_agregar_rec.addEventListener('click', function() {
	if (lista_emp.length > 0) {
		document.querySelector('.Gestion_rec').style.display = 'none';
		document.querySelector('.Gestion_rec').style.overflow = 'hidden';
		document.querySelector('#agregar_emp').style.display = 'none';
		document.querySelector('#agregar_emp').style.overflow = 'hidden';
		document.querySelector('#Estadísticas').style.display = 'none';
		document.querySelector('#Estadísticas').style.overflow = 'hidden';
		document.querySelector('#rec_ingres').style.display = 'none';
		document.querySelector('#rec_ingres').style.overflow = 'hidden';
		document.querySelector('#Agregar_rec').style.display = 'block';
		document.querySelector('#Agregar_rec').style.overflow = 'visible';
		
	} else {
	alert('No hay ninguna empresa, por favor agregue una para continuar');
	}
	
});


//Agregar empresa
Bttn_agregar.addEventListener('click', function() {
	var rec = {
	Nombre: '' ,
	Empresa: '',
	Titulo: '',
	Texto: '',
	Contador: 0
}
	
	rec.Nombre = document.querySelector('#rec_nombre').value;
	rec.Empresa = document.querySelector('#rec_empresa').value;
	rec.Titulo = document.querySelector('#rec_titulo').value;
	rec.Texto = document.querySelector('#rec_texto').value;
	lista_rec.unshift(rec);
console.log(lista_rec);

})

//Agregar reclamo
Bttn_agregar.addEventListener('click', function() {
	
	var aux = document.querySelector('#Reclamo_all_info').innerHTML;
	document.querySelector('#Reclamo_all_info').innerHTML = '<h3> Reclamo No.' + lista_rec.length + '</h3> <div class="Reclamo_box"> <p>' + lista_rec[0].Nombre + ': ' + '<span style="background-color:Orange;">' + lista_rec[0].Titulo + '</span> </p> <p id="text_rec_empresa"> Empresa: ' + '<span style="background-color:Green;">' + lista_rec[0].Empresa + '</span> </p>' + '<p id="text_rec_descripcion">' + lista_rec[0].Texto + '</p> <p> <button class="boton_AMTMP" id="botonAMTMP' + lista_rec.length + '"> ¡A mi también me pasó! </button> Contador: <span class="texto_AMTMP" id="textoAMTMP' + lista_rec.length + '">0</span> </div>' + aux;
	document.querySelector('#sinDatos').style.display = 'none';
	document.querySelector('#sinDatos').style.overflow = 'hidden';
	
	//Botón 'a mi tambien me paso'
	document.querySelectorAll('.boton_AMTMP').forEach(function(boton) {
		var  cont = 0;
		var contenedor = boton.parentNode;
		var contadorSpan = contenedor.querySelector('.texto_AMTMP');
		
	boton.addEventListener('click', function() { 
		cont += 1;
		contadorSpan.textContent = cont;
		});	
	});
});



