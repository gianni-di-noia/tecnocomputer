$(document).ready(function() {
  // document.addEventListener("deviceready", onDeviceReady, false);
  var clienti = [{
    'nome': 'apple',
    'città': 'cupertino',
    'telefono': '0123456789',
  }, {
    'nome': 'google',
    'città': 'mountain view',
    'telefono': '1234567890',
  }, ];
  var prodotti = [{
    'nome': 'iphone',
    'dimensioni': 'piccolo',
    'categoria': 'telefono',
  }, {
    'nome': 'nexus',
    'dimensioni': 'medio',
    'categoria': 'telefono',
  }, ];
  simpleStorage.set('clienti', clienti);
  simpleStorage.set('prodotti', prodotti);
  // onDeviceReady();
  // window.addEventListener('push', myFunction);
});
// function onDeviceReady() {
//   var clienti = [{
//     'nome': 'apple',
//     'città': 'cupertino',
//     'telefono': '0123456789',
//   }, {
//     'nome': 'google',
//     'città': 'mountain view',
//     'telefono': '1234567890',
//   }, ];
//   var prodotti = [{
//     'nome': 'iphone',
//     'dimensioni': 'piccolo',
//     'categoria': 'telefono',
//   }, {
//     'nome': 'nexus',
//     'dimensioni': 'medio',
//     'categoria': 'telefono',
//   }, ];
//   simpleStorage.set('clienti', clienti);
//   simpleStorage.set('prodotti', prodotti);
// }
// db_set('storage', simpleStorage.storageSize());
// var clienti_load = simpleStorage.get(clienti);
// $.each(clienti_load, function(index, val) {
/* iterate through array or object */
// });
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
