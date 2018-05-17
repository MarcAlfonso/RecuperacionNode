const discord = require('discord.js');
const cliente = new discord.Client();
const art = require('ascii-art');

var token = "NDQ2NTg5Nzk0NTg0MTAwODcw.Dd7c1w.IOr7Z6IFec1LiFpStjNuv_BCa24";

cliente.on('ready', () => {
  console.log('Te has logeado en el servidor!');
});

cliente.on('message', msg => {
  if (msg.content.indexOf('!art') == 0) {
	  console.log(msg.content.slice(5, msg.content.length));
	  var palabra = art.font(msg.content.slice(5, msg.content.length),'Rusted', render =>{
		console.log(render);
		msg.reply('\n' + render);
	  });
	  console.log(palabra);
  }
});
cliente.login(token);