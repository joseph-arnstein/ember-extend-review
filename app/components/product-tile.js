import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  showDetails: false,

  actions: {
    seeMore() {
      this.set('showDetails', true);
    },
    hideMore() {
      this.set('showDetails', false);
    },
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    saveCommentC(params) {
      this.sendAction('saveCommentD', params);
    },
    saveVoteC(params) {
      this.sendAction('saveVoteD', params);
    },
  }
});
