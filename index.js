const getCep = () => {
  let input = document.getElementById('input').value
  if (input == '') {
    alert('O campo precisa ser preenchido')
    return
  } else if (input.length != 8) {
    alert('CEP inválido')
    return
  }

  fetchApi(input)
}

function fetchApi(input) {
  fetch(`https://viacep.com.br/ws/${input}/json/`)
    .then(response => response.json())
    .then(cepJson => insertHTML(cepJson))
    .catch(error => {
      console.log(error)
      alert('Não foi possível encontrar o CEP')
    })
}

function insertHTML(cepJson) {
  let keys = Object.keys(cepJson)
  let values = Object.values(cepJson)
  let body = document.querySelector('body')
  let p = document.createElement('p')
  body.appendChild(p)

  for (let i = 0; i < Object.keys(cepJson).length; i++) {
    p.innerText += `${keys[i]}: ${values[i]}\n`
  }
}
