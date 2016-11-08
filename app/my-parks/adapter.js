// import ApplicationAdapter from 'npTracker.knoddin/application/adapter';
//
// export default ApplicationAdapter.extend({
//   findAll (store, type, record) {
//     let api = this.get('host');
//     let serialized = this.serialize(record, { includeId: true });
//     // let parkId = serialized.park_id;
//     let url = `${api}/parks`;
//
//     let data = { park: serialized };
//
//     return this.ajax(url, 'GET', { data });
//   },
//
//
//
// });
