var http = require("http");
var log = require("./log");
var exportDemo = require("./exportDemo");

http.createServer(function(request,response){  
    console.log(request.url);
    if(request.url == "/"){
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><body><div><img src='img/enes-demir.png'></div></body></html>");
    }
    else if(request.url == "/customer"){
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><body><div><img src='img/enes-demir.png'></div></body></html>");
    }
    else if(request.url == "/admin"){
        response.write("Admin Sayfasi ");
    }
    response.end("");
}).listen(8080);

log.information("Sunucu yayına geçti");
log.author("İnitialized with");
console.log(exportDemo());