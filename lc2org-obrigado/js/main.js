
$(document).ready(function () {

    let groupWhats = 'https://devzapp.com.br/api-engennier/campanha/api/redirect/64ea7f79a29661000129421a';

    function loadConfigs() {
        // $.get( "https://glcdn.githack.com/ddmlaunch/configs/-/raw/dominandoacordes/obrigado.json",  function( data ) {
        //     var config = "data[0]";
        //     groupWhats = "https://devzapp.com.br/api-engennier/campanha/api/redirect/64ea7f79a29661000129421a";
            
            $('#whatsapp').attr("href", groupWhats);
            initializeClock('clock', '2023-11-13T11:00:00Z');
        // });
    }

    function redirectWhatsApp() {
        setTimeout(function () {
            window.location.href = groupWhats;
        }, 20000);
    }
    loadConfigs();
    redirectWhatsApp();
});