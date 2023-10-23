$(document).ready(function () {


  $('#videoVendas').click(function () {
    $('#loadingOverlay').css('display', 'flex');

    $(this).replaceWith('<iframe width="560" height="600" src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1" \
             title="Video de Vendas" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');

    $('iframe').on('load', function () {
      $('#loadingOverlay').hide();
    });
  });

  $('#videoReharmonizacao').click(function () {
    $('#loadingOverlay1').css('display', 'flex');

    $(this).replaceWith('<iframe width="450" height="300" src="https://www.youtube.com/embed/BTbwJqTBSeA?autoplay=1" \
             title="Rearmonizacao - Gilvanio" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');

    $('iframe').on('load', function () {
      $('#loadingOverlay1').hide();
    });
  });

  $('#videoDepoimentoPedro').click(function () {
    $('#loadingOverlay2').css('display', 'flex');

    $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/7KEU8kJpsao?autoplay=1" \
             title="Depoimento - Pedro" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');

    $('iframe').on('load', function () {
      $('#loadingOverlay2').hide();
    });
  });

  $('#videoDepoimentoPaulo').click(function () {
    $('#loadingOverlay3').css('display', 'flex');

    $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/pqc-BX2wl4M?autoplay=1" \
             title="Depoimento - Paulo" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');

    $('iframe').on('load', function () {
      $('#loadingOverlay3').hide();
    });
  });

  $('#videoDepoimentoJoao').click(function () {
    $('#loadingOverlay4').css('display', 'flex');

    $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/Ych8kIbCuaE?autoplay=1" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');

    $('iframe').on('load', function () {
      $('#loadingOverlay4').hide();
    });
  });

  $('#videoDepoimentoLuan').click(function () {
    $('#loadingOverlay5').css('display', 'flex');

    $(this).replaceWith('<iframe width="100%" height="350" src="https://www.youtube.com/embed/LIoN2WLpl7Q?autoplay=1" \
             title="Mestres da Harmonia" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');

    $('iframe').on('load', function () {
      $('#loadingOverlay5').hide();
    });
  });

  $('#videoReharmonizacaoGilvanio').click(function () {
    $('#loadingOverlay6').css('display', 'flex');

    $(this).replaceWith('<iframe width="450" height="300" src="https://www.youtube.com/embed/8fgBwpMlW6s?autoplay=1" \
             title="Rearmonizacao - Gilvanio Reação" frameborder="0" \
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \
             allowfullscreen></iframe>');

    $('iframe').on('load', function () {
      $('#loadingOverlay6').hide();
    });
  });

  $("#phone").mask("(00) 0000-00009");

    $("#_form_45_submit").click(function() {
        var clean = $("#phone").val().replace(/\D/g, "");
        $("#phone").val(clean);
        dataLayer.push({
            'event': 'inscricaoRealizada'
        });
    });


  const URLToArray = url => {

    var request = {};
    var pairs = url.substring(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < pairs.length; i++) {
      if (!pairs[i])
        continue;
      var pair = pairs[i].split('=');
      //pair = pairs[i].replace(/\+/g,' ');
      request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]).replace(/\+/g, ' ');
    }
    return request;
  }

  function loadForm() {

    var params = URLToArray(window.location.href)
    if (params) {
      $("[name='field[43]']").val(params['utm_source']);
      $("[name='field[44]']").val(params['utm_campaign']);
      $("[name='field[49]']").val(params['utm_medium']);
      $("[name='field[47]']").val(params['utm_content']);
      $("[name='field[46]']").val(params['utm_term']);
    }
  }

  loadForm();
});