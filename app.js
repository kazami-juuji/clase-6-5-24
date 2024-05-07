const calcularEstadisticas = () => {
    let input = document.getElementById("numbersInput").value;
    let numeros = input.split(",").map(function(item) {
        return parseFloat(item.trim());
    });

    // Calculando la media
    let suma = numeros.reduce(function(total, num) {
        return total + num;
    }, 0);
    let media = suma / numeros.length;

    // Calculando la mediana
    numeros.sort(function(a, b) {
        return a - b;
    });
    let mediana;
    if (numeros.length % 2 === 0) {
        let mid = numeros.length / 2;
        mediana = (numeros[mid - 1] + numeros[mid]) / 2;
    } else {
        mediana = numeros[Math.floor(numeros.length / 2)];
    }

    // Calculando la moda
    let modaMap = {};
    numeros.forEach(function(num) {
        modaMap[num] = (modaMap[num] || 0) + 1;
    });
    let moda;
    let maxFrecuencia = 0;
    for (let num in modaMap) {
        if (modaMap[num] > maxFrecuencia) {
            moda = num;
            maxFrecuencia = modaMap[num];
        }
    }

    let resultados = document.getElementById("resultados");
    resultados.textContent = `La media es ${media}, la mediana es: ${mediana} y la moda seria: ${moda} adios tonotos`
}