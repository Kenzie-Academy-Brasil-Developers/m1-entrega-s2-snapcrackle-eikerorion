//1. Se o número for ímpar, no lugar dele, concatenar __"Snap"__ no final da string.
//2. Se o número for múltiplo de 5, no lugar dele, concatenar __"Crackle"__ no final da string.
//3. Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar __"SnapCrackle"__ no final da string.
//4. Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número no final da string.
//5. Seus itens devem ser separados sempre por __vírgula e espaço__ (veja o exemplo).
//6. Esta função deve __retornar__ a __string__ obtida.

function snapCrackle(maxValue){
    let total = ''
  for(let i = 1; i <= maxValue; i++){
      if(i % 2 !== 0 && i % 5 == 0){
          total += 'snapCrackle, '
      }else if(i % 5 == 0){
          total += 'crackle, '
      }else if(i % 2 !== 0){
          total += 'snap, '
      }else{
          total +=  i +', '
      }
  }
  return total
}
console.log(snapCrackle(12))