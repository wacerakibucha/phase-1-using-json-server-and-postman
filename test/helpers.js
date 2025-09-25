const chai = require("chai");
global.expect = chai.expect;

const jsdom = require("mocha-jsdom");

// Set up a DOM environment for testing
jsdom({});
