var listings = [
    {
        address: "400 Bridgetown Pass",
        filters: "type-homesite price-400k-plus marsh-front-yes lot-size-02-03 status-available",
        status: "available",
        type: "Homesite",
        price: "$419,000",
        sqft: "9,641 sqft",
        "lot-size": "0.22 acre",
        "lot-number": 28,
        "marsh-front": "yes",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "396 Bridgetown Pass",
        "lot-number": 29,
        price: "$375,000",
        sqft: "8,429 sqft",
        "lot-size": "0.19 acre",
        "marsh-front": "yes",
        status: "available",
        filters: "type-homesite price-300k-400k marsh-front-yes lot-size-01-02 status-available",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "392 Bridgetown Pass",
        "lot-number": 30,
        price: "$269,000",
        sqft: "5,325 sqft",
        "lot-size": "0.12 acre",
        "marsh-front": "yes",
        status: "available",
        filters: "type-homesite price-200k-300k marsh-front-yes lot-size-01-02 status-available",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "341 Bridgetown Pass",
        "lot-number": 47,
        price: "$182,000",
        sqft: "8,284 sqft",
        "lot-size": "0.12 acre",
        "marsh-front": "no",
        status: "sold",
        filters: "type-homesite price-0-200k marsh-front-no lot-size-01-02 status-sold",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "353 Bridgetown Pass",
        "lot-number": 76,
        price: "$225,000",
        sqft: "6,300 sqft",
        "lot-size": "0.15 acre",
        "marsh-front": "no",
        status: "sold",
        filters: "type-homesite price-200k-300k marsh-front-no lot-size-01-02 status-sold",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "925 Tupelo Bay Drive",
        "lot-number": 11,
        price: "$265,000",
        sqft: "11,220 sqft",
        "lot-size": "0.26 acre",
        "marsh-front": "no",
        status: "available",
        filters: "type-homesite price-200k-300k marsh-front-no lot-size-02-03 status-available",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "921 Tupelo Bay Drive",
        "lot-number": 10,
        price: "$260,000",
        sqft: "12,533 sqft",
        "lot-size": "0.29 acre",
        "marsh-front": "no",
        status: "available",
        filters: "type-homesite price-200k-300k marsh-front-no lot-size-02-03 status-available",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "922 Tupelo Bay Drive",
        "lot-number": 88,
        price: "$210,000",
        sqft: "9,628 sqft",
        "lot-size": "0.22 acre",
        "marsh-front": "no",
        status: "available",
        filters: "type-homesite price-200k-300k marsh-front-no lot-size-02-03 status-available",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "383 Bridgetown Pass",
        "lot-number": 89,
        price: "$210,000",
        sqft: "7,873 sqft",
        "lot-size": "0.18 acre",
        "marsh-front": "no",
        status: "sold",
        filters: "type-homesite price-200k-300k marsh-front-no lot-size-01-02 status-sold",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "379 Bridgetown Pass",
        "lot-number": 90,
        price: "$260,000",
        sqft: "9,635 sqft",
        "lot-size": "0.22 acre",
        "marsh-front": "no",
        status: "sold",
        filters: "type-homesite price-200k-300k marsh-front-no lot-size-02-03 status-sold",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "375 Bridgetown Pass",
        "lot-number": 97,
        price: "$250,000",
        sqft: "10,204 sqft",
        "lot-size": "0.23 acre",
        "marsh-front": "no",
        status: "available",
        filters: "type-homesite price-200k-300k marsh-front-no lot-size-02-03 status-available",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    },
    {
        address: "373 Bridgetown Pass",
        "lot-number": 91,
        price: "$215,000",
        sqft: "8,280 sqft",
        "lot-size": "0.19 acre",
        "marsh-front": "no",
        status: "sold",
        filters: "type-homesite price-200k-300k marsh-front-no lot-size-01-02 status-sold",
        type: "Homesite",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/Pic2.jpg"
        ]
    }

];


