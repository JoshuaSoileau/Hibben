var videos = [
    {
        thumbnail: "images/gallery/thumbnails/356/8.jpg",
        mp4: "videos/1.mp4"
    },
    {
        thumbnail: "images/gallery/thumbnails/356/9.jpg",
        mp4: "videos/2.mp4"
    }
];


///
// Do not edit below this
///
jQuery(document).ready(function($) {
    var Ul = $('.gallery.video .works__row');
    videos.forEach(function(video, index) {
        templ = $.htmlTemplate('' +
            '<a href="#video-'+index+'" class="video-link works__item works__item--01" >' +
                '<div class="works__item_img works__item_img--01">' +
                    '<img src="#{thumbnail}" alt="">' +
                '</div>' +
            '</a>' +
            '<div id="video-'+index+'" class="modal-container">' +
                '<div class="list-modal video-content">' +
                    '<video autoplay="true" loop="false" controls="true" muted="false" preload="auto">' +
                        '<source src="#{mp4}" type="video/mp4">' +
                    '</video>' +
                '</div>' +
            '</div>'
        );

        Ul.append(templ.evaluate(video));
    });

    $(document).on('click touchstart', '.gallery.video a.video-link', function(event, ele) {
        var target = $(event.target).is('.video-link') ? $(event.target) : $(event.target).closest('.video-link');
        modal = target.attr('href');
        event.preventDefault();
        $(modal).addClass('visible');
    });

    $(document).on('click touchstart', '.gallery.video a.video-link ~ .modal-container', function(event, ele) {
        event.preventDefault();
        if(!$(event.target).is('.modal-container')) return;
        $(event.target).removeClass('visible');
    });
});