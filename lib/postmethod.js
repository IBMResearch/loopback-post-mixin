module.exports = function(Model, options) {
  'use strict';

  Model.beforeRemote('**', function(ctx, user, next) {
    console.log(ctx.methodString, 'was invoked remotely');
    next();
  });

  Model.updateDataWithPost = function (id, instance, cb) {
    Model.findById(id, function (err, previousInstance) {
      if (err) {
        return cb(err);
      }
      if (!previousInstance) {
        return cb({code: 'INSTANCE_NOT_FOUND'});
      }
      previousInstance.updateAttributes(function (err, updatedInstance) {
        cb(err, updatedInstance);
      });
    });
  };

  Model.remoteMethod(
    'updateDataWithPost', {
      description: 'Update attributes for a model instance and persist it into data source (loopback-post-mixin)',
      accepts: [
        { arg: 'id', type: 'string' },
        { arg: 'instance', type: 'object', http: { source: 'body'}}
      ],
      http: { path: '/:id', verb: 'post', errorStatus: 400 },
      returns: [ { arg: 'instance', root: true, type: 'object' } ]
    }
  );

};
