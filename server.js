// AUTHOR : Ayodele Lawal
let http = require('http');
let fs = require('fs');
let qs = require('querystring');

http.createServer(function (req, res) {
	if (req.url == '/message') {
		let body = '';
		req.on('data', (data) => {
			body += data;
		});
		req.on('end', () => {
			let post = qs.parse(body);
			let data = post.message;
			fs.writeFile('message.txt', data, function (err) {
				if (err) throw err;
				console.log('Saved!');
			});
			res.end("At last, I've got something here. Wow!");
		});
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<h1>Now, our server is live!</h1>');
		res.write('<form id="message" method="POST" action="/message">');
		res.write('<p><label>Please enter a message below:</label></p>');
		res.write('<p><input type="text" name="message" placeholder="Message here"></p>');
		res.write('<button>SUBMIT</button>');
		res.write('</form>');
		res.end();
	}
}).listen(8080);

console.log('Listening on port 8080\nNow go to http://localhost:8080');