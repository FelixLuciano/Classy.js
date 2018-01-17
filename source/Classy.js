/*
 *    Classy.Js By TecIce
 *    https://github.com/TecIce/Classy.js
 *
 *    20/08/2017
 */

(function() {
  window.Classy = (function() {
    var __scope__;

    class Classy {
      constructor(mainArg1, mainArg2) {
        this.mainArg1 = mainArg1;
        this.mainArg2 = mainArg2;
        if (!(this instanceof Classy)) {
          return new Classy(this.mainArg1, this.mainArg2);
        }
        if (typeof this.mainArg1 === 'string' && typeof this.mainArg2 === 'function') {
          Classy.prototype.register();
        }
      }

      register(name = this.mainArg1, callback = this.mainArg2) {
        var attribute, attributes, element, i, index, j, len, len1, ref;
        if (!(typeof name === 'string' && typeof callback === 'function')) {
          return null;
        }
        __scope__[name] = {
          action: callback,
          elements: []
        };
        ref = document.querySelectorAll(`[class*=${name}]`);
        for (i = 0, len = ref.length; i < len; i++) {if (window.CP.shouldStopExecution(2)){break;}if (window.CP.shouldStopExecution(2)){break;}
          element = ref[i];
          attributes = (element.getAttribute('class').match(new RegExp(`(?=${name})(?:\\w+)`, 'g')))[0].split('_');
          if (attributes[0] !== name) {
            continue;
          }
          for (index = j = 0, len1 = attributes.length; j < len1; index = ++j) {if (window.CP.shouldStopExecution(1)){break;}if (window.CP.shouldStopExecution(1)){break;}
            attribute = attributes[index];
            if (Number(attribute)) {
              attributes[index] = Number(attribute);
            }
          }
window.CP.exitedLoop(1);

window.CP.exitedLoop(1);

          if (!element.Classy) {
            element.Classy = {};
          }
          element.Classy[name] = attributes.splice(1);
          __scope__[name].elements.push(element);
        }
window.CP.exitedLoop(2);

window.CP.exitedLoop(2);

        return Classy.prototype.applyAll(name);
      }

      applyAll(name = this.mainArg1) {
        var element, i, len, ref, results, selector;
        if (this.name != null) {
          return null;
        }
        ref = __scope__[name].elements;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {if (window.CP.shouldStopExecution(3)){break;}if (window.CP.shouldStopExecution(3)){break;}
          element = ref[i];
          selector = jQuery ? $(element) : element;
          results.push(__scope__[name].action.call(selector, element.Classy[name], Classy(name, element)));
        }
window.CP.exitedLoop(3);

window.CP.exitedLoop(3);

        return results;
      }

      apply(name = this.mainArg1, element = this.mainArg2) {
        var action, actsMatch, argumentNames, callback, callbackActs, callbackArgs, fnString, i, ignoreComents, len, selector;
        if ((this.name != null) && (this.mainArg2 != null)) {
          return null;
        }
        selector = jQuery ? $(element) : element;
        ignoreComents = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))|(^\s*)/mg;
        argumentNames = /([^\s,]+)/g;
        fnString = __scope__[name].action.toString().replace(ignoreComents, '');
        callbackArgs = fnString.slice(fnString.indexOf('(') + 1, fnString.indexOf(')')).match(argumentNames);
        actsMatch = new RegExp(`(?!(${callbackArgs[0]}))(.*${callbackArgs[0]}.*)`, 'gm');
        callbackActs = fnString.match(actsMatch).slice(1);
        callback = '';
        for (i = 0, len = callbackActs.length; i < len; i++) {if (window.CP.shouldStopExecution(4)){break;}if (window.CP.shouldStopExecution(4)){break;}
          action = callbackActs[i];
          callback += action;
        }
window.CP.exitedLoop(4);

window.CP.exitedLoop(4);

        return new Function(callbackArgs[0], callbackArgs[1], callback).call(selector, element.Classy[name], Classy(name, element));
      }

    };

    if (!__scope__) {
      __scope__ = {};
    }

    Classy.prototype.scope = __scope__;

    return Classy;

  }).call(this);

}).call(this);
