// Invoke Functions Call on Document Loaded
document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();
});

var alertWrapper1 = document.querySelector('.alert');
var alertClose1 = document.querySelector('.alert__close');

if (alertWrapper1) {
  alertClose1.addEventListener('click', () =>
    alertWrapper1.style.display = 'none'
  )
}