const cripto = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const descripto = {
  enter: 'e',
  imes: 'i',
  ai: 'a',
  ober: 'o',
  ufat: 'u',
};

// Função para substituir letras de acordo com o objeto cripto ou descripto
function substituirLetras(texto, mapeamento) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra in mapeamento) {
      resultado += mapeamento[letra];
    } else {
      resultado += letra;
    }
  }
  return resultado;
}

function textCopy(texto) {
  const inputTemporario = document.createElement("input");
  inputTemporario.value = texto;
  document.body.appendChild(inputTemporario);
  inputTemporario.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemporario);
}

function textoCriptografado() {
  let arr = []
  const textMensage = document.getElementById('mensage')
  arr.push(textMensage)
  const messageBlock = document.getElementById('messageVisualize')
  messageBlock.innerHTML = `
  <div class="containerMsg">
    <h2>Criptografado</h2>
    <p>${substituirLetras(arr[0].value, cripto)}</p>
    <button id='copyContent' class="copiar">Copiar</button>
  </div>
  `
  const copyButton = document.getElementById('copyContent')
  copyButton.addEventListener('click', textCopy(substituirLetras(arr[0].value, cripto)))
};

function textoDescriptografado() {
  let arr = []
  const textMensage = document.getElementById('mensage')
  arr.push(textMensage)
  const messageBlock = document.getElementById('messageVisualize')
  messageBlock.innerHTML = `
  <div class="containerMsg">
    <h2>Descriptografado</h2>
    <p>${substituirLetras(arr[0].value, descripto)}</p>
    <button id='copyContent' class="copiar">Copiar</button>
  </div>
  `
  const copyButton = document.getElementById('copyContent')
  copyButton.addEventListener('click', textCopy(substituirLetras(arr[0].value, cripto)))
};








