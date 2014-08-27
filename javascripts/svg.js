///////// SVG SCROLL ANIMATION //////////
$(document).ready(function(){

  $(window).scroll(function() {
      drawLine( $('.route'),
                $('.path')[0] );
      drawLine( $('.route'),
                $('.path')[1] );
    });

    // init the line length
      drawLine( $('.route'),
                $('.path')[0] );
      drawLine( $('.route'),
                $('.path')[1] );

    //draw the line


    function drawLine(container, line){

      var pathLength = line.getTotalLength(),
          maxScrollTop = $(document).height() - $(window).height(),
          percentDone = $(window).scrollTop() / maxScrollTop,
          length = percentDone * pathLength;
      line.style.strokeDasharray = [ 10 *length ,pathLength].join(' ');
    }

});

///////// END SVG SCROLL ANIMATION //////////
;
