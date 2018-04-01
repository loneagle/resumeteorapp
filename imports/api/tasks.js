import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('message');

if (Meteor.isServer) {
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({});
  });
}

Meteor.methods({
  'tasks.insert'(text) {
    Tasks.insert({
      text,
    });
  },
  'tasks.remove'(taskId) {
    const task = Tasks.findOne(taskId);
    Tasks.remove(taskId);
  },
});
