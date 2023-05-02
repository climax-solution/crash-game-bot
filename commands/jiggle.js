const path = require('path');

exports.run = (client,message) => {

	const jiggleGif = path.normalize(path.join(__dirname, '/../images/boobies.gif'));

    message.channel.send("" , {file: jiggleGif});
}