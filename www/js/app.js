$(document).ready(function() {
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
      }, ];
      var articoli = [{
        'nome': 'iphone',
        'dimensioni': 'piccolo',
        'categoria': 'telefono',
      }, {
        'nome': 'nexus',
        'dimensioni': 'medio',
        'categoria': 'telefono',
      }, ];
      simpleStorage.set('clienti', clienti);
      simpleStorage.set('articoli', articoli);
      var storage = simpleStorage.storageSize();
      $('#storage').val(storage);
    },
    'clienti.html': function() {
      var clienti = simpleStorage.get('clienti');
      $('#clienti_list').val('');
      $.each(clienti, function(index, val) {
        $.get('cliente.html', function(template) {
          $.tmpl(template, {
            'val': val
          }).appendTo('#clienti_list');
        });
      });
      //   $('#clienti_list').append('<li class="table-view-cell"> <a class="navigate-right" href="#" > ' + val.nome + ' (' + val.telefono + ') <p>' + val.citta + '</p> </a> </li>');
      // });
    },
    'articoli.html': function() {
      var articoli = simpleStorage.get('articoli');
      $('#articoli_list').val('');
      $.each(articoli, function(index, val) {
        $('#articoli_list').append('<li class="table-view-cell"> <a class="navigate-right" href="#" > ' + val.nome + ' (' + val.dimensioni + ') <p>' + val.categoria + '</p> </a> </li>');
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
    initializePage(file_name);
  });
  // Initialize the page on load, using the current pathname
  initializePage('index.html');
})
