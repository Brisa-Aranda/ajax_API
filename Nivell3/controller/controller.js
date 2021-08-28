const url = 'http://api.icndb.com/jokes/random';

fetch(url)
.then(response => response.json())
.then(data =>mostrarData(data))
.catch(err => console.log(err))

const mostrarData = (data) =>{
  console.log(data)
  let body = ''
  for(let i = 0; i<data.length; i++){
    body += `<p>${data[i.joke]}</p>`
  }
  document.getElementById('chiste1').innerHTML = body;
}


  
