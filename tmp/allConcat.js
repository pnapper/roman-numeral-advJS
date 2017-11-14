var Roman = require('./../js/roman.js').romanModule;

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var input = $("input#input").val();
    var digits = input.split("");
    var splitInputs = [];
    var result = "";
    digits.forEach(function(digit) {
      splitInputs.push(digit);
    });

    splitInputs.reverse();
    length = splitInputs.length;
    var simpleRoman = new Roman();

    if(splitInputs[3] >= 4){  //puts or put?????????
      alert("Please enter a number less than 4,000");
    } else {
      // var result = romanFour(splitInput[3]) + romanThree(splitInput[2]) + romanTwo(splitInput[1]) + romanOne(splitInput[0]);
        result = simpleRoman.Translate(splitInputs); //put or puts?????????
      };
      result.reverse();
      result = result.join('');


    $("#result").text(result);
  });
});
