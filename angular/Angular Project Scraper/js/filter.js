app.filter('myfilter', function() {
    return function(items, options ) {
      // loop over all the options and if true ensure the car has them
      // I cant do this for you beacause I don't know how you would store this info in the car object but it should not be difficult
      return carMatches;
    };
});