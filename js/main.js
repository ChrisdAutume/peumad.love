const stop_click = (function() {
    let nblick = 0
    console.log('add event');
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
                $("#img-main").attr('src', '/img/');
                setTimeout(() => {
                    alert('Super, tu as cassé PeuMad!'); 
                }, 100);
                break;
          }
    });
});

$(document).ready(function() {
    stop_click();
});