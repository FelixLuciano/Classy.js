var Classy;

Classy = (function () {
  var getElementClassy;

  getElementClassy = function (selector, getClassy) {
    var attribute, elementClassy, getAttributes, i, len,
      results;
    elementClassy = selector.getAttribute('class').match(new RegExp(
      "(" + getClassy + "){1}(?![a-zA-Z0-9]+)", 'g'));
    if (!((elementClassy != null) && elementClassy[0] ===
        getClassy)) {
      return null;
    }
    getClassy = selector.getAttribute('class').match(new RegExp(
      "(?=" + getClassy + ")(?:\\w+)", 'g'));
    getAttributes = getClassy[0].split('_').splice(1);
    results = [];
    for (i = 0, len = getAttributes.length; i < len; i++) {
      attribute = getAttributes[i];
      if (Number(attribute)) {
        results.push(Number(attribute));
      } else if (attribute === "") {
        results.push(null);
      } else {
        results.push(attribute);
      }
    }
    return results;
  };

  function Classy(selector1, callback) {
    var attributes, element, i, len, ref;
    this.selector = selector1;
    this.callback = callback != null ? callback : null;
    if (!(this instanceof Classy)) {
      return new Classy(this.selector, this.callback);
    }
    if (typeof this.selector === 'string' && typeof this.callback ===
      'function') {
      ref = document.querySelectorAll("[class*=" + this.selector +
        "]");
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        attributes = getElementClassy(element, this.selector);
        if (attributes != null) {
          this.callback.call(element, attributes);
        }
      }
    }
  }

  Classy.prototype.get = function (getClassy) {
    var selector;
    if (this.callback != null) {
      return null;
    }
    selector = function () {
      var element;
      element = document.querySelectorAll(this.selector);
      if (element.length >= 2) {
        return null;
      } else {
        return element[0];
      }
    };
    return getElementClassy(selector(), getClassy);
  };

  Classy.prototype.set = function (setClassy) {
    var classy, classyeToSet, element, elementClassy,
      getClassyClass, i, index, len, newClassyClass;
    if (typeof this.callback !== 'string') {
      return null;
    }
    element = function () {
      element = document.querySelectorAll(this.selector);
      if (element.length >= 2) {
        return null;
      } else {
        return element = element[0];
      }
    };
    elementClassy = getElementClassy(element(), this.callback);
    getClassyClass = elementClassy;
    getClassyClass.unshift(this.callback);
    getClassyClass = getClassyClass.toString().replace(/,/g,
      '_');
    element.classList.remove(getClassyClass);
    elementClassy.shift();
    for (index in setClassy) {
      classy = setClassy[index];
      elementClassy[index] = classy;
    }
    newClassyClass = this.callback;
    for (i = 0, len = elementClassy.length; i < len; i++) {
      classyeToSet = elementClassy[i];
      if (classyeToSet) {
        newClassyClass += "_" + classyeToSet;
      } else {
        newClassyClass += '_';
      }
    }
    return element.classList.add(newClassyClass);
  };

  return Classy;

})();
