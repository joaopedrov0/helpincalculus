function trabalhoForcaConstante(){
    let newton, desloc, angulo, trabalho
    newton = document.querySelector('#trabalho-de-uma-forca-constante #newton').value
    desloc = document.querySelector('#trabalho-de-uma-forca-constante #deltR').value
    angulo = document.querySelector('#trabalho-de-uma-forca-constante #cosA').value
    trabalho = document.querySelector('#trabalho-de-uma-forca-constante #joules').value


    let res

    let resolution = document.querySelector('.resolucao.resolucaoTrabalhoForcaConstante p')
    let result = document.querySelector('.resultado.resultadoTrabalhoForcaConstante p')

    resolution.innerHTML = ''
    result.innerHTML = ''

    switch(''){
        case newton:
            //F = (dr cosa) / j
            res = trabalho / (desloc * angulo)
            resolution.innerHTML = `Como você quer descobrir o valor da força, vamos isolar ela na fórmula <br>F = (Δr . cos α)/τ <br> F = ${trabalho} / (${desloc} . ${angulo}) <br>Agora é só substituir os valores e fazer a conta de multiplicação!`
            result.innerHTML = `Resultado: ${res}N`
            break
        case desloc:
            //dr = (f cosa) / j
            res = trabalho / (newton * angulo)
            resolution.innerHTML = `Como você quer descobrir o valor do deslocamento, vamos isolar ele na fórmula:<br> Δr = (F . cos α) / τ <br> Δr = ${trabalho} / (${newton} . ${angulo}) <br>Agora é só substituir os valores e fazer a conta de multiplicação!`
            result.innerHTML = `Resultado: ${res}m`
            break
        case angulo:
            //cosa = (f dr) / j
            res = trabalho / (newton * desloc)
            resolution.innerHTML = `Como você quer descobrir o valor do ângulo, vamos isolar ele na fórmula:<br> cos α = (F . Δr) / τ <br> cos α = ${trabalho} / (${newton} . ${desloc})<br>Agora é só substituir os valores e fazer a conta de multiplicação!`
            result.innerHTML = `Resultado: ${res}`
            break
        case trabalho:
            res = newton * desloc * angulo
            resolution.innerHTML = `Como você quer descobrir o valor do trabalho, vamos isolar ele na fórmula! <br> τ = F . Δr . cos α <br> τ = ${newton} . ${angulo} . ${trabalho}`
            result.innerHTML = `Resultado: ${res}τ`
            break
    }
}

//τ = F . Δr . cos α
//Δr = (F . cos α) / τ
//cos α = (F . Δr) / τ