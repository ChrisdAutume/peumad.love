const stop_click = (function() {
    let nblick = 0
    $("#img-div").on("click", () => {
        nblick++;
        switch (nblick) {
            case 3:
                window.alert('Aie! Clic pas comme ça!');
                break;
            case 10:
                window.alert('T\'a vraiment que ça à faire ?');
                break;
            case 20:
                window.alert('Mais qu\'est ce que tu fais de ta vie...');
                break;
            case 30:
                $("#sub-title").text('Annulé !');
                $("#img-main").attr('src', '');
                setTimeout(() => {
                    alert('Super, tu as cassé PeuMad!'); 
                }, 100);
                break;
          }
    });
});

const konami = (function() {
    //Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
    var key = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    i = 0;
    $(document).keydown(function (e) {
        if (e.keyCode === key[i++]) {
            if (i === key.length) {
                window.location.href = "https://peumad.love/jeu.html";
                i = 0;
                return false;
            }
        }
        else {
            i = 0;
        }
    });
});

$(document).ready(function() {
    stop_click();
    konami();
});
