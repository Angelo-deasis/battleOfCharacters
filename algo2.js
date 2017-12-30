
function diffArray(a1, a2) {
  var result = [];
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
    for (i = 0; i < a2.length; i++) {
      if (a1.indexOf(a2[i]) === -1) {
        result.push(a2[i]);
      }
    }
    console.log(result);
    return result;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

