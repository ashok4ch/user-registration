import Ember from 'ember';


export default Ember.Route.extend({
   model : function(){
         //var userList = [];
         //for(var index = 0 ; index < UserRegistrationApp.DummyUserData.length ; index++){
         //     userList.push(UserRegistrationApp.DummyUserData[index]);
         //}
         //return userList;
  //
  //       var url = "http://172.16.10.252:8080/user-registration/rest/registration/get-all-users";
  //       return Ember.$.getJSON(url).then(function (response) {
  //           var userList = [];
  //           if(response.hasOwnProperty("status") && response["status"] === "ok"){
  //               for(var index = 0 ; index < response.data.length ; index++){
  //
  //                   var user = this.User.create({
  //                       userId : response.data[index]["userId"],
  //                       firstName : response.data[index]["firstName"],
  //                       middleName : response.data[index]["middleName"],
  //                       lastName : response.data[index]["lastName"],
  //                       city : response.data[index]["city"],
  //                       address : response.data[index]["address"],
  //                       state : response.data[index]["state"],
  //                       country : response.data[index]["country"],
  //                       zip : response.data[index]["zip"],
  //                       email : response.data[index]["email"]
  //                   });
  //                   userList.push(user);
  //               }
  //               return userList;
  //           }

    var users =[{
    userId:"1",
      firstName: "raj",
      lastName: "kumar",
      email: "raj.kumar@gmail.com",
      Address: "road no:2, Dr colony",
      Phone: "9999999999",
      City: "hyderabad",
      State: "Telangana",
      Country: "India",
      Zip: "500076"
    },{
         userId :"2",
        firstName: "raj",
        lastName: "kumar",
        email: "raj.kumar@gmail.com",
        Address: "road no:2, Dr colony",
        Phone: "9999999999",
        City: "hyderabad",
        State: "Telangana",
        Country: "India",
        Zip: "500076"
      }
    ];
    return users;
   //return this.store.findAll('user');

   }


});
