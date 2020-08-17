// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Assignment Complete
var getElementsByClassName = function(className
) {

  var body = document.body;
  var result = [];
  var getElements = function(body) {
    if (body.classList !== undefined && body.classList.contains(className)) {
      result.push(body);
    }

    for (var i = 0; i < body.childNodes.length; i++) {
      getElements(body.childNodes[i]);
    }

  };
  getElements(body);
  return result;
};
