// Exists
// Check if element exists
$.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);
  
  if(this.length) {
    callback.call(this, args);
  }
  return this;
};

// Has attribute
// Determine whether any of the matched elements are assigned the given attribute.
$.fn.hasAttr = function(name) {  
	return this.attr(name) !== undefined;
};

// Has classes
// Determine whether any of the matched elements are assigned the given classes.
$.fn.hasClasses = function(selectors) {
  for (var i in selectors) {
    if($(this).hasClass(selectors[i])) {
      return true;
    }
  }
  return false;
};
