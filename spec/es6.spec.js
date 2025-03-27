import { describe, it } from "mocha";
import * as chai from "chai";
chai.should();
import es6Config from "../es6.js";

describe( "ES6", function() {
	it( "should export an array with 2 configuration objects", function() {
		es6Config.should.be.an( "array" ).with.lengthOf( 2 );
	} );

	it( "should override vars-on-top to 'error'", function() {
		const configWithVarsOnTop = es6Config.find( cfg => cfg.rules && cfg.rules[ "vars-on-top" ] !== undefined );
		chai.expect( configWithVarsOnTop ).to.exist;
		configWithVarsOnTop.rules[ "vars-on-top" ].should.equal( "error" );
	} );
} );
