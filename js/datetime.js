function updateDate(){
   var dt = new Date();
   $("#date").html( dt.getHours() +":"+ addZero(dt.getMinutes()) + ":" + addZero(dt.getSeconds()));
}

function addZero(num){
   return ("0"+num).slice(-2);
}

function startTimer(){
   setInterval("updateDate()",1000);
}