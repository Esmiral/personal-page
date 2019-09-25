$(document).ready(function() {


	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	
//MixItUp - фильтрация работ в портфолио
	$("#portfolio-projects").mixItUp();
   
    // FancyBox  - galery
  $(".fancybox").fancybox({
				// Default - with fix from scroll to top
  				helpers: {
  					overlay: {
  						locked: false
  					}
  				}
  });
// end of fancybox-galery

// jQuery Validate JS
$("#contact-form").validate({
  rules: {
    name:{required: true},
    email:{required: true},
    // skype: {required: true},
    // phone: {required: true},
    message: {required: true}
  },
  messages: {
    name: "Пожалуйста, введите своё имя",
    email: {
      required: "Пожалуйста, введите свой email",
      email:"Email адрес должен быть в формате name@domain.com. Возможно вы ввели email с ошибкой."
    },
    message: "Пожалуйста, введите текст сообщения."
  }

})


});


