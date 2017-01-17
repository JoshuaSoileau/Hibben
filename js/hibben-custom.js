var stickyHeader,
    stickyLinks;

jQuery(function($) {
    function StickyHeader(options) {
        this.init(options);
    }

    StickyHeader.prototype = {

        init: function (options) {
            this.header = $('.header').first();
            this.startTop = this.header.offset().top;
            this.height = this.header.outerHeight();

            this.initObservers();
        },

        initObservers: function() {
            $(window).scroll(this.toggleStickyHeader.bind(this));
        },

        toggleStickyHeader: function() {
            var currentScrollTop = $(document).scrollTop();
            if(currentScrollTop > this.startTop) {
                this.header.addClass('fixed');
            } else {
                this.header.removeClass('fixed');
            }
        }

    };

    stickyHeader = new StickyHeader();

    function StickyLinks(options) {
        this.init(options);
    }

    StickyLinks.prototype = {

        init: function (options) {
            this.header = $('.header, .js-menu');
            this.links = this.header.find('.header__menu_link, .menu__item, .menu-item');

            this.initObservers();
        },

        initObservers: function() {
            this.links.click(this.scrollToSection.bind(this));
        },

        scrollToSection: function(event) {
            var target = $(event.target).is('a') ? $(event.target) : $(event.target).closest('a'),
                section = target.attr('href'),
                newTarget = $(section);

            $('body, html').animate({
                scrollTop: newTarget.offset().top
            }, "slow");
        }

    };

    stickyLinks = new StickyLinks();


    $('.video-link').click(function () {
        var target = $(event.target).is('a') ? $(event.target) : $(event.target).closest('a'),
            src = target.attr('data-video-src'),
            modalEle = target.attr('href');
        $(modalEle).modal('show');
        $(modalEle + ' iframe').attr('src', src);
    });

    $('body').on('hidden.bs.modal', function () {
        $('#video-1 iframe').removeAttr('src');
    });
});

