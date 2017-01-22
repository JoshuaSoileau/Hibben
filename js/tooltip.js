var tips =
    {
        "info.marsh-park": {
            title: "Marsh Park",
            image: "images/tooltip/marsh-park.png",
            description: "A favorite place for Hibben residents to watch wildlife - to see herons fishing and songbirds darting about in the marsh grasses."
        },
        "info.paw-prints": {
            title: "Paw Prints",
            image: "images/tooltip/paw-prints.png",
            description: "With all of the trees and trails, porches and play areas, Hibben is a great place to walk the dog. There's even a dog play area at Hibben Park."
        },
        "info.beer-park": {
            title: "Beer Party",
            image: "images/tooltip/beer-party.png",
            description: "Word is, a limited edition, neighborhood-labeled beer is in the works... maybe in time for the next block party."
        },
        "info.hibben-park": {
            title: "Hibben Park",
            image: "images/tooltip/hibben-park.png",
            description: "In the shade of grand oaks, and inside a picket fence, Hibben park has plenty of room for picnics, a large playground, and a fenced run for dog play."
        },
        "info.hibben-pool": {
            title: "Hibben Pool",
            image: "images/tooltip/hibben-pool.png",
            description: "Requested by the residents, Hibben's very own zero grade entry pool and clubhouse are planned for the future (conceptual drawing)"
        },
        "info.walking-trail-bottom": {
            title: "Walking Trail",
            image: "images/tooltip/walking-trail-bottom.png",
            description: "A marshfront trail of gravel provides good footing for Hibben runners."
        },
        "info.colonial-lake": {
            title: "Colonial Lake",
            image: "images/tooltip/colonial-lake.png",
            description: "With sidewalks and landscaping wrapped around it, this lake will have an urban feel. Houses will be built on all sides, with porches facing the water."
        },
        "info.dock-bottom": {
            title: "Dock",
            image: "images/tooltip/dock-bottom.png",
            description: "Day-use, deepwater access is available on Rat Hall Creek. An oyster roast shed is planned on this bluff."
        },
        "info.dock-top": {
            title: "Dock",
            image: "images/tooltip/dock-top.png",
            description: "One of two Hibben community docks for boating, fishing, and crabbing on Rat Hall Creek. That's the Wando River in the distance."
        },
        "info.cookies-cooling": {
            title: "Cookies Cooling",
            image: "images/tooltip/cookies-cooling.png",
            description: "Charlie tries another one of the cookies she helped her mom and sisters to make at a neighborhood \"Cookies and Cocoa\" party."
        },
        "info.walking-trail-middle": {
            title: "Walking Trail",
            image: "images/tooltip/walking-trail-middle.png",
            description: "With woodland and water views, there are over 2 miles of trails in the neighborhood."
        },
        "info.juan-pablo": {
            title: "Juan Pablo",
            image: "images/tooltip/juan-pablo.png",
            description: "Juan Pablo - who also plays in a Spanish music band, by the way - built many of the frontyard and backyard fences in Hibben."
        },
        "info.walking-trail-top-left": {
            title: "Walking Trail",
            image: "images/tooltip/walking-trail-top-left.png",
            description: "Hibben residents have access to the water through the marshfront trail system and the many community docks."
        }
    };


///
// Do not edit below this
///
jQuery(document).ready(function($) {

    function Tooltip(options) {
        this.init(options);
    }

    Tooltip.prototype = {

        init: function (options) {
            this.tooltip = jQuery('.map-tooltip');
            this.template = $.htmlTemplate('' +
                '<img class="tooltip-image" src="#{image}" />' +
                '<p class="title">#{title}</p>' +
                '<p class="description">#{description}</p>'
            );

            this.initObservers();
        },

        initObservers: function() {
            var self = this;
            $.each(tips, function(key, value) {
                console.log(key);
                $(document).on('mouseenter', '[id*="'+key+'"]', self.showTooltip.bind(self));
                $(document).on('mouseout', '[id*="'+key+'"]', self.hide.bind(self));
            });
        },

        setContent: function(content) {
            this.tooltip.html(content);
        },

        showTooltip: function(event) {
            var target = $(event.target).is('g') ? $(event.target) : $(event.target).closest('g'),
                id = target.attr('id'),
                markup = this.getMarkup(id),
                iconPos = this.getIconPosition(target);
            this.setContent(markup);
            this.setPosition(iconPos);
            this.show();

        },

        getIconPosition: function(target) {
            return {
                left: target.offset().left,
                top: target.offset().top
            }
        },

        setPosition: function(iconPos) {
            console.log('Icon:')
            console.log(iconPos);
            var top = (iconPos.top - this.tooltip.outerHeight() - 20) - $('.features__content_wrapper--01').offset().top;
            var left = (iconPos.left - (this.tooltip.outerWidth()/2)) - $('.features__content_wrapper--01').offset().left + 13;
            if(left < 0) left = 0;
            console.log('Actually Applied:')
            console.log({top:top, left:left});
            this.tooltip.css({
                top: top,
                left: left,
                padding: "10px",
                paddingBottom: 0
            })
        },

        getMarkup: function(id) {
            return this.template.evaluate( tips[id] );
        },

        show: function() {
            this.tooltip.fadeIn("fast");
        },

        hide: function() {
            this.tooltip.fadeOut("fast");
        }

    };

    tooltip = new Tooltip();
});