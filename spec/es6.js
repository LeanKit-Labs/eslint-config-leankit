const rules = require( "../es6" );

describe( "ES6", function() {
	describe( "Extends", function() {
		it( "should extend ecmascript6 rules", function() {
			rules.extends.should.contain( "./rules/ecmascript6.js" );
		} );
	} );

	describe( "Rules", function() {
		it( "should override vars-on-top", function() {
			rules.rules[ "vars-on-top" ].should.equal( "error" );
		} );
	} );
} );
