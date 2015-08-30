$(document).ready(function() {
  document.addEventListener("deviceready", onDeviceReady, false);
  // console.log('prova');
  onDeviceReady();
});

function onDeviceReady() {
  // $('#textArea').text(cordova.file);
  // console.log(cordova.file.applicationDirectory);
  window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "prodotti.csv", gotFile, fail);
}
//This alias is a read-only pointer to the app itself
// window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/index.html", gotFile, fail);
// }
// document.addEventListener("deviceready", init, false);
// function fail(e) {
//   console.log("FileSystem Error");
//   // console.dir(e);
function gotFile(fileEntry) {
  fileEntry.file(function(file) {
    var reader = new FileReader();
    reader.onloadend = function(e) {
      console.log("Text is: " + this.result);
      document.querySelector("#textArea").innerHTML = this.result;
    }
  });
}

function fail(error) {
  console.log(error.code);
}