///
// Do not edit below this
///
function swapSpaces(string) {
    return string.replace(' ', '%20');
}
jQuery(document).ready(function($) {
    var Ul = $('#listing-elements');
    listings.forEach(function(listing) {
        templ = $.htmlTemplate('' +
            '<li class="list-item col-sm-3 col-xs-6 #{filters}">' +
                '<div class="flip-container">' +
                    '<div class="front" style="background-image: url(#{defaultImage});">' +
                        '<a class="front" href="#">' +
                            '<span class="address">#{address}</span>' +
                        '</a>' +
                    '</div>' +
                    '<div class="back">' +
                        '<p class="title">#{address}</p>' +
                        '<p class="price"><strong class="title">Price:</strong>#{price}</p>' +
                        '<p class="click-for-more">Click here for more info</p>' +
                    '</div>' +
                '</div>' +
                '<div class="modal-container">' +
                    '<div class="list-modal">' +
                        '<div class="row no-gutters">' +
                            '<div class="col-sm-6">' +
                                '<img src="#{images[0]}" alt="">' +
                            '</div>' +
                            '<div class="col-sm-6">' +
                                '<p class="lot-num">Lot ##{lot-number}</p>' +
                                '<p class="address">#{address}</p>' +
                                '<p class="status"><strong class="title">Status:</strong>#{status}</p>' +
                                '<p class="price"><strong class="title">Price:</strong>#{price}</p>' +
                                '<p class="sqft"><strong class="title">Sqft:</strong>#{sqft}</p>' +
                                '<p class="lot-size"><strong class="title">Lot Size:</strong>#{lot-size}</p>' +
                                '<p class="marsh-front"><strong class="title">Marsh Front:</strong>#{marsh-front}</p>' +
                                '<p class="contact">For more information <a href="mailto:info@hibbenatbellehall.com?subject=Information%20Request%20for%20'+swapSpaces(listing.address)+'">click here</a> to email an agent today.</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</li>'
        );

        Ul.append(templ.evaluate(listing));
    });

    $(document).on('click touchstart', 'li.list-item .flip-container', function(event, ele) {
        var target = $(event.target).closest('li');
        event.preventDefault();
        target.find('.modal-container').addClass('visible');
    });

    $(document).on('click touchstart', 'li.list-item .modal-container', function(event, ele) {
        event.preventDefault();
        if(!$(event.target).is('.modal-container')) return;
        $(event.target).removeClass('visible');
    });

    Array.prototype.removeItem = function(v) { this.splice(this.indexOf(v) == -1 ? this.length : this.indexOf(v), 1); }

    function Filtering(options) {
        this.init(options);
    }

    Filtering.prototype = {

        init: function (options) {
            this.grid = $('#listing-elements').isotope({
                itemSelector: '.list-item',
                layoutMode: 'fitRows'
            });
            this.links = $('#listings .filters button');
            this.filters = ["show-all"];

            this.initObservers();
        },

        initObservers: function() {
            this.links.click(this.toggleAppliedStatus.bind(this));
            this.links.click(this.filterItem.bind(this));
        },

        toggleAppliedStatus: function() {
            var button = $(event.target).is('button') ? $(event.target) : $(event.target).closest('button');
            if(button.attr('data-filters') == 'show-all') {
                this.links.removeClass('button--black');
                button.addClass('button--black');
            } else {
                if(!button.hasClass('button--black')) this.links.filter('[data-filters="show-all"]').removeClass('button--black');
                button.toggleClass('button--black');
                if(!$('#listings .filters .button--black').length) {
                    $('#listings .filters button[data-filters="show-all"]').addClass('button--black');
                }
            }
        },

        filterItem: function(event) {
            var target = $(event.target).is('button') ? $(event.target) : $(event.target).closest('button'),
                newFilter = target.attr('data-filters');
            this.clearSiblingFilters(newFilter);
            if(newFilter == "show-all") {
                this.clearAllFilters();
                this.setFilterVal([newFilter]);
                console.log(this.filters);
                this.applyFilters();
                return;
            }
            this.filters.removeItem('show-all');
            if($.inArray(newFilter, this.filters) !== -1) {
                // if it's an already applied filter, need to remove it
                this.filters.removeItem(newFilter);
            } else {
                // if it's not yet applied, need to add it
                this.filters.push(newFilter)
            }
            this.setFilterVal(this.filters);
            console.log(this.filters);
            this.applyFilters();
        },
        clearSiblingFilters: function(filter) {
            var target = $('#listings .filters button[data-filters="'+filter+'"]'),
                siblings = target.closest('li').siblings().find('button'),
                self = this;
            console.log('Target: '+filter);
            console.log('Siblings:');
            siblings.each(function(index, sibling) {
                console.log('    '+$(sibling).attr('data-filters'));
                $(sibling).removeClass('button--black');
                self.filters.removeItem($(sibling).attr('data-filters'));
            });

        },
        clearAllFilters: function() {
            this.filters = "";
        },
        setFilterVal: function(newVal) {
            this.filters = newVal;
        },
        applyFilters: function() {
            if(!this.filters.length || $.inArray('show-all', this.filters) !== -1) {
                this.grid.isotope({filter: '' });
            } else {
                this.grid.isotope({ filter: '.' + this.filters.join('.') });
            }
        }

    };

    filtering = new Filtering();
});