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
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      comments: this.store.findAll('comment')

    });
  },

  actions: {
    saveC(params) {
      var newProductName = this.store.createRecord('product', params);
      newProductName.save();
      this.transitionTo('store');
    },
      saveCommentE(params) {
        var newCommentName = this.store.createRecord('comment', params);
        var product = params.product;
        product.get('comments').addObject(newCommentName);
        newCommentName.save().then(function() {
          return product.save();
        });
        this.transitionTo('store');
      }
    // destroyProduct(item) {
    //   product.destroyRecord();
    //   this.transitionTo('store');
    // }
  }
});
