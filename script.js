const textarea = document.getElementById('userInput');

textarea.addEventListener('input', function () {
  this.style.height = this.scrollHeight + 'px';
});
