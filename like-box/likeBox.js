$(function() {

  var $likeBtn = $(".like-btn"),
    $close = $(".close");


  $likeBtn.click(function() {
    var $self = $(this);
    var $model = $("." + $self.attr('data-toggle'));

    $model.addClass('in')
      .css('display', 'block');

  });

  $close.click(function() {
    var $self = $(this);
    var $model = $("." + $self.attr('data-dismiss'));

    $model.removeClass('in')
      .css('display', 'none');

  });


});
