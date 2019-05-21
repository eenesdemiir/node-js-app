var fs = require("fs");

fs.readFile('dosya.txt', 'utf8', function (hata, data) {
    if (hata) {
        throw hata;
    }
    console.log(data);
});

// fs.writeFile('dosya2.txt', 'derin demiroğ', function (hata) {
//     if (hata) {
//         throw hata;
//     }
//     console.log("Yazıldı");
// });

// fs.appendFile('dosya2.txt', 'enes demir', function (hata) {
//     if (hata) {
//         throw hata;
//     }
//     console.log("Eklendi");
// });

// fs.unlink('dosya.txt',function(hata){  
//     if (hata) {
//         throw hata;
//     }
//     console.log("Silindi");
// });