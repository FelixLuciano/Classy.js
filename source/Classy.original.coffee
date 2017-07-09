class Classy
  
  getElementClassy = (selector, getClassy) ->
  
    elementClassy = selector.getAttribute 'class'
      .match new RegExp "(#{getClassy}){1}(?![a-zA-Z0-9]+)", 'g'

    unless elementClassy? and elementClassy[0] == getClassy then return null

    getClassy = selector
      .getAttribute 'class'
      .match new RegExp "(?=#{getClassy})(?:\\w+)", 'g'

    getAttributes = getClassy[0]
      .split '_'
      .splice 1
  
    for attribute in getAttributes
      if Number attribute then Number attribute
      else if attribute == "" then null
      else attribute
  
  constructor: (@selector, @callback = null) ->
    unless this instanceof Classy then return new Classy @selector, @callback
  
    if typeof @selector == 'string' and typeof @callback == 'function'
      for element in document.querySelectorAll "[class*=#{@selector}]"
        attributes = getElementClassy element, @selector

        if attributes?
          @callback.call element, attributes
        
  get: (getClassy) ->
    if @callback? then return null
    selector = ->
      element = document.querySelectorAll @selector
      if element.length >= 2 then null else element[0]
          
    getElementClassy selector(), getClassy
      
        
  set: (setClassy) ->
    unless typeof @callback == 'string' then return null
  
    element = ->
      element = document.querySelectorAll @selector
      if element.length >= 2 then null else element = element[0]
  
    elementClassy = getElementClassy element(), @callback
    
    getClassyClass = elementClassy
    getClassyClass.unshift @callback
    getClassyClass =
      getClassyClass
        .toString()
        .replace /,/g, '_'
    
    element.classList.remove getClassyClass
    
    elementClassy.shift()
    
    elementClassy[index] = classy for index, classy of setClassy
    newClassyClass = @callback
    
    for classyeToSet in elementClassy
      if classyeToSet
        newClassyClass += "_#{classyeToSet}"
      else
        newClassyClass += '_'
        
    element.classList.add newClassyClass
