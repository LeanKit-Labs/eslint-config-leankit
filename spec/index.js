const should = require( "chai" ).should();
const rules = require( "../index" );
const environments = [ "browser", "node", "commonjs" ];

describe( "Index", function() {
	describe( "Rules", function() {
		it( "should extend best-practices rules", function() {
			rules.extends.should.contain( "./rules/best-practices.js" );
		} );

		it( "should extend possible-errors rules", function() {
			rules.extends.should.contain( "./rules/possible-errors.js" );
		} );

		it( "should extend nodejs-and-commonjs rules", function() {
			rules.extends.should.contain( "./rules/nodejs-and-commonjs.js" );
		} );

		it( "should extend strict rules", function() {
			rules.extends.should.contain( "./rules/strict-mode.js" );
		} );

		it( "should extend stylistic-issues rules", function() {
			rules.extends.should.contain( "./rules/stylistic-issues.js" );
		} );

		it( "should extend variables rules", function() {
			rules.extends.should.contain( "./rules/variables.js" );
		} );
	} );

	describe( "Environment", function() {
		it( "should define environments", function() {
			environments.forEach( function( key ) {
				should.exist( rules.env[ key ] );
			} );
		} );
	} );
} );
