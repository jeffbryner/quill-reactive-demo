import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';

Meteor.startup(() => {
    // code to run on server at startup
    notes = new Mongo.Collection('notes');
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
    defaultNote = {
        _id: '1234',
        note: "<p>You can type anything here</p><p>with <strong>formatting</strong></p><ul><li>lists</li><li>etc</li></ul><p>And anything else from other folks on this webpage should show up in realtime!</p>",
        noteDelta: {ops: [
            { "insert" : "You can type anything here\nwith " }, { "attributes" : { "bold" : true },
             "insert" : "formatting" }, { "insert" : "\nlists" }, { "attributes" : { "list" : "bullet" },
             "insert" : "\n" },
             { "insert" : "etc" }, { "attributes" : { "list" : "bullet" }, "insert" : "\n" },
             { "insert" : "And anything else from other folks on this webpage should show up in realtime!\n" }
        ]}
    }
    //set the default contents
    notes.remove({});
    notes.insert(defaultNote);

    //reset the contents occasionally
    Meteor.setInterval(function(){
        notes.remove({});
        notes.insert(defaultNote);
    },60000);
});
