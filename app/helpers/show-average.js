import Ember from 'ember';

export function showAverage(params/*, hash*/) {
  var numberArray = params[0];
  var arrayLength = params[1];
  var sum = 0;

  for(var i=0; i < arrayLength; i++) {
    var currentNumber = numberArray[i];
    sum += currentNumber;
  }
  // console.log(sum);
  var testAverage = sum/arrayLength;
  // console.log(testAverage);
  return testAverage;
  // return params;
}

export default Ember.Helper.helper(showAverage);
