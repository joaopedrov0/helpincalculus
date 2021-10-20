function forcaElastica(){
    let constante, distancia, forca
    constante = document.querySelector('#forca-elastica #constante').value
    distancia = document.querySelector('#forca-elastica #distancia').value
    forca = document.querySelector('#forca-elastica #forca').value

    let res

    let resolution = document.querySelector('.resolucao.resolucaoForcaElastica p')
    let result = document.querySelector('.resultado.resultadoForcaElastica p')

    resolution.innerHTML = ``
    result.innerHTML = ``

    switch(''){
        case constante:
            res = forca / distancia
            resolution.innerHTML = `Para descobrir a constante elástica da mola, vamos isolar ela.<br>K = Fel / x<br>K = ${forca} / ${distancia}<br>K = ${forca / distancia}`
            result.innerHTML = `Resultado: ${res}N/m`
            break
        case distancia:
            res = forca / constante
            resolution.innerHTML = `Para descobrir qual é a deformação da mola, vamos isolar esse valor.<br>X = Fel / K<br>X = ${forca} / ${constante}<br>X = ${forca / constante}`
            result.innerHTML = `Resultado: ${res}m`
            break
        case forca:
            res = constante * distancia
            resolution.innerHTML = `Para descobrir a força elástica da mola, vamos isolar substituir os valores da fórmula com nossos dados.<br>Fel = K . X<br>Fel = ${constante} . ${distancia}<br>Fel = ${constante * distancia}`
            result.innerHTML = `Resultado: ${res}N`
            break
    }
}