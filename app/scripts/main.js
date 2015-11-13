$(function() {
	var layer = $('.layer, .info');
	var one = $('.top, .msg-one');
	var two = $('.middle, .msg-two');
	var three = $('.bottom, .msg-three');

    $( ".first" ).click(function() {
    	layer.removeClass('active');
    	one.addClass('active');
    });
    $( ".second" ).click(function() {
    	layer.removeClass('active');
    	two.addClass('active');
    });
    $( ".last" ).click(function() {
    	layer.removeClass('active');
    	three.addClass('active');
    });
    $( ".all" ).click(function() {
    	$('.layer').addClass('active');
    	$('.info').removeClass('active');
    });
});
