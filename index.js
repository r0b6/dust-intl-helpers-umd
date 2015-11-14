(function(root, factory) {
  if (typeof define === 'function' && define.amd && define.amd.dust === true) {
    define(['dust.core'], factory);
  } else if (typeof exports === 'object') {
    // These are our polyfills.

    if (global.Intl) {
        // `Intl` exists, load the polyfill and replace the constructors with need with the polyfill's.
        require('intl');
        Intl.NumberFormat = global.IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = global.IntlPolyfill.DateTimeFormat;
    } else {
        // No `Intl`, so use and load the polyfill.
        global.Intl = require('intl');
    }
    module.exports = factory(require('dustjs-linkedin'));
  } else {
    factory(root.dust);
  }
}(this, function(dust) {
  var dustIntl = require('dust-intl');
  dustIntl.registerWith(dust);
  return dust;
}));