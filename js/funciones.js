let count = 0;
$("#addButton").click(function () {
  if (count < 2) {
    count++;
    $(".rowbuttons").append(
      `<div class="col-4"><button id="btn${count}" class="btn btn-primary form-control px-5 mx-3">Button ${count}</button></div>`
    );
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
  html = `
   <div class="col-sm-3 mt-2">
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    Card
  </div>
  <div class="card-body">
  <ul class="Write only numbers">
    <input class="form-control" placeholder="Type here!!"/>

  </div>
  </div>
  </div
  `;
  $(".rowinput").append(html);
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

$("#root").on("blur", "input", function () {
  $("#bottom").append(`<p>${$(this).val()}</p>`);
  $("input").val("");
});
