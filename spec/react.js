const rules = require( "../react" );

describe( "React", function() {
	describe( "Rules", function() {
		it( "should extend base rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/base" );
		} );

		it( "should extend react rules", function() {
			rules.extends.should.contain( "eslint-config-leankit/rules/react" );
		} );
	} );
} );
