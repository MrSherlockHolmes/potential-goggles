/* inititalised, *START* file */

var initSelf = { 
  mutatedClones :
    [
    "var test = false; if (test) { var y = 1; }",
    "var test = 1; if (test) { var y = 1; }",
    "var test = 0; if (test) { var y = 1; }",
    "var test = true; if (test) { var y = 1; }",
    "var test = -1; if (test) { var y = 1; }"
    ],
  objective : 
    y === 1; /* don't you love JS? :P */
  testClones : 
  function(arrayTask) {
    for (clone in arrayTask) {
      eval(clone);
      if (initSelf.objective) {
        "hooray!"
      }
    }
  }
}

initSelf.testClones();
