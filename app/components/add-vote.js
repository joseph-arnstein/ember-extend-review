import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveVoteA(selection, product) {
      var params = {
        newVote: selection,
        thisProduct: this.get('product')
      };
      this.sendAction('saveVoteB', params);
    },
  }
});
