const rules = require( "../react" );

describe( "React", function() {
	describe( "Extends", function() {
		it( "should extend react rules", function() {
			rules.extends.should.contain( "./rules/react.js" );
		} );
	} );

	describe( "Rules", function() {
		it( "should override complexity", function() {
			rules.rules.complexity.should.eql( [ 0, 10 ] );
		} );
	} );
} );
