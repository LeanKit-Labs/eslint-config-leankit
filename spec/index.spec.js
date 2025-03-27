import { describe, it } from "mocha";
import * as chai from "chai";
const { expect } = chai;
chai.should();

import config from "../index.js";

describe( "Index", function() {
	it( "should export a non-empty array", function() {
		expect( config ).to.be.an( "array" ).that.is.not.empty;
	} );

	it( "should include best practices rules (e.g., 'accessor-pairs')", function() {
		const bestPracticesConfig = config.find( cfg => cfg.rules && cfg.rules[ "accessor-pairs" ] !== undefined );
		expect( bestPracticesConfig, "Expected best practices config with 'accessor-pairs' rule" ).to.exist;
	} );

	it( "should include possible errors rules (e.g., 'no-debugger')", function() {
		const possibleErrorsConfig = config.find( cfg => cfg.rules && cfg.rules[ "no-debugger" ] !== undefined );
		expect( possibleErrorsConfig, "Expected possible errors config with 'no-debugger' rule" ).to.exist;
	} );

	it( "should include node/commonjs rules (e.g., 'callback-return')", function() {
		const nodeConfig = config.find( cfg => cfg.rules && cfg.rules[ "callback-return" ] !== undefined );
		expect( nodeConfig, "Expected node/commonjs config with 'callback-return' rule" ).to.exist;
	} );

	it( "should include strict mode rules (e.g., 'strict': ['error', 'never'])", function() {
		const strictConfig = config.find( cfg => cfg.rules && cfg.rules.strict !== undefined );
		expect( strictConfig, "Expected strict mode config with 'strict' rule" ).to.exist;
		expect( strictConfig.rules.strict ).to.deep.equal( [ "error", "never" ] );
	} );

	it( "should include stylistic issues rules (e.g., 'brace-style')", function() {
		const stylisticConfig = config.find( cfg => cfg.rules && cfg.rules[ "brace-style" ] !== undefined );
		expect( stylisticConfig, "Expected stylistic config with 'brace-style' rule" ).to.exist;
	} );

	it( "should include variables rules (e.g., 'no-shadow')", function() {
		const variablesConfig = config.find( cfg => cfg.rules && cfg.rules[ "no-shadow" ] !== undefined );
		expect( variablesConfig, "Expected variables config with 'no-shadow' rule" ).to.exist;
	} );

	it( "should define global environments", function() {
		const envConfig = config.find( cfg => cfg.languageOptions && cfg.languageOptions.globals );
		expect( envConfig, "Expected a config with languageOptions.globals" ).to.exist;
		const globals = envConfig.languageOptions.globals;
		[ "window", "document", "process", "__dirname", "__filename", "module", "exports", "require" ].forEach( key => {
			expect( globals ).to.have.property( key );
		} );
	} );
} );
