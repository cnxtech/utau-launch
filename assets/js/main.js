$(function(){

  var ts = new Date(2014, 8, 12),
    launch = true;

  if((new Date()) > ts){
    // Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = (new Date()).getTime() + 10*24*60*60*1000;
    launch = false;
  }

  $('#countdown').countdown({
    timestamp : ts
  });

  $('#success').hide();
  $('#failure').hide();

  $('form#subscribe').submit(function (e) {
    e.preventDefault();
    $.getJSON(
    this.action + "?callback=?",
    $(this).serialize(),
    function (data) {
      if (data.Status === 400) {
        $('#failure').fadeIn(500);
      } else { // 200
        $('#success').fadeIn(500);
        $('#subscribe').hide();
      }
    });
  });

});

