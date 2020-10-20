$('.input').focus(function(){
    $(this).parent().parent().addClass('focus');
});


var inputLength = $('.input').length();

if(inputLength < 1){
    $('.input').parent().parent().removeClass('focus');
}

$(document).mouseup(function (e) {
    var container = $(".focus");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('focus');
    }
});