    (function ($) {
      Drupal.behaviors.impressintegrator = {
        attach: function (context, settings) {
          $('#cookie-notice').cookieNote({
            'width': 100, //percent
            'height': 80, // pixels
            'backgroundColor': '#323232', // can be overridden with hex or just words
            'insertionType': 'overlay', // alternative is 'insert'
            'animate': false, // this is cleaner
            'animationStyle': 'slideDown', // if you must then this works best
            'animationSpeed': 'slow', // this is smoother, can also be 'fast' or milliseconds
            'position': 'bottom', // where people will see it
            'headingText': 'Esta web usa cookies', // standard generic
            'explainationText': 'Este sitio web utiliza Cookies propias para recopilar información con la finalidad de mejorar nuestros servicios, \
                                así como el análisis de sus hábitos de navegación. Si continua navegando, supone la aceptación de la instalación de las mismas. \
                                El usuario tiene la posibilidad de configurar su navegador pudiendo, si así lo desea, impedir que sean instaladas en su disco duro, \
                                aunque deberá tener en cuenta que dicha acción podrá ocasionar dificultades de navegación de página web. \
                                <a class="mas-info" href="/informacion-cookies">Cómo configurar las cookies</a>',

            'confirmText': 'Aceptar', // standard generic
            'setCookie': true, // if true you will need the jQuery.cookie plugin
            'cookieExpiresIn': 100 // default one week, can be overridden
          });
        }
      };
    }(jQuery));
