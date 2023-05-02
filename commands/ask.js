exports.run = (client,message,args) => {

    var messages = ["No.", "Not today.","It will be so.","Without a doubt!","Yes, definitely!","You can count on it!",
        "As I see it yes","Most likely","Outlook good","Signs point to yes","Reply hazy, try again","Ask again later",
        "Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no",
        "My sources say no", "Outlook not so good","Very doubtful"];

    if (args.length === 0){
        message.channel.send("You haven't asked me a question!");
    }

    
    if (args.find(element => element == "or")){
        var indexOfOr = args.indexOf("or");
        var optionOne = args.slice(0,indexOfOr).join(' ');
        var optionTwo = args.slice(indexOfOr+1).join(' ');

        const winner = Math.floor(Math.random()*2);
        if (winner == 0){
            optionOne = optionOne.replace(/\?/g, '');
            message.channel.send(`${optionOne} wins!`);
        } else if (winner == 1){
            optionTwo = optionTwo.replace(/\?/g, '');
            message.channel.send(`${optionTwo} wins!`);
        }
    } else {
        let resultIndex = magic8ballResult();

        message.channel.send(messages[resultIndex]);
    
    }
    function magic8ballResult(){
        return (Math.floor(Math.random()*21));
    }

    

}