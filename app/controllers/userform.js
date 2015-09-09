import Ember from 'ember';

export default Ember.Controller.extend({
status: ["Open","Close"],
  selectedStatus: 'Open',
  showErrors: false,
  actions: {
    save: function(){
      // just before saving, we set the creationDate
//      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var newUser =  this.get('model');
      //newItem.save().then();
      //var controller = this;
     // newUser.save()
      newUser.validate().then(function() {
        newUser.save().then(function() {
          controller.notifications.addNotification({
            message: 'New user has been registered ',
            type: 'success',
            autoClear: true
          });
          controller.transitionToRoute('index');
        }, function() {
          controller.notifications.addNotification({
            message: 'Error in registering new user details ',
            type: 'error',
            autoClear: true
          });
        });
      }).catch(function() {
        controller.set("showError", true);
        controller.notifications.addNotification({
          message: "Something went wrong and we are not able to register new user please try again",
          type: 'error',
          autoClear: true
        })
      });
    },
    cancel: function() {
      this.get('model').deleteRecord();
      this.set("showError", false);
      this.notifications.addNotification({
        message: 'New registration cancelled ',
        type: 'warning',
        autoClear: true
      });
      this.transitionToRoute('get-all-users');
    }
  }

});
