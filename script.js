const textarea = document.getElementById('userInput');
const decryptedInput = document.querySelector('.decrypted_input');
const cryptButton = document.querySelector('#crypt');
const decryptButton = document.querySelector('#decrypt');

const copyButtonHtml = `<button onclick="copy()"  class="copyButton">Copiar</button>`;

textarea.addEventListener('input', function () {
  this.style.height = this.scrollHeight + 'px';
});

function crypt(texto) {
  texto = texto.replace(/e/g, 'enter');
  texto = texto.replace(/i/g, 'imes');
  texto = texto.replace(/a/g, 'ai');
  texto = texto.replace(/o/g, 'ober');
  texto = texto.replace(/u/g, 'ufat');
  return texto;
}

function decrypt(input) {
  input = input.replace(/enter/g, 'e');
  input = input.replace(/imes/g, 'i');
  input = input.replace(/ai/g, 'a');
  input = input.replace(/ober/g, 'o');
  input = input.replace(/ufat/g, 'u');
  return input;
}

cryptButton.addEventListener('click', () => {
  const textarea = document.querySelector('#userInput');
  let cryptedMessage = crypt(textarea.value);

  let newDiv = `
    <div class="new_div" >
      <p class="crypted_message" >${cryptedMessage}</p>
      ${copyButtonHtml}
    </div>
  `;

  decryptedInput.innerHTML = newDiv;
});

decryptButton.addEventListener('click', () => {
  const textarea = document.querySelector('#userInput');
  let cryptedMessage = decrypt(textarea.value);
   
  let newDiv = `
  <div class="new_div" >
  <p class="crypted_message" >${cryptedMessage}</p>
  ${copyButtonHtml}
  </div>
  `;
  
  decryptedInput.innerHTML = newDiv;
});

function copy (){
  const message = document.querySelector('.crypted_message')
  navigator.clipboard.writeText(message.textContent);
}
