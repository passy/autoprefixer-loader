var should = require('should');

describe('basic', function() {
	it('should proprocess basic css', function() {
		var css = require('!raw-loader!../!./fixtures/basic.css');
		var fix = require('!raw-loader!./fixtures/basic_expected.css');

		(typeof css).should.be.eql('string');
		css.should.equal(fix);
	});

	it('should import css with the css-loader', function() {
		var css = require('!css-loader!../!./fixtures/basic.css');
		var fix = require('!raw-loader!./fixtures/basic_expected.css');

		(typeof css).should.be.eql('string');
		css.should.equal(fix);
	});

	it('should accept a browser parameter', function() {
		var css = require('!raw-loader!../?browsers=Firefox 15!./fixtures/firefox.css');
		var fix = require('!raw-loader!./fixtures/firefox_expected.css');

		(typeof css).should.be.eql('string');
		css.should.equal(fix);
	});
});
