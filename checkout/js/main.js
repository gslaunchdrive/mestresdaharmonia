$(document).ready(function () {

    $("#phone").mask("(00) 0000-00009");

    $("#_form_49_submit").click(function () {
        var clean = $("#phone").val().replace(/\D/g, "");
        $("#phone").val(clean);
        dataLayer.push({
            'event': 'inicioCheckout'
        });
    });
});
