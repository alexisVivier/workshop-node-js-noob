exports.run = function(input) {
  console.log("Exercise #3");
  var result = 1;
  for(i=0; i<input.length; i++){
    var obj = input[i];
    var test = obj.multiply;
    if(test === true){
      result = obj.value * result;
    }
};
return result;
}
