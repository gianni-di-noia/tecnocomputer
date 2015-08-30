$(document).ready(function() {
  var initializers = {
    '/index.html': function() {
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
    },
    '/clienti.html': function() {
      var clienti = simpleStorage.get('clienti');
      console.log(clienti);
      $.each(clienti, function(index, val) {
        $.('#clienti_list').append('<li class="table-view-cell"> < a class = "navigate-right" href = "#" > ' + val.nome + ' < p > ' + val.città + ' < /p> < /a > < /li>');
      });
    },
    '/articoli.html': function() {
      // Do stuff for settings page
    },
    '/tabelle.html': function() {
      // Do stuff for settings page
    },
    '/settings.html': function() {
      // Do stuff for settings page
    },
  };

  function initializePage(title) {
    var func = initializers[title];
    // Only call the initializer if it exists
    if (func) {
      func();
    }
  }
  jQuery(document).ready(function($) {
    // Initialize the page on push
    window.addEventListener('push', function(e) {
      // Remove the host from the URL to get the pathname
      var pathname = e.detail.state.url.replace(window.location.origin, '');
      initializePage(pathname);
    });
    // Initialize the page on load, using the current pathname
    initializePage(window.location.pathname);
  });
  // document.addEventListener("deviceready", onDeviceReady, false);
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
