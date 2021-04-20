var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomeFilmes = ["Toy Story", "Star Wars", "Interstelar"]

var resposta = prompt("Qual filme você deseja ver? Digite 0 para Toy Story, 1 para Star Wars e 2 para Interestelar.")

if (resposta == "0") {
  document.write("<div class=box> <img src=" + listaFilmes[0] + ">" + "<nome> <p>" + nomeFilmes[0] + "</p> </nome> </div>")
} else if (resposta == "1") {
  document.write("<div class=box> <img src=" + listaFilmes[1] + ">" + "<nome> <p>" + nomeFilmes[1] + "</p> </nome> </div>")  
} else if (resposta == "2") {
  document.write("<div class=box> <img src=" + listaFilmes[2] + ">" + "<nome> <p>" + nomeFilmes[2] + "</p> </nome> </div>")  
}
