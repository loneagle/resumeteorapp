import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import ExampleBotApp from './botmodule.js';

/////telegram @loneagle_bot
Meteor.startup(() => {
    const app = new ExampleBotApp();
});
