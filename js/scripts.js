 // Initialise video background
 /*if (!device.tablet() && !device.mobile()) {
     $(function() {
         $(".player").mb_YTPlayer();
     });
 } else {
     $('body').addClass('mobile');
 }*/

 // Intro
 $(function() {
     $("#fill-text").wordsrotator({
         words: ['UI Designers', 'Programmers', 'SEO Experts'],
         speed: 4000
     });
 });

 $(function() {
     $('#intro hgroup h1,#scr-down').fadeIn('slow');
 });

 // -----------------Animations (using superscrollorama plugin)------------
 $(document).ready(function() {
     var controller = $.superscrollorama();

     // About section
     controller.addTween('#about', TweenMax.fromTo($('#about h5'), .3, {
         css: {
             opacity: 0,
             'letter-spacing': 0
         },
         immediateRender: true,
         ease: Quad.easeInOut
     }, {
         css: {
             opacity: 1,
             'letter-spacing': '4px'
         },
         ease: Quad.easeInOut
     }), 0, -100);
     controller.addTween('#about', TweenMax.from($('#about h1'), .6, {
         css: {
             top: '50px',
             opacity: 0
         }
     }));
     controller.addTween('#about', TweenMax.from($('#about h4'), .6, {
         css: {
             marginTop: '-50px',
             opacity: 0
         }
     }));

     // Services Title
     controller.addTween('#services', TweenMax.from($('#services>h2 span'), .4, {
         css: {
             top: '35px',
             opacity: 0
         }
     }), 1, -60);
     $('#services article div').css('position', 'relative').each(function() {
         controller.addTween('#services', TweenMax.from($(this), 1, {
             delay: Math.random() * .2,
             css: {
                 left: Math.random() * 200 - 100,
                 top: Math.random() * 200 - 100,
                 opacity: 0
             },
             ease: Back.easeOut
         }));
     });

     // Services section
     controller.addTween(
         '#process article', (new TimelineLite())
         .append([
             TweenMax.from($('#ideate'), .4, {
                 delay: .4,
                 css: {
                     opacity: 0,
                     right: '10%'
                 }
             }),
             TweenMax.from($('#photoshop'), .4, {
                 delay: .45,
                 css: {
                     opacity: 0,
                     right: '20%'
                 }
             }),
             TweenMax.from($('#code'), .4, {
                 delay: .5,
                 css: {
                     opacity: 0,
                     right: '25%'
                 }
             }),
             TweenMax.from($('#optimize'), .3, {
                 delay: .55,
                 css: {
                     opacity: 0,
                     right: '35%'
                 }
             })

         ]),
         1, -200
     );

     // Portfolio
     controller.addTween('#portfolio>h2', TweenMax.fromTo($('#portfolio>h2'), .3, {
         css: {
             opacity: 0,
             'letter-spacing': '40px'
         },
         immediateRender: true,
         ease: Quad.easeInOut
     }, {
         css: {
             opacity: 1,
             'letter-spacing': '0px'
         },
         ease: Quad.easeInOut
     }), 0, -50);
     $('.item').css('position', 'relative').each(function() {

         controller.addTween('#portfolio>h2', TweenMax.from($(this), 1.5, {
             delay: Math.random() * .2,
             css: {
                 left: Math.random() * 200 - 100,
                 top: Math.random() * 200 - 100,
                 opacity: 0
             },
             ease: Back.easeOut
         }));
     });

     // Contact form stroke
     controller.addTween('#contact_form>hr', TweenMax.from($('#contact_form>hr'), .3, {
         css: {
             width: 0
         },
         ease: Quad.easeInOut
     }));
 });

 // Initialize Portfolio
 $("#port-items").diamonds({
     itemSelector: ".item"
 });

 // Google Map for contact section
 window.onload = function() {
     var styles = [{
         featureType: 'water',
         elementType: 'geometry.fill',
         stylers: [{
             color: '#adc9b8'
         }]
     }, {
         featureType: 'landscape.natural',
         elementType: 'all',
         stylers: [{
             hue: '#00aaff'
         }, {
             saturation: '-95'
         }, {
             lightness: 0
         }]
     }, {
         featureType: 'poi',
         elementType: 'geometry',
         stylers: [{
             hue: '#f9e0b7'
         }, {
             lightness: 30
         }]
     }, {
         featureType: 'road',
         elementType: 'geometry',
         stylers: [{
             hue: '#00aaff'
         }, {
             saturation: '-95'
         }, {
             lightness: 14
         }]
     }, ];
     var options = {
         mapTypeControlOptions: {
             mapTypeIds: ['Styled']
         },
         center: new google.maps.LatLng(30.2072037, 74.95851889999994),
         zoom: 15,
         streetViewControl: false,
         mapTypeControl: false,
         scrollwheel: false,
         mapTypeId: 'Styled'
     };
     var div = document.getElementById('map');
     var map = new google.maps.Map(div, options);
     var marker_img = 'images/gps_marker.png';
     var marker = new google.maps.Marker({
         position: new google.maps.LatLng(30.2072037, 74.95851889999994),
         map: map,
         icon: marker_img,
         title: "Prasanjit Singh"
     });
     var styledMapType = new google.maps.StyledMapType(styles, {
         name: 'Styled'
     });
     map.mapTypes.set('Styled', styledMapType);
 }

 // Smooth scroll for anchor click
 $(function() {
     $('a[href*=#]:not([href=#])').click(function() {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                 }, 1000);
                 return false;
             }
         }
     });
 });
