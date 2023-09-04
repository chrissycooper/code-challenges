function noSpace(x){
  var y = "";
  
  for (var i = 0; i < x.length; i++){
    if (x[i] !== " "){
      y = y + x[i];
    }
  } 

  return y;

};
