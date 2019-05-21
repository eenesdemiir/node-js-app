var http = require("http");
var log = require("./log");
var exportDemo = require("./exportDemo");

http.createServer(function(request,response){  
    console.log(request.url);
    if(request.url == "/"){
        response.write("Ana Sayfa ");
    }
    else if(request.url == "/admin"){
        response.write("Admin Sayfasi ");
    }
    response.end("enes demir");
}).listen(8080);

log.information("Sunucu yayına geçti");
log.author("İnitialized with");
console.log(exportDemo());