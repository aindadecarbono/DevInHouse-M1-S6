const getCep = () => {
  let uf = document.getElementById('uf').value

  let cidade = document.getElementById('cidade').value

  let logradouro = document.getElementById('logradouro').value

  if (uf.length != 2 || uf == '') {
    alert('Digite um UF válido')
    return
  } else if (cidade == '') {
    alert('Digite uma cidade válida')
    return
  } else if (logradouro == '') {
    alert('Digite um logradouro válido')
    return
  }

  fetchApi(uf, cidade, logradouro)
}

function fetchApi(uf, cidade, logradouro) {
  fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`)
    .then(response => response.json())
    .then(cepJson => insertHTML(cepJson))
    .catch(error => {
      console.log(error)
      alert('Não foi possível encontrar o CEP')
    })
}

function insertHTML(cepJson) {
  let body = document.querySelector('body')
  let p = document.createElement('p')
  body.appendChild(p)

  if (cepJson.length == 0) {
    p.innerText = 'Nenhum registro foi encontrado'
    return
  }

  cepJson.forEach(element => {
    let keys = Object.keys(element)
    let values = Object.values(element)

    for (let i = 0; i < Object.keys(element).length; i++) {
      p.innerText += `${keys[i]}: ${values[i]}\n`
    }
    p.innerText += '\n'
  })
}
