import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    console.log(item);
    this.get('items').pushObject(item);
  },
  deleteFromCart(item) {
    this.get('items').removeObject(item)
  }
});
