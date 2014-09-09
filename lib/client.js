function Client() {
  this.counters = [];
  this.timings = [];
}

Client.prototype.increment = function(name, val) {
  this.counters.push({ name: name, value: val || 1 });
}

Client.prototype.timing = function(name, val) {
  this.timings.push({ name: name, value: val });
}


module.exports = Client;
