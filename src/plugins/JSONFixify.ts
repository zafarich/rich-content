void (function () {
  window.JSON = Object.create(JSON);

  JSON.stringify = function (obj) {
    return Object.getPrototypeOf(JSON).stringify(obj, function (key, value) {
      if (typeof value === "function") {
        return value.toString();
      }

      if (key === 'localVideoUrl') {
				return undefined 
	    }

      return value;
    });
  };

  JSON.parse = function (obj) {
    return Object.getPrototypeOf(JSON).parse(obj, function (key, value) {
      if (typeof value === "string" && value.slice(0, 8) == "function") {
        return Function("return " + value)();
      }
      return value;
    });
  };
})();
