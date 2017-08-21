/*
 *    Classy.Js By TecIce
 *    https://github.com/TecIce/Classy.js
 *
 *    20/08/2017
 */
window.Classy = (function() {
    var __scope__;

    function Classy(mainArg11, mainArg21) {
        this.mainArg1 = mainArg11;
        this.mainArg2 = mainArg21;
        if (!(this instanceof Classy)) {
            return new Classy(this.mainArg1, this.mainArg2);
        }
        if (typeof this.mainArg1 === 'string' && typeof this.mainArg2 === 'function') {
            Classy.prototype.register();
        }
    }

    if (!__scope__) {
        __scope__ = {};
    }

    Classy.prototype.register = function(name, callback) {
        var attribute, attributes, element, i, index, j, len, len1, ref;
        if (name == null) {
            name = mainArg1;
        }
        if (callback == null) {
            callback = mainArg2;
        }
        if (!(typeof name === 'string' && typeof callback === 'function')) {
            return null;
        }
        __scope__[name] = {
            action: callback,
            elements: []
        };
        ref = document.querySelectorAll("[class*=" + name + "]");
        for (i = 0, len = ref.length; i < len; i++) {
            element = ref[i];
            attributes = (element.getAttribute('class').match(new RegExp("(?=" + name + ")(?:\\w+)", 'g')))[0].split('_');
            if (attributes[0] !== name) {
                continue;
            }
            for (index = j = 0, len1 = attributes.length; j < len1; index = ++j) {
                attribute = attributes[index];
                if (Number(attribute)) {
                    attributes[index] = Number(attribute);
                }
            }
            if (!element.Classy) {
                element.Classy = {};
            }
            element.Classy[name] = attributes.splice(1);
            __scope__[name].elements.push(element);
        }
        return Classy.prototype.applyAll(name);
    };

    Classy.prototype.applyAll = function(name) {
        var element, i, len, ref, results, selector;
        if (name == null) {
            name = this.mainArg1;
        }
        if (this.name != null) {
            return null;
        }
        ref = __scope__[name].elements;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
            element = ref[i];
            selector = jQuery ? $(element) : element;
            results.push(__scope__[name].action.call(selector, element.Classy[name], Classy(name, element)));
        }
        return results;
    };

    Classy.prototype.apply = function(name, element) {
        var action, actsMatch, argumentNames, callback, callbackActs, callbackArgs, fnString, i, ignoreComents, len, selector;
        if (name == null) {
            name = this.mainArg1;
        }
        if (element == null) {
            element = this.mainArg2;
        }
        if ((this.name != null) && (this.mainArg2 != null)) {
            return null;
        }
        selector = jQuery ? $(element) : element;
        ignoreComents = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))|(^\s*)/mg;
        argumentNames = /([^\s,]+)/g;
        fnString = __scope__[name].action.toString().replace(ignoreComents, '');
        callbackArgs = fnString.slice(fnString.indexOf('(') + 1, fnString.indexOf(')')).match(argumentNames);
        actsMatch = new RegExp("(?!(" + callbackArgs[0] + "))(.*" + callbackArgs[0] + ".*)", 'gm');
        callbackActs = fnString.match(actsMatch).slice(1);
        callback = '';
        for (i = 0, len = callbackActs.length; i < len; i++) {
            action = callbackActs[i];
            callback += action;
        }
        return new Function(callbackArgs[0], callbackArgs[1], callback).call(selector, element.Classy[name], Classy(name, element));
    };

    Classy.prototype.scope = __scope__;

    return Classy;

})();
