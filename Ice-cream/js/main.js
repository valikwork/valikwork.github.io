$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

var cartButton = document.getElementById('cart');
var cartHidden = document.getElementById('cart_hidden');
var loginButton = document.getElementById('login');
var loginHidden = document.getElementById('login_hidden');
var searchButton = document.getElementById('search_button');
var searchHidden = document.getElementById('search_hidden');

cartButton.onclick = function () {
    if (cartHidden.style.display==='block') {
        cartHidden.style.display = 'none'
    } else {
        cartHidden.style.display = "block";
    }
};
loginButton.onclick = function () {
    if (loginHidden.style.display==='block') {
        loginHidden.style.display = 'none'
    } else {
        loginHidden.style.display = "block";
    }
};
searchButton.onclick = function () {
    if (searchHidden.style.display==='block') {
        searchHidden.style.display = 'none'
    } else {
        searchHidden.style.display = "block";
    }
};

var feedbackCardSubmit = document.getElementById('feedback_card_submit');
var modalBlock = document.getElementById('modal_block');
var closeButton = document.getElementById('close_modal');

    feedbackCardSubmit.addEventListener('click', function () {
        modalBlock.classList.remove('modal_hidden');

    });
    closeButton.addEventListener('click', function () {
    modalBlock.classList.add('modal_hidden');
});