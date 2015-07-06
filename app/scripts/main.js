'use strict';
/*global $*/

$(function() {

  $('.review-type button').click(function(event) {
    event.preventDefault();
    var button = $(this);

    button.addClass('active');
    button.siblings('button').removeClass('active');

    if (button.hasClass('show-basic')) {
      $('label.adv').fadeOut('500');
    } else if (button.hasClass('show-adv')) {
      $('label.adv').fadeIn('500');
    }
  });

});
