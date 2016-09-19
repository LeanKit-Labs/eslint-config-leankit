const rules = require( "../a11y" );

describe( "a11y", function() {
	describe( "Extends", function() {
		it( "should extend a11y rules", function() {
			rules.extends.should.contain( "./rules/a11y.js" );
		} );
	} );
} );
