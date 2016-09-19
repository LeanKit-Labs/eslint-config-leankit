const should = require( "chai" ).should(); // eslint-disable-line no-unused-vars
const rules = require( "../test" );
const IGNORED_RULES = [ "no-unused-expressions", "no-magic-numbers", "react/prop-types", "react/display-name", "react/no-multi-comp", "init-declarations" ];

describe( "Test", function() {
	describe( "Environment", function() {
		it( "should define mocha", function() {
			rules.env.mocha.should.be.true;
		} );
	} );

	describe( "Rules", function() {
		it( "should override max-nested-callbacks", function() {
			rules.rules[ "max-nested-callbacks" ].should.eql( [ 2, 15 ] );
		} );

		it( "should ignore rules", function() {
			IGNORED_RULES.forEach( function( rule ) {
				rules.rules[ rule ].should.equal( 0 );
			} );
		} );
	} );
} );
