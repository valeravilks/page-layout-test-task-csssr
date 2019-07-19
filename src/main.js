import './scss/style.scss';
import $ from 'jquery';



window.onload = function(){

    $('textarea').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });



    let other = $('.future-plans__other');
    !$('.js-other-input').prop('checked') ? other.slideUp() : other.slideDown();

    $('input[name="radio"]').change(function(){
        let other = $('.future-plans__other');
        !$('.js-other-input').prop('checked') ? other.slideUp() : other.slideDown();
    });


};