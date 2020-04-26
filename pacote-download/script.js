    function somar() {
        var tn1 = document.querySelector('input#txtn1')      // O valor vem dos boxes em forma de String
        var tn2 = document.querySelector('input#txtn2')

        var n1 = Number(tn1.value)                         // Transforma de String para Number
        var n2 = Number(tn2.value)     
        var s = n1 + n2

        var res = document.querySelector('div#res')

        if (s == 8) {
            res.innerHTML = 'Resposta Correta. Acesso Autorizado!'         // True
        } else {
            res.innerHTML = 'Ops!  Resposta Errada. Tente Novamente!'      // False
        }
    }           