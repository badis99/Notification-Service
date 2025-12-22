export const notifService = (obj) => {
    if(obj.channel.toLowerCase() === "email"){
        //emailService(obj);
        return({status : "queued",
            channel : "Email"
        })
    }
    else if(obj.channel.toLowerCase() === "sms"){
        //smsService(obj);
        return({status : "queued",
            channel : "SMS"
        })
    }
    else if(obj.channel.toLowerCase() === "push"){
        //pushService(obj);
        return({status : "queued",
            channel : "Push"
        })
    }
    else{
        return ({status : "failed"});
    }
}