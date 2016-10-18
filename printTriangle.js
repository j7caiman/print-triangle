function printPascal(x) {
  var array = returnTriangleStringArray(4);

  while (x-- > 0) {
    array = repeatPattern(array);
  }

  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  function repeatPattern(array) {
    var edge = array.length;

    // repeat to create the left part of the bottom
    array = array.concat(array);

    //append another of the top half to the bottom half, with spacing in between
    for (var i = 0; i < edge; i++) {
      array[i + edge] += times(" ", edge - i) + array[i];
    }

    // indent the top half
    for (var i = 0; i < edge; i++) {
      array[i] = times(" ", edge) + array[i];
    }

    return array;
  }

  function returnTriangleStringArray(x) {
    var array = [];

    for (var i = 0; i < x; i++) {
      var line = times(" ", x - i - 1) + "*" + times("*", i * 2 - 1);
      if (i !== 0) {
        line += "*";
      }
      array.push(line);
    }

    return array;
  }

  function times(char, num) {
    num = Math.floor(num);
    var sequence = "";
    for (var i = 0; i < num; i++) {
      sequence += char;
    }

    return sequence;
  }
}


printPascal(process.argv[2]);
