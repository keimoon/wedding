/// <reference path="google.maps.d.ts" />
/// <reference path="module.ts" />

module Map {

	class GoogleMap {
		private map: google.maps.Map;
		private latlng: google.maps.LatLng;
		private zoom: number;
		private element: string;
		private options: google.maps.MapOptions = {};
		private hue: string;
		private marker: string;

		constructor(lat: number, lng: number, zoom: number, element: string) {
			this.latlng = new google.maps.LatLng(lat, lng);
			this.zoom = zoom;
			this.element = element;
		}

		public setOptions(options: google.maps.MapOptions) {
			this.options = options;
		}

		public setHue(hue: string) {
			this.hue = hue;
		}

		public setMarker(title: string) {
			this.marker = title;
		}

		public display() {
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
		}
	}

	export class App implements Module {

		init(): void {
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
		}

	}
}