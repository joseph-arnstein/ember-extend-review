import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    console.log(item);
    this.get('items').pushObject(item);
  }
});
