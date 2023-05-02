const Discord = require("discord.js");
const fs = require('fs');
const path = require('path');

exports.run = (client,message,args) => {
	var unitsIndexArray = [];

	var testPath = path.normalize(path.join(__dirname, '/../db/unitsIndex.json'));
	console.log("Path:" + testPath);

	var rawBase = fs.readFileSync(path.normalize(path.join(__dirname, '/../db/unitsIndex.json')));
	var unitsIndex = JSON.parse(rawBase);

	var rawColour = fs.readFileSync(path.normalize(path.join(__dirname,'/../db/colourIndex.json')));
	var colourIndex = JSON.parse(rawColour);

	var rawCost = fs.readFileSync(path.normalize(path.join(__dirname, '/../db/costIndex.json')));
	var costIndex = JSON.parse(rawCost);

	var rawType = fs.readFileSync(path.normalize(path.join(__dirname, '/../db/typeIndex.json')));
	var typeIndex = JSON.parse(rawType);

	var questionTypeSeed = Math.floor((Math.random() * 4) + 1);
	var unitSeed = Math.floor((Math.random() * 330) + 1);

	var keys = Object.keys(unitsIndex);
	keys.forEach(function(key){
        unitsIndexArray.push(key);
    });


	const filePath = path.normalize(path.join(__dirname, '/../images/units/', unitsIndexArray[unitSeed])) + '.png';
	const attachmentUrl = 'attachment://' + unitsIndexArray[unitSeed] + '.png';
	const image = new Discord.Attachment(filePath);


	if (args[0] === "c"){
		const imageEmbed3 = {
			title: "What is this unit's cost?",
			image: {
				url: attachmentUrl,
			},
			footer: {
				text: "This feature is currently in Alpha testing. Spelling will be quite strict!"
			}
		};

		const filter = response => {
			return costIndex[unitsIndexArray[unitSeed]].toLowerCase() === response.content.toLowerCase();
		};

		message.channel.send({ files: [image], embed: imageEmbed3 }).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
				.then(collected => {
					message.channel.send(`${collected.first().author} got the correct answer!`);
				})
				.catch(collected => {
					message.channel.send('Looks like nobody got the answer this time. Good luck next time!');
				});
		});
	} else if (args[0] === "col"){
		const imageEmbed2 = {
			title: "What is this unit's colour?",
			image: {
				url: attachmentUrl,
			},
			footer: {
				text: "This feature is currently in Alpha testing. Spelling will be quite strict!"
			}
		};

		const filter = response => {
			return colourIndex[unitsIndexArray[unitSeed]].toLowerCase() === response.content.toLowerCase();
		};

		message.channel.send({ files: [image], embed: imageEmbed2 }).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
				.then(collected => {
					message.channel.send(`${collected.first().author} got the correct answer!`);
				})
				.catch(collected => {
					message.channel.send('Looks like nobody got the answer this time. Good luck next time!');
				});
		});
	} else if (args[0] === "n"){
		const imageEmbed = {
			title: "What is this unit's name?",
			image: {
				url: attachmentUrl,
			},
			footer: {
				text: "This feature is currently in Alpha testing. Spelling will be quite strict!"
			}
		};

		const filter = response => {
			return unitsIndex[unitsIndexArray[unitSeed]].toLowerCase() === response.content.toLowerCase();
		};

		message.channel.send({ files: [image], embed: imageEmbed }).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
				.then(collected => {
					message.channel.send(`${collected.first().author} got the correct answer!`);
				})
				.catch(collected => {
					message.channel.send('Looks like nobody got the answer this time. Good luck next time!');
				});
		});
	} else if (args[0] === "t") {
		const imageEmbed4 = {
			title: "What is this unit's type?",
			image: {
				url: attachmentUrl,
			},
			footer: {
				text: "This feature is currently in Alpha testing. Spelling will be quite strict!"
			}
		};

		const filter = response => {
			return typeIndex[unitsIndexArray[unitSeed]].toLowerCase() === response.content.toLowerCase();
		};

		message.channel.send({ files: [image], embed: imageEmbed4 }).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
				.then(collected => {
					message.channel.send(`${collected.first().author} got the correct answer!`);
				})
				.catch(collected => {
					message.channel.send('Looks like nobody got the answer this time. Good luck next time!');
				});
		});
	}else {
		if (questionTypeSeed === 1) {
			const imageEmbed = {
				title: "What is this unit's name?",
				image: {
					url: attachmentUrl,
				},
				footer: {
					text: "This feature is currently in Alpha testing. Spelling will be quite strict!"
				}
			};

			const filter = response => {
				return unitsIndex[unitsIndexArray[unitSeed]].toLowerCase() === response.content.toLowerCase();
			};

			message.channel.send({ files: [image], embed: imageEmbed }).then(() => {
				message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						message.channel.send(`${collected.first().author} got the correct answer!`);
					})
					.catch(collected => {
						message.channel.send('Looks like nobody got the answer this time. Good luck next time!');
					});
			});
		} else if (questionTypeSeed === 2){
			const imageEmbed2 = {
				title: "What is this unit's colour?",
				image: {
					url: attachmentUrl,
				},
				footer: {
					text: "This feature is currently in Alpha testing. Spelling will be quite strict!"
				}
			};

			const filter = response => {
				return colourIndex[unitsIndexArray[unitSeed]].toLowerCase() === response.content.toLowerCase();
			};

			message.channel.send({ files: [image], embed: imageEmbed2 }).then(() => {
				message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						message.channel.send(`${collected.first().author} got the correct answer!`);
					})
					.catch(collected => {
						message.channel.send('Looks like nobody got the answer this time. Good luck next time!');
					});
			});
		} else if (questionTypeSeed === 3){
			const imageEmbed3 = {
				title: "What is this unit's cost?",
				image: {
					url: attachmentUrl,
				},
				footer: {
					text: "This feature is currently in Alpha testing. Spelling will be quite strict!"
				}
			};

			const filter = response => {
				return costIndex[unitsIndexArray[unitSeed]].toLowerCase() === response.content.toLowerCase();
			};

			message.channel.send({ files: [image], embed: imageEmbed3 }).then(() => {
				message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						message.channel.send(`${collected.first().author} got the correct answer!`);
					})
					.catch(collected => {
						message.channel.send('Looks like nobody got the answer this time. Good luck next time!');
					});
				});
		} else if (questionTypeSeed === 4){ 
			const imageEmbed4 = {
				title: "What is this unit's type?",
				image: {
					url: attachmentUrl,
				},
				footer: {
					text: "This feature is currently in Alpha testing. Spelling will be quite strict!"
				}
			};

			const filter = response => {
				return typeIndex[unitsIndexArray[unitSeed]].toLowerCase() === response.content.toLowerCase();
			};

			message.channel.send({ files: [image], embed: imageEmbed4 }).then(() => {
				message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						message.channel.send(`${collected.first().author} got the correct answer!`);
					})
					.catch(collected => {
						message.channel.send('Looks like nobody got the answer this time. Good luck next time!');
					});
			});
		}
			else {
			console.log(questionTypeSeed);
		}
	}

	

	

	// quests = [
	// 	"Quest one", 
	// 	"Quest two", 
	// 	"quest three"
	// ]

	// if (args[0] === "-a"){
	// 	message.channel.send("Send a message with the name of a quest to add!").then(() => {
	// 		message.channel.awaitMessages({ maxMatches: 1, time: 30000, errors: ['time'] })
	// 			.then(collected => {
	// 				message.channel.send(`${collected} was added to the quest list!`);
	// 			})
	// 			.catch(collected => {
	// 				message.channel.send('Looks like nobody got the answer this time.');
	// 			});
	// 	});

	// } else {
	// 	message.channel.send("What quest would you like to find a team for?");

	// 	const questsEmbed = new Discord.RichEmbed()
	// 		.setTitle('Available Quests List')
	// 		.addField("Available quests", quests)

	// 	message.channel.send(questsEmbed)

	// }

}