///////// SVG SCROLL ANIMATION //////////
$(document).ready(function(){
  var count = -1;

  $(window).scroll(function() {
    var count = -1;
    _.each($('.path'), function(index){
      count += 1;
      drawLine( $('.route'),
                $('.path')[count] );
    });
  });

    // init the line length
  _.each($('.path'), function(index){
    count += 1;
    drawLine( $('.route'),
              $('.path')[count] );
  });

    //draw the line


  function drawLine(container, line){

    var pathLength = line.getTotalLength(),
        maxScrollTop = $(document).height() - $(window).height(),
        percentDone = $(window).scrollTop() / maxScrollTop,
        length = percentDone * pathLength;
    line.style.strokeDasharray = [8*length ,pathLength].join(' ');
  }

});

///////// END SVG SCROLL ANIMATION //////////
;
