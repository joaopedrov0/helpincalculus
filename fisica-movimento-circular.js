function movimentoCircular(){
    let frequencia, velocidadeAngular, raio, velocidadeLinear

    let unidadeFrequencia = document.querySelector('#movimento-circular-unidade-frequencia').value

    frequencia = document.querySelector('#frequencia').value
    velocidadeAngular = document.querySelector('#velocidade-angular').value
    raio = document.querySelector('#raio').value
    velocidadeLinear = document.querySelector('#velocidade-linear').value

    let res

    let resolution = document.querySelector('.resolucao.resolucao-movimento-circular p')
    let result = document.querySelector('.resultado.resultado-movimento-circular p')

    let problem = document.querySelector('#movimento-circular-problem').value

    resolution.innerHTML = ''
    result.innerHTML = ''

    if(problem == 'angular'){
        switch(''){
            case frequencia:
                res = velocidadeAngular / 2
                resolution.innerHTML = `ω = 2π . f <br> ω / 2 = π . f <br> ${velocidadeAngular} / 2 = π . f <br> ${velocidadeAngular / 2} = π . f <br>${velocidadeAngular / 2} π = f`
                result.innerHTML = `Resultado: ${res}Hz`
                break
            case velocidadeAngular:
                if(unidadeFrequencia == 'RPM'){
                    frequencia = frequencia / 60
                }
                res = 2 * frequencia
                resolution.innerHTML = `ω = 2π . f <br> ω = 2π . ${frequencia} <br> ω = π . ${frequencia * 2} <br> ω = ${frequencia}π`
                result.innerHTML = `Resultado: ${res}π rad/s`
                break
        }
    } else if(problem == 'linear'){
        switch(''){
            //V = ω.R
            case velocidadeAngular:
                res = velocidadeLinear * raio
                resolution.innerHTML = `V = ω . R <br> V / R = ω <br> ${velocidadeLinear} / ${raio} = ω`
                result.innerHTML = `Resultado: ${res}π rad/s`
                break
            case raio:
                res = velocidadeLinear / velocidadeAngular
                resolution.innerHTML = `V = ω . R <br> V / ω = R <br> ${velocidadeLinear} / ${velocidadeAngular} = R <br> ${velocidadeLinear / velocidadeAngular} = R`
                result.innerHTML = `Resultado: ${res}m`
                break
            case velocidadeLinear:
                res = velocidadeAngular * raio
                resolution.innerHTML = `V = ω . R <br> V = ${velocidadeAngular} . ${raio} <br> V = ${velocidadeAngular * raio}`
                result.innerHTML = `Resultado: ${res}m/s`
                break
        }
    } else {
        console.log(`ERRO. MOVIMENTO CIRCULAR. INTERNAL DATA: problem: ${problem}`)
    }
    
}