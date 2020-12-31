// Just Study

$(document).on("click", ".tab-list li a", function () {
    var $this = $(this),
      $tabList = $this.parents("ul"),
      _idx = $this.closest("li").index();
    if ($tabList.children().eq(_idx).hasClass("in")) {
        $tabList.children().eq(_idx).removeClass("in");
        $tabList
            .next()
            .children()
            .eq(_idx)
            .removeClass("in");
    } else {
        $tabList.children().eq(_idx).addClass("in").siblings().removeClass("in");
        $tabList
            .next()
            .children()
            .eq(_idx)
            .addClass("in")
            .siblings()
            .removeClass("in");
        }
    
});
  




/*Animacion de ondas*/
(function(){
    var waves_ripple, d, x, y;
    $('.waves').on('click', wavesRipple);
    function wavesRipple(e){
        e.preventDefault();
        var that = $(this);
        
        if ( that.find('.waves-ripple').length === 0 ){
            that.prepend( '<span class="waves-ripple"></span>' );
        }
        waves_ripple = that.find('.waves-ripple');
        waves_ripple.removeClass('waves-animate');
        if ( !waves_ripple.height() && !waves_ripple.width() ){
            d = Math.max(that.outerWidth(), that.outerHeight());
            waves_ripple.css({
                height: d,
                width: d
            });
        }
        x = e.pageX - that.offset().left - waves_ripple.width() / 2;
        y = e.pageY - that.offset().top - waves_ripple.height() / 2;
        
        waves_ripple
        .css({
            top: y + 'px',
            left: x + 'px'
        })
        .addClass('waves-animate');
    }
})();


