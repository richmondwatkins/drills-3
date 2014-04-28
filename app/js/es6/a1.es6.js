/* global _:true */
/* jshint unused:false*/
(function(){
  'use strict';

  $(document).ready(init);

  function init () {
    $('#go').click(cat);
  }


  function cat() {
    var fname = $('#first').val();
    var lname = $('#last').val();
    var mov = $('#movie').val();

    var output = `${fname.toLowerCase()} ${lname.toLowerCase()} 's favorite movie is ${mov.toUpperCase()}`;

    console.log(output);
  }





})();
