#
#  Classy.Js By TecIce
#  https://github.com/TecIce/Classy.js
#  20/08/2017
#
class window.Classy

  constructor: (@mainArg1, @mainArg2) ->
    unless this instanceof Classy then return new Classy @mainArg1, @mainArg2

    if typeof @mainArg1 == 'string' and typeof @mainArg2 == 'function'
      Classy::register()


  __scope__ = {} unless __scope__


  register: (name = mainArg1, callback = mainArg2) ->
    unless typeof name == 'string' and typeof callback == 'function' then return null

    __scope__[name] =
      action: callback
      elements: []

    for element in document.querySelectorAll "[class*=#{name}]"

      attributes = (
          element
            .getAttribute 'class'
            .match new RegExp "(?=#{name})(?:\\w+)", 'g'
        )[0]
          .split '_'

      unless attributes[0] == name then continue

      for attribute, index in attributes
        if Number attribute then attributes[index] = Number attribute

      element.Classy = {} unless element.Classy
      element.Classy[name] = attributes.splice 1

      __scope__[name].elements.push element
    Classy::applyAll name


  applyAll: (name = @mainArg1) ->
    if @name? then return null

    for element in __scope__[name].elements
      selector = if jQuery then $(element) else element
      __scope__[name].action
        .call selector, element.Classy[name], Classy(name, element)


  apply: (name = @mainArg1, element = @mainArg2) ->
    if @name? and @mainArg2? then return null

    selector      = if jQuery then $(element) else element
    ignoreComents = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))|(^\s*)/mg
    argumentNames = /([^\s,]+)/g

    fnString = __scope__[name].action
      .toString()
      .replace ignoreComents, ''

    callbackArgs = fnString
      .slice fnString.indexOf('(') + 1, fnString.indexOf ')'
      .match argumentNames

    actsMatch    = new RegExp "(?!(#{callbackArgs[0]}))(.*#{callbackArgs[0]}.*)", 'gm'
    callbackActs = fnString.match(actsMatch).slice 1
    callback = ''
    for action in callbackActs then callback += action

    new Function callbackArgs[0], callbackArgs[1], callback
      .call selector, element.Classy[name], Classy(name, element)


  scope: __scope__


### ---------------------------------- ###

console.clear()

Classy 'ClassyTeste', (args, $Classy) ->
  @innerHTML = args[0]

  @onclick = ->
    args[0]++
    $Classy.apply()
    console.log $Classy.scope
