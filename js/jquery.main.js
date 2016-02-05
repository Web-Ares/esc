$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });

    $('.tabs').each(function() {
        Tabs($(this));
    });

    var myMap;

    function init () {
        myMap = new ymaps.Map('map', {
            center: $('.map__item').eq(0).attr('data-coord').split(', '),
            zoom: 9
        });
        myMap.controls
            .add('zoomControl', { left: 5, bottom: 5 })
            .add('typeSelector')
            .add('mapTools', { left: 35, bottom: 5 });



        myMap.behaviors.disable('drag');

    }

    //ymaps.ready(init);

    $('.map__item span').on({
        'click':function(){
            var coord = $(this).parent().attr('data-coord').split(', ');

            myMap.setCenter(coord);

            return false;
        }
    });

} );

var Tabs = function(obj) {

    //private properties
    var _self = this,
        _tabs = obj.find('.tabs__links > a'),
        _wraps = obj.find('.tabs__content > div'),
        _i = 0,
        _obj = obj;

    //private methods
    var _addEvents = function() {
            showPages = function(i) {
                _wraps.hide().removeClass("active");
                _wraps.eq(i).show(100).addClass('active');
                _tabs.removeClass("active");
                _tabs.eq(i).addClass("active");
            };

            showPages(0);

            _tabs.each(function(index, element) {
                $(element).attr("data-page", _i);
                _i++;
            });

            _tabs.click(function() {
                showPages(parseInt($(this).attr("data-page")));
            });
        },
        _init = function() {
            _addEvents();
        };

    //public properties

    //public methods

    _init();
};

var Slider = function (obj) {

    //private properties
    var _self = this,
        _next = obj.parent().find($('.swiper-button-next')),
        _prev = obj.parent().find($('.swiper-button-prev')),
        _paginator = obj.find($('.swiper-pagination')),
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('feedback__wrap')) {
        var _slider1 = new Swiper(_obj, {
            nextButton: '.feedback__prev',
            prevButton: '.feedback__next',
            loop: true,
            paginationClickable: true

        });

    }
    if (_obj.hasClass('promo__slider')) {
        var _swiper = new Swiper(_obj, {
            slidesPerView: 1,
            loop: true,
            nextButton: _next,
            prevButton: _prev,
            pagination: _paginator,
            paginationClickable: true
        });
    }
    if (_obj.hasClass('partner__slider')) {
        var _swiper = new Swiper(_obj, {
            slidesPerView: 5,
            loop: true,
            nextButton: _next,
            prevButton: _prev,
        });
    }

    //public properties

    //public methods

    _init();
};
