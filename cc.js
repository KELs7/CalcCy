function calcCy1(e) {
    calc_();
    validate1(e);
}   

function calcCy2(e) {
    calc_();
    validate2(e);
}   

function calc_() {   
    var g = document.getElementById("ghRate").value;
    var e = document.getElementById("ethRate").value; 
    var u = document.getElementById("entry").value;
    var cc =document.getElementById("display");
    var select1 = document.getElementById("select1");
    var select2 = document.getElementById("select2");

    if (select1.value =="eth" && select2.value=="ghc") {
        var result1 = u * e * g;
        cc.value = result1.toFixed(2);
    } else if (select1.value =="eth" && select2.value=="usd") {
        var result2 = u * e;
        cc.value = result2.toFixed(2);
    } else if (select1.value =="ghc" && select2.value=="eth") {
        var result3 = (u / g) / e;
        cc.value = result3;
    } else if (select1.value =="ghc" && select2.value=="usd") {
        var result4 = u / g;
        cc.value = result4.toFixed(2);
    } else if (select1.value =="usd" && select2.value=="eth") {
        var result5 = u / e;
        cc.value = result5;
    } else if (select1.value =="usd" && select2.value=="ghc") {
        var result6 = u * g;
        cc.value = result6.toFixed(2);
    } else {
        if (select1.value =="eth" && select2.value=="eth" || select1.value =="ghc" && select2.value=="ghc" || select1.value =="usd" && select2.value=="usd") {
            select1.value = "eth";
            select2.value = "ghc";
            var result7 = u * e * g;
            cc.value = result7.toFixed(2);
        }
    
    }
    
}

function validate1(e) {
            e.value = e.value.replace(/\.{2,}/,"");
            e.value = e.value.replace(/[\.][0-9]+[\.]/, "");
            e.value = e.value.replace(/[-, ]/g,"");
}

function validate2(e) {
            e.value = e.value.replace(/\.{2,}/,"");
            e.value = e.value.replace(/[\.][0-9]{3}/, "");
            e.value = e.value.replace(/[\.][0-9]{2}[\.]/, "");
            e.value = e.value.replace(/[-, ]/g,"");
}

