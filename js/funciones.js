let count = 0;
$("#addButton").click(function () {
  if (count < 2) {
    count++;
    $("#root").append(`<button id="btn${count}">otroboton</button>`);
  }
});

$("#root").on("dblclick", "#btn1", function () {
  let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  console.log(color);
  $("body").css("background-color", color);
});
//tercero
$("#root").on("click", "#btn2", function () {
  $("#root").append(`<input class="input" placeholder="Type here!!"/>`);
});
$("#root").on("keyup", "input", function () {
  console.log($(this).val());
  numero = parseInt($(this).val());
  console.log("numero", numero);
  if (Number.isInteger(numero)) {
    console.log("es un numero");
    $(this).val(numero);
  } else {
    $(this).val($(this).val().slice(0, -1));
  }
});
