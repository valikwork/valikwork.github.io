$('.menu_item_link').click(function(){
    $(this).toggleClass('active')
});
$('.red_arrow').click(function(){
    $('#lang').trigger('click')
});
$('.select_lang_wrap').click(function(){
  $('#lang').trigger(click);
});

$('.select_lang_wrap').click(function(){
    $('.red_arrow').toggleClass('open')
    
});

$('.mob_menu_block').click(function(){
    $('.aside_menu').toggleClass('open')
});

function setActive() {
    aObj = document.getElementsByClassName('menu_item_link');
    for(i=0;i<aObj.length;i++) { 
      if(document.location.href.indexOf(aObj[i].href)>=0) {
        aObj[i].classList.add('active');
      }
    }
  }
  
  window.onload = setActive;
  history.pushState(' ', document.title, window.location.pathname);

$('.all_colors').click(function(){
  $('.colors').toggleClass('open')
});
