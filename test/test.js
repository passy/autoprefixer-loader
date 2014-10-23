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

        (Array.isArray(css)).should.be.eql(true);
        (typeof css[0][1]).should.be.eql('string');
        css[0][1].should.equal(fix);
    });

    it('should accept a single browser parameter', function() {
        var css = require('!raw-loader!../?browsers=Firefox 15!./fixtures/firefox.css');
        var fix = require('!raw-loader!./fixtures/firefox_expected.css');

        (typeof css).should.be.eql('string');
        css.should.equal(fix);
    });

    it('should accept JSON syntax for browsers parameter', function() {
        var css = require('!raw-loader!../?{browsers:["Firefox 15", "Android 4.3"]}!./fixtures/android_firefox.css');
        var fix = require('!raw-loader!./fixtures/android_firefox_expected.css');

        (typeof css).should.be.eql('string');
        css.should.equal(fix);
    });

    it('should accept array syntax for browsers parameter', function() {
        var css = require('!raw-loader!../?browsers[]=Firefox 15,browsers[]=Android 4.3!./fixtures/android_firefox.css');
        var fix = require('!raw-loader!./fixtures/android_firefox_expected.css');

        (typeof css).should.be.eql('string');
        css.should.equal(fix);
    });

    it('should accept a cascade parameter', function() {
        var css = require('!raw-loader!../?browsers=Firefox 15&cascade=false!./fixtures/nocascade.css');
        var fix = require('!raw-loader!./fixtures/nocascade_expected.css');

        (typeof css).should.be.eql('string');
        css.should.equal(fix);
    });

    it('should accept a safe parameter', function() {
        var css = require('!raw-loader!../?safe=true!./fixtures/broken.css');

        (typeof css).should.be.eql('string');
        css.should.equal(css);
    });
});
