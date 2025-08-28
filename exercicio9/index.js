function capitalizarFrase(frase) {
  let palavras = frase.split(' ');
  let palavrasCapitalizadas = [];

  for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    
    let palavraCapitalizada = palavraAtual[0].toUpperCase() + palavraAtual.slice(1);
    palavrasCapitalizadas.push(palavraCapitalizada);
  }
   return palavrasCapitalizadas.join(" ")
}