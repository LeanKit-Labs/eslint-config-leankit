const should = require( "chai" ).should();
const rules = require( "../index" );
const environments = [ "browser", "node", "commonjs" ];

describe( "Index", function() {
	describe( "Rules", function() {
		it( "should extend best-practices rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/rules/best-practices" );
		} );

		it( "should extend possible-errors rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/rules/possible-errors" );
		} );

		it( "should extend nodejs-and-commonjs rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/rules/nodejs-and-commonjs" );
		} );

		it( "should extend strict rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/rules/strict-mode" );
		} );

		it( "should extend stylistic-issues rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/rules/stylistic-issues" );
		} );

		it( "should extend variables rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/rules/variables" );
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
