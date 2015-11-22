var currentLocation = "hn";
function initFullPage() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        controlArrows: false,
        onLeave: function (index, nextIndex, direction) {
            if (index === 2) {
                $('#second-page .img').addClass('down');
                $('#second-page .heart').addClass('down');
            } else if (index === 3) {
                $('.info').addClass('down');
            } else if (index === 4) {
                $('#gallery').addClass('down');
            } else if (index === 5) {
                $('#fifth-page').addClass('down');
            }
            if (nextIndex === 1) {
                $('#fp-nav').removeClass('dark');
            } else if (nextIndex === 2) {
                $('#fp-nav').addClass('dark');
                $('#second-page .img').removeClass('down');
                $('#second-page .heart').removeClass('down');
            } else if (nextIndex === 3) {
                $('.info').removeClass('down');
                if (currentLocation === "hn") {
                    $('#fp-nav').removeClass('dark');
                } else {
                    $('#fp-nav').addClass('dark');
                }
            } else if (nextIndex === 4) {
                $('#fp-nav').removeClass('dark');
                $('#gallery').removeClass('down');
                $('#gallery .holder').css('transform', 'none');
            } else if (nextIndex === 5) {
                $('#fifth-page').removeClass('down');
            }
        }
    });
    $('.next-slide .change-slide').click(function (e) {
        $('#fp-nav').addClass('dark');
        e.preventDefault();
        $.fn.fullpage.moveSlideRight();
        currentLocation = "qn";
    });
    $('.prev-slide .change-slide').click(function (e) {
        $('#fp-nav').removeClass('dark');
        e.preventDefault();
        $.fn.fullpage.moveSlideLeft();
        currentLocation = "hn";
    });
    $('#gallery .holder').each(function (i, e) {
        var deg = (Math.random() * 2 - 1) * 10;
        var transX = (Math.random() * 2 - 1) * 50;
        var transY = (Math.random() * 2 - 1) * 50;
        $(e).css("transform", "rotate(" + deg + "deg) translateX(" + transX + "px) translateY(" + transY + "px)");
    });
}

function initMap() {
    var map_color = "#ad9fb3";
    var r = [{
            stylers: [{
                    hue: map_color
                }, {
                    saturation: -75
                }, {
                    lightness: 5
                }]
        }, {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{
                    saturation: 20
                }, {
                    lightness: -70
                }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                    saturation: -50
                }, {
                    lightness: 40
                }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                    hue: map_color
                }, {
                    saturation: -100
                }, {
                    lightness: 0
                }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                    hue: map_color
                }, {
                    saturation: 5
                }, {
                    lightness: 5
                }]
        }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                    saturation: 10
                }, {
                    lightness: 0
                }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                    saturation: 0
                }, {
                    lightness: 20
                }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                    hue: map_color
                }, {
                    saturation: 30
                }, {
                    lightness: -30
                }]
        }];
    var style = new google.maps.StyledMapType(r, {
        name: "Keimoon"
    });
    var hanoiLocation = {lat: 21.037995, lng: 105.794289};
    var hanoiMap = new google.maps.Map(document.getElementById('map-hanoi'), {
        center: hanoiLocation,
        zoom: 18,
        scrollwheel: 0,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
    });
    hanoiMap.mapTypes.set("map_style", style);
    hanoiMap.setMapTypeId('map_style');
    var hanoiMarker = new google.maps.Marker({
        position: hanoiLocation,
        map: hanoiMap,
        title: 'Trong Dong Palace'
    });

    var quangninhLocation = {lat: 21.048408, lng: 106.596732};
    var quangninhMap = new google.maps.Map(document.getElementById('map-quangninh'), {
        center: quangninhLocation,
        zoom: 16,
        scrollwheel: 0
    });
    quangninhMap.mapTypes.set("map_style", style);
    quangninhMap.setMapTypeId('map_style');
    var quangninhMark = new google.maps.Marker({
        position: quangninhLocation,
        map: quangninhMap,
        title: 'Tan Viet Bac Event'
    });
}

$(function () {
    initFullPage();
    setInterval(function () {
        var deadline = 1450693800000;
        var now = Date.now();
        if (deadline < now) {
            return;
        }
        var totalSecond = Math.floor((deadline - now) / 1000);
        var day = Math.floor(totalSecond / 86400);
        totalSecond = totalSecond - 86400 * day;
        var hour = Math.floor(totalSecond / 3600);
        totalSecond = totalSecond - 3600 * hour;
        var minute = Math.floor(totalSecond / 60);
        var second = Math.floor(totalSecond - 60 * minute);
        $('#fifth-page .day').html(day);
        $('#fifth-page .hour').html(hour);
        $('#fifth-page .minute').html(minute);
        $('#fifth-page .second').html(second);
    }, 1000);
});