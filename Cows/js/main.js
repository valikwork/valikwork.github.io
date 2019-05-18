new WOW().init();

$('.specialist_k').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    prevArrow: '<div class="arrow left"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.741cm" height="1.376cm" ><image x="0px" y="0px" width="21px" height="39px" xlink: href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAnCAMAAADXe/MCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX///9Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy3///9Ss5lQAAAAPnRSTlMAMsLYWS3WwNCWqxGythMZzRTKFsTSwdkx3bjmONywYff0XWbyavrsVW+A/VCE5z+KjzmV4Jqhpq29u9+3hyj6+GYAAAABYktHRACIBR1IAAAAB3RJTUUH4wEaDB8WblQfbAAAALRJREFUKM+N0UcSwkAMBEAZcMARbHIyOecMBv3/WWivK1HlOfZFpRkAPUahWGJoWog2QwcRyxK6noC+hEGYA6MKoV3VMFaYCFiTMI7yYl3DpEHomBra/7DZktAQsK0hdAi7Pb3mPumALZIOEUdjxhPiKd9vNkdcLBmvZF5viLeMd8T7A+MjinxSfGZ8Ib6yH+Em812xwfghVEp5iuy5xJbJ2BcWBAgDmV/Eb3ZR7ZgB50/2/QEt9yWRZsczlQAAAABJRU5ErkJggg==" /></svg></div>',
    nextArrow: '<div class="arrow right"><svg style="transform:rotate(180deg)" xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.741cm" height="1.376cm" ><image x="0px" y="0px" width="21px" height="39px" xlink: href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAnCAMAAADXe/MCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX///9Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy3///9Ss5lQAAAAPnRSTlMAMsLYWS3WwNCWqxGythMZzRTKFsTSwdkx3bjmONywYff0XWbyavrsVW+A/VCE5z+KjzmV4Jqhpq29u9+3hyj6+GYAAAABYktHRACIBR1IAAAAB3RJTUUH4wEaDB8WblQfbAAAALRJREFUKM+N0UcSwkAMBEAZcMARbHIyOecMBv3/WWivK1HlOfZFpRkAPUahWGJoWog2QwcRyxK6noC+hEGYA6MKoV3VMFaYCFiTMI7yYl3DpEHomBra/7DZktAQsK0hdAi7Pb3mPumALZIOEUdjxhPiKd9vNkdcLBmvZF5viLeMd8T7A+MjinxSfGZ8Ib6yH+Em812xwfghVEp5iuy5xJbJ2BcWBAgDmV/Eb3ZR7ZgB50/2/QEt9yWRZsczlQAAAABJRU5ErkJggg==" /></svg></div>',
    // prevArrow: '<div class="arrowLeft"></div>',
    // nextArrow: '<div class="arrowRight"></div>'
});
$('.howwork-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    focusOnSelect: true,
    prevArrow: '<div class="arrow left"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.741cm" height="1.376cm" ><image x="0px" y="0px" width="21px" height="39px" xlink: href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAnCAMAAADXe/MCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX///9Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy3///9Ss5lQAAAAPnRSTlMAMsLYWS3WwNCWqxGythMZzRTKFsTSwdkx3bjmONywYff0XWbyavrsVW+A/VCE5z+KjzmV4Jqhpq29u9+3hyj6+GYAAAABYktHRACIBR1IAAAAB3RJTUUH4wEaDB8WblQfbAAAALRJREFUKM+N0UcSwkAMBEAZcMARbHIyOecMBv3/WWivK1HlOfZFpRkAPUahWGJoWog2QwcRyxK6noC+hEGYA6MKoV3VMFaYCFiTMI7yYl3DpEHomBra/7DZktAQsK0hdAi7Pb3mPumALZIOEUdjxhPiKd9vNkdcLBmvZF5viLeMd8T7A+MjinxSfGZ8Ib6yH+Em812xwfghVEp5iuy5xJbJ2BcWBAgDmV/Eb3ZR7ZgB50/2/QEt9yWRZsczlQAAAABJRU5ErkJggg==" /></svg></div>',
    nextArrow: '<div class="arrow right"><svg style="transform:rotate(180deg)" xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.741cm" height="1.376cm" ><image x="0px" y="0px" width="21px" height="39px" xlink: href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAnCAMAAADXe/MCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX///9Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy3///9Ss5lQAAAAPnRSTlMAMsLYWS3WwNCWqxGythMZzRTKFsTSwdkx3bjmONywYff0XWbyavrsVW+A/VCE5z+KjzmV4Jqhpq29u9+3hyj6+GYAAAABYktHRACIBR1IAAAAB3RJTUUH4wEaDB8WblQfbAAAALRJREFUKM+N0UcSwkAMBEAZcMARbHIyOecMBv3/WWivK1HlOfZFpRkAPUahWGJoWog2QwcRyxK6noC+hEGYA6MKoV3VMFaYCFiTMI7yYl3DpEHomBra/7DZktAQsK0hdAi7Pb3mPumALZIOEUdjxhPiKd9vNkdcLBmvZF5viLeMd8T7A+MjinxSfGZ8Ib6yH+Em812xwfghVEp5iuy5xJbJ2BcWBAgDmV/Eb3ZR7ZgB50/2/QEt9yWRZsczlQAAAABJRU5ErkJggg==" /></svg></div>',
    // prevArrow: '<div class="arrowLeft"></div>',
    // nextArrow: '<div class="arrowRight"></div>'
});
$('.aboutspeak-items').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    verticalSwiping: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
            }
        },
    ],
    prevArrow: '<div class="arrow left"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.741cm" height="1.376cm" ><image x="0px" y="0px" width="21px" height="39px" xlink: href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAnCAMAAADXe/MCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX///9Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy3///9Ss5lQAAAAPnRSTlMAMsLYWS3WwNCWqxGythMZzRTKFsTSwdkx3bjmONywYff0XWbyavrsVW+A/VCE5z+KjzmV4Jqhpq29u9+3hyj6+GYAAAABYktHRACIBR1IAAAAB3RJTUUH4wEaDB8WblQfbAAAALRJREFUKM+N0UcSwkAMBEAZcMARbHIyOecMBv3/WWivK1HlOfZFpRkAPUahWGJoWog2QwcRyxK6noC+hEGYA6MKoV3VMFaYCFiTMI7yYl3DpEHomBra/7DZktAQsK0hdAi7Pb3mPumALZIOEUdjxhPiKd9vNkdcLBmvZF5viLeMd8T7A+MjinxSfGZ8Ib6yH+Em812xwfghVEp5iuy5xJbJ2BcWBAgDmV/Eb3ZR7ZgB50/2/QEt9yWRZsczlQAAAABJRU5ErkJggg==" /></svg></div>',
    nextArrow: '<div class="arrow right"><svg style="transform:rotate(180deg)" xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.741cm" height="1.376cm" ><image x="0px" y="0px" width="21px" height="39px" xlink: href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAnCAMAAADXe/MCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX///9Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy3///9Ss5lQAAAAPnRSTlMAMsLYWS3WwNCWqxGythMZzRTKFsTSwdkx3bjmONywYff0XWbyavrsVW+A/VCE5z+KjzmV4Jqhpq29u9+3hyj6+GYAAAABYktHRACIBR1IAAAAB3RJTUUH4wEaDB8WblQfbAAAALRJREFUKM+N0UcSwkAMBEAZcMARbHIyOecMBv3/WWivK1HlOfZFpRkAPUahWGJoWog2QwcRyxK6noC+hEGYA6MKoV3VMFaYCFiTMI7yYl3DpEHomBra/7DZktAQsK0hdAi7Pb3mPumALZIOEUdjxhPiKd9vNkdcLBmvZF5viLeMd8T7A+MjinxSfGZ8Ib6yH+Em812xwfghVEp5iuy5xJbJ2BcWBAgDmV/Eb3ZR7ZgB50/2/QEt9yWRZsczlQAAAABJRU5ErkJggg==" /></svg></div>',
    // prevArrow: '<div class="arrowLeft"></div>',
    // nextArrow: '<div class="arrowRight"></div>'
});
$('.news-items').slick({
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    // focusOnSelect: true,
    prevArrow: '<div class="arrow left"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.741cm" height="1.376cm" ><image x="0px" y="0px" width="21px" height="39px" xlink: href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAnCAMAAADXe/MCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX///9Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy3///9Ss5lQAAAAPnRSTlMAMsLYWS3WwNCWqxGythMZzRTKFsTSwdkx3bjmONywYff0XWbyavrsVW+A/VCE5z+KjzmV4Jqhpq29u9+3hyj6+GYAAAABYktHRACIBR1IAAAAB3RJTUUH4wEaDB8WblQfbAAAALRJREFUKM+N0UcSwkAMBEAZcMARbHIyOecMBv3/WWivK1HlOfZFpRkAPUahWGJoWog2QwcRyxK6noC+hEGYA6MKoV3VMFaYCFiTMI7yYl3DpEHomBra/7DZktAQsK0hdAi7Pb3mPumALZIOEUdjxhPiKd9vNkdcLBmvZF5viLeMd8T7A+MjinxSfGZ8Ib6yH+Em812xwfghVEp5iuy5xJbJ2BcWBAgDmV/Eb3ZR7ZgB50/2/QEt9yWRZsczlQAAAABJRU5ErkJggg==" /></svg></div>',
    nextArrow: '<div class="arrow right"><svg style="transform:rotate(180deg)" xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.741cm" height="1.376cm" ><image x="0px" y="0px" width="21px" height="39px" xlink: href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAnCAMAAADXe/MCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX///9Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy1Vfy3///9Ss5lQAAAAPnRSTlMAMsLYWS3WwNCWqxGythMZzRTKFsTSwdkx3bjmONywYff0XWbyavrsVW+A/VCE5z+KjzmV4Jqhpq29u9+3hyj6+GYAAAABYktHRACIBR1IAAAAB3RJTUUH4wEaDB8WblQfbAAAALRJREFUKM+N0UcSwkAMBEAZcMARbHIyOecMBv3/WWivK1HlOfZFpRkAPUahWGJoWog2QwcRyxK6noC+hEGYA6MKoV3VMFaYCFiTMI7yYl3DpEHomBra/7DZktAQsK0hdAi7Pb3mPumALZIOEUdjxhPiKd9vNkdcLBmvZF5viLeMd8T7A+MjinxSfGZ8Ib6yH+Em812xwfghVEp5iuy5xJbJ2BcWBAgDmV/Eb3ZR7ZgB50/2/QEt9yWRZsczlQAAAABJRU5ErkJggg==" /></svg>',
    // prevArrow: '<div class="arrowLeft"></div>',
    // nextArrow: '<div class="arrowRight"></div>'
});
$('.header .menu').click(function() {
    $('.mob-menu').addClass('active');
});
$('.mob-menu_close').click(function() {
    $('.mob-menu').removeClass('active');
});
$('.open-modal').click(function() {
    $('.modal').addClass('active');
});
$('.modal-box .close').click(function() {
    $('.modal').removeClass('active');
});
function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 800);
    return false;
};


$('[data-option]').click(function(){
    $('.options').val($(this).data('option'));
});

$('.header-list__item a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href').slice(1),
        top = $('.' + id).offset().top;
    $('html, body').animate({ scrollTop: top }, 800);
    setTimeout(function () {
        window.location = '#' + id;
    }, 700);
});

window.onscroll = function () {
if ($('.spincrement').hasClass('animated')) {
   
$('#num1').animate({ num: 27 - 3 }, {
    duration: 2000,
    step: function (num){
        this.innerHTML = (num + 3).toFixed(0)
    }
});
$('#num2').animate({ num: 440 - 3 }, {
    duration: 2000,
    step: function (num){
        this.innerHTML = (num + 3).toFixed(0)
    }
});
$('#num3').animate({ num: 270 - 3 }, {
    duration: 2000,
    step: function (num){
        this.innerHTML = (num + 3).toFixed(0)
    }
});
$('#num4').animate({ num: 1087 - 3 }, {
    duration: 2000,
    step: function (num){
        this.innerHTML = (num + 3).toFixed(0)
    }
});

    }
}
$('.calenadar::after').on('click', function(){
    $('.calenadar').trigger('click');
});

$(document).ready(function(){
    $('.main').slick({
        dots: true
    });
  });