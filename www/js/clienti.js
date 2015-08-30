$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
    onDeviceReady();
});

function onDeviceReady() {
    var clienti = simpleStorage.get('clienti');
    console.log(clienti);
    $.each(clienti, function(index, val) {
        $.('clienti_list').append('<li class="table-view-cell"> < a class = "navigate-right" href = "#" > ' + val.nome + ' < p > ' + val.città + ' < /p> < /a > < /li>');
    });
}
// for cliente in clienti_load:
// $('#textArea').text(cordova.file);
// console.log(cordova.file.applicationDirectory);
// window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "prodotti.csv", gotFile, fail);
//This alias is a read-only pointer to the app itself
// window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/index.html", gotFile, fail);
// }
// document.addEventListener("deviceready", init, false);
// function fail(e) {
//   console.log("FileSystem Error");
//   // console.dir(e);
// function gotFile(fileEntry) {
//   fileEntry.file(function(file) {
//     var reader = new FileReader();
//     reader.onloadend = function(e) {
//       console.log("Text is: " + this.result);
//       document.querySelector("#textArea").innerHTML = this.result;
//     }
//   });
// }
// function fail(error) {
//   console.log(error.code);
// }
// function db_set(key, value) {
//   window.localStorage.setItem(key, JSON.stringify(value))
//   return
// }
// function db_get(key) {
//   return $.parseJSON(window.sessionStorage.getItem(['wage'][key]));
// }
