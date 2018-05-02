// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({23:[function(require,module,exports) {
var MyCursor = {};

var getMouseCoords = function getMouseCoords(e) {
    var event = e || window.event;
    return event;
};

var cursorGenerator = function cursorGenerator() {

    var cursor = document.createElement('div');

    cursor.style.width = '3.8rem';
    cursor.style.height = '3.8rem';
    cursor.style.position = 'absolute';
    cursor.style.pointerEvents = 'none';
    cursor.style.backgroundColor = '#2F80ED';
    cursor.style.opacity = '0.1';
    cursor.style.borderRadius = '50%';
    cursor.style.zIndex = '-1';
    cursor.style.mixBlendMode = 'exclusion';
    cursor.style.transition = 'transform .3s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity .3s cubic-bezier(0.455, 0.03, 0.515, 0.955)';

    document.querySelector('body').appendChild(cursor);

    MyCursor.pointer = cursor;
    MyCursor.pointer.width = cursor.clientWidth;
    MyCursor.pointer.height = cursor.clientHeight;
    MyCursor.pointer.color = cursor.style.backgroundColor;
    MyCursor.pointer.opacity = cursor.style.opacity;
};

var cursorMouseMove = function cursorMouseMove() {

    document.addEventListener('mousemove', function (e) {
        getMouseCoords(e);

        MyCursor.pointer.style.left = event.clientX - MyCursor.pointer.width / 2 + 2 + 'px';
        MyCursor.pointer.style.top = event.clientY - MyCursor.pointer.height / 2 + 2 + 'px';
    });
};

var cursorHover = function cursorHover() {

    var links = document.querySelectorAll('a');

    var _loop = function _loop(i) {
        var element = links[i];

        var color = element.dataset.color;

        element.addEventListener('mouseover', function () {
            MyCursor.pointer.style.transform = 'scale(' + 2 + ')';
            if (color) MyCursor.pointer.style.backgroundColor = color;
            if (color) MyCursor.pointer.style.opacity = .3;
        });
        element.addEventListener('mouseleave', function () {
            MyCursor.pointer.style.transform = 'scale(' + 1 + ')';
            MyCursor.pointer.style.backgroundColor = MyCursor.pointer.color;
            MyCursor.pointer.style.opacity = MyCursor.pointer.opacity;
        });
    };

    for (var i = 0; i < links.length; i++) {
        _loop(i);
    }
};

cursorGenerator();
cursorMouseMove();
cursorHover();
},{}],24:[function(require,module,exports) {
var socialLinksHovering = function socialLinksHovering() {

    var socialLinks = document.querySelectorAll('.social'),
        experience = document.querySelector('.experience'),
        introName = document.querySelector('.intro__name'),
        introDescr = document.querySelector('.intro__descr'),
        everything = [];

    everything.push(introName), everything.push(introDescr), everything.push(experience);

    for (var i = 0; i < socialLinks.length; i++) {
        var element = socialLinks[i];

        element.addEventListener('mouseover', function () {
            for (var _i = 0; _i < everything.length; _i++) {
                var _element = everything[_i];
                everything[0].style.opacity = '1';
                everything[0].style.transform = 'translateY(-0px)';
                _element.style.transition = 'all .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) .' + _i + 's';
                _element.style.transform = 'translateY(-10px)';
                _element.style.opacity = '0';
            }
        });
        element.addEventListener('mouseleave', function () {
            for (var _i2 = 0; _i2 < everything.length; _i2++) {
                var _element2 = everything[_i2];
                _element2.style.transform = 'translateY(0)';
                _element2.style.opacity = '1';
            }
        });
    }
};

socialLinksHovering();
},{}],8:[function(require,module,exports) {
'use strict';

require('./cursor.js');

require('./socialHovering.js');
},{"./cursor.js":23,"./socialHovering.js":24}],31:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51190' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[31,8])
//# sourceMappingURL=/app.98827c11.map