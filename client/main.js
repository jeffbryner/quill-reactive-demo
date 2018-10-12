import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { _ } from 'meteor/underscore';
import { Blaze } from 'meteor/blaze';
import { $ } from 'meteor/jquery';
import 'meteor/jeffbryner:quill-reactive';
import {quillReactive} from 'meteor/jeffbryner:quill-reactive';
import './main.html';

if (Meteor.isClient) {
    notes = new Mongo.Collection('notes');
}