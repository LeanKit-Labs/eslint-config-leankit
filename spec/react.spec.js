import { describe, it } from "mocha";
import * as chai from "chai";
chai.should();
import reactConfig from "../react.js";


describe( "React", function() {
	it( "should export a non-empty array", function() {
		reactConfig.should.be.an( "array" ).that.is.not.empty;
	} );

	it( "should override complexity to 'off'", function() {
		const configWithComplexity = reactConfig.find( cfg => cfg.rules && cfg.rules.complexity !== undefined );
		chai.expect( configWithComplexity, "Expected a config with a complexity rule" ).to.exist;
		configWithComplexity.rules.complexity.should.equal( "off" );
	} );

	it( "should set React version to '18' in settings", function() {
		const configWithReactSettings = reactConfig.find( cfg => cfg.settings && cfg.settings.react );
		chai.expect( configWithReactSettings, "Expected a config with React settings" ).to.exist;
		configWithReactSettings.settings.react.version.should.equal( "18" );
	} );
} );
