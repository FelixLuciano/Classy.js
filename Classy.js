(function () {
  return this.Classy = function (classy, callback) {
    
    var attribute, attributes, element, elementClassy, getClassy,
      i, index,
      j, len, len1, ref;
    ref = document.querySelectorAll("[class*=" + classy + "]");
    
    for (i = 0, len = ref.length; i < len; i++) {
      element = ref[i];
      elementClassy = element.getAttribute('class').match(new RegExp(
        "(" +
        classy +
        "){1}(?![a-zA-Z0-9]+)", 'g'));
      
      if (!((elementClassy !== null) && (elementClassy[0] =
          classy))) {
        return;
      }
      
      getClassy = element.getAttribute('class').match(new RegExp(
        "(?=" +
        classy + ")(?:\\w+)", 'g'));
      attributes = getClassy[0].split('_').splice(1);
      
      for (index = j = 0, len1 = attributes.length; j < len1; index = ++
        j) {
        attribute = attributes[index];
        if (Number(attribute)) {
          attributes[index] = Number(attribute);
        } else if (attribute === "") {
          attributes[index] = null;
        }
      }
      
      callback.call(element, attributes);
    }
    
  };
})();
