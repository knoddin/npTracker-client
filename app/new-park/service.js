// import Ember from 'ember';
// import { storageFor } from 'ember-local-storage';
//
// export default Ember.Service.extend({
//   ajax: Ember.inject.service(),
//   park: storageFor('park'),
//   isAuthenticated: Ember.computed.bool('credentials.token'),
//
//   createPark (params) {
//     return this.get('ajax').post('/parks', {
//       data: {
//         park: {
//           name: params.name,
//           location: params.location,
//           description: params.description,
//         },
//       },
//     });
//   },
// });
