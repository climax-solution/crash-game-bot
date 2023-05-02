const path = require('path');

exports.run = (client,message) => {

	const tipGif = path.normalize(path.join(__dirname, '/../images/tip.gif'));

    message.channel.send("" , {file: tipGif});
}