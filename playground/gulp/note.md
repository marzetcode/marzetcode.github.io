
# устанавливаем npm
npm init

# устанавливаем gulp-cli глобально
npm i gulp-cli -g

# устанавливаем gulp-cli локально с записью в package.json
npm i gulp-cli -D

# устанавливаем gulp глобально
npm i gulp@4.0.2 -g

# устанавливаем gulp локально с записью в package.json
npm i gulp@4.0.2 -D

# создаем файл gulpfile.js

# создаем папку с исходниками src

# создаем папку gulp

# в папке gulp создаем папки config и tasks

# в папке config создаем файлы path.js, plugins.js, ftp.js

# в файле path.js
# получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve());
# создаем две константы, содержащие путь к папке с исходниками и результатом
const srcFolder = `./src`;
const buildFolder = `./dist`;
# создаем две константу path
export const path = {
	build: {
		files: `${buildFolder}/files/`
	},
	src: {
		files: `${srcFolder}/files/**/*.*`
	},
	watch: {},
	clean: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
};

# в файле gulpfile.js
# подключаем основные модули
import gulp from 'gulp'
# импортируем пути
import { path } from './gulp/config/path'
# передаем значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp
};

# в папке tasks создаем файл copy.js

# в файле copy.js создаем функцию
export const copy = () => {
	return app.gulp.src(app.path.src.files)
		.pipe(app.gulp.dest(app.path.build.files))
};

# в файле gulpfile.js
# импортируем задачу copy
import { copy } from './gulp/tasks/copy.js'
# задаем выполнение сценария по умолчанию
gulp.task('default', copy);

# в файле path.js
# в объекте watch указываем путь за какими файлами нам нужно следить
watch: {
	files: `${srcFolder}/files/**/*.*`
}

# в файле gulpfile.js
# создаем функцию построения сценариев выполнения задач
const dev = gulp.series(copy, watcher);
# в сценарии по умолчанию меняем copy на dev
gulp.task('default', dev);

# в папке tasks создаем файл reset.js

# устанавливаем del локально с записью в package.json
npm i -D del@6.0.0

# в файле reset.js
# подключаем модуль del
import del from 'del'
export const reset = () => {
	return del(app.path.clean)
};

# в файле gulpfile.js
# импортируем задачу reset
import { reset } from './gulp/tasks/reset.js'
# в начало сценария dev добавляем задачу reset
const dev = gulp.series(reset, copy, watcher);

# в папке src создаем файл index.html

# в файле path.js
# редактируем объект path, указывая пути к html файлам
build: {
	html: `${buildFolder}/`,
		files: `${buildFolder}/files/`
},
src: {
	html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`
},
watch: {
	html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`
},

# в папке src создаем папку html

# в папке html создаем файлы head.html, header.html, footer.html

# редактируем файл index.html
<!DOCTYPE html>
<html lang='en'>
	@@include('html/head.html', {
		title: 'Главная'
	})
	<body>
		@@include('html/header.html', { })
		<main></main>
		@@include('html/footer.html', { })
	</body>
</html>

# переносим head из index.html в head.html
<head>
	<meta charset='UTF-8'>
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<title>@@title</title>
</head>

# в папке tasks создаем файл html.js

# в файле html.js создаем задачу
export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.gulp.dest(app.path.build.html))
};

# в файле path.js
# подключаем задачу html.js
import { html } from './gulp/tasks/html.js';
# создаем сценарий mainTasks
const mainTasks = gulp.parallel(copy, html);
# редактируем сценарий dev
const dev = gulp.series(reset, mainTasks, watcher);
# добавляем наблюдатель
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
};

# устанавливаем gulp-file-include
npm i -D gulp-file-include

# в файле html.js
# подключаем gulp-file-include
import fileinclude from 'gulp-file-include';
# в задачу html добавляем .pipe(fileinclude())
export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(fileinclude())
		.pipe(app.gulp.dest(app.path.build.html))
};

# в папке src создаем папку img и добавляем туда изображение

# в файл index.html добавляем тэг img
<main>
	<img src='img/cover.jpg' alt=''>
</main>

# в файл header.html добавляем тэг img
<header>
	<img src='../img/cover.jpg' alt=''>
