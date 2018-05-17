const discord = require('discord.js');
const cliente = new discord.Client();
const ascii = require('ascii-art');

var token = "NDQ2NTg5Nzk0NTg0MTAwODcw.Dd7c1w.IOr7Z6IFec1LiFpStjNuv_BCa24";

cliente.on('ready', () => {
  console.log('Logged into the server!');
});

cliente.on('message', msg => {
  if (msg.content == "!ascii") {
	  console.log("Received ascii command: " + msg.content.slice(7, msg.content.length));
	  var palabra = ascii.font(msg.content.slice (7, msg.content.length),'Graffiti', function(rendered){
		console.log(rendered);
		msg.reply('\n' + rendered);
	  });
	  console.log(palabra);
  }
});
cliente.login(token);