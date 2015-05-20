import assert from 'assert';








let noop;

// es5
noop = function() {};

// es6
noop = () => {};





















let length;

// es5
length = function(str) {
  return str.length;
};

// es6
length = str => str.length;



















let tokenWrapper;

// es5
tokenWrapper = function(token) {
  return {access_token: token};
}

// es6
tokenWrapper = token => ({access_token: token});















let maxTen;

//es5
maxTen = function(n) { return n > 10 ? 10 : n; }

// es6
maxTen = (n) => n > 10 ? 10 : n;


assert(maxTen(10) === 10);

assert(maxTen(20) === 10);

assert(maxTen(5) === 5);

























let line;

// es5
line = d3.svg.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; });

// es6
line = d3.svg.line()
  .x(d => d.x)
  .y(d => d.y);