document.querySelector('button').addEventListener('click',calcular)

function calcular() {
    peso = document.getElementById('peso').value
    peso = peso.replace(",",".")
    peso = Number(peso)
    altura = document.querySelector('#altura').value
    altura = altura.replace(',','.')
    altura = Number(altura)
    res=document.getElementById('res')
    imc = (peso /(altura**2)).toFixed(2)
    if (peso == '' || altura == '') {
        alert('[Erro],Precisa inseri todos os campos!')
    }else if (imc >0 && imc<18.5) {
        //está mostrando o resultado na tela
    res.innerHTML = `Seu IMC é : ${imc},você está abaixo do peso` 
    //mudando a cor na tela
    document.body.style.background ='chartreuse'
    }else if (imc <24.9) {
    res.innerHTML = 'Seu IMC é : '+imc+',você está com peso ideal' 
    document.body.style.background = 'rgb(63, 127, 224)'  
    }else if (imc <29.9) { 
    res.innerHTML = `Seu IMC é : ${imc},você está acima do peso`
    document.body.style.backgroundColor = 'yellow'

    }else if (imc <39.9) {
    res.innerText = `Seu IMC é : ${imc},você está em obesidade`
    document.body.style.background = 'darkorange'

    }else{
    res.innerText = `Seu IMC é : ${imc},você está em obesidade grave 😱😱`
    document.body.style.background = 'red'
    }
}
 /* duas maneiras de fazer essa sem coloca o background,
  e com operadores condicionais ternarios inves de ifs.
 function calcular(){
peso = document.getElementById('peso').value
  altura = document.querySelector('#altura').value
  //res é referência para o div cujo o id='res'
  res = document.getElementById('res')
  //Trata as entradas e converte para float
  peso = parseFloat(peso.replace(",", "."))
  altura = parseFloat(altura.replace(',', '.'))
  //Verifica se dados são válidos
  if (isNaN(peso) || isNaN(altura)) {
    alert('Precisa preecher os campos com valores numéricos!')
    return
  }
  //Calcula o IMC
  imc = peso / (altura ** 2)

  //Cria uma uma mensagem de acordo com o IMC.
  msg = imc > 0 && imc < 18.5 ? 'abaixo do peso':
                   imc < 24.9 ? 'com o peso normal':
                   imc < 29.9 ? 'com sobrepeso' :
                   imc < 34.9 ? 'com obesidade grau 1':
                   imc < 39.9 ? 'com obesidade grau 2':
                    
                   'com obesidade grau 3'
                                
  //Exibe o IMC no HTML com uma mensagem personalizada.
  res.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está ${msg}.`                         
                          

}*/