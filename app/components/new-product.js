import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },

    saveA() {
      var params = {
        seller: this.get('seller') ? this.get('seller'): "",
        title: this.get('title') ? this.get('title'): "",
        description: this.get('description') ? this.get('description'): "",
        cost: parseInt(this.get('cost') ? this.get('cost'): 0),
        image: this.get('image') ? this.get('image'): "",
      };
      this.set('addNewProduct', false);
      this.sendAction('saveB', params);
    }
  }
});
