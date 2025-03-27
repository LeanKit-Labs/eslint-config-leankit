import { describe, it } from "mocha";
import * as chai from "chai";
chai.should();
import testConfigArray from "../test.js";

const IGNORED_RULES = [
	"no-magic-numbers",
	"init-declarations",
	"react/prop-types",
	"react/display-name",
	"react/no-multi-comp",
	"react/prefer-stateless-function"
];


describe( "Test", function() {
	describe( "Environment", function() {
		it( "should define mocha globals", function() {
			const envConfig = testConfigArray.find( cfg => cfg.languageOptions && cfg.languageOptions.globals );
			chai.expect( envConfig, "Expected environment config" ).to.exist;
			envConfig.languageOptions.globals.should.have.property( "describe", "readonly" );
			envConfig.languageOptions.globals.should.have.property( "it", "readonly" );
		} );
	} );

	describe( "Rules", function() {
		it( "should override max-nested-callbacks", function() {
			const ruleConfig = testConfigArray.find( cfg => cfg.rules && cfg.rules[ "max-nested-callbacks" ] !== undefined );
			chai.expect( ruleConfig, "Expected a config with max-nested-callbacks" ).to.exist;
			ruleConfig.rules[ "max-nested-callbacks" ].should.eql( [ "error", 15 ] );
		} );

		it( "should override max-lines", function() {
			const ruleConfig = testConfigArray.find( cfg => cfg.rules && cfg.rules[ "max-lines" ] !== undefined );
			chai.expect( ruleConfig, "Expected a config with max-lines" ).to.exist;
			ruleConfig.rules[ "max-lines" ].should.eql( [ "error", { max: 2500 } ] );
		} );

		it( "should override max-statements", function() {
			const ruleConfig = testConfigArray.find( cfg => cfg.rules && cfg.rules[ "max-statements" ] !== undefined );
			chai.expect( ruleConfig, "Expected a config with max-statements" ).to.exist;
			ruleConfig.rules[ "max-statements" ].should.eql( "off" );
		} );

		describe( "Ignore", function() {
			IGNORED_RULES.forEach( rule => {
				it( `should ignore ${ rule }`, () => {
					const ruleConfig = testConfigArray.find( cfg => cfg.rules && cfg.rules[ rule ] !== undefined );
					chai.expect( ruleConfig, `Expected a config with rule ${ rule }` ).to.exist;
					ruleConfig.rules[ rule ].should.equal( "off" );
				} );
			} );
		} );
	} );
} );
