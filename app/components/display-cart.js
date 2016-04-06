import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
  delete(item) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.get('shoppingCart').deleteFromCart(item);
    }
  }
}
});
