import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './task.html';

Template.task.events({
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
});
