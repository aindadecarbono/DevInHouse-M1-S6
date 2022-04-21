const getCep = () => {
  let input = document.getElementById('input').value
  if (input == '') {
    alert('O campo precisa ser preenchido')
    return
  } else if (input.length != 8) {
    alert('CEP inválido')
    return
  }
  fetch(`https://viacep.com.br/ws/${input}/json/`)
    .then(response => response.json())
    .then(cep => console.log(cep))
}
