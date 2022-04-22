const getCep = () => {
  let uf = document.getElementById('uf').value
  if (uf.length != 2) {
    alert('Digite um UF válido')
    return
  }

  let cidade = document.getElementById('cidade').value

  let logradouro = document.getElementById('logradouro').value

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
