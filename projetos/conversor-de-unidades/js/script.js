console.log("Iniciando script...")

const quantidade = document.getElementById('quantidade')
const de = document.getElementById('medida-de')
const para = document.getElementById('medida-para')
const converter = document.getElementById('botao-converter')
const resultado = document.getElementById('resultado')

function converte_medidas(evento) {
    console.log('Evento: ', evento)
    console.log('Quantidade: ', quantidade.value)
    console.log('de: ', de.value)
    console.log('Para: ', para.value)
    console.log('Resultado: ', resultado.value)

    //metro para metro
    if (de.value === 'metro' && para.value === 'metro') {
        resultado.value = quantidade.value
    }
    //metro para centimetro
    else if (de.value === 'metro' && para.value === 'centimetro') {
        resultado.value = 100 * quantidade.value
    }
    //metro para quilômetro
    else if (de.value === 'metro' && para.value === 'quilometro') {
        resultado.value = 0.001 * quantidade.value
    }
    //centimetro para metro
    else if (de.value === 'centimetro' && para.value === 'metro') {
        resultado.value = 100000 * quantidade.value
    }
    //centimetro para centimetro
    else if (de.value === 'centimetro' && para.value === 'centimetro') {
        resultado.value = quantidade.value
    }
    //centimetro para quilômetro
    else if (de.value === 'centimetro' && para.value === 'quilometro') {
        resultado.value = 100000 * quantidade.value
    }
    //quilômetro para metro
    else if (de.value === 'quilometro' && para.value === 'metro') {
        resultado.value = 1000 * quantidade.value
    }
    //quilômetro para centimetro
    else if (de.value === 'quilometro' && para.value === 'centimetro') {
        resultado.value = 100000 * quantidade.value
    }
    //quilômetro para quilômetro
    else if (de.value === 'quilometro' && para.value === 'quilometro') {
        resultado.value = quantidade.value
    } else {
        window.alert('Erro na seleção de medida')
    }

    
}

converter.addEventListener("click", converte_medidas)

quantidade.addEventListener("keyup", converte_medidas)

