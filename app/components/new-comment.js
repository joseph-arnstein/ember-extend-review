import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        name: this.get('name') ? this.get('name'): "",
        content: this.get('content') ? this.get('content'): "",
        product: this.get('product')
      };
      this.set('addNewComment', false);
      this.sendAction('saveCommentB', params);
    }
  }
});
