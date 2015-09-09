import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
 // console.log('1');
   this.route('userform',{path:'userform'});
   this.route("update-user" , {path : "/update-user/:user"});
   this.route("get-user",{path : "/get-user/:userId"});
   this.route("get-all-users");
});



export default Router;
