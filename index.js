function calcular() {
  let resultado = 0
  const n1 = parseInt(document.getElementById('n1').value)
  const n2 = parseInt(document.getElementById('n2').value)
  const seletor = document.getElementById('seletor').value
  const resposta = document.getElementById('resposta')

  switch (seletor) {
    case '+':
      resultado = n1 + n2
      break

    case '-':
      resultado = n1 - n2
      break

    case '*':
      resultado = n1 * n2
      break

    case '/':
      resultado = n1 / n2
      break

    default:
      alert('Escolha uma operação')
      return
  }

  resposta.innerText = `Resultado: ${resultado}`
}
