const should = require( "chai" ).should();
const rules = require( "../base" );
const environments = [ "browser", "node", "commonjs" ];

describe( "Base", function() {
	describe( "Rules", function() {
		it( "should extend legacy rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/legacy" );
		} );

		it( "should extend ecmascript6 rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/rules/ecmascript6" );
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
