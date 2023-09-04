//REFACTORED SOLUTION
function noSpace(x){
  return x.split(" ").join("");
};


// ORIGINAL SOLUTION
function noSpace(x){
  var y = "";

  for (var i = 0; i < x.length; i++){
    if (x[i] !== " "){
      y = y + x[i];
    }
  } 

  return y;

};
