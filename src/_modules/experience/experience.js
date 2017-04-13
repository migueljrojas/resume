'use strict';
var $ = require('jquery');

// Constructor
var Experience = function() {

    $('._job-events .trigger:first').parent().addClass('-open');
    $('._job-cards li:first').addClass('-active');

    $('._job-events .trigger').each(function() {
        $(this).on('click', function(){

            var targetClass = $(this).parent().attr('class');

            if ( $(this).parent().hasClass('-open') ){
                $(this).parent().toggleClass('-open');
            } else {
                $('._job-events li').removeClass('-open');
                $(this).parent().addClass('-open');
            }

            $('._job-cards li').removeClass('-active');

            $('._job-cards li').filter(function() {
                return $(this).data('target') == targetClass;
            }).toggleClass('-active');

        });
    });

    $('.collapsible-trigger').each(function() {
        $(this).on('click', function(){
            $(this).parent().toggleClass('-closed');
        });
    });

    $('._job-events').on('scroll', function(e) {
        var el = $(e.currentTarget);
        var left = el.scrollLeft();
     	var top = el.scrollTop();
     	if (el.attr('class') === '_job-events') {
          	$('.year-list').scrollTop(top);
          	$('.year-list').scrollLeft(left);
        } else {
          	$('._job-events').scrollTop(top);
          	$('._job-events').scrollLeft(left);
        }
   });
};

module.exports = Experience;