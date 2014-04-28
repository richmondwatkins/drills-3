/* global _:true */
/* jshint unused:false*/
(function(){
  'use strict';

  $(document).ready(init);

  function init () {
    $('#go').click(square);
  }


  function square() {
    var num = $('#input').val().split(',');

  num =  _(num).map(x=>x*x).map(paint);
    console.log(num.value());
  }

  function paint(x) {
    var $div = $('<div class="nums">');
    $div.append(x);
    $('#output').append($div);
  }

//this does everything that is above in one line
// $('#input').val().split(',').map(x=>x *x).map(x=>1<div>${x}</div>`).forEach(x=>$('#output').append(x));
})();
