const saludar = (nombre) => `Hola, ${nombre}!`;



const rentalCar = (tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) => {
    let monto = 0

    if (tipoDeVehiculo == "compacto") {
        monto = 14000 * diasDeAlquiler
    }
    if (tipoDeVehiculo == "mediano") {
        monto = 17000 * diasDeAlquiler
    }
    if (tipoDeVehiculo == "camioneta") {
        monto = 28000 * diasDeAlquiler
    }

    if (sillaParaBebe) {
        return monto + 1200 * diasDeAlquiler;
    } else {
        return monto
    }
}

const montoCompacto = rentalCar("compacto", 3, false);
/*console.log(`Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, el monto total a pagar es de $${montoCompacto}.`);*/ 

const montoMedianoConSilla = rentalCar("mediano", 5, true);
/*console.log(`Estimado cliente: en base al tipo de vehículo mediano alquilado, considerando los 5 días utilizados, el monto total a pagar es de $${montoMedianoConSilla}, incluyendo la silla para bebe.`);*/ 

const montoCamionetaSinSilla = rentalCar("camioneta", 2, false);
/*console.log(`Estimado cliente: en base al tipo de vehículo camioneta alquilado, considerando los 2 días utilizados, el monto total a pagar es de $${montoCamionetaSinSilla}.`);*/


