do ->
    
  @Classy = (classy, callback) ->
  
    for element in document.querySelectorAll "[class*=#{classy}]"
      elementClassy = element.getAttribute 'class'
        .match new RegExp "(#{classy}){1}(?![a-zA-Z0-9]+)", 'g'

      unless elementClassy? and elementClassy[0] = classy then return

      getClassy = element.getAttribute 'class'
        .match new RegExp "(?=#{classy})(?:\\w+)", 'g'
      attributes = getClassy[0]
        .split '_'
        .splice 1

      for attribute, index in attributes
        if Number attribute
          attributes[index] = Number attribute
        else if attribute == ""
          attributes[index] = null

      callback.call element, attributes
