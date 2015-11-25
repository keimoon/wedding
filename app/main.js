/// <reference path="jquery.d.ts" />
/// <reference path="module.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Slide;
(function (Slide) {
    var NavType;
    (function (NavType) {
        NavType[NavType["LIGHT"] = 0] = "LIGHT";
        NavType[NavType["DARK"] = 1] = "DARK";
    })(NavType || (NavType = {}));
    ;
    var BasicPage = (function () {
        function BasicPage() {
        }
        BasicPage.prototype.init = function () { };
        BasicPage.prototype.onEnter = function (from) {
        };
        BasicPage.prototype.onLeave = function (to) {
        };
        BasicPage.prototype.changeNavType = function () {
            if (this.navType == NavType.LIGHT) {
                $('#fp-nav').removeClass('dark');
            }
            else {
                $('#fp-nav').addClass('dark');
            }
        };
        return BasicPage;
    })();
    var FirstPage = (function (_super) {
        __extends(FirstPage, _super);
        function FirstPage() {
            _super.apply(this, arguments);
            this.navType = NavType.LIGHT;
        }
        FirstPage.prototype.onEnter = function (from) {
            this.changeNavType();
        };
        FirstPage.prototype.onLeave = function (to) {
        };
        return FirstPage;
    })(BasicPage);
    var SecondPage = (function (_super) {
        __extends(SecondPage, _super);
        function SecondPage() {
            _super.apply(this, arguments);
            this.navType = NavType.DARK;
        }
        SecondPage.prototype.onEnter = function (from) {
            this.changeNavType();
        };
        SecondPage.prototype.onLeave = function (to) {
        };
        return SecondPage;
    })(BasicPage);
    var ThirdPage = (function (_super) {
        __extends(ThirdPage, _super);
        function ThirdPage() {
            _super.apply(this, arguments);
            this.navType = NavType.LIGHT;
        }
        ThirdPage.prototype.init = function () {
            var _this = this;
            $('.change-slide-next').click(function (e) {
                e.preventDefault();
                _this.navType = NavType.DARK;
                _this.changeNavType();
                $.fn.fullpage.moveSlideRight();
            });
            $('.change-slide-prev').click(function (e) {
                e.preventDefault();
                _this.navType = NavType.LIGHT;
                _this.changeNavType();
                $.fn.fullpage.moveSlideLeft();
            });
        };
        ThirdPage.prototype.onEnter = function (from) {
            this.changeNavType();
        };
        ThirdPage.prototype.onLeave = function (to) {
        };
        return ThirdPage;
    })(BasicPage);
    var FourthPage = (function (_super) {
        __extends(FourthPage, _super);
        function FourthPage() {
            _super.apply(this, arguments);
            this.navType = NavType.LIGHT;
        }
        FourthPage.prototype.onEnter = function (from) {
            this.changeNavType();
        };
        FourthPage.prototype.onLeave = function (to) {
        };
        return FourthPage;
    })(BasicPage);
    var FifthPage = (function (_super) {
        __extends(FifthPage, _super);
        function FifthPage() {
            _super.apply(this, arguments);
            this.navType = NavType.LIGHT;
        }
        FifthPage.prototype.onEnter = function (from) {
            this.changeNavType();
        };
        FifthPage.prototype.onLeave = function (to) {
        };
        return FifthPage;
    })(BasicPage);
    var App = (function () {
        function App() {
            this.pages = {
                1: new FirstPage(),
                2: new SecondPage(),
                3: new ThirdPage(),
                4: new FourthPage(),
                5: new FifthPage()
            };
        }
        App.prototype.init = function () {
            var _this = this;
            $('#fullpage').fullpage({
                navigation: true,
                navigationPosition: 'right',
                controlArrows: false,
                onLeave: function (index, nextIndex, direction) {
                    if (_this.pages[index] !== undefined) {
                        _this.pages[index].onLeave(nextIndex);
                    }
                    if (_this.pages[nextIndex] != undefined) {
                        _this.pages[nextIndex].onEnter(index);
                    }
                }
            });
            for (var index in this.pages) {
                this.pages[index].init();
            }
        };
        return App;
    })();
    Slide.App = App;
})(Slide || (Slide = {}));
/// <reference path="google.maps.d.ts" />
/// <reference path="module.ts" />
var Map;
(function (Map) {
    var GoogleMap = (function () {
        function GoogleMap(lat, lng, zoom, element) {
            this.options = {};
            this.latlng = new google.maps.LatLng(lat, lng);
            this.zoom = zoom;
            this.element = element;
        }
        GoogleMap.prototype.setOptions = function (options) {
            this.options = options;
        };
        GoogleMap.prototype.setHue = function (hue) {
            this.hue = hue;
        };
        GoogleMap.prototype.setMarker = function (title) {
            this.marker = title;
        };
        GoogleMap.prototype.display = function () {
            this.options.center = this.latlng;
            this.options.zoom = this.zoom;
            var map = new google.maps.Map(document.getElementById(this.element), this.options);
            if (this.hue !== undefined) {
                var r = [{
                        stylers: [{
                                hue: this.hue
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
                                hue: this.hue
                            }, {
                                saturation: -100
                            }, {
                                lightness: 0
                            }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{
                                hue: this.hue
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
                                hue: this.hue
                            }, {
                                saturation: 30
                            }, {
                                lightness: -30
                            }]
                    }];
                var style = new google.maps.StyledMapType(r, {
                    name: "custom"
                });
                map.mapTypes.set("map_style", style);
                map.setMapTypeId('map_style');
            }
            if (this.marker !== undefined) {
                var marker = new google.maps.Marker({
                    position: this.latlng,
                    map: map,
                    title: this.marker
                });
            }
        };
        return GoogleMap;
    })();
    var App = (function () {
        function App() {
        }
        App.prototype.init = function () {
            var hue = "#ad9fb3";
            var hanoiMap = new GoogleMap(21.037995, 105.794289, 18, "map-hanoi");
            hanoiMap.setOptions({
                scrollwheel: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                }
            });
            hanoiMap.setHue(hue);
            hanoiMap.setMarker("Trong Dong Palace");
            hanoiMap.display();
            var quanginhMap = new GoogleMap(21.048408, 106.596732, 16, "map-quangninh");
            quanginhMap.setOptions({
                scrollwheel: false
            });
            quanginhMap.setHue(hue);
            quanginhMap.setMarker("Tan Viet Bac Event");
            quanginhMap.display();
        };
        return App;
    })();
    Map.App = App;
})(Map || (Map = {}));
/// <reference path="jquery.d.ts" />
/// <reference path="module.ts" />
var Countdown;
(function (Countdown) {
    var App = (function () {
        function App() {
            this.$day = $('#fifth-page .day');
            this.$hour = $('#fifth-page .hour');
            this.$minute = $('#fifth-page .minute');
            this.$second = $('#fifth-page .second');
            this.deadline = 1450693800000;
        }
        App.prototype.init = function () {
            var _this = this;
            setInterval(function () {
                var now = Date.now();
                if (_this.deadline < now) {
                    return;
                }
                var totalSecond = Math.floor((_this.deadline - now) / 1000);
                var day = Math.floor(totalSecond / 86400);
                totalSecond = totalSecond - 86400 * day;
                var hour = Math.floor(totalSecond / 3600);
                totalSecond = totalSecond - 3600 * hour;
                var minute = Math.floor(totalSecond / 60);
                var second = Math.floor(totalSecond - 60 * minute);
                _this.$day.html(day.toString());
                _this.$hour.html(hour.toString());
                _this.$minute.html(minute.toString());
                _this.$second.html(second.toString());
            }, 1000);
        };
        return App;
    })();
    Countdown.App = App;
})(Countdown || (Countdown = {}));
/// <reference path="jquery.d.ts" />
/// <reference path="module.ts" />
/// <reference path="pages.ts" />
/// <reference path="map.ts" />
/// <reference path="countdown.ts" />
var Application = (function () {
    function Application() {
        this.modules = [];
    }
    Application.prototype.registerModule = function (module) {
        this.modules.push(module);
    };
    Application.prototype.run = function () {
        for (var index in this.modules) {
            this.modules[index].init();
        }
    };
    return Application;
})();
var app = new Application();
app.registerModule(new Slide.App());
app.registerModule(new Map.App());
app.registerModule(new Countdown.App());
$(function () {
    app.run();
});
