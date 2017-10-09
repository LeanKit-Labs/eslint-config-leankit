const should = require( "chai" ).should(); // eslint-disable-line no-unused-vars
const rules = require( "../test" );
const IGNORED_RULES = [ "no-unused-expressions", "no-magic-numbers", "init-declarations", "react/prop-types", "react/display-name", "react/no-multi-comp", "react/prefer-stateless-function" ];

describe( "Test", function() {
	describe( "Environment", function() {
		it( "should define mocha", function() {
			rules.env.mocha.should.be.true;
		} );
	} );

	describe( "Rules", function() {
		it( "should override max-nested-callbacks", function() {
			rules.rules[ "max-nested-callbacks" ].should.eql( [ "error", 15 ] );
		} );

		it( "should override max-lines", function() {
			rules.rules[ "max-lines" ].should.eql( [ "error", { "max": 2500 } ] );
		} );

		it( "should override max-statements", function() {
			rules.rules[ "max-statements" ].should.eql( [ "error", { "max": 1000 } ] );
		} );

		describe( "Ignore", function() {
			IGNORED_RULES.forEach( function( rule ) {
				it( `should ignore ${ rule }`, () => {
					rules.rules[ rule ].should.equal( "off" );
				} );
			} );
		} );
	} );
} );
