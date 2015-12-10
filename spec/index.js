const rules = require( "../index" );

describe( "Index", function() {
	describe( "Rules", function() {
		it( "should extend base rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/base" );
		} );
	} );
} );
