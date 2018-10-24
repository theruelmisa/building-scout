$(document).ready(function() {

    /* Sticky Navigation */
    $('.js--section-main-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
      }, {
        offset: '75px'
    });

    /* Scroll to sections */
    $('.js--scroll-to-search').click(function() {
        $('html, body').animate({scrollTop: $('#search-scroll').offset().top}, 2500);
    });

    $('.js--scroll-to-features').click(function() {
      $('html, body').animate({scrollTop: $('#about-us').offset().top}, 2500);
    });

    /* Navigation Scroll */
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {

      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 2500, function() {
            
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
              return false;
            } else {
              $target.attr('tabindex','-1'); // 
              $target.focus(); 
            };
          });
        }
      }
    });

    /* On Scroll Animations */
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function() {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /* Mobile Nav */
    $('.js--nav-toggle').click(function() {
        var navigation = $('.js--main-nav');
        var toggler = $('.js--nav-toggle i');

        navigation.slideToggle(200);

        if (toggler.hasClass('fa-bars')) {
            toggler.addClass('fa-times');
            toggler.removeClass('fa-bars');
        } else {
          toggler.addClass('fa-bars');
          toggler.removeClass('fa-times');
        }
    });

});