var listings = [
    {
        address: "123 Any Street",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/default.jpg",
            "images/listings/default.jpg",
            "images/listings/default.jpg"
        ]
    },
    {
        address: "123 Any Street",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/default.jpg",
            "images/listings/default.jpg",
            "images/listings/default.jpg"
        ]
    },
    {
        address: "123 Any Street",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/default.jpg",
            "images/listings/default.jpg",
            "images/listings/default.jpg"
        ]
    },
    {
        address: "123 Any Street",
        type: "Homesite",
        bedrooms: 4,
        bathrooms: 2,
        price: "$191,500",
        sqft: "3,200 sqft",
        defaultImage: "images/listings/default.jpg",
        images: [
            "images/listings/default.jpg",
            "images/listings/default.jpg",
            "images/listings/default.jpg"
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
            '<li class="list-item col-sm-3 col-xs-6" style="background-image: url(#{defaultImage});">' +
                '<a href="#">' + 
                    '<span class="address">#{address}</span>' +
                '</a>' +
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
                                '<p class="sqft"><strong class="title">Sqft:</strong>#{sqft}</p>' +
                                '<p class="bathrooms"><strong class="title">Bathrooms:</strong>#{bathrooms}</p>' +
                                '<p class="contact">For more information <a href="mailto:info@hibbenatbellehall.com?subject=Information%20Request%20for%20'+swapSpaces(listing.address)+'">click here</a> to email an agent today.</p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="row no-gutters">' +
                            '<div class="col-sm-6">' +
                                '<img src="#{images[1]}" alt="">' +
                            '</div>' +
                            '<div class="col-sm-6">' +
                                '<img src="#{images[2]}" alt="">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</li>'
        );

        Ul.append(templ.evaluate(listing));
    });

    $(document).on('click touchstart', 'li.list-item>a', function(event, ele) {
        var target = $(event.target).closest('li');
        event.preventDefault();
        target.find('.modal-container').addClass('visible');
    });

    $(document).on('click touchstart', 'li.list-item .modal-container', function(event, ele) {
        event.preventDefault();
        if(!$(event.target).is('.modal-container')) return;
        $(event.target).removeClass('visible');
    });
});