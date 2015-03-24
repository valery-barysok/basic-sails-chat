/**
 * Channel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    creator: {
      model: 'user',
      required: true
    },

    members: {
      collection: 'user',
      via: 'channels'
    },

    messages: {
      collection: 'message',
      via: 'channel'
    }
  }
};
