# ![](http://i.imgur.com/R2keNXi.png)
<br>

### Source it!
>[https://rawgit.com/TecIce/Classy.js/master/source/Classy.min.js](https://rawgit.com/TecIce/Classy.js/master/source/Classy.min.js)
<br>

### Classy constructor: `Classy(Name, Callback(Arguments, $Classy));`  

+ __Alias__

  + `Classy().register(Name, Callback(Arguments, $Classy));`

+ __Name__   
  Type: _"String"_  
  rule: _Can not contain hyphens_  
  Sets the Classye to call to execute the callback.

+ __Callback__  
  Type: _Function(Arguments)_  
  Sets the Classye to call to execute the callback.

  + __Arguments__  
    type: _[Array]_  
    Returns the arguments defined next to Classy in HTML.

  + __$Classy__  
    type: _{Object}_  
    Returns classy having the class name and current as predefined arguments.

  + __this__  
    type: _<Element>_  
    Return the element where the callback is performing the actions.
    // If jQuery is imported, the return will be given by the element through jQuery

``````js
  Classy('Classye', function(arguments, $Classy) {
    this.innerHTML = arguments[0];
    //If jQuery is installed
    this.on('click', function() {
      alert('Hello world!');
    });
    console.log($Classy.scope());
  });
``````
<br>


### Element definition: `<any class="[Classy name]_[argument1]_[argument2]_[arg...]">...</any>`  

+ __Classy name__   
  Type: _"String"_  
  rule: _Can not contain hyphens_  
  Defines the classye that the element will execute upon loading.

+ __Arguments__   
  Type: _"String"_  
  rule: _Can not contain hyphens_  
  Sets the Classye to be established for the HTML element.

+ __Character: `_`__   
  Type: _Argument separador_
  Separates the Classye name and its arguments.

``````html
  <div class='Classy_argument_1_2_3'></div>
``````
<br>


### Element reloading: `Classy(Name, Element).apply()`

+ __Alias__

  + `Classy().apply(Name, Element));`

+ __Return__   
  Type: _Function()_
  Rerun the callback for an element of a specific classye.
<br>


### Classye reloading: `Classy(name).applyAll()`

+ __Alias__

  + `Classy().applyAll(Name));`

+ __Return__   
  Type: _Function()_
  Rerun the callback for all elements of the classye with the given name.
<br>


### Scope: `Classy().scope()`

+ __Return__   
  Type: _{Object}_  
  Returns all defined Classyes, with their respective elements, which in turn, their arguments.

  ``````js
    {
      MyClassy: {
        action: ƒ (arguments, $Classy),
        elements: [
          0: div#element.MyClassy_arg1_2_3
            Classy: {
              MyClassy: [
                0: 'arg1',
                1: 2,
                2: 3
            ]
          }
        ]
      }
    }
  ``````

+ __Return__   
  Type: _{Object}_  
  Returns all defined Classyes, with their respective elements, which in turn, their arguments.

<br>


### See this working

[![](http://i.imgur.com/65Uvdxn.png)](https://jsfiddle.net/TecIce/ba8uy36j)
