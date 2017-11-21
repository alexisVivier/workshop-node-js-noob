exports.run = function(input) {
  console.log("Exercise #5");
  var fs = require("fs");
  var path = require("path");

  var compteFiles = function (){
    fs.readdir(input.directory, function (err, files){
    if(err){
      input.showError();
    }
    var fileNumber = files.length();
    return fileNumber;
  })
  return fileNumber;
}
return compteFiles();
};
