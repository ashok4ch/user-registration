import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
    Ember.Logger.log('inside create model hook from userform route');
    /*var user={
      firstName: "",
      lastName: "kumar",
      email: "raj.kumar@gmail.com",
      Address: "road no:2, Dr colony",
      Phone: "9999999999",
      City: "hyderabad",
      State: "Telangana",
      Country: "India",
      Zip: "500076"
    };*/
    var user={
    userId:"",
          firstName: "",
          lastName: "",
          email: "",
          Address: "",
          Phone: "",
          City: "",
          State: "",
          Country: "",
          Zip: ""
        };
    return user;
    //return this.store.createRecord('user');
  }
});
