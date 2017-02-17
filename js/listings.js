var listings = [
    {
        address: "529 Country Place Road",
        filters: "type-home price-100k-250k marsh-front-no",
        type: "Single Family Home",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/529-country-place-road.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "742 Hibbens Grant Boulevard",
        filters: "type-home price-100k-250k marsh-front-no",
        type: "Single Family Home",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/742-hibbens-grant-blvd.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "521 Country Place Road",
        filters: "type-home price-100k-250k marsh-front-no",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/521-country-place-road.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "881 Tupelo Bay Drive ",
        filters: "type-home price-100k-250k marsh-front-no",
        type: "Single Family Home",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/881-tupelo-bay-drive.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "716 Stucco Lane",
        filters: "type-home price-100k-250k marsh-front-no",
        type: "Single Family Home",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/716-stucco-lane.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "341 Bridgetown Pass",
        filters: "type-homesite price-100k-250k marsh-front-no",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "353 Bridgetown Pass",
        filters: "type-homesite price-100k-250k marsh-front-no",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "363 Bridgetown Pass",
        filters: "type-homesite price-100k-250k marsh-front-no",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "355 Bridgetown Pass",
        filters: "type-homesite price-100k-250k marsh-front-no",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "359 Bridgetown Pass",
        filters: "type-homesite price-100k-250k marsh-front-no",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "372 Bridgetown Pass",
        filters: "type-homesite price-100k-250k marsh-front-no",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
        ]
    },
    {
        address: "376 Bridgetown Pass",
        filters: "type-homesite price-100k-250k marsh-front-no",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/742-hibbens-grant-blvd.jpg",
            "images/listings/716-stucco-lane.jpg",
            "images/listings/521-country-place-road.jpg"
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
                        '<p class="type"><strong class="title">Type:</strong>#{type}</p>' +
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
                                '<p class="address">#{address}</p>' +
                                '<p class="price"><strong class="title">Price:</strong>#{price}</p>' +
                                '<p class="type"><strong class="title">Type:</strong>#{type}</p>' +
                                '<p class="bedrooms"><strong class="title">Bedrooms:</strong>#{bedrooms}</p>' +
                                '<p class="bathrooms"><strong class="title">Bathrooms:</strong>#{bathrooms}</p>' +
                                '<p class="sqft"><strong class="title">Sqft:</strong>#{sqft}</p>' +
                                '<p class="contact">For more information <a href="mailto:info@hibbenatbellehall.com?subject=Information%20Request%20for%20'+swapSpaces(listing.address)+'">click here</a> to email an agent today.</p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row no-gutters">' +
                            '<div class="col-sm-6 picture" style="background-image: url(#{images[1]})">' +
                            '</div>' +
                            '<div class="col-sm-6 picture" style="background-image: url(#{images[2]})">' +
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