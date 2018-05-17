const discord = require("discord.js");
const cliente = new Discord.Client();
const ascii_art = require("ascii-art");

var token;

cliente.on('ready', () => {
  //console.log(`Logged in as ${client.user.tag}!`);
});

cliente.on('message', msg => {
  if (msg.content.indexOf(ascii_art) == 0) {
	  console.log(msg.content.slice(7, msg.content.length));
	  var palabra = ascii_art.font(msg.content.slice
								  (7, msg.content.length),
								  'Graffiti')
  }
});