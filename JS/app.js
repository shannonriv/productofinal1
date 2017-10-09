//crear una variable texto donde el usuario ingresa la frase
var txt = parseInt(prompt('Ingrese frase:'));

//valor fijo de despla 

function cipher(n, txt){
    var ciphertxt = '';
    //número de la letra en ASCII
    var x = txt.charCodeAt(i);

    for(var i = 0; i<txt.length; i++){
        y = ((x - 65 + n) % 26) + 65;

        result = ciphertxt.push(String.fromCharCode(y));
        
        return result;
    }
}



function decipher(ciphertxt){
    var deciphertxt = '';

    for (var i = 0; i<ciphertxt.length; i++){
        (x - n) % 26;
        
        result ;

    }
    return decipher;
}


