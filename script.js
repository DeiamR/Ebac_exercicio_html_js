document.getElementById("myForm").addEventListener("submit", function(event) {
  var campoA = parseInt(document.getElementById("campoA").value);
  var campoB = parseInt(document.getElementById("campoB").value);

  if (campoB <= campoA) {
    alert("O número B tem que ser maior que o número A.");
    event.preventDefault();
  } else {
    alert("O Formulario foi enviado com sucesso")
  }
});
