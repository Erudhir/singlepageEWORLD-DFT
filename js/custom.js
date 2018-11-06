$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8630356147',
        limit: 6,
        resolution: 'standard_resolution',
        accessToken: '8630356147.1677ed0.fe9604d1e4594be89ef7cef0fa07e048',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});