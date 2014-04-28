/* global _:true */
/* jshint unused: false*/
/* global moment: true */
(function(){
  'use strict';

  $(document).ready(init);

  function init () {
  $('#go').click(run);
  }


  function run() {
  var numbers = $('#nums').val().split(',');
  var start = numbers[0];
  var stop = numbers[1];
  var step = numbers[2];

  var answer = _.range(start,stop,step);

  answer = _(answer).map(n=>Math.pow(n,3)).map(n=>`<div>${n}</div>`).forEach(n=>$('#output').append(n));
  }


  // $('#format').click(format);
  //     var frmt = moment().format('MMMM Do YYYY, h:mm:ss a');
  //     $('#output').text(frmt);



})();
