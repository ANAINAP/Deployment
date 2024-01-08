var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello Anaina!,good mrng'); //write a response to the client
  res.end(); //end the response
}).listen(8080,()=>{
    console.log("server running on 8080")
}); //the server object listens on port 8080