```function calculaNota(ex, p1, p2) {
 
  let nota = ex + p1*2 + p2*3
  let media = nota/6
  let conceitoNota = ""
  
   if (media >= 9) {
     conceitoNota = "A"
   } else if (media < 9 && media >= 7.5){
     conceitoNota = "B"
   } else if (media < 7.5 && media >= 6){
     conceitoNota = "C"
   } else {
     conceitoNota = "D"
   }
   return conceitoNota
}```