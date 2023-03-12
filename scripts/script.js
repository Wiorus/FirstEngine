function togglle(){
    $('.ham-menu').toggleClass('menu-slide');
    $('.hamburger').toggleClass('active');
    $('main').toggleClass('slide');
  }

  $('.ham-menu').on('click', function () {
    togglle();
  })

  $('.close').on('click', function () {
    togglle();
  })
  
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){
  
        window.location.hash = hash;
      });
    }
  });