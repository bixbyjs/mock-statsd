/* global describe, it, expect */

var statsd = require('..');

describe('mock-statsd', function() {
  
  it('should export constructors', function() {
    expect(statsd.Client).to.be.a('function');
  });
  
});
