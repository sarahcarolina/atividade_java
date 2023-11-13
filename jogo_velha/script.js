const gameover = document.querySelector(".gameover");
var player = "X";
var numjog = 0;

function checkjogo(id) {

    var opt = verificaSrc(id);

    if (opt == "transp.png") {
        document.getElementById(id).src = `img/${player}.png`;

        if (winchek()) {
            alert(`Fim de jogo!! Vitória do ${player}!!!`);

        }

        if (player == "X") {
            player = "O";
        } else {
            player = "X";
        }

    }

    numjog++

    if (numjog >= 9) {
        alert("Fim de jogo!! Deu velha!!!");
        return true;
    }

    if (pc && player == "O") {
        checkjogo(jogoDopc());
    }

}

function verificaSrc(id) {

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);


}

function winchek() {

    if ((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png") {
        return true;
    }

    return false
    
}
