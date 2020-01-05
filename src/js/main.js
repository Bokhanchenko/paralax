$(window).scroll(function() {
  var section1 = $('.section-1').offset(),
      section2 = $('.section-2').offset(),
      section3 = $('.section-3').offset(),
      wScroll = $(this).scrollTop();

  if (section1) {
    $('.section-1 h2 ').css({
      'transform': `translate(0, ${(wScroll - section1.top) / 1.1}%)`
    });

    $('.section-2 h2 ').css({
      // 'transform': `translate(0, ${(wScroll - section2.top) / 1.1}%)`,
      'transform': `rotate(-${(wScroll - section2.top) / 1.1}deg) `
    });

    $('.section-3 h2 ').css({
      'transform': `translate(0, ${(wScroll - section3.top) / .9}%)`
    })
  }
});
