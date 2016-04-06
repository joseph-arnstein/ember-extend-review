import Ember from 'ember';

// var products = [{
//   id: 1,
//   title: "Blue Dress",
//   description: "This is a blue dress with flowers",
//   cost: "200",
//   image: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=160577088"
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },

  actions: {
    saveC(params) {
      var newProductName = this.store.createRecord('product', params);
      newProductName.save();
      this.transitionTo('store');
    }
  }
});
