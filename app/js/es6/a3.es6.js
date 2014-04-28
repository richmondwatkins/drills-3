/* global _:true */
/* jshint unused:false*/
/* global moment: true */
(function(){
  'use strict';

  $(document).ready(init);

  function init () {
  $('#go').click(run);
  }


  function run() {
  var days = $('#date').val();

  var difference = moment(days, 'YYYYMMDD').fromNow();

  $('#output').text(difference);
  }


  // $('#format').click(format);
  //     var frmt = moment().format('MMMM Do YYYY, h:mm:ss a');
  //     $('#output').text(frmt);



})();
