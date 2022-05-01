// Se hace el análisis de los salarios que se tienen en las listas del archivo salarios.js

// Helpers
function esPar(numero) {
    return (numero %  2 == 0)
}

function calcularMediaAritmetica(lista) {

    const sumaElementosLista = lista.reduce((valorAcumulado = 0, elemento) => {return valorAcumulado + elemento})

    const promedioLista = sumaElementosLista/lista.length

    console.log(promedioLista)

    return promedioLista
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad-1]
        const personaMitad2 = lista[mitad]

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana
    } else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

// Calculo mediana general
const salariosCol = colombia.map((persona) => persona.salary)

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB)

const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana TOP 10%
// Método utilizado para obtener una parte de un array. Recibe dos argumentos, desde que parte del array se hace el corte y cuantos elementos se toman del mismo


const spliceStart = (salariosColSorted.length * (90)) /100
const spliceCount = salariosColSorted.length - spliceStart

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount)

const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col
})