import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store', function() {
    this.route('product', {path: '/product/:product_id'});
  });
  this.route('joey');
});

export default Router;
