// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado*4
} 

function areaCuadrado(lado) {
    return lado**2
}

// Código del triangulo
const alturaTriangulo = (lado1, lado2, base) => {
    if (lado1 == lado2) {
        return Math.sqrt((lado1**2) - ((base/2)**2))
    } else {
        console.log('No se puede calcular la altura porque no es un triangulo isoceles. Retorna 0')
        return 0
    }
}

const perimetroTriangulo = (lado1, lado2, base) =>  {
    return lado1+lado2+base
} 

const areaTriangulo = (lado1, lado2, base) => {
    return (base*alturaTriangulo(lado1, lado2, base))/2
}

// Código del circulo
const PI = Math.PI

const diametroCirculo = (radio) => {
    return radio*2
}

const perimetroCirculo = (radio) => {
    return diametroCirculo(radio)*PI
}

const areaCirculo = (radio) => {
    return (radio**2)*PI
}

// Interacción con el HTML
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById('input-cuadrado') // Llama el elemento de HTML con el ID indicado
    const lado = input.value // Llama la propiedad value, valor que escribieron los usuarios en el input
    const perimetro = perimetroCuadrado(lado)
    alert(perimetro)
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById('input-cuadrado') // Llama el elemento de HTML con el ID indicado
    const lado = input.value // Llama la propiedad value, valor que escribieron los usuarios en el input
    const area = areaCuadrado(lado)
    alert(area)
}

const calcularPerimetroTriangulo = () => {
    const input1 = document.getElementById('input-triangulo1') // Llama el elemento de HTML con el ID indicado
    const input2 = document.getElementById('input-triangulo2') // Llama el elemento de HTML con el ID indicado
    const input3 = document.getElementById('input-triangulo3') // Llama el elemento de HTML con el ID indicado
    const lado1 = parseInt(input1.value)
    const lado2 = parseInt(input2.value)
    const base = parseInt(input3.value)
    const perimetro = perimetroTriangulo(lado1, lado2, base)
    alert(perimetro)
}

const calcularAreaTriangulo = () => {
    const input1 = document.getElementById('input-triangulo1') // Llama el elemento de HTML con el ID indicado
    const input2 = document.getElementById('input-triangulo2') // Llama el elemento de HTML con el ID indicado
    const input3 = document.getElementById('input-triangulo3') // Llama el elemento de HTML con el ID indicado
    const lado1 = input1.value
    const lado2 = input2.value
    const base = input3.value
    const area = areaTriangulo(lado1, lado2, base)
    alert(area)
}

const calcularPerimetroCirculo = () => {
    const input = document.getElementById('input-circulo')
    const radio = input.value
    const circunferencia = Math.round(perimetroCirculo(radio))
    alert(circunferencia)
}

const calcularAreaCirculo = () => {
    const input = document.getElementById('input-circulo')
    const radio = input.value
    const area = Math.round(areaCirculo(radio))
    alert(area)
}