$(document).ready(function() {
  document.addEventListener("deviceready", onDeviceReady, false);
  onDeviceReady();
});

function onDeviceReady() {
  var initializers = {
    'index.html': function() {
      var clienti = [{
        'nome': 'apple',
        'citta': 'cupertino',
        'telefono': '0123456789',
      }, {
        'nome': 'google',
        'citta': 'mountain view',
        'telefono': '1234567890',
      }];
      var articoli = [{
        'nome': 'iphone',
        'dimensioni': 'piccolo',
        'categoria': 'telefono',
      }, {
        'nome': 'nexus',
        'dimensioni': 'medio',
        'categoria': 'telefono',
      }];
      db_set("clienti", clienti);
      db_set("articoli", articoli);
    },
    'clienti.html': function() {
      var clienti = db_get("clienti");
      console.log(clienti);
      $('#clienti_list').html('');
      $.each(clienti, function(index, val) {
        $.get('cliente.html', function(template) {
          $.tmpl(template, {
            'val': val
          }).appendTo('#clienti_list');
        });
      });
    },
    'articoli.html': function() {
      var articoli = db_get("articoli");
      console.log(articoli);
      $('#articoli_list').html('');
      $.each(articoli, function(index, articolo) {
        $.get('articolo.html', function(template) {
          $.tmpl(template, {
            'articolo': articolo
          }).appendTo('#articoli_list');
        });
      });
    },
    'tabelle.html': function() {
      // Do stuff for settings page
    },
    'settings.html': function() {
      // Do stuff for settings page
    },
  };

  function initializePage(title) {
    var func = initializers[title];
    // Only call the initializer if it exists
    if (func) {
      func();
    }
  };
  window.addEventListener('push', function(e) {
    // Remove the host from the URL to get the pathname
    var file_name = e.detail.state.url.replace('file:///android_asset/www/', '');
    var file_name = file_name.replace('http://localhost:8000/', '');
    console.log(file_name);
    initializePage(file_name);
  });
  // Initialize the page on load, using the current pathname
  initializePage('index.html');
}

function db_set(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function db_get(key) {
  var data = $.parseJSON(window.localStorage.getItem(key));
  return data;
}
