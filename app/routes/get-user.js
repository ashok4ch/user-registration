import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
    //return this.store.findRecord('user', params.userId);
    var user ={
                  firstName: "raj",
                  lastName: "kumar",
                  email: "raj.kumar@gmail.com",
                  Address: "road no:2, Dr colony",
                  Phone: "9999999999",
                  City: "hyderabad",
                  State: "Telangana",
                  Country: "India",
                  Zip: "500076"
                };
                return user;
  }
});
