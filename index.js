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

async function fetchApi(uf, cidade, logradouro) {
  fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`)
    .then(response => response.json())
    .then(cepJson => console.log(cepJson))
    .catch(error => {
      console.log(error)
      alert('Não foi possível encontrar o CEP')
    })
}
