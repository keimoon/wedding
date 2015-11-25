build: app/main.css app/main.js

app/main.css: src/scss/app.scss \
	src/scss/main.scss \
	src/scss/common.scss \
	src/scss/first-page.scss \
	src/scss/second-page.scss \
	src/scss/third-page.scss \
	src/scss/fourth-page.scss \
	src/scss/fifth-page.scss \
	src/scss/extras.scss
	sass src/scss/app.scss app/main.css
	
app/main.js: src/ts/app.ts src/ts/module.ts src/ts/pages.ts src/ts/map.ts src/ts/countdown.ts src/ts/jquery.d.ts src/ts/google.maps.d.ts
	tsc --out app/main.js src/ts/app.ts
