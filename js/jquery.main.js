$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });

    $('.map').each(function() {
        Map($(this));
    });

    $('.menu-list ').each(function() {
        Tabs($(this));
    });

    $('.articles').each(function() {
        ArticlesTabs($(this));
    });

    $('.catalog ').each(function() {
        TabsCatalog($(this));
    });

} );

var Tabs = function(obj) {

    //private properties
    var _obj = obj,
        _tabs = _obj.find('.tabs__links > a'),
        _wraps = _obj.find('.tabs__content > div'),
        i = 0;

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
                $(element).attr("data-page", i);
                i++;
            });

            _tabs.click(function() {
                showPages(parseInt($(this).attr("data-page")));
                return false;
            });
        },
        _init = function() {
            _addEvents();
        };

    //public properties

    //public methods

    _init();
};

var ArticlesTabs = function(obj) {

    //private properties
    var _obj = obj,
        _tab = _obj.find('.articles__links > a'),
        _wrap = _obj.find('.articles__content > div'),
        _i = 0;

    //private methods
    var _addEvents = function() {
            showTab = function(i) {
                _wrap.hide().removeClass("active");
                _wrap.eq(i).show(100).addClass('active');
                _tab.removeClass("active");
                _tab.eq(i).addClass("active");
            };

            showTab(_i);

            _tab.each(function(index, element) {
                $(element).attr("data-page", _i);
                _i++;
            });

            _tab.click(function() {
                showTab(parseInt($(this).attr("data-page")));
                return false;
            });
        },
        _init = function() {
            _addEvents();
        };

    //public properties

    //public methods

    _init();
};

var TabsCatalog = function(obj) {
    //private properties
    var _obj = obj,
        tabs = _obj.find('div a'),
        wraps = _obj.find('.catalog__content > div'),
        i = 0;

    //private methods
    var _addEvents = function() {
            catalogPages = function(i) {
                wraps.hide().removeClass("active");
                wraps.eq(i).show(100).addClass('active');
                tabs.removeClass("active");
                tabs.eq(i).addClass("active");
            };

            catalogPages(0);

            tabs.each(function(index, element) {
                $(element).attr("data-page", i);
                i++;
            });

            tabs.click(function() {
                catalogPages(parseInt($(this).attr("data-page")));
                return false;
            });
        },
        _init = function() {
            _addEvents();
        };

    //public properties

    //public methods

    _init();
};

var Map = function(obj){

    var myMap;

    function init () {
        myMap = new ymaps.Map('map', {
            center: $('.map__item').eq(0).attr('data-coord').split(', '),
            zoom: 8
        });
        myMap.controls
            .add('zoomControl', { left: 5, bottom: 5 })
            .add('typeSelector')
            .add('mapTools', { left: 35, bottom: 5 });



        myMap.behaviors.disable('drag');

        $.each($('.map__item'), function(i){
            var curElem = $(this);

            if (curElem.attr('data-coord')) {
                var coord = curElem.attr('data-coord').split(', ');

                myMap.geoObjects.add(new ymaps.Placemark(
                    [coord[0], coord[1]],
                    {   hintContent: "��������",
                        balloonContentBody: curElem.find('a').text() }, {
                        iconLayout: 'default#image',
                        iconImageOffset: [-15, -25]
                    }

                ));
            }
        });
    }

    ymaps.ready(init);

    $('.map__item span').on({
        'click':function(){
            var coord = $(this).parent().attr('data-coord').split(', ');

            myMap.setCenter(coord);

            return false;
        }
    });

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
        var _swiper2 = new Swiper(_obj, {
            slidesPerView: 1,
            loop: true,
            nextButton: _next,
            prevButton: _prev,
            pagination: _paginator,
            paginationClickable: true
        });
    }
    if (_obj.hasClass('gratitude__swiper')) {
        var _swiper3 = new Swiper(_obj, {
            slidesPerView: 1,
            loop: true,
            nextButton: _next,
            prevButton: _prev
        });
    }
    if (_obj.hasClass('partner__slider')) {
        var _partnerswiper = new Swiper(_obj, {
            slidesPerView: 5,
            spaceBetween: 13,
            loop: true,
            nextButton: _next,
            prevButton: _prev
        });
    }

    //public properties

    //public methods

    _init();
};
