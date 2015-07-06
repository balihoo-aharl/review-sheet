'use strict';
/*global $*/

$(function() {

  $('.review-type button').click(function(event) {
    event.preventDefault();
    $(this).addClass('active');
    $(this).siblings('button').removeClass('active');

    if ($(this).hasClass('show-basic')) {
      $('label.adv').fadeOut('500');
    } else if ($(this).hasClass('show-adv')) {
      $('label.adv').fadeIn('500');
    }
  });

});
