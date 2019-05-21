var log = {
    information: function(info){  
        console.log("Bilgilendirme: " + info);
        console.log("========================");
    },
    fault: function(fault){
        console.log("Arızalanma: " + fault);
    },
    author: function(author){  
        console.log(author + " Enes Demir *-*");
    }
};

module.exports = log;