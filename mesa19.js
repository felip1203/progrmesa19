let dados = [
    {
      altura:1.78,
      sexo: 'M'
    },
    {
      altura: 1.60,
      sexo: 'F'
    },
    {
      altura: 1.65,
      sexo: 'F'
    },
    {
      altura: 1.88,
      sexo: 'M'
    },
    {
      altura:1.70,
      sexo:'M'
    },
    {
      altura: 1.73,
      sexo: 'F'
    },
    {
      altura:1.65,
      sexo: 'M'
    },
    {
      altura: 1.70,
      sexo: 'F'
    },
    {
      altura:1.71,
      sexo:'M'
    },
    {
      altura: 1.83,
      sexo: 'M'
    },
    {
      altura: 1.84,
      sexo: 'M'
    },
    {
      altura:1.78,
      sexo:'M'
    },
    {
      altura: 1.82,
      sexo:'M'
    },
    {
      altura:1.78,
      sexo:'M'
    },
    {
      altura: 1.66,
      sexo: 'F'
    },
    {
      altura:1.97,
      sexo:'M'
    },
    {
      altura:1.87,
      sexo:'M'
    },
    {
      altura: 1.53,
      sexo: 'F'
    }
  ]
  console.log(dados.length)
  
  function alturas(altura){
    let alturaHomem = [];
    let alturaMulher = [];
    let resposta = []
  
    for(let i = 0; i < altura.length; i++){
      if(altura[i].sexo === 'F'){
        alturaMulher.push(altura[i].altura)
      }else{
        alturaHomem.push(altura[i].altura)
      }
    }
  
    alturaHomem.sort()
    alturaMulher.sort()
  
    resposta.push(alturaHomem[0])
    resposta.push(alturaHomem[alturaHomem.length-1])
    resposta.push(alturaMulher[0])
    resposta.push(alturaMulher[alturaMulher.length-1])
    resposta.push(sum(alturaMulher) / alturaMulher.length)
    resposta.push( alturaHomem.length)
  
    return resposta
    
  }
  
  function sum(array){
    let soma = 0;
    for(let i = 0; i <array.length; i++){
      soma += array[i]
    }
    return soma
  }
  
  console.log(alturas(dados))