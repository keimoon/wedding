/// <reference path="jquery.d.ts" />
/// <reference path="module.ts" />

module Slide {

	interface Page {
		init();
		onEnter(from: number);
		onLeave(to: number);
	}

	interface Pages {
		[index: number]: Page;
	}

	enum NavType { LIGHT, DARK };

	class BasicPage implements Page {

		navType: NavType;

		init() { }

		onEnter(from: number) {
		}

		onLeave(to: number) {
		}

		changeNavType() {
			if (this.navType == NavType.LIGHT) {
				$('#fp-nav').removeClass('dark');
			} else {
				$('#fp-nav').addClass('dark');
			}
		}
	}

	class FirstPage extends BasicPage {

		navType = NavType.LIGHT;

		onEnter(from: number) {
			this.changeNavType();
		}

		onLeave(to: number) {
		}
	}

	class SecondPage extends BasicPage {

		navType = NavType.DARK;

		onEnter(from: number) {
			this.changeNavType();
		}

		onLeave(to: number) {
		}
	}

	class ThirdPage extends BasicPage {

		navType = NavType.LIGHT;

		init() {
			$('.change-slide-next').click((e) => {
				e.preventDefault();				
				this.navType = NavType.DARK;
				this.changeNavType();
				$.fn.fullpage.moveSlideRight();
			});
			$('.change-slide-prev').click((e) => {
				e.preventDefault();
				this.navType = NavType.LIGHT;
				this.changeNavType();
				$.fn.fullpage.moveSlideLeft();
			});
		}

		onEnter(from: number) {
			this.changeNavType();
		}

		onLeave(to: number) {
		}
	}

	class FourthPage extends BasicPage {

		navType = NavType.LIGHT;

		onEnter(from: number) {
			this.changeNavType();
		}

		onLeave(to: number) {
		}
	}

	class FifthPage extends BasicPage {

		navType = NavType.LIGHT;

		onEnter(from: number) {
			this.changeNavType();
		}

		onLeave(to: number) {
		}
	}

	export class App implements Module {

		private pages: Pages = {
			1: new FirstPage(),
			2: new SecondPage(),
			3: new ThirdPage(),
			4: new FourthPage(),
			5: new FifthPage()
		};

		init(): void {
			$('#fullpage').fullpage({
				navigation: true,
				navigationPosition: 'right',
				controlArrows: false,
				onLeave: (index: number, nextIndex: number, direction: string) => {
					if (this.pages[index] !== undefined) {
						this.pages[index].onLeave(nextIndex);
					}
					if (this.pages[nextIndex] != undefined) {
						this.pages[nextIndex].onEnter(index);
					}
				}
			});
			for (var index in this.pages) {
				this.pages[index].init();
			}
		}

	}
}