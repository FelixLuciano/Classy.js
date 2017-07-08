# ![](http://i.imgur.com/R2keNXi.png)
<br>

### Source it!
>[https://rawgit.com/TecIce/Classy.js/master/Classy.min.js](https://rawgit.com/TecIce/Classy.js/master/Classy.min.js)
<br>

### Classy constructor:    `Classy( Classye, Callback );`  
  
+ __Classye__   
  Type: _"String"_  
  rule: _Can not contain hyphens_  
  Sets the Classye to call to execute the callback.
 
+ __Callback__  
  Type: _Function(Arguments)_  
  Sets the Classye to call to execute the callback.

  + __Arguments__  
    type: _[Array]_  
    Returns the arguments defined next to Classy in HTML.

``````js
  Classy('Classye', function(arguments) {
    this.innerHTML = arguments[0];
  });
``````
<br>

### Classy Getter:    `Classy( Element ).get( Classye );`  
  
+ __Element__   
  Type: _"String"_  
  Sets the HTML element to pick up the Classye.
  
+ __Classye__   
  Type: _"String"_  
  rule: _Can not contain hyphens_  
  Defines the Classye to be taken from the HTML element.
  
+ __Function return__   
  Type: _[Array]_  
  Returns the arguments defined in the element's HTML class.

``````js
  console.log( Classy('#element').get('Classy') );
``````
<br>

### Classy Setter:    `Classy( Element, Classye ).get( Arguments );`  
  
+ __Element__   
  Type: _"String"_  
  Sets the HTML element to establish the Classye.
  
+ __Classye__   
  Type: _"String"_  
  rule: _Can not contain hyphens_  
  Sets the Classye to be established for the HTML element.
  
+ __Arguments__   
  Type: _{Object}_  
  Defines the element arguments to be set.

``````js
  Classy('#element', 'Classy').set({
    0: 'Argument',
    1: 123
  });
``````
<br>

### Element definition:    `<any class="[Classy name]_[argument1]_[argument2]_[arg...]">...</any>`  
  
+ __Classy name__   
  Type: _"String"_  
  rule: _Can not contain hyphens_  
  Defines the classy that the element will execute upon loading.
  
+ __Arguments__   
  Type: _"String"_  
  rule: _Can not contain hyphens_  
  Sets the Classye to be established for the HTML element.
  
+ __Character: `_`__   
  Type: _Argument separador_
  Separates the Classy name and its arguments.

``````html
  <div class='Classy_argument_123'></div>
``````
<br>

### See this working

<a href='https://jsfiddle.net/TecIce/ba8uy36j' target='_blank'>![](http://i.imgur.com/65Uvdxn.png)]</a>
