import DS from 'ember-data';
import EmberValidations from 'ember-validations';

var user= DS.Model.extend({EmberValidations.Mixin,{
  userId: DS.attr("number"),
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  email: DS.attr("string"),
  Address: DS.attr("string"),
  City: DS.attr("string"),
  State: DS.attr("string"),
  Country: DS.attr("string"),
  Zip: DS.attr("string"),
  Phone:DS.attr("string"),

  validations: {
      firstName: {
        presence: { message: 'firstName must not be blank' }
      },
      lastName: {
        presence: { message: 'lastName must not be blank' }
      },
      email: {
              presence: { message: 'lastName must not be blank' }
      }
    }
}
});

export default user;