</header>

# устанавливаем vs code плагин Path Autocomplete

# в settings.json добаляем настройки для Path Autocomplete
"path-autocomplete.pathMappings": {
	"@img": "${folder}/src/img",
	"@scss": "${folder}/src/scss",
	"@js": "${folder}/src/js",
},

# в файле index.html меняем тэг img
<main>
	<img src='@img/cover.jpg' alt=''>
</main>

# в файле header.html меняем тэг img
<header>
	<img src='@img/cover.jpg' alt=''>
</header>

# устанавливаем gulp-replace
npm i -D gulp-replace

# в файле plugins.js
# подключаем плагин gulp-replace
import replace from 'gulp-replace';
# создаем экспортируемый объект
export const plugins = {
	replace: replace
};

# в файле gulpfile.js подключаем plugins.js
import { plugins } from './gulp/config/plugins.js';
# в global.app добавляем plugins: plugins
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
};

# в файле html.js вызываем плагин gulp-replace
export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(fileinclude())
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(app.gulp.dest(app.path.build.html))
};

# устанавливаем gulp-webp-html-nosvg
npm i -D gulp-webp-html-nosvg

# в файле html.js
# подключаем плагин gulp-webp-html-nosvg
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
# вызываем плагин gulp-webp-html-nosvg
export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(fileinclude())
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(webpHtmlNosvg())
		.pipe(app.gulp.dest(app.path.build.html))
};

# устанавливаем gulp-version-number
npm i -D gulp-version-number

# в файле html.js
# подключаем плагин gulp-version-number
import versionNumber from 'gulp-version-number';
# вызываем плагин gulp-version-number
.pipe(
	versionNumber({
		'value': '%TS%',
		'append': {
			'key': '_v',
			'cover': 0,
			'to': [
				'css',
				'js'
			]
		},
		'output': {
			'file': 'gulp/version.json'
		}
	})
)

# в файле index.html подключаем скрипты
<script src='js/app.min.js'></script>

# в файле head.html подключаем стили
<link rel='stylesheet' href='css/style.min.css'>

# устанавливаем gulp-plumber
npm i -D gulp-plumber

# устанавливаем gulp-notify
npm i -D gulp-notify

# в файле plugins.js
# подключаем плагины gulp-plumber gulp-notify
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
# редактируем экспортируемый объект
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify
};

# в файле html.js вызываем плагины gulp-plumber и gulp-notify
.pipe(app.plugins.plumber(
	app.plugins.notify.onError({
		title: 'HTML',
		message: 'Error: <%= error.message'
	})
))

# устанавливаем browser-sync
npm i -D browser-sync

# в файле plugins.js
# подключаем плагин browser-sync
import browsersync from 'browser-sync';
# редактируем экспортируемый объект
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync
};

# в папке tasks создаем файл server.js

