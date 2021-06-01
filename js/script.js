(function ($) {
  $(document).ready(function () {  
  
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);  
  
	var audio = document.createElement("AUDIO");
	audio.volume = 0.2;
	document.body.appendChild(audio);
	audio.src = "audio/Araw - Araw.mp3"

	document.body.addEventListener("mousemove", function () {
		if (isChrome)
		{
			audio.play();
		}
	});

	Audio.prototype.play = (function(play) {
	return function () {
	  var audio = this,
		  args = arguments,
		  promise = play.apply(audio, args);
	  if (promise !== undefined) {
		promise.catch(_ => {
		});
	  }
	};
	})(Audio.prototype.play);
	
    "use strict";

    /*RSVP Form*/
    $(".submit_block_1").on("click", function (e) {
      send_form('block_1');
      return false;
    });
	
	$('#copyToClipboard').on("click", function (e) {	  
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($("#hashtag").text()).select();
		document.execCommand("copy");
		$temp.remove();
		e.preventDefault();
    });


    function send_form (type) {

      var name = $("input#name_" + type).val();
      if (name == "") {
        $("input#name_" + type).css({border: "1px solid red"});
        $("input#name_" + type).focus();
        return false;
      }
      var contact = $("input#contact_" + type).val();
      if (contact == "") {
        $("input#contact_" + type).css({border: "1px solid red"});
        $("input#contact_" + type).focus();
        return false;
      }
      var guest = $("input#guest_" + type).val();
      if (guest == "") {
        $("input#guest_" + type).css({border: "1px solid red"});
        $("input#guest_" + type).focus();
        return false;
      }
      var code = $("input#code_" + type).val();
      if (code == "") {
        $("input#code_" + type).css({border: "1px solid red"});
        $("input#code_" + type).focus();
        return false;
      }
	  
	  if ("01ce84968c6969bdd5d51c5eeaa3946a" != CryptoJS.MD5(code) &&
		  "4ef1477dc99fb623fd5d06dc4b26d1aa" != CryptoJS.MD5(code) &&
		  "85f007f8c50dd25f5a45fca73cad64bd" != CryptoJS.MD5(code) &&
		  "535b8a7c260ccef00aa9ac0ecde6067f" != CryptoJS.MD5(code))
		  {
			$("input#code_" + type).css({border: "1px solid red"});
			$("input#code_" + type).focus();
			alert("Please enter a correct code.");
			return false;
		  }
	  
	  if ("01ce84968c6969bdd5d51c5eeaa3946a" == CryptoJS.MD5(code) && guest != 0)
	  {
        $("input#code_" + type).css({border: "1px solid red"});
        $("input#code_" + type).focus();
		alert("Please enter a correct code.");
        return false;
	  }
	  
	  if ("4ef1477dc99fb623fd5d06dc4b26d1aa" == CryptoJS.MD5(code) && guest != 1)
	  {
        $("input#code_" + type).css({border: "1px solid red"});
        $("input#code_" + type).focus();
		alert("Please enter a correct code.");
        return false;
	  }
	  
	  if ("85f007f8c50dd25f5a45fca73cad64bd" == CryptoJS.MD5(code) && guest != 2)
	  {
        $("input#code_" + type).css({border: "1px solid red"});
        $("input#code_" + type).focus();
		alert("Please enter a correct code.");
        return false;
	  }
	  
	  if ("535b8a7c260ccef00aa9ac0ecde6067f" == CryptoJS.MD5(code) && guest != 3)
	  {
        $("input#code_" + type).css({border: "1px solid red"});
        $("input#code_" + type).focus();
		alert("Please enter a correct code.");
        return false;
	  }
	  
	  if ("122e27d57ae8ecb37f3f1da67abb33cb" == CryptoJS.MD5(code) && guest != 4)
	  {
        $("input#code_" + type).css({border: "1px solid red"});
        $("input#code_" + type).focus();
		alert("Please enter a correct code.");
        return false;
	  }

      console.log(name);
      console.log(contact);
      console.log(guest);
      console.log(code);

      var dataString = '&entry.1860254061=' + name + '&entry.1583867941=' + contact + '&entry.1014311907=' + guest + '&entry.398472872=' + code;
      var form = $(this);
      var str = form.serialize();
      function sent(){
        $('#div_' + type).html("<div id='form_send_message'>Thank you. See you there! :)</div>", 1500);
      }
      $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScLMSMvbRly5IH2xhwxaxmFxh12BtLs37qleT5wyZBn0W4plA/formResponse",
        data: dataString,
        complete:sent
      });
    }

    /*ScrollR */
    if ($(window).width() > 1024) {
      var s = skrollr.init({
        forceHeight: false
      });
    }

    /*Gallery ColorBox */
    $('.gallery_txt a').colorbox({
      rel: 'gal',
      maxWidth: "40%",
    });

    /*Main Menu Button */
    $('.main_menu_btn').on("click", function (e) {
      $(this).toggleClass('main_menu_btn_open');
      $('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
      $('.main_menu_block').find('.menu_wrapper').toggleClass('active');
      $('header .anim').toggleClass('active');
      e.preventDefault();
    });

    /* Section Background */
    $('section, .parallax').each(function () {
      var image = $(this).attr('data-image');
      if (image) {
        $(this).css('background-image', 'url(' + image + ')');
      }
    });

    /*ColorBox*/
    if ($(window).width() >= 760) {
      $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
    } else {
      $(".youtube").colorbox({iframe: true, innerWidth: 320, innerHeight: 240});
    }
    $(window).resize(function () {
      if ($(window).width() >= 760) {
        $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
      } else {
        $(".youtube").colorbox({iframe: true, innerWidth: 320, innerHeight: 240});
      }
    });

    /*Scroll Effect*/
    $('.intro_down, .go').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });

    /*Show/Hide Photo in When&Where Block*/
    $('.photocamera span').on("click", function (e) {
      $(this).parents('section').find('.opacity').toggleClass('fade');
      $(this).parents('section').find('.over').fadeToggle();
      e.preventDefault();
    });

    /*Player*/
    $('.music').on("click", function (e) {
      $('.player').fadeToggle();
      e.preventDefault();
    });

    /*CountDown*/
    $('.married_countdown').countdown({until: new Date("Jul 09, 2021 16:00:00")});

    /*OWL Carousel in Our Story*/
    $(".story_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
      paginationSpeed: 200, rewindSpeed: 500, items: 3, itemsTablet: [768, 1], autoPlay: false,
      itemsMobile: [479, 1], itemsDesktopSmall: [980, 1], itemsDesktop: [1500, 2], mouseDrag: true
    });

    /*Gallery Carousel */
    $(".gallery_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
      paginationSpeed: 200, rewindSpeed: 500, items: 4, itemsTablet: [768, 2], autoPlay: true,
      itemsMobile: [479, 1], mouseDrag: true
    });

    /*Registry Carousel */
    $(".registry_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
      rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 3, mouseDrag: true, autoPlay: true
    });

    /*The Crew Carousel*/
    $(".guest_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
      rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 4, mouseDrag: true, autoPlay: true
    });

    /*Slider Carousel*/
    $(".slider").owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      stopOnHover: false,
      autoHeight: true,
      singleItem: true,
      mouseDrag: true,
      autoPlay: true,
      transitionStyle: "fade"
    });

    /* Top Menu Click to Section */
    $('.sub_menu').find('a').on("click", function (e) {
      $('.sub_menu').find('a').removeClass('active');
      $(this).addClass('active');
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top + 1
      }, 1000);
      $(".main_menu_btn").trigger('click');
      e.preventDefault();
    });

    /*FireFly in Intro*/
    $.firefly({
      color: '#fff', minPixel: 1, maxPixel: 3, total: 55, on: '.into_firefly'
    });

    /* Refresh ScrollR */
    s.refresh($(".guest_wrapper, .our_story"));

  });
}(jQuery));
