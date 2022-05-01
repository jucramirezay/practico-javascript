const listaCount = {}
const lista4 = [
    [{
        'dato': [1, 2, 3, 4, 5],
        'ponderacion': 2
    }],
    [{
        'dato': [3],
        'ponderacion': 8 
    }]
]

function calcularMediaAritmetica() {

    const listaEntrada = document.getElementById('media')
    const listaString = listaEntrada.value
    console.log(listaString)
    const lista = JSON.parse("[" + listaString + "]")
    // Existen varias formas de obtener los elementos de una lista y operarlos entre si

    // 1. forEach

    // let sumaElementosLista = 0
    // lista.forEach(element => {
    //     sumaElementosLista += element
    // });

    // 2. Método reduce

    // Método reduce recibe una función como parámetro sobre la cual opera cada uno de los elementos del array
    // El primer parámetro es el valor sobre el cual se almacena el total de la operacion. Se debe inicializar con su valor por defecto
    // El segundo parámetro es el elemento que se obtiene de la lista
    const sumaElementosLista = lista.reduce((valorAcumulado = 0, elemento) => {return valorAcumulado + elemento})

    const promedioLista = sumaElementosLista/lista.length

    console.log(promedioLista)

    return promedioLista
}

function esPar(numero){
    if(numero % 2 == 0){
        return true
    } else {
        return false
    }
}

function calcularMediana() {

    const listaEntrada = document.getElementById('mediana')
    const listaString = listaEntrada.value
    const lista = JSON.parse("[" + listaString + "]")

    lista.sort((a, b) => a-b)

    let mediana

    const mitadLista = parseInt(lista.length / 2)

    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista]
        const elemento2 = lista[mitadLista - 1]

        const promedioElementos = calcularMediaAritmetica([elemento1, elemento2])

        return mediana = promedioElementos

    } else {
        return mediana = lista[mitadLista]
    }
}

function calcularModa() {

    const listaEntrada = document.getElementById('moda')
    const listaString = listaEntrada.value
    const lista = JSON.parse("[" + listaString + "]")
    
    // Recorre el arreglo y ejecuta la función a cada uno de los elementos del array
    lista.map((elemento) => { 
        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1
        }
    })
    
    // Se convierte un objeto en un array. El nuevo Array que se obtiene con Object.entries() contiene dentro de si Arrays con la 
    // información del objeto que se convirtio. Despues de esto, se ordena el Array obtenido 
    const listaArray = Object.entries(listaCount).sort((valorAcumulado, valorActual) => valorAcumulado[1] - valorActual[1])

    const moda = listaArray[listaArray.length - 1]

    console.log(moda)
    return moda

}

function calculoPromedioPonderado(lista){

    let valorAcumulado = 0
    let sumaPonderaciones = 0

    lista.forEach(function (element) {
        
        let valorAcumuladoFor = 0
        
        const listaDatos = element[0]['dato']
        listaDatos.forEach(function (dato) {
            sumaPonderaciones += 1*element[0]['ponderacion'] 
            valorAcumuladoFor += dato*element[0]['ponderacion']
        }) 
        valorAcumulado += valorAcumuladoFor
     
    });

    return valorAcumulado/sumaPonderaciones

}