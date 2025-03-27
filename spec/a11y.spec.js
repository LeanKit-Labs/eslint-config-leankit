import { describe, it } from "mocha";
import * as chai from "chai";
chai.should();
import a11yConfig from "../a11y.js";

describe( "a11y", function() {
	describe( "Configuration", function() {
		it( "should export a non-empty array", function() {
			a11yConfig.should.be.an( "array" ).that.is.not.empty;
		} );
		it( "should include a configuration object with the 'jsx-a11y' plugin", function() {
			const hasPlugin = a11yConfig.some( config => config.plugins && config.plugins[ "jsx-a11y" ] );
			hasPlugin.should.be.true;
		} );
	} );
} );
