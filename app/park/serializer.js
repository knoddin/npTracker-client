import ApplicationSerializer from 'npTracker.knoddin/application/serializer';

export default ApplicationSerializer.extend({
  serialize () {
    let serialized = this._super(...arguments);

    serialized.content = serialized.text;
    delete serialized.text;

    return serialized;
  },

  normalize (model, response) {
    response.text = response.content;
    delete response.content;

    return this._super(model, response);
  },
});
