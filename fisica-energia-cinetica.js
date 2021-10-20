function energiaCinetica(){
    let velocidade, massa, energia
    velocidade = document.querySelector('#energia-cinetica #velocidade').value
    massa = document.querySelector('#energia-cinetica #massa').value
    energia = document.querySelector('#energia-cinetica #energia').value


    let res

    let resolution = document.querySelector('.resolucao.resolucaoEnergiaCinetica p')
    let result = document.querySelector('.resultado.resultadoEnergiaCinetica p')

    resolution.innerHTML = ''
    result.innerHTML = ''

    switch(''){
        case velocidade:
            res = ((energia * 2) / massa)**0.5
            resolution.innerHTML = `Para encontrar o valor da velocidade, primeiro precisamos isolar ela.<br>v² = 2Ec / m<br>v² = ${energia*2} / ${massa}<br>Resolvendo essa conta, descobrimos o valor de "v²", então agora, para encontrar o valor de "v", basta tirar a raiz quadrada do nosso resultado.`
            result.innerHTML = `Resultado: ${res}m/s<br>${res} = √${(energia * 2) / massa}`
            break
        case massa:
            res = (energia * 2) / velocidade**2
            resolution.innerHTML = `Para encontrar o valor da massa, primeiro precisamos isolar ela.<br>m = 2Ec / v²<br>m = ${energia*2} / ${velocidade}²<br>Resolvendo essa conta, descobrimos o valor de "m"`
            result.innerHTML = `Resultado: ${res}kg`
            break
        case energia:
            res = (massa * (velocidade**2)) / 2
            resolution.innerHTML = `Para encontrar a energia cinética, basta substituir os valores da fórmula pelos valores que você deseja.<br>Ec = mv²/2<br>Ec = (${massa} . ${velocidade}²) / 2<br>Ec = (${massa} . ${velocidade**2}) / 2<br>Ec = (${massa*(velocidade**2)}) / 2<br>Ec = ${res}`
            result.innerHTML = `Resultado: ${res}J`
            break
    }
}
//Ec = mv²/2