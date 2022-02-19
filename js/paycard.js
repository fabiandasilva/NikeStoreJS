const tarjeta = document.querySelector('#tarjeta');
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
const formulario = document.querySelector('#formulario-tarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const mesExpiracion = document.querySelector('#tarjeta .mes');
const yearExpiracion = document.querySelector('#tarjeta .year');
ccv = document.querySelector('#tarjeta .ccv');
const correo = document.querySelector('#inputCorreo');

//!Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if (tarjeta.classList.contains('active')) {
		tarjeta.classList.remove('active');
	}
}

//! Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

//!Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

//!Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

//!Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

//!Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
		// Eliminamos espacios en blanco
		.replace(/\s/g, '')
		// Eliminar las letras
		.replace(/\D/g, '')
		// Ponemos espacio cada cuatro numeros
		.replace(/([0-9]{4})/g, '$1 ')
		// Elimina el ultimo espaciado
		.trim();

	numeroTarjeta.textContent = valorInput;

	if (valorInput == '') {
		numeroTarjeta.textContent = '#### #### #### ####';

	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

//! Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;

	mostrarFrente();
});
//Correo
formulario.inputCorreo.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	formulario.inputCorreo.value = valorInput.replace(/[0-9]/g, '');
	correo.textContent = valorInput;
})

//!Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

//! Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

//! CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if (!tarjeta.classList.contains('active')) {
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
		// Eliminar los espacios
		.replace(/\s/g, '')
		// Eliminar las letras
		.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});

//Limpio los datos cargados del formulario 
function limpiarFormulario() {
	$("#inputNumero").val("");
	$("#inputNombre").val("");
	$("#inputCorreo").val("");
	$("#selectYear").val("");
	$("#selectMes").val("");
	$("#inputCCV").val("");



	$("#finalizarCompra").modal('toggle');
}
//Verifico si los datos del form estan completo
function EstaFormularioCompleto() {
	if ($("#inputNumero").val() === '') {
		return false;
	} else if ($("#inputNombre").val() === '') {
		return false;
	} else if ($("#inputCorreo").val() === '') {
		return false;
	} else if ($("#selectYear").val() === '') {
		return false;
	} else if ($("#selectMes").val() === '') {
		return false;
	} else if ($("#inputCCV").val() === '') {
		return false;
	} else if ($("#inputCCV").val() === '') {
		return false;
	} else {

		return true;
	}
}