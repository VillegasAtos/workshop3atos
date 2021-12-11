let count=0;
$("#addButton").click(function(){
  if(count<2){
  count++;
  $("#root").append(`<button id="btn${count}">otroboton</button>`); 
  }
});

$("#root").on("dblclick","#btn1",function(){
  let color=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
  console.log(color);
  $("body").css('background-color', color);
});
