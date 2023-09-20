function receivesAFunction(callback) {
    callback(); // call the callback function
  }
  
  // returnsANamedFunction function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }
  
  // returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }

  // anonymous function