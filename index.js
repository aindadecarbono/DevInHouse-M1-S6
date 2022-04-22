function inverter() {
  let lista = document.querySelectorAll('li')

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].className == 'azul') {
      lista[i].classList.remove('azul')
      lista[i].classList.add('vermelho')
    } else if (lista[i].className == 'vermelho') {
      lista[i].classList.remove('vermelho')
      lista[i].classList.add('azul')
    }
  }
}
