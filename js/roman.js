//********************Business Logic************************

function Roman() {

}


Roman.prototype.Translate = function(number,length) {
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
