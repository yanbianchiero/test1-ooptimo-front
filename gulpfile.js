/* eslint-disable no-undef */
'use strict'

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');

const main_css = () =>
	gulp
	.src(['./src/scss/**/*.scss'])
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(rename('main.css'))
	.pipe(cleanCSS())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css/'));

const watch = () => {
	gulp.watch(['./src/scss/main.scss'], gulp.series('main_css'))
};

exports.main_css = main_css;
exports.watch = watch;

const dev = gulp.series(main_css, watch);

exports.dev = dev;
exports.default = dev;
