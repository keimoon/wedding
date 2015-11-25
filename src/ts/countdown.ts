/// <reference path="jquery.d.ts" />
/// <reference path="module.ts" />

module Countdown {
	export class App implements Module {

		private $day = $('#fifth-page .day');
		private $hour = $('#fifth-page .hour');
		private $minute = $('#fifth-page .minute');
		private $second = $('#fifth-page .second');
		private deadline: number = 1450693800000;

		init() {
			setInterval(() => {
				var now = Date.now();
				if (this.deadline < now) {
					return;
				}
				var totalSecond = Math.floor((this.deadline - now) / 1000);
				var day = Math.floor(totalSecond / 86400);
				totalSecond = totalSecond - 86400 * day;
				var hour = Math.floor(totalSecond / 3600);
				totalSecond = totalSecond - 3600 * hour;
				var minute = Math.floor(totalSecond / 60);
				var second = Math.floor(totalSecond - 60 * minute);
				this.$day.html(day.toString());
				this.$hour.html(hour.toString());
				this.$minute.html(minute.toString());
				this.$second.html(second.toString());
			}, 1000)
		}
	}
}