//some ou aparece quando aperta o botão votar
function mostrar(elemento) { 

  var display = document.getElementById(elemento).style.display;

    if(display == "none") {
        document.getElementById(elemento).style.display = 'block';
    }
    else {
        document.getElementById(elemento).style.display = 'none';
    }
};

function mostrar_urna(elemento1, elemento2, e) {
  e.preventDefault()
  let titulo = document.getElementById("titulo").value
  if (!verificaeleitor(titulo, eleitores)) {
    mostrar2(elemento1)
    mostrar2(elemento2)
  }
}

function mostrar2(elemento) { 

  var display = document.getElementById(elemento).style.display;

    if(display == "block") {
        document.getElementById(elemento).style.display = 'none';
    }
    else {
        document.getElementById(elemento).style.display = 'block';
    }
};

/*VETOR DE OBJETOS -- CANDIDATOS--*/

let candidatos = [

{
numero: 11,
nome: "João Honesto",
Partido: "Demo",
nvotos: 0,
imagem: 'img\candidatohonesto2trump.jpg'
},

{
numero: 21,
nome: "Advogado de Deus",
Partido: "PDBB",
nvotos: 0,
Imagem: 'img\pastor.jpg'
},

{
numero: 32,
nome: "Marina Silva",
Partido: "Sustentabilidade",
nvotos: 0,
Imagem: 'img\marinasilva.jpg'
},

{
numero: 55,
nome: "Michel Roberto",
Partido: "PT",
nvotos: 0,
Imagem: 'img\MichelRoberto.jpg'
},

{
numero: 99,
nome: "Jakson Pereira",
Partido: "PCB",
nvotos: 0,
Imagem: 'img\JaksonPereira.jpg'
},

{
numero: 0,
nome: "Voto branco",
Partido: "",
nvotos: 0,
Imagem: ''
}

]

/*Percorrer vetor*/
function getCandidatos(numero, candidatos) {
  let con = 0
  for ( let i = 0; i < candidatos.length; i++) {
    if(candidatos[i].numero == numero){

        con = i;
    }
  }

  return candidatos[con];
}

/*Computar os votos*/
function computarvotos(num){
    let candidato = getCandidatos(num, candidatos)
    candidato.nvotos++;
    console.log("nome: " + candidato.nome + " nvotos: " + candidato.nvotos)
}

let eleitores = []

function verificaeleitor(titulo, eleitores) {

     let con1 = -1
  for ( let i = 0; i < eleitores.length; i++) {
    if(eleitores[i].titulo == titulo){
      con1 = i;
    }
  }

  if(con1 == -1){
      let tituloeleitor = document.getElementById("titulo").value
      let nomeeleitor = document.getElementById("nome").value
      let eleitor = {
        titulo: tituloeleitor, // pegar do formulario usando o DOM do formulario: Ex: document.getElementById("titulo").value
        nome: nomeeleitor
      }
      eleitores.push(eleitor)
      return false // Eleitor não encontrado
  } else {
      alert("Você já votou!")
      return true // Eleitor encontrado
  }
}

let botoes = document.querySelectorAll('.bnt')
console.log(botoes)
for(let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = mostranumero
}

function mostranumero(e){
e.preventDefault() 

let tecla = e.target.innerHTML
console.log("imprimindo " + tecla)
let dig1 = document.getElementById('dig1')
let dig2 = document.getElementById('dig2')
let numero

  if (dig1.innerHTML == "" || dig2.innerHTML != "") {
        dig1.innerHTML = tecla
        dig2.innerHTML= ""

        } else {

        dig2.innerHTML = tecla
        numero = parseInt(dig1.innerHTML + dig2.innerHTML)
        let candidato = getCandidatos(numero, candidatos)
        let display = document.getElementById("mostracandidato")
        let imagem = document.getElementById("imagem")
        display.innerHTML = "Nome: " + candidato.nome + "<br>Partido: " + candidato.Partido + "<br>Numero: " + candidato.numero
        imagem.style.backgroundImage = "url('" + candidato.imagem + "')"

        console.log("url(' + candidato.imagem + ')")
     } 
}



// botao branco
let btnbranco = document.getElementById("branco")
btnbranco.onclick = votabranco

function votabranco() {

  document.getElementById("dig1").innerHTML = 0;
  document.getElementById("dig2").innerHTML = 0;

  computarvotos();

}

// botao confirmar
let btnconfirma = document.getElementById("confirma")
btnconfirma.onclick = confirmavoto

function confirmavoto(e) {
  e.preventDefault()
  let dig1 = document.getElementById("dig1")
  let dig2 = document.getElementById("dig2")
  let numero = parseInt(dig1.innerHTML + dig2.innerHTML)
  computarvotos(numero)
  mostrar2("dados")
  mostrar2("parte2")
  alert('voto computado')
}
// botão corrige 

let btncorrige = document.getElementById("corrige")
btncorrige.onclick = corrigevoto

function corrigevoto(){

  document.getElementById("dig1").innerHTML = "";
  document.getElementById("dig2").innerHTML = "";
  document.getElementById("mostracandidato").innerHTML = ""

}

function resultado () {

  display.innerHTML += "Nome: " + candidato[i].nome + "<br>Partido: " + candidato[i].Partido + "<br>Numero: " + candidato[i].numero "<br>Votos: " + candidato[i].nvotos + <div style="background-image: url(\'' + candidato[i].imagem  + '\'); width: 68px; height: 68px;></div>
}