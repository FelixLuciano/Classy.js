Classy('Classy', function(arg) {
  this.innerHTML = 'Foo';
});

Classy('Classy2', function(arg) {
  this.onclick = function() {
    alert(arg);
  };
});

Classy('ClassyJQuery', function(arg) {
  $(this).on('click', function() {
    $(this).toggleClass(arg[0]);
  });
});