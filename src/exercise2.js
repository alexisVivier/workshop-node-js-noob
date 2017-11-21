exports.run = function(input) {
  console.log('Exercise #2');

var array = input.split('');
var nombre = 0;

for(i=0; i<array.length; i++){
  if(array[i]>nombre){
    nombre = array[i];
  }else{
    break;
  }
}
return nombre;
};