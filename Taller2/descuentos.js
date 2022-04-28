// De esta manera se puede enviar por consola una serie de objetos. Se muestra el nombre y el valor de los objetos separados por comas
// console.log({precioOriginal,  descuento,  porcentajePrecioConDescuento, precioConDescuento})

const cupones = [
    {nombre: 'cupon1', 
     descuento: 20 
    }, 
    {nombre: 'cupon2', 
     descuento: 10
    }, 
    {nombre: 'cupon3', 
     descuento: 35 
    }, 
]

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const precioEntrada = document.getElementById('inputPrice')
    const valor = precioEntrada.value

    const inputCoupon = document.getElementById('inputDiscount')
    const cuponUsuario = inputCoupon.value

    let precioConDescuento

    // Funcion flecha creada para validar la existencia del cupon gracias al método find()
    const encontrarCupon = (cupon) => cupon.nombre == cuponUsuario

    const cuponUtilizado = cupones.find(encontrarCupon)
    console.log(cuponUtilizado)
    
    if (!cuponUtilizado) {
        alert(`Cupon ${cuponUsuario} es invalido`) 
        precioConDescuento = NaN
    } else {
        precioConDescuento = calcularPrecioConDescuento(valor, cuponUtilizado.descuento)
    }

    

    // Se obtiene la etiqueta p de HTML. Adicionalmente desde JavaScript con el atributo innerText se le asigna un valor 
    // el valor asignado es el precio final. innerText permite asignar a una etiqueta que se llama desde HTML un valor de tipo String
    const resultPrice = document.getElementById('resultPrice')
    resultPrice.innerText = `El precio con descuento para el cupon es de ${precioConDescuento}` 
}