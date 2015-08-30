$(document).ready(function() {
  var initializers = {
    '/index.html': function() {
      var clienti = [{
        'nome': 'apple',
        'citta': 'cupertino',
        'telefono': '0123456789',
      }, {
        'nome': 'google',
        'citta': 'mountain view',
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
        console.log(val);
        $.('#clienti_list').append(val);
        // $.('#clienti_list').append('<li class="table-view-cell"> < a class = "navigate-right" href = "#" > ' + val.nome + ' < p > ' + val.citta + ' < /p> < /a > < /li>');
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
  };
  window.addEventListener('push', function(e) {
    // Remove the host from the URL to get the pathname
    var pathname = e.detail.state.url.replace(window.location.origin, '');
    console.log(pathname);
    initializePage(pathname);
  });
  // Initialize the page on load, using the current pathname
  console.log(window.location.pathname);
  initializePage(window.location.pathname);
})
