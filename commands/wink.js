const path = require('path');

exports.run = (client,message) => {

	const winkGif = path.normalize(path.join(__dirname, '/../images/wink.gif'));

    message.channel.send("" , {file: winkGif});
}