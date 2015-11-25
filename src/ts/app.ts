/// <reference path="jquery.d.ts" />
/// <reference path="module.ts" />
/// <reference path="pages.ts" />
/// <reference path="map.ts" />
/// <reference path="countdown.ts" />

class Application {
	private modules: Module[] = [];

	registerModule(module: Module) {
		this.modules.push(module);
	}

	run() {
		for (var index in this.modules) {
			this.modules[index].init();
		}
	}
}

var app = new Application();
app.registerModule(new Slide.App());
app.registerModule(new Map.App());
app.registerModule(new Countdown.App());

$(function() {
	app.run();
})
