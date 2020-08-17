// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  var stringify = function(obj) {
    if (obj === '') {
      return;
    } else if (typeof obj === 'number') {
      result += obj;
    } else if (typeof obj === 'boolean') {
      result += obj;
    } else if (obj === null) {
      result += 'null';
    } else if (typeof obj === 'string') {
      result += '"' + obj + '"';
    } else if (obj === undefined) {
      return;
    } else if (Array.isArray(obj)) {
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        stringify(obj[i]);
        if (i < obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
    } else if (typeof obj === 'object') {
      result += '{';
      for (var key in obj) {
        if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
          stringify(key);
          result += ':';
          stringify(obj[key]);
          result += ',';
        }
      }
      if (result[result.length - 1] === ',') {
        result = result.slice(0, result.length - 1);
      }
      result += '}';
    }
  };
  stringify(obj);
  return result;
};
