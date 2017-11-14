(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//********************Business Logic************************

function Roman() {

}


Roman.prototype.Translate = function(number) {
  var valueFifth = ["V","L","D"];
  var valueSingle  = ["I","X","C","M"];
  var value = [];
  var mix = "";

  for(i = 0; i < length; i++){
    if(number[i] >= 5 && number[i] < 9){
      mix = (valueFifth[i]);
      number[i] = number[i] - 5;
      if(number[i] > 0) {
        for(j = 0; j < number[i]; j++) {
          mix += (valueSingle[i]);
        }
      }
    }
    else if(number[i] < 4) {
      for(j = 0; j < number[i]; j++) {
        mix = (valueSingle[i]);
      }
    }
    else if(number[i] == 4){
      mix = (valueSingle[i] + valueFifth[i]);
    }
    else if(number[i] == 9){
      mix = (valueSingle[i] + valueSingle[i+1]);
    }
    value.push(mix);
  }
  return value;
};

exports.romanModule = Roman;

},{}],2:[function(require,module,exports){
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

},{"./../js/roman.js":1}]},{},[2]);
