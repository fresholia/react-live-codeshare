import dgram from 'dgram'
 
// Creating and initializing client
// and server socket
var client = dgram.createSocket("udp4");
var server = dgram.createSocket("udp4");
 
// Catching the message event
server.on("message", function (msg) {
 
  // Displaying the client message
  process.stdout.write("UDP String: " + msg + "\n");
 
  // Exiting process
  process.exit();
});
 
// Catching the listening event
server.on('listening', () => {
 
  // Getting address information for the server
  const address = server.address();
 
  // Display the result
  console.log(
`server listening ${address.address}:${address.port}`);
});
 
 
// Binding server with port address
// by using bind() method
server.bind(1234, () => {
 
  // Getting the reference of server
  // by using ref() method
  const size = server.ref();
 
  // display the result
  console.log(size.eventNames());
});
 
// Client sending message to server
// by using send() method
client.send("Hello", 0, 7, 1234, "localhost", (err) =>{
 
  if(err) throw err;
  console.log("message sent");
});