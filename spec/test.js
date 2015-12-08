const should = require( "chai" ).should();
const rules = require( "../test" );
const globals = [ "before", "beforeEach", "describe", "global", "it", "sinon", "should" ];

describe( "Test", function() {
	describe( "Rules", function() {
		it( "should extend base rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/base" );
		} );
	} );

	describe( "Environment", function() {
		it( "should define browser", function() {
			rules.env.browser.should.be.true;
		} );

		it( "should define node", function() {
			rules.env.node.should.be.true;
		} );

		it( "should define mocha", function() {
			rules.env.mocha.should.be.true;
		} );
	} );

	describe( "Globals", function() {
		it( "should define global constiables", function() {
			globals.forEach( function( key ) {
				should.exist( rules.globals[ key ] );
			} );
		} );
	} );
} );
