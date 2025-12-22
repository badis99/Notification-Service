import {notifService} from '../services/notificationService.js';

export const sendNotifications = (req,res,next) => {
    const id = parseInt(req.body.id);
    const channel = req.body.channel;
    const recipient = req.body.recipient;
    const message = req.body.message;
    const title = message?.title;
    const body = message?.body;

    console.log(id,channel,recipient,message);
    if(!id || !channel || !recipient || !message){
        return res.status(400).json({message : "One of the required fields is empty"});
    }
    else if(channel.toLowerCase() != "sms" && channel.toLowerCase() != "email" && channel.toLowerCase() != "push"){
        return res.status(400).json({error : "Unsupported notification channel"});
    }
    const notification = {
        userId: id,
        channel : channel,
        recipient : recipient,
        message : message
    };
    res.status(202).json(notifService(notification));

    
    
}