# в файле server.js создаем задачу server
export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`
		},
		notify: false,
		port: 3000,
	})
}

# в файле gulpfile.js подключаем задачу server
import { server } from './gulp/tasks/server.js';
# добавляем задачу в сценарий
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

# в файле html.js настраиваем обновление браузера
.pipe(app.gulp.plugins.browsersync.stream())

# в файле path.js добавляем путь для scss файлов
css: `${buildFolder}/css/`,
scss: `${srcFolder}/scss/style.scss`,
scss: `${srcFolder}/scss/**/*.scss`,

# устанавливаем sass
npm i -D sass

# устанавливаем gulp-sass
npm i -D gulp-sass

# в папке tasks создаем файл scss.js

# в файле scss.js
# подключаем плагины sass и gulp-sass
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
# создаем константу sass которая вызывает плагин sass
const sass = gulpSass(dartSass);
# создаем сценарий scss
export const scss = () => {
	return app.gulp.src(app.path.src.scss, {sourcemaps: true})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SCSS',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
};

# устанавливаем gulp-rename
npm i -D gulp-rename

# в файле scss.js
# подключаем плагин gulp-rename
import rename from 'gulp-rename';
# вызываем gulp-rename
.pipe(rename({
	extname: '.min.css'
})

# в файле gulpfile.js подключаем задачу scss
import { scss } from './gulp/tasks/scss.js';
# добавляем наблюдатель в watcher()
gulp.watch(path.watch.scss, scss);
# добавляем задачу в сценарий
const mainTasks = gulp.parallel(copy, html, scss);

# в папке src создаем папку scss
# в папке scss создаем файл style.scss

# устанавливаем gulp-clean-css, gulp-webpcss, gulp-autoprefixer, gulp-group-css-media-queries
npm i -D gulp-clean-css
npm i -D gulp-webpcss
npm i -D gulp-autoprefixer
npm i -D gulp-group-css-media-queries

# в файле scss.js
# подключаем плагины gulp-clean-css, gulp-webpcss, gulp-autoprefixer, gulp-group-css-media-queries
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
# вызываем gulp-group-css-media-queries
.pipe(groupCssMediaQueries())
# устанавливаем webp-converter
npm i -D webp-converter@2.2.3
# вызываем gulp-webpcss
.pipe(webpcss({
	webpClass: '.webp',
	nowebpClass: '.no-webp',
}))
# вызываем gulp-autoprefixer
.pipe(autoprefixer({
	grid: true,
	overrideBrowserslist: ['last 3 versions'],
	cascade: true
}))
# вызываем gulp-clean-css
.pipe(cleanCss())
# если нужен не сжатый style.css, то до .pipe(cleanCss()) добавляем
.pipe(app.gulp.dest(app.path.build.css))

# в файле path.js добавляем путь для js файлов
js: `${buildFolder}/js/`,
js: `${srcFolder}/js/app.js`,
js: `${srcFolder}/js/**/*.js`,

# в папке tasks создаем файл js.js

# в файле gulpfile.js подключаем задачу js
import { js } from './gulp/tasks/js.js';
gulp.watch(path.watch.js, js);
const mainTasks = gulp.parallel(copy, html, scss, js);

# в файле js.js настраиваем задачу js
export const js = () => {
	return app.app.src(app.path.src.js, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'JS',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream())
}

# устанавливаем webpack
npm i -D webpack
# устанавливаем webpack-stream
npm i -D webpack-stream

# в файле js.js
# подключаем плагин webpack-stream
import webpack from 'webpack-stream';
# настраиваем webpack
.pipe(webpack({
	mode: 'development',
	output: {
		filename: 'app.min.js'
	}
}))

# в папке src создаем папку js
# в папке js создаем файл app.js

# в папке js создаем папку modules

# в папке modules создаем файл functions.js

# в файле functions.js создаем функцию
export function isWebP() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
};

# в файле app.js подключаем functions.js
import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebP();

# устанавливаем swiper
npm i -D swiper

# в файле app.js подключаем swiper
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();

# в файле path.js прописываем пути для изображений
images: `${buildFolder}/img/`,
images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
svg: `${srcFolder}/img/**/*.svg`,
images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,

# в папке tasks создаем файл images.js

# в файле images.js создаем задачу images
export const images = () => {
	return app.gulp.src(app.path.srs.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browsersync.stream())
};

# устанавливаем gulp-webp и gulp-imagemin
npm i -D gulp-webp
npm i -D gulp-imagemin@7.1.0

# в файле images.js подключаем gulp-webp и gulp-imagemin
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

# в файле gulpfile.js подключаем задачу images
import { images } from './gulp/tasks/images.js';
gulp.watch(path.watch.images, images);
const mainTasks = gulp.parallel(copy, html, scss, js, images);

# устанавливаем gulp-newer
npm i -D gulp-newer

# в файле plugins.js подключаем плагин gulp-newer
import newer from 'gulp-newer';
newer: newer

# в файле images.js
# вызываем gulp-newer, gulp-webp и gulp-imagemin
export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(imagemin([
			imagemin.mozjpeg({ quality: 50, progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		]))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browsersync.stream())
};

# в файле path.js прописываем пути для шрифтов
fonts: `${buildFolder}/fonts/`

# в папке tasks создаем файл fonts.js

# устанавливаем fs, gulp-fonter и gulp-ttf2woff2
npm i -D fs
npm i -D gulp-fonter
npm i -D gulp-ttf2woff2

# в файле fonts.js
# подключаем плагины fs, gulp-fonter и gulp-ttf2woff2
import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
# создаем задачу
