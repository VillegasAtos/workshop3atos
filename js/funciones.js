let count=0;
$("#addButton").click(function(){
  if(count<2){
  count++;
  $("#root").append(`<button>otroboton</button>`); 
  }
});