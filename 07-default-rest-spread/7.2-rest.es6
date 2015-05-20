import assert from 'assert';








// es5

(function() {

  makeAccessors({}, 'request', 'body', 'statusCode');

  function makeAccessors() {

    var accessors = [].slice.call(arguments);
    var target = accessors.shift();

    accessors.forEach((accessor) => {
      Object.defineProperty(target, accessor, {
        // ...
      });
    });

    return target;
  }

})();









// es6

(function() {

  function makeAccessors(target, ...accessors) {

    accessors.forEach((accessor) => {
      Object.defineProperty(target, accessor, {
        // ...
      });
    });

    return target;

  }


})();
