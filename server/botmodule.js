import TelegramBot from 'telegram-bot-api';
import { Tasks } from '../imports/api/tasks.js';

/////telegram @loneagle_bot
export default class ExampleBotApp{
    constructor(){
        this.bot = new TelegramBot({
            token: '524959877:AAFWiy_ykEJEObN4T-kVU_mUDptHmbiI-V8',
            updates: {
                enabled: true
            }
        });
        const app = this;
        this.bot.on('message', Meteor.bindEnvironment(function(message)
        {
            app.receiveMessage(message.from.id, message.text, message.from.first_name)
        }));
    }

    //Receives text message from the telegram bot API
    receiveMessage(from, text, username){
      text = text.toLowerCase();
      Meteor.call('tasks.insert', text);
    }

    //NOT USED
    /////////////////////////////
    //sends message to user using telegram bot API
    sendMessage(text){
        this.bot.sendMessage({
            text: text,
            parse_mode: 'HTML',
        }).catch((err)=>{
            console.log(err);
            if (err.statusCode == 403){
                return err;
            }
        });
    }
}
