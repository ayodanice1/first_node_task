
This repo contains a server.js file which serves a basic HTML form to its client.
The form has an input element of type 'text' where the user can write some message, and 
a button element with value 'Submit'.
Once the  server is started from a terminal, the client can reach the server on http://localhost:8080.
On pressing the button, the form POSTs the input message to the the URL, http://localhost:8080/message.
Thereafter, the message is written to a text (.txt) file, which is then saved on the server. 
