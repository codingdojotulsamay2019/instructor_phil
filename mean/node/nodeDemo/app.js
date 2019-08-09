const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            console.log(contents);
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/node_modules/bootstrap/dist/css/bootstrap.min.css') {
        fs.readFile('./node_modules/bootstrap/dist/css/bootstrap.min.css', 'utf8', (errors, contents) => {
        console.log(contents);
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
        })
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
    
