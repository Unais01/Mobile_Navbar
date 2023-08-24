

//Understaing how http req serving file to client side with node.js 
//Next move is to express to overcome this problems and other stuffs
const http = require('http');
const port = 5000;
const fs = require('fs');
const htmlFile = fs.readFileSync("../index.html");
const cssFile = fs.readFileSync("../style.css");
const Logic = fs.readFileSync("../script.js");
const img = fs.readFileSync("../pikrepo.jpg");

const server = http.createServer((req, res) => {
    const url =req.url;
    if (url === '/') {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(htmlFile);
        res.end();
    }
   else if (url === '/style.css') {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(cssFile);
        res.end();
    }
   else if (url === '/script.js') {
        res.writeHead(200, { "content-type": "application/javascript" });
        res.write(Logic);
        res.end();
    }
    else if (url === '/pikrepo.jpg') {
        res.writeHead(200, { "content-type": "image/jpeg" });
        res.write(img)
        res.end();
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write('<h1>404 page not found</h1>')
        res.end();
    }
});
server.listen(port,(err)=>{
    console.log("listening");
});