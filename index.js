const getCep = () => {
  let input = document.getElementById('input').value
  fetch(`https://viacep.com.br/ws/${input}/json/`)
    .then(response => response.json())
    .then(cep => console.log(cep))
}
