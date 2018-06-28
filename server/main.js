import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';

Meteor.startup(() => {
    // code to run on server at startup
    notes = new Mongo.Collection('notes');
    notes.remove({});
    notes.insert({
        _id: '1234',
        note: 'starter text'
    });

    notes.allow({
        insert: function (userId, doc) {
            return (true);
        },
        update: function (userId, doc, fields, modifier) {
            return (true);
        },
        remove: function (userId, doc) {
            return (true);
        },
        fetch: ['creator']
    });
});
