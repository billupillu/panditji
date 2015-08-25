// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs

//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$('.h').hide();
	$('.i').hide();
	$('.c').hide();
	$('.k').hide();
	$('.b').hide();
	$('.j').hide();
	$('.z').hide();
	$('.feedback-button').click(function(){
		$('.i').fadeToggle("fast",null,function(){
			$('.h').fadeToggle("fast",null, function(){
				$('.b').fadeToggle("fast",null, function(){
					$('.c').fadeToggle("fast",null,function(){
						$('.k').fadeToggle("fast",null,function(){
							$('.z').fadeToggle("fast",null,function(){
								$('.j').fadeToggle("fast",null,function(){});
							});
						});
					});
				});
			});
		});

	});
});