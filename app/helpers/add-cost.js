import Ember from 'ember';

export function addCost(params/*, hash*/) {
  var items = params[0];

  var totalCost = 0;

  for(var i=0; i < items.get('length'); i++) {
    var itemCost = items.objectAt(i).get('cost');
    totalCost += itemCost;
  }

  return totalCost;

}

export default Ember.Helper.helper(addCost);
